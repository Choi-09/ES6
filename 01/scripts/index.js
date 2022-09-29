// 기존 함수 선언 방식
/*
function funPrint() {
    console.log(n);
    console.log("외부 자바스크립트");
    console.log("버튼"+1);
} */


//ES6+ 부터 : 화살표 함수 사용
/*
const funPrint = (n) => {
    console.log(n);
    console.log("외부 자바스크립트");
    console.log(`버튼${n}`);
 }
 */

 // 변수
/*
 // console.log(x);
    let x = 100;
    x = 100*2;
    console.log(x);
*/

//jQuery//
/*
$document.ready(){ }
> document.addEventListener("DOMContentLoaded", 콜백함수)
*/ 
// ↓ document에 이벤트리스너 추가하는데 (DOM이 다 만들어지면, 익명함수 () =>{} 를 실행한다);
document.addEventListener("DOMContentLoaded", () => {
// console.log("DOM test") });
/*
// DOM에 짜져있는 bt을 (id)로 찾고 선택하여 -> (아래처럼) 요소를 생성 or 갖고와서 보여주기
    console.log(document.getElementById("bt").innerHTML);

    //요소 생성//
   let bt = document.createElement("button")
   document.getElementById("bt").append(bt);

    //요소 찾기//
     > 결과1: HTMLCollection
    const bts1 = document.getElementsByClassName("bt1");
    console.log(bts1);
    
     > 결과2: HTMLCollection
    const bts2 = document.getElementsByTagName("button");
    console.log(bts2);
    
     > 결과3: Node >> 처음 만나는 값을 1개만 가져온다
    const bts3 = document.querySelector(".bt1");
    console.log(bts3);

     > 결과4: NodeList >> 값 전체를 가져온다
*/
    const bts4 = document.querySelectorAll(".bt1");
    // console.log(bts4);
 
    // js 반복문- 노가다(?)
    /*
    console.log(bts4[0].innerHTML);
    console.log(bts4[0].innerText);
    console.log(bts4[1].innerContent);
    */

    // for 반복문
    /*
    > 결과 NodeList를 반복해서 가져오기
    for(let i = 0; i <bts4.length ; i++) {
        console.log(typeof(bts4[i]));
        // innerHTML로 요소 내 이름 바꾸기
        // bts4[i].innerHTML = `mybutton${i+1}`
        // console.log(bts4[i].innerHTML);
    }
    */

    // for in 반복문 : key 값만 가져온다
    /*
    for(let i in bts4) {
        console.log(i)
    }
    */
   
    // for each 반복문 : 메소드 형식이라 중간에 종료할 수 없음, idx가 item 뒤에 온다
    /*
    bts4.forEach((item) => {
        console.log(item.innerHTML)
    });
    bts4.forEach((item, idx) => {
        console.log(`${idx} : ${item.innerHTML}`);
    });
    */

    // for of 반복문 : (파이썬의 for in구문과 유사)  idx가 item 앞에 온다. break걸때
    /*
    for(let item of bts4){
        console.log(item.innerHTML);
    }
    for(let [idx, item] of bts4.entries()){
        console.log(`${idx} : ${item.innerHTML}`);
        break;
    }
    */
});



