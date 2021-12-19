var Kurtas = JSON.parse(localStorage.getItem("menkurtas"));
document.querySelector("#three_in_row").addEventListener("click", three)
document.querySelector("#four_in_row").addEventListener("click", four);
document.querySelector(".searchLogo").addEventListener("click", function(){
    var searchTag = document.querySelector("#searchLogoDiv");
    searchTag.style.border = "2px solid black";
    searchTag.style.borderRadius = "4px";
    setTimeout(() => { searchTag.style.border = "none";  }, 200);
})
var singleProductElement;
three();
var num;
function three(){
    num = 3;
    document.querySelector("#three_in_row").style.border = "1px solid rgb(123,123,123)";
    var x = document.querySelector("#three_in_row").querySelectorAll("div");
    for (let i = 0; i < 3; i++){
        x[i].style.backgroundColor = "black";
    }
    document.querySelector("#four_in_row").style.border = "1px solid rgb(216,215,210)";
    x = document.querySelector("#four_in_row").querySelectorAll("div");
    for (let i = 0; i < 4; i++){
        x[i].style.backgroundColor = "rgb(175,174,169)";
    }
    var main_box = document.querySelector("#images");
    main_box.setAttribute("class", "three_box");
    main_box.textContent = "";
    Kurtas.map(function(ele){
        var div = document.createElement("div");
        div.innerHTML = "";
        div.setAttribute("class", "three");
        div.setAttribute("class", "hov_er");
        div.addEventListener("click", function(){
            singleProduct(ele);
        })
            var img1 = document.createElement("img");
            img1.setAttribute("src", ele.img_url);
            img1.setAttribute("height", "78%");
            img1.setAttribute("width", "100%");
            var type = document.createElement('p');
            type.setAttribute("class", "para type");
            type.textContent = ele.type;
            var price = document.createElement("h3");
            price.textContent = "M.R.P. ₹"
            price.textContent += ele.price;
            price.setAttribute("class", "price");
            div.append(img1, type, price);
        main_box.append(div);
    })
    
}
function four(){
    num = 4;
    document.querySelector("#four_in_row").style.border = "1px solid rgb(123,123,123)";
    var x = document.querySelector("#four_in_row").querySelectorAll("div");
    for (let i = 0; i < 4; i++){
        x[i].style.backgroundColor = "black";
    }
    document.querySelector("#three_in_row").style.border = "1px solid rgb(216,215,210)";
    x = document.querySelector("#three_in_row").querySelectorAll("div");
    for (let i = 0; i < 3; i++){
        x[i].style.backgroundColor = "rgb(175,174,169)";
    }
    var main_box = document.querySelector("#images");
    main_box.setAttribute("class", "four_box");
    main_box.textContent = "";
    let i = 0;
    Kurtas.map(function(ele){
        i++;
        var div = document.createElement("div");
        div.setAttribute("class", "four");
        div.setAttribute("class", "hov_er");
        div.addEventListener("click", function(){
            singleProduct(ele);
        })
            var img1 = document.createElement("img");
            img1.setAttribute("src", ele.img_url);
            img1.setAttribute("height", "78%");
            img1.setAttribute("width", "100%");
            var type = document.createElement('p');
            type.setAttribute("class", "para type");
            type.textContent = ele.type;
            var price = document.createElement("p");
            price.textContent = "M.R.P. ₹"
            price.textContent += ele.price;
            price.setAttribute("class", "price");
            div.append(img1, type, price);
        main_box.append(div);
    })
}

function Sort(){
    var sorting = document.querySelector("#sort").value;
    switch(sorting){
        case "Asc":
            Kurtas.sort(function(a, b){
                if (b.type > a.type) {
                    return -1;
                  }
                  if (a.type > b.type) {
                    return 1;
                  }
                  return 0;
            })
            if (num === 3){
                three();
            }
            else{
                four();
            }
            break;
        
        case "Desc":
            Kurtas.sort(function(a, b){
                if (a.type > b.type) {
                    return -1;
                  }
                  if (b.type > a.type) {
                    return 1;
                  }
                  return 0;
            })
            if (num === 3){
                three();
            }
            else{
                four();
            }
            break;

        case "HtL" :
            Kurtas.sort(function(a, b){
                return b.price - a.price;
            })
            if (num === 3){
                three();
            }
            else{
                four();
            }
            break;
        
        case "LtH" :
            Kurtas.sort(function(a, b){
                return a.price - b.price;
            })
            if (num === 3){
                three();
            }
            else{
                four();
            }
            break;
        
        case "Rel" :
            Kurtas = JSON.parse(localStorage.getItem("menkurtas"));
            if (num === 3){
                three();
            }
            else{
                four();
            }
            break;
    }
}
function singleProduct(element){
    singleProductElement = [];
    singleProductElement.push(element);
    localStorage.removeItem("SingleProduct");
    localStorage.setItem("SingleProduct", JSON.stringify(singleProductElement));
    window.location.href = "singlePage.html";
}