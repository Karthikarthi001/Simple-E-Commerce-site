var search = document.getElementById("search");
var productContainer = document.querySelectorAll("div.products-box");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productContainer.length; count = count + 1) {
        var productName = productContainer[count].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productContainer[count].style.display = "none";
        } else {
            productContainer[count].style.display = "block";
        }
    }
});
