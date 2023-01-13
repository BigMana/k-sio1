console.log("script loaded");

// on récupere les éléménts de notre calculatrice

const buttons = document.querySelectorAll("button");
console.log(buttons);

const screen = document.querySelector(".screen");
console.log(screen);

const history = document.querySelector(".history");
console.log(history);

// On défini les variables utiles

let firstOperand = ``;
let lastOperand = ``;
let operator = ``;

// On ajoute un ecouteur d'evenement a chaques boutons

buttons.forEach((button) => {
    // boucle boutton prend chaques valeurs du tableau
    button.addEventListener("click",(e) =>{
        // On récupere le contenu du bouton
        const buttonContent = e.target.innerText;

        //Si c'est un chifre, on l'ajoute à l'opérande en cours
        if (!isNaN(buttonContent) || buttonContent === ""){ 
            if (operator === ""){ console.log(screen);
                firstOperand += buttonContent;
                screen.innerText = firstOperand;
            }else {
                lastOperand += buttonContent;
                screen.innerText = lastOperand;
            }
        }

        // Si c'est un opérateur on stocke
        if(
            buttonContent === "+" ||
            buttonContent === "-" ||
            buttonContent === "*" ||
            buttonContent === "/"
        ) {
            // TODO - firstOperand === true
            operator = buttonContent;
        }
        if(buttonContent === "="){
            screen.innerText = eval(
                `${firstOperand} ${operator} ${lastOperand}`
            );
        }
        if(buttonContent === "C") {
            firstOperand = "";
            lastOperand = "";
            operator = "";
            screen.innerText ="0";
         }
    });
});

//RESET
// Si c'est le bouton AC, on réinitialise toutes les variables
