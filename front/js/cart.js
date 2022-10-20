
const cart = []

retrieveItemsFromCache()
cart.forEach((item) => displayItem(item))

function retrieveItemsFromCache(){
    const numberIfItems = localStorage.length
    for(let i = 0; i < numberIfItems; i++){
    const item = localStorage.getItem(localStorage.key(i)) || ""
    const itemObject = JSON.parse(item)/* pars = convertir en objet un string*/
    cart.push(itemObject)
}
}

function displayItem(item){
    const article = makeArticle(item) /*creation de l'article*/
    const imageDiv =  makeImageDiv(item) 
    article.appendChild(imageDiv) 

   makeCartContent(item)
   article.appendChild(cartItemContent)
   displayArticle(article) /*affichage de l'article*/
}


function makeCartContent(item){
    const description = makeDescription(item)
    const settings = MakeSettings()
   return ""
}
function MakeSettings(item){
return ""
}
function makeDescription(item){
 const description = document.createElement("div")
    description.classList.add("cart__item__content__description")

    const h2 = document.createElement("h2")
    h2.textContent = item.name
    
   

    const p = document.createElement("p")
    p.textContent = item.color
    const p2 = document.createElement("p")
    p2.textContent = item.price + "€"
    
    description.appendChild(h2)
    description.appendChild(p )
    description.appendChild(p2)
    return description
}

function displayArticle(article){
    document.querySelector("#cart__items").appendChild(article)
}

function makeArticle(item){
    const article = document.createElement("article")
    article.classList.add("cart__item")
    article.dataset.id = item.id /*id est l'id de l'objet et dataset pour recup les data */
    article.dataset.color = item.color /* color est la couleur de l'objet et dataset pour recup les data */
    return article
}

function makeImageDiv(item){
    const div = document.createElement("div")/*creation de div pour mettre l'img dedans*/
    div.classList.add("cart__item__img")


    const image = document.createElement("img")
    image.src = item.imageUrl
    image.alt = item.altTxt
    div.appendChild(image)
    return div
    
}