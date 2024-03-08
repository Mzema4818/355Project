
//Create webpage
const shopItem = document.getElementsByClassName('ImageBorder')

for (var i in shopItem) {
    shopItem[i].onclick = function() {
        openShopPage(this.name);
    };
  }

function openShopPage(info){
    //console.log("hi");
    localStorage.setItem("displayShop", info);
    window.open("../Shop Item/index.html", "_self");
}

function displayShopItems(){
    //window.open("../Global/index.html", "_self");
    let name = document.getElementById('nameSource');
    let image = document.getElementById('imgSource');
    let price = document.getElementById('priceSource');
    let button = document.getElementById('buttonSource');
    
    let message = localStorage.getItem("displayShop");
    let information = message.split("  ");

    button.name = message;
    name.innerHTML = information[0];
    image.src = information[2];
    price.innerHTML = "$" + information[1];
}