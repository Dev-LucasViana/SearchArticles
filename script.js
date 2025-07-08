const pesquisa = document.querySelector("#pesquisa")
function pesquisar(){
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q={'+ pesquisa.value +'}&api-key=kqovOP7eeWLmaIsLE6nf7Q6o5fTP0szQ')
    .then((response) => response.json())
    .then((data) => console.log(data))
}