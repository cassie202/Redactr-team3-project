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


let inputText = document.querySelector('#text-area')
let inputRedact = document.querySelector('#texts-to-redact')
const button = document.querySelector('#btn')
const RedactText = document.querySelector('#display-output')
let replaceChar = document.getElementById ("replace-char")
let clear = document.getElementById ("clear")

button.addEventListener('click', hideString)
clear.addEventListener ('click', reset)


function reset(){
   inputText.value = '';
    inputRedact.value = '';
    RedactText.value = '';
    replaceChar.value = '';
  
}

function hideString() {
  let str = inputText.value;
  let substr = inputRedact.value.split(' ');

  substr.map(e => {
    const strRegExp = new RegExp(e, 'gi');
    const length = e.length
    str = str.replace(strRegExp, `${`${replaceChar.value|| "*"}` .repeat(length)}`);
  })
  RedactText.innerText = str;
 
}



// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //||