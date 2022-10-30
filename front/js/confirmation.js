const orderId = getOrderId()
displayOrderId(orderId)
removeAllCache()


function getOrderId() {
const UrlSearchParams = window.location.search
const urlParams = new URLSearchParams(UrlSearchParams)
return urlParams.get("orderId")

}

function displayOrderId(orderId) {
const orderIdElement = document.getElementById("orderId")
orderIdElement.textContent = orderId
}

function removeAllCache() {
localStorage.clear()
}