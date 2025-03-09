const numsCont = document.getElementById("container");
const pantalla = document.getElementById("pantalla");
const clearBtn = document.getElementById("clear");


for (let i = 9; i>=-2;i--) {
    if (i === -2) continue;
    const numsBox = document.createElement("button");
    numsBox.classList.add("nums");  
    if (i === 0){
        numsBox.textContent = ".";
        numsBox.classList.add("punto");
    } else {
        numsBox.textContent = (i===-1) ? "0" : i;
    }
    numsCont.appendChild(numsBox);
};

let a = "";
let b = "";
let operador = "";
let segNum = false;

function eligeNum (){
    let botones = document.getElementsByClassName("nums");
    for (let boton of botones){
        boton.addEventListener("click", (event) => {
            let numeroSelec = event.target.textContent;

            if ((segNum && b.includes(".") && numeroSelec(".")) || (!segNum && a.includes(".") && numeroSelec("."))) {
                return;
            }

            if (!segNum){
                a += numeroSelec;
                pantalla.textContent = a;
            }
            else{
                b += numeroSelec;
                pantalla.textContent = b;
            }
        });
    }
}

function eligeOp () {
    let operadores = document.getElementsByClassName("signos");
    for (let boton of operadores){
        boton.addEventListener("click", (event) => {
            if (a !== "" ) {
                operador = event.target.textContent;
                segNum = true;
                pantalla.textContent = operador;
            }
        });
    }
}

function calcular (){
    let resu;

    if (a !== "" && b !== "" && operador !== ""){
        let numA = parseFloat(a);
        let numB = parseFloat(b);

        switch (operador){
            case "+": 
                resu = numA + numB;
                break;
            case "-": 
                resu = numA - numB;
                break;
            case "*":
                resu = numA * numB;
                break;
            case "/": 
                resu = numB !== 0 ? numA / numB : "Error";
                break;
            default:
                 resu = "ERROR";
        }

        pantalla.textContent = resu;
        a = resu.toString();
        b = "";
        segNum = false;
    }
}

function limpiar () {
    a = "";
    b = "";
    operador = "";
    segNum = false;
    pantalla.textContent = 0;
}

document.addEventListener("DOMContentLoaded", () => {
    eligeNum();
    eligeOp();

    document.getElementById("igual").addEventListener("click", calcular);
    document.getElementById("clear").addEventListener("click", limpiar);
})

