let art1 = document.getElementById("art1")
let art1url = document.querySelector("#art1url")
let art2 = document.querySelector("#art2")
let art2url = document.querySelector("#art2url")
let art3 = document.querySelector("#art3")
let art3url = document.querySelector("#art3url")
let art4 = document.querySelector("#art4")
let art4url = document.querySelector("#art4url")
let art5 = document.querySelector("#art5")
let art5url = document.querySelector("#art5url")
let art6 = document.querySelector("#art6")
let art6url = document.querySelector("#art6url")
let art7 = document.querySelector("#art7")
let art7url = document.querySelector("#art7url")
let art8 = document.querySelector("#art8")
let art8url = document.querySelector("#art8url")
let art9 = document.querySelector("#art9")
let art9url = document.querySelector("#art9url")
let art10 = document.querySelector("#art10")
let art10url = document.querySelector("#art10url")








const pesquisa = document.querySelector("#pesquisa")
function pesquisar(){
    
    const verifyArticles = (articles) => {
        art1.innerHTML = `${articles.response.docs[0].headline.main}`
        art1url.innerHTML = `${articles.response.docs[0].web_url}`
    }

    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q={'+ pesquisa.value +'}&api-key=kqovOP7eeWLmaIsLE6nf7Q6o5fTP0szQ')
    .then((response) => response.json())
    .then((data) => verifyArticles(data))

}


// fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q={'+ pesquisa.value +'}&api-key=kqovOP7eeWLmaIsLE6nf7Q6o5fTP0szQ')
// .then((response) => response.json())
// .then((data) => console.log(data))

// fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q={'+ 'Love' +'}&api-key=kqovOP7eeWLmaIsLE6nf7Q6o5fTP0szQ')
// .then((response) => response.json())
// .then((data) => console.log(data.response.docs[0].headline.main))