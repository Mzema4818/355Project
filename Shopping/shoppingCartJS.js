//Shopping cart

let shoppingCart = [localStorage.getItem("ShoppingCart")]
const element = document.getElementById("MyShoppingCart");
document.querySelector('#shoppingCart').addEventListener('click', OpenCart)
document.querySelector('#shoppingCartNumber').addEventListener('click', OpenCart)

let shoppingCartNumber = document.getElementById("shoppingCartNumber");
if(localStorage.getItem("newItems") == null) localStorage.setItem("newItems", 0);
let newItems = localStorage.getItem("newItems");
shoppingCartNumber.innerHTML = newItems;

if(newItems == 0) shoppingCartNumber.innerHTML = "";

const number = document.getElementById("shoppingCartNumber");


if(newItems != 0){
    shoppingCartNumber.style.visibility = "visible";
}

function OpenCart() {
    let name = window.location.href;
    if(name.includes("355%20Project/index.html")){
        open("355%20Project/Shopping/index.html","_self")
    }else{
        open("../Shopping/index.html","_self")
    }

    newItems = 0;
    localStorage.setItem("newItems", newItems)
    shoppingCartNumber.innerHTML = "";
    shoppingCartNumber.style.visibility = "hidden";
}


function AddToCart(clicked_id)
{
    shoppingCart.push(clicked_id);
    localStorage.setItem("ShoppingCart", shoppingCart);
    newItems++;
    localStorage.setItem("newItems", newItems)

    if(newItems >= 100){
        shoppingCartNumber.innerHTML = "+99";
    }else{
        shoppingCartNumber.innerHTML = newItems;
    }
    shoppingCartNumber.style.visibility = "visible";
}

function BuyNow(){
    EmptyCart();
    alert("Items Bought");
}

function EmptyCart()
{
    localStorage.setItem("ShoppingCart", "");

    var build = "";
    build += "<table id='MyShoppingCart'>";
    build += "<tr>";
    build += "<th>Picture</th>";
    build += "<th>Name</th>";
    build += "<th>Price</th>";
    build += "<th>Size</th>";
    build += "<th>Remove</th>";
    build += "</tr>";

    build += "<tr id='total'>"
    build += "<th></th>"
    build += "<th></th>"
    build += "<th colspan='3'>" + "$" + 0 + "</th>"
    build += "</tr>";

    build += "</table>";
    
    element.innerHTML = build;
}

function Remove(name){
    document.getElementById(name).remove();

    var number = name.substring(4)
    const myArray = localStorage.getItem("ShoppingCart").toString().split(",");
    myArray.splice(number,1);

    localStorage.setItem("ShoppingCart", myArray)
    
    element.innerHTML = "";
    var build = "";
    build += "<table id='MyShoppingCart'>";
    build += "<tr>";
    build += "<th>Picture</th>";
    build += "<th>Name</th>";
    build += "<th>Price</th>";
    build += "<th>Size</th>";
    build += "<th>Remove</th>";
    build += "</tr>";

    build += "</table>";

    element.innerHTML += build;

    PopulateShoppingCart();
}

function PopulateShoppingCart() {
    //element.innerHTML = "";

    var total = 0;
    var build = "";
    const myArray = localStorage.getItem("ShoppingCart").toString().split(",");

    for (let i = 1; i < myArray.length; i++) {
        const myArray2 = myArray[i].split("  ");
        total += parseInt(myArray2[1]);
        build += "<tr id='item" + i + "'>";
        build += "<td><img src='" + myArray2[2] +  "'></td>"
        build += "<td><p>" + myArray2[0] + "<p></td>";
        build += "<td>$" + myArray2[1] + " </td>";
        build += "<td>" + myArray2[myArray2.length - 1] + " </td>";
        build += "<td><button type='button' onclick='Remove(" + '"item' + + i + '"' + ")' >&#10005;</button></td>";
        build += "</tr>";
    }

    if(myArray.length == 1){
        EmptyCart();
    }else{
        build += "<tr id='total'>"
        build += "<th></th>"
        build += "<th></th>"
        build += "<th colspan='3'>" + "$" + total + "</th>"
        build += "</tr>";
    }

    element.innerHTML += build;
    
}
