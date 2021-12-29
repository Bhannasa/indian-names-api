var express = require('express')
const firstnames = require('../data/firstnames')
const lastnames = require('../data/lastnames')
const titles = require('../data/titles')
var router = express.Router()

const getNames = (count, gender, begins_with, anonymous)=>{
    let firstnamesAllowed = [];
    let result = [];

    firstnames.sort((a,b)=>Math.random()-0.5)
    lastnames.sort((a,b)=>Math.random()-0.5)

    // Matching the exact condition
    firstnames.forEach(fname=>{
        if(begins_with.match(fname.name[0]) && (gender==='' || fname.gender==='u' || fname.gender === gender)) firstnamesAllowed.push(fname);
    })

    if(anonymous){
        // Removing begins_with priority if no name found
        if(firstnamesAllowed.length < count){
            firstnames.forEach(fname=>{
                if(!begins_with.match(fname.name[0]) && (gender==='' || fname.gender==='u' || fname.gender === gender)) firstnamesAllowed.push(fname);
            })
        }
    }

    for(var i=0;i<count && i<firstnamesAllowed.length;i++){
        if(count === lastnames.length)  lastnames.sort((a,b)=>Math.random()-0.5)
        let namef = firstnamesAllowed[i].name;
        let namel = lastnames[i % lastnames.length].name;
        let cnamegen = firstnamesAllowed[i].gender;
        let nametitle;
        if(cnamegen === 'f') nametitle = titles[1];
        else if(cnamegen === 'm')  nametitle = titles[0];
        else if(gender === 'f') nametitle = titles[1];
        else if(gender === 'm') nametitle = titles[0];
        else    nametitle = titles[Math.floor(Math.random()*2)];
        result.push({
            nametitle,
            namef,
            namel
        })
    }
    return result;
}

router.get('/name',(req,res)=>{
    try{
        const count = req.query.c?req.query.c:1;
        const gender = req.query.gen?req.query.gen:'';
        const begins_with = req.query.beg?req.query.beg:'';
        const anonymous = req.query.strict!==undefined?false:true;
        const names = getNames(count,gender,begins_with,anonymous);

        if(isNaN(Number(count))){
            res.status(400).json({"error":`${count} is not a number`})
            return;
        }

        const data = [];
        names.forEach(name=>{
            data.push({
                "fullname_indian_title":name.nametitle.indian+" "+name.namef+" "+name.namel,
                "fullname_english_title":name.nametitle.english+" "+name.namef+" "+name.namel,
                "fullname_without_title":name.namef+" "+name.namel,
                "firstname_indian_title":name.nametitle.indian+" "+name.namef,
                "firstname_english_title":name.nametitle.english+" "+name.namef,
                "firstname_without_title":name.namef,
                "lastname_indian_title":name.nametitle.indian+" "+name.namel,
                "lastname_english_title":name.nametitle.english+" "+name.namel,
                "lastname_without_title":name.namel,
            })
        })
        res.status(200).send(data);
    }catch(e){
        res.status(500).json({"error":"some server error occured"});
    }
})


module.exports = router