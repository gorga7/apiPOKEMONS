

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response=>response.json())
.then (data =>{
    ul=document.getElementById("listausuarios")
data.results.forEach(element => {
    let li = document.createElement ("li");
    li.innerHTML = element.name + " " + element.url;
    ul.append(li)
});

})













