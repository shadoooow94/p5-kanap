const orderId = getOrderId() // Récupération de l'orderId dans l'URL
displayOrderId(orderId) // Affichage de l'orderId
removeAllCache()    // Suppression du cache


function getOrderId() {  // Récupération de l'orderId dans l'URL
const UrlSearchParams = window.location.search 
const urlParams = new URLSearchParams(UrlSearchParams) 
return urlParams.get("orderId")

}

function displayOrderId(orderId) { // Affichage de l'orderId
const orderIdElement = document.getElementById("orderId")
orderIdElement.textContent = orderId
}

function removeAllCache() { // Suppression du cache
localStorage.clear()
}