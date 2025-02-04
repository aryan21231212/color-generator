let button = document.querySelector("button");
let code = document.querySelector("#hex");
let main = document.querySelector(".main");

let hex_decimal = "0123456789abcdef";
let hex_code = "#";

button.addEventListener('click',()=>{
    for (let index = 0; index < 6; index++) {
        hex_code += hex_decimal[Math.floor(Math.random()*16)]; 
    }
    code.innerHTML = hex_code;
    main.style.backgroundColor = hex_code;
    hex_code = "#";

})