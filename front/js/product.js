const UrlSearchParams = window.location.search
const urlParams = new URLSearchParams(UrlSearchParams)
const id = urlParams.get("id")
if (id != null){
    let itemPrice = 0
    let imgUrl, altText, articleName
}
/* transfer les données de l'index a cette page*/


fetch(`http://localhost:3000/api/products/${id}`) 
.then((res) => res.json())
.then((data) => {
    info(data)})


function info (kanaper){
    /*const altTxt = kanapé.altTxt
    const colors = kanapé.colors
    const description = kanapé.description
    const imageUrl = kanapé.imageUrl
    const name = kanapé.name
    const price = kanapé.price
    const _id = kanapé._id*/

    const {altTxt, colors, description, imageUrl, name, price} = kanaper
    itemPrice = price
    imgUrl = imageUrl
    altText = altTxt
    articleName = name
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeCartContent(description)
    makeColors(colors)
}
   function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
   }
function makeTitle(name){
    const h1 = document.getElementById("title")
    if (h1 != null) h1.textContent = name


}
function makePrice(price){
    const span = document.getElementById("price")
    if (span != null) span.textContent = price
    
}
function makeCartContent(description){
    const p = document.getElementById("description")
    if (p != null) p.textContent = description
    
}

function makeColors(colors){
    const select = document.getElementById("colors")
    if (select != null){
        colors.forEach((color) => {
            const option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
            
        })
    }
}

const button = document.querySelector("#addToCart")
{
    button.addEventListener("click", handleClick)
    }

    function handleClick() {
        const color = document.querySelector("#colors").value
        const quantity = document.querySelector("#quantity").value

        if (isOrderInvalid(color, quantity)) return
            saveOrder(color, quantity) 
            
            
        }

    function saveOrder(color, quantity){
       const data = {
            id: id,
            color: color,
            quantity: Number(quantity),
            price: itemPrice,
            imageUrl: imgUrl,
            altTxt: altText,
            name : articleName
            
           }
           localStorage.setItem(id, JSON.stringify(data))
    }
        function isOrderInvalid(color, quantity){
            if (color == null || color === "" || quantity == null  || quantity == 0){
                alert("veuillez choisir une couleur et une quantité")
                return true
            }
        }
      

