//랜덤수
let randNum ; 

//사용자가 선택한 수
let userNum ;

//화면 보기 함수
const disDom = (diceSectionP, formSectionP, resultSectionP, bt1P, bt2P)

//주사위
const showDice = () => {
    randNum = Math.floor(Math.random()*6)+1 ;
    console.log(`주사위 랜덤수 => ${randNum}`);
}

//확인
const showCheck = () => {
    console.log("확인");

//DOM 제어
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("diceSection").style.display = "none";
    document.getElementById("formSection").style.display = "none";
    document.getElementById("resultSection").style.display = "none";
    document.getElementsByClassName("bt1").style.display = "none";
    document.getElementsByClassName("bt2").style.display = "none";

    let tag = `<img src = "./images/${i}.png">`

    let OX;
    if (randNum ==userNum) OX = "O";
    else OX = "X";

    tag = `${tag}<img src = "./images/${OX}.png">`
});
}