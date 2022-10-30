fetch("http://localhost:3000/api/products") /* appel de l'api*/
.then((res) => res.json())
.then((data) => {
    return addProducts(data)
})


function addProducts(kanap) { /* boucle pour afficher les produits*/
  /*const _id = kanap[0]._id
    const imageURL = kanap[0].imageURL
    const altTxt = kanap[0].altTxt
    const name = kanap[0].name
    const description = kanap[0].description*/

    
    kanap.forEach(kanap => { 
        
    
    
    const {_id, imageUrl, altTxt, name, description} = kanap  
    const anchor = makeAnchor(_id) 

    const article = document.createElement("article") 
    const image = makeImageDiv(imageUrl, altTxt) 
    const h3 = makeH3(name) 
    const p = makeParagraphe(description)

    article.appendChild(image)
    article.appendChild(h3)
    article.appendChild(p)

    appendArticleToAnchor(anchor, article)
 });
}

function makeAnchor(id) { 
    const anchor = document.createElement("a") /* creation de l'element a*/
    anchor.href = "./product.html?id=" + id
    return anchor
}

function appendArticleToAnchor(anchor, article) { /* ajout des elements a la page*/
    const items = document.getElementById("items")
    if (items) {
        items.appendChild(anchor)
        anchor.appendChild(article)

    }
}
/* recup des images et texte*/
function makeImageDiv(_imageURL, _altTxt) {
    const image = document.createElement("img")
    image.src = _imageURL
    image.alt = _altTxt
    return image
}


function makeH3(name) {
    const h3 = document.createElement("h3")
    h3.textContent = name
    h3.classList.add("productName")
    return h3
}
function makeParagraphe(description) {
    const p = document.createElement("p")
    p.textContent = description
    p.classList.add("productDescription")
    return p
}
