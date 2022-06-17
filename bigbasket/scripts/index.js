import navbar from "../components/navbar.js";

document.getElementById("mynavbar").innerHTML= navbar();

let images_div = document.getElementById("images_div");
let i=0;
function start(){
    let images_arr =  ["https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg",
"https://www.bigbasket.com/media/uploads/banner_ima…_fresho_days_fnv_Bangalore_1600x460_14thjun22.jpg",
"	https://www.bigbasket.com/media/uploads/banner_images/hpc_cmc_cold-pressed_460_140622.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_150622_Bangalore.jpg",
"https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460_160622.jpeg",
"https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_flavoured-milk_460-250522.jpg"];
    let img = document.createElement("img");

    setInterval(function(){
        
        console.log("i",images_arr);
        if(i === images_arr.length){
            i = 0;
        }

        img.src = images_arr[i];
        images_div.append(img)


        i++;
    },2000);
}

start();
// **********************************************************************************************************************************
let login = document.getElementById('loginbtn');
login.addEventListener('click', function(){
    location.href = "login.html";
});


let eggs_meat = document.getElementById('eggs_meat');
eggs_meat.addEventListener('click', function(){
    location.href = "eggs_meat.html";
});

let breadBakery = document.getElementById('breadBakery');
breadBakery.addEventListener('click', function(){
    location.href = "breadBakery.html";
});

let foodgrains = document.getElementById('foodgrains');
foodgrains.addEventListener('click', function(){
    location.href = "foodgrains.html";
});

let fruits = document.getElementById('fruits_veg');
fruits.addEventListener('click', function(){
    location.href = "fruits_veg.html";
});


let basket = document.getElementById('basket');
basket.addEventListener('click', function(){
    location.href = "sMyBasket.html";
});
// **********************************************************************************************************************************

let searchbox = document.getElementById('searchbox');
searchbox.addEventListener('click', function(){ 
    location.href = "sMySearch.html";
});


// **********************************************************************************************************************************************************************

import footer from "../components/footer.js";

document.getElementById("myfooter").innerHTML= footer();

