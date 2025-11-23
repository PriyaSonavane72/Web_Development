let btn1 = document.querySelector("#btn1");

///EVENT_DOM_OBJECT

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);            //Type         
//     console.log(evt.target);         ///Target
//     console.log(evt.clientX, evt.clientY);

//     console.log("btn1 Was Clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmousedown = (evt) => {
//     console.log("You Are Inside Div");
//     console.log(evt);
//     console.log(evt.type);            //Type         

//     console.log(evt.target);         ///Target
//     console.log(evt.clientX, evt.clientY);
///



// Event Listener
// addEventListener

// btn1.addEventListener("click",() => {
//     console.log("butoon1 was cliked");
// });
// btn1.addEventListener("click",() => {
//     console.log("butoon1 was cliked-handler1");
// });




// removeEventListener
btn1.addEventListener("click", () => {
   console.log("button1 was clickes-handler1");
});


btn1.addEventListener("click", () => {
   console.log("button was clicke-handle2");
});

const handle3 = () => {
   console.log("button 1 was clicked-handle3");
};

btn1.addEventListener("click", () => {
   console.log("button was clicked-handler4")
});


btn1.removeEventListener("click", handler3);