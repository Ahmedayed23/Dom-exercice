const minusBtn=document.querySelector(".minus-btn");
const plusBtn= document.querySelector(".plus-btn");
const total= document.querySelector("#totale-price");
total.computedStyleMap.color="red";
plusBtn[0].style.color="pink";
plusBtn.forEach(function(v,i){
    v.style.backgroundColor="red";
});




const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");
const total = document.querySelector("#total-price");
total.style.color = "red";
plusBtn[0].style.color = "pink";
plusBtn.forEach(function (v, i) {
  v.style.backgroundColor = "red";
});