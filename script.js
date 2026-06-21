let total = 0;
let orderPlaced = false;

function login(){

    let username = document.getElementById("username").value;

    if(username.toLowerCase() === "admin"){
        document.getElementById("role").innerHTML =
        "Logged in as Admin";
    }
    else{
        document.getElementById("role").innerHTML =
        "Logged in as User";
    }
}

function addToCart(product, price){

    let item = document.createElement("li");

    item.innerHTML = product + " - ₹" + price;

    document.getElementById("cart").appendChild(item);

    total += price;

    document.getElementById("total").innerHTML = total;
}

function checkout(){

    if(total === 0){
        alert("Cart is Empty!");
    }
    else{
        alert("Order Placed Successfully!");
        orderPlaced = true;
    }
}

function trackOrder(){

    if(orderPlaced){
        document.getElementById("status").innerHTML =
        "Order Status: Shipped 🚚";
    }
    else{
        document.getElementById("status").innerHTML =
        "No Order Found";
    }
}
