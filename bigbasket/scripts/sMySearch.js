
import navbar from "../components/navbar.js";

document.getElementById("mynavbar").innerHTML= navbar();

import footer from "../components/footer.js";

document.getElementById("myfooter").innerHTML= footer();

const url =  `https://grocery-masai.herokuapp.com/items`;
const container = document.getElementById("items");

fetch(url);
let x = fetch(url);
console.log(x);

fetch(url) 
    .then(function(res){
        
        console.log(res);
        return res.json();      
    })
    .then(function(res){
        appendData(res.data);
        
    })
    .catch(function(err){
        console.log(err);
    })

    function appendData(data) {

        data.forEach(function(elem) {

            let div = document.createElement("div");

            let image = document.createElement("img");
            image.src = elem.image;
            image.style.width = "300px";
            image.style.height = "300px";
            image.style.marginTop = "30px";

            let name = document.createElement("p");
            name.innerText = elem.name;

            let price = document.createElement("p");
            price.innerText = elem.price;

            let btn = document.createElement("button");
            btn.innerText="Add to Cart";
            btn.setAttribute("id","add_to_cart”")

            btn.addEventListener("click",function(){
                cart.push(elem);

                localStorage.setItem("items",JSON.stringify(cart));
                location.reload(true);
            })

            div.append(image,name,price,btn);
            container.append(div);

        });

    }
