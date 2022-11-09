
let popup=document.querySelector(".login-pop");
window.addEventListener('load',function(e){
      e.preventDefault();
        // showpopup();
        // another simple way to show the popup
        setTimeout(() => {
            popup.classList.add("show");
        }, 3000);
       
});

// function showpopup() {
//     let timeLimit=3;
//     let i=0;
//     const timer=setInterval(function () {
//         i++;
//          if(i==timeLimit){
//             clearInterval(timer);
//             popup.classList.add("show");
//             console.log(i);
//          }
       
//     },1000)//time difference between one second to another


// }

let close=document.querySelector(".close");
close.addEventListener('click',function (e) {
    popup.style.display="none";

})

let btn=document.getElementsById("btn");
btn.addEventListener('click',function(e){
    e.preventDefault();
})

let btnnn=document.getElementsByTagName(".btnbtnbtn");
btnnn.addEventListener('click',function(e){
    popup.style.display="none";
})