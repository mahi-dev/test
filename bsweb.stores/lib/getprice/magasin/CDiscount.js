window.get_pageinfo = function() {
var return_price_value = "-2";
var price = document.querySelector("span.fpPrice.price");
if (price != null) {
 return_price_value = price.textContent;
}
return_price_value = return_price_value.replace("€", ".");
return {
price: return_price_value,
stock: "",
html: false,
price_type: 2,
img_url: ""};}