
const cart = []/*tableau pour stocker les items du panier global*/

retrieveItemsFromCache() /*recupere les items du cache*/
cart.forEach((item) => displayItem(item)) /*pour chaque item du panier on affiche l'article*/

function retrieveItemsFromCache(){/*recupere les items du cache*/
    const numberIfItems = localStorage.length/*recupere le nombre d'items dans le cache*/
    for(let i = 0; i < numberIfItems; i++){
    const item = localStorage.getItem(localStorage.key(i)) || ""
    const itemObject = JSON.parse(item)/* pars = convertir en objet un string*/
    cart.push(itemObject)
}
}

function displayItem(item){
    const article = makeArticle(item) /*creation de l'article*/
    const imageDiv =  makeImageDiv(item) /*creation de la div pour l'image*/
    article.appendChild(imageDiv) /*ajout de la div dans l'article*/

    const cartItemContent = makeCartContent(item) /*creation du contenu de l'article*/
    article.appendChild(cartItemContent) /*ajout du contenu dans l'article*/
    displayArticle(article) /*affichage de l'article*/
    displayTotalQuantity() /*affichage de la quantité total*/
    displayTotalPrice() /*affichage du prix total*/
}
function displayTotalQuantity(){
    const totalQuantity = document.querySelector("#totalQuantity")
    const total = cart.reduce((total, item) => total + item.quantity, 0)
    totalQuantity.textContent = total
}
function displayTotalPrice(){
    const totalPrice = document.querySelector("#totalPrice")
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    totalPrice.textContent = total 

}

function makeCartContent(item){
    const cartItemContent = document.createElement("div") /*creation de la div pour le contenu de l'article*/
    cartItemContent.classList.add("cart__item__content") /*ajout de la class*/

    const description = makeDescription(item) /*creation de la description*/
    const settings = MakeSettings(item) /*creation des settings*/
    
    cartItemContent.appendChild(description) /*ajout de la description dans le contenu de l'article*/
    cartItemContent.appendChild(settings) /*ajout des settings dans le contenu de l'article*/
    return cartItemContent
   
}
function MakeSettings(item){
    const settings = document.createElement("div")
    settings.classList.add("cart__item__content__settings")

    addQuantityToSettings(settings, item)
    addDeleteToSettings(settings)
    return settings
}
function addDeleteToSettings(settings){
    const quantity = document.createElement("div")
    quantity.classList.add("cart__item__content__settings__delete")
    const p = document.createElement("p")
    p.textContent = "Supprimer"
    quantity.appendChild(p)
    settings.appendChild(quantity)
}

function addQuantityToSettings(settings, item){
    const quantity = document.createElement("div")
    quantity.classList.add("cart__item__content__settings__quantity")
    const p = document.createElement("p")
    p.textContent = "Qté :"
    quantity.appendChild(p)
    const input = document.createElement("input")
    input.type = "number"
    input.classList.add("itemQuantity")
    input.name = "itemQuantity"
    input.min = "1"
    input.max = "100"
    input.value = item.quantity
    quantity.appendChild(input)
    settings.appendChild(quantity)
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