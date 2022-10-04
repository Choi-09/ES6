//랜덤수
let randNum ; 

//사용자가 선택한 수
let userNum ;


//화면 보기 함수
const dispDom = (diceSectionP, formSectionP, resultSectionP, bt2P, bt3P) => {
    document.getElementById("diceSection").style.display = diceSectionP;
    document.getElementById("formSection").style.display = formSectionP;
    // document.getElementById("resultSection").style.display = resultSectionP;
    // document.getElementById("bt1").style.display = bt1P;
    document.getElementById("bt2").style.display = bt2P;
    document.getElementById("bt3").style.display = bt3P;
}

//주사위
const showDice = () => {
// 랜덤수 생성
    randNum = Math.floor(Math.random()*6)+1 ;
    console.log(`주사위 랜덤수 => ${randNum}`);

// DOM 제어
    dispDom("none", "block", "none", "none", "block");
}

//확인
const showResult = () => {
    userNum = form1.num.value;

//DOM 제어
    dispDom("blcok", "none", "blcok", "block", "none");

//주사위 그림
    let tag = `<img src="./images/${randNum}.png">`;

//ox그림
    let ox;
    if (randNum ==userNum) ox = "o";
    else ox = "x";

    tag = `${tag}<img src="./images/${ox}.png">`;
    document.getElementsbyId("diceSection").innerHTML = tag;
    console.log(`사용자 선택 수 확인 => ${userNum}`);
}

//DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.
document.addEventListener("DOMContentLoaded", () => {
    //주사위 던지기 버튼만 보여야 함
    dispDom("none", "none", "none", "block", "none"); 
  }); 