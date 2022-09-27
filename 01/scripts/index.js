// 기존 함수 선언 방식
/*function funPrint() {
    console.log(n);
    console.log("외부 자바스크립트");
    console.log("버튼"+1);
} */

//ES6+ 부터 : 화살표 함수 사용
const funPrint = (n) => {
    // console.log(n);
    // console.log("외부 자바스크립트");
    console.log(`버튼${n}`);
}


/* jQuery
$document.ready(){  
}
*/
// document.addEventListener("DOMContentLoaded", 콜백함수)
// document에 이벤트리스너 추가하는데 (DOM이 다 만들어지면, 익명함수 () =>{} 를 실행한다)
document.addEventListener("DOMContentLoaded", () => {
//console.log("DOM test")
// DOM에 짜져있는 bt 을 (id)로 찾고 선택하여 -> (아래처럼) 요소를 생성 or 갖고와서 보여주기
    console.log(document.getElementById("bt").innerHTML);

    /*요소 생성*/
   let bt = document.createElement("button")
   document.getElementById("bt").append(bt);
    
    /*요소 찾기*/
    // 결과: HTMLCollection
    const bts1 = document.getElementsByClassName("bt1");
    console.log(bts1);
    const bts2 = document.getElementsByTagName("button");
    console.log(bts2);
    
    // 결과: Node >> 처음 만나는 값을 1개만 가져온다
    const bts3 = document.querySelector(".bt1");
    console.log(bts3);

    // 결과: NodeList >> 값 전체를 가져온다
    const bts4 = document.querySelectorAll('button');
    console.log(bts4);
});
// `` : 백틱(1옆에)


