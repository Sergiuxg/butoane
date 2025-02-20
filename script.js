const body = document.querySelector('body');
const creareaPatratului = document.querySelector('.creareaPatratului');
const creareaCulorii = document.querySelector('.creareaCulorii');


creareaPatratului.onclick = () =>{
    const patrat = document.createElement('div');
    patrat.classList.add('patrat');
    creareaPatratului.append(patrat);
}

// creareaCulorii.onclick = () =>{

//     patrat.style.backgroundColor = generateRandomColor;

//     const generateRandomColor = () =>{
//         let maxVal = 0xFFFFFF; 
//         let randomNumber = Math.random() * maxVal; 
//         randomNumber = Math.floor(randomNumber);
//         randomNumber = randomNumber.toString(16);
//         let randColor = randomNumber.padStart(6, 0);   
//         return #${randColor.toUpperCase()}
//     }
//     console.log(generateRandomColor()); 
// }