var express = require('express')
var router = express.Router()

router.all('*',(req,res)=>{
    console.log("params",req.params)
    console.log("query",req.query)
    res.status(404).json({
        "error":"route not found, refer to documentations",
        "docs-link":"https://github.com/Bhannasa/indian-names-api"
    })
})

module.exports = router