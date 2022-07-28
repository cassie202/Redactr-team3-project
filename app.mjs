function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    // console.log('make magic in here!');
  
    // const header = document.querySelector('h2');
    // if(header) {
    //   header.textContent = 'make some magic here!!';
    // }
  };
const redactBtn = document.getElementById("btn");
let textArea = document.getElementById("text-area")
let textsToRedact = document.getElementById("texts-to-redact");

let displayOutput = document.getElementById ("display-output");
let replaceChar = document.getElementById ("replace-char")
let rexPattern = /^[a-zA-Z]/;



redactBtn.addEventListener("click", function(){
     console.log("clicked")
});
textArea.addEventListener("keyup", function(event){
    let initialInput = event.target.value;
    console.log(initialInput);
});
textsToRedact.addEventListener("keyup", function(event){
   let newInput = event.target.value;
   console.log(newInput);
});

  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //