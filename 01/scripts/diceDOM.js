//랜덤수
let randNum ; 

//사용자가 선택한 수
let userNum ;

//화면 보기 함수
const disDom = (diceSectionP, formSectionP, resultSectionP, bt1P, bt2P) => {
    document.getElementById("diceSection").style.display = diceSectionP;
    document.getElementById("formSection").style.display = formSectionP;
    document.getElementById("resultSection").style.display = resultSectionP;
    document.getElementById("bt1").style.display = bt1P;
    document.getElementById("bt2").style.display = bt2P;
}


//주사위
const showDice = () => {
// 랜덤수 생성
    randNum = Math.floor(Math.random()*6)+1 ;
    console.log(`주사위 랜덤수 => ${randNum}`);

// DOM 제어
    dispDom("none", "block", "none", "block", "none", "block");
}

//확인
const showCheck = () => {
    userNum = form1.num.value;

//DOM 제어
    dispDom("blcok", "noen", "blcok", "noen", "blcok", "noen");

    let tag = `<img src = "./images/${i}.png">`

    let OX;
    if (randNum ==userNum) OX = "O";
    else OX = "X";

    tag = `${tag}<img src = "./images/${OX}.png">`
};