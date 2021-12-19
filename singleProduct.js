SingleProduct= JSON.parse(localStorage.getItem("SingleProduct"));


SingleProduct.map(function(ele){
    var box = document.querySelector(".content-image");
    var img1 = document.createElement("img");
    img1.setAttribute("src", ele.img_url);
    box.append(img1);
    var price = document.querySelector(".price");
    price.textContent=ele.price ;

    var box2= document.querySelector(".box2");
    var img2 = document.createElement("img");
    img2.setAttribute("src", ele.img2);
    box2.append(img2);
    
    var box3 = document.querySelector(".box3");
    var img3 = document.createElement("img");
    img3.setAttribute("src", ele.img3);
    box3.append(img3);

    var box4 = document.querySelector(".box4");
    var img4 = document.createElement("img");
    img4.setAttribute("src", ele.img4);
    box4.append(img4);

    var pname= document.querySelector(".product-name");
    pname.textContent=ele.type;

    var bg = document.querySelector(".product-color");
    bg.style.backgroundColor=ele.color;

})

document.querySelector(".cart").addEventListener("click", addToCart)

function addToCart(){

  
   
    var a = document.querySelector(".cart");
    a.textcontent = "Go to Cart";

    a.addEventListener("click" , function(){

   
window.location.href="cart.html"
    
})




  
   
      
}
