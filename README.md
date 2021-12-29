### API that fetches random Indian names in response

Use `GET` method with URL [https://indian-names-api/name](https://indian-names-api/name)
#
### Request parameters:
> [?beg=a](https://indian-names-api/name?c=a)  
> Fetches the names beginning with given letters
> - accepts character string for name to start with eg `?beg=abdr` will fetch names starting with a,b,d or r
> - by default, fetches name beginning with any alphabet
> 
> Example response:
> ```
> [
>   {
>       "fullname_indian_title": "sri. aditya singh",
>       "fullname_english_title": "mr. aditya singh",
>       "fullname_without_title": "aditya singh",
>       "firstname_indian_title": "sri. aditya",
>       "firstname_english_title": "mr. aditya",
>       "firstname_without_title": "aditya",
>       "lastname_indian_title": "sri. singh",
>       "lastname_english_title": "mr. singh",
>       "lastname_without_title": "singh"
>   }
> ]
> ```
> #
> [?c=2](https://indian-names-api/name?c=2)  
> Count of random names to fetch, 
> - accepts any positive integer
> - default=1, max=117 (max depends upon the search query and 117 is the total of unique names).
> 
> Example response:
> ```
> [
>   {
>       "fullname_indian_title": "smt. chavi shukla",
>       "fullname_english_title": "mrs. chavi shukla",
>       "fullname_without_title": "chavi shukla",
>       "firstname_indian_title": "smt. chavi",
>       "firstname_english_title": "mrs. chavi",
>       "firstname_without_title": "chavi",
>       "lastname_indian_title": "smt. shukla",
>       "lastname_english_title": "mrs. shukla",
>       "lastname_without_title": "shukla"
>   },
>   {
>       "fullname_indian_title": "sri. rakesh bansal",
>       "fullname_english_title": "mr. rakesh bansal",
>       "fullname_without_title": "rakesh bansal",
>       "firstname_indian_title": "sri. rakesh",
>       "firstname_english_title": "mr. rakesh",
>       "firstname_without_title": "rakesh",
>       "lastname_indian_title": "sri. bansal",
>       "lastname_english_title": "mr. bansal",
>       "lastname_without_title": "bansal"
>   }
> ]
> ```
> #
> [?gen=f](https://indian-names-api/name?gen=f)  
> Fetches name of any specific gender
> - accepts `m` or `f`, in other cases it will work as default
> - default is gender-neutral
> 
> Example response:
> ```
> [
>   {
>       "fullname_indian_title": "smt. yashodha yadav",
>       "fullname_english_title": "mrs. yashodha yadav",
>       "fullname_without_title": "yashodha yadav",
>       "firstname_indian_title": "smt. yashodha",
>       "firstname_english_title": "mrs. yashodha",
>       "firstname_without_title": "yashodha",
>       "lastname_indian_title": "smt. yadav",
>       "lastname_english_title": "mrs. yadav",
>       "lastname_without_title": "yadav"
>   }
> ]
> ```
> #
> [?beg=x&gen=f&strict](https://indian-names-api/name?beg=x&gen=f&strict)  
> If no more name matches the query string than by default it will fetch any other related name(not exact match) but to prevent this, use `&strict` to avoid false responses\
> Example response:\
> with `strict`
> ```
> [
> ]
> ```
> without `strict`
> ```
> [
>   {
>       "fullname_indian_title": "smt. geetanjali chakraborty",
>       "fullname_english_title": "mrs. geetanjali chakraborty",
>       "fullname_without_title": "geetanjali chakraborty",
>       "firstname_indian_title": "smt. geetanjali",
>       "firstname_english_title": "mrs. geetanjali",
>       "firstname_without_title": "geetanjali",
>       "lastname_indian_title": "smt. chakraborty",
>       "lastname_english_title": "mrs. chakraborty",
>       "lastname_without_title": "chakraborty"
>   }
> ]
> ```
> notice that `gen=f` still stands
> #

