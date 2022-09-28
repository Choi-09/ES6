/* DOM 요소가 생성된 후에 실행 */

// show함수를 불러오기
/* 
>> 예전 버전 (function 키워드로 함수 생성)
function show() {
    console.log("show");
}
*/

/* 
>> ex6+ 부터는 화살표 함수형식으로 생성
*/
const show = () => {
    // console.log("show 화살표함수");
    
    // html의 msg 섹션을 가져온다 : querySelector(하나만가져옴)
    // const msgId = document.querySelectorAll("#msg");
    //HTML에 h2(페이스북) 태그 추가
    // msgId.innerHTML = "<h2>페이스북</h2>";

    // 태그가 아닌 문자열 추가
    // msgId.innerText = "<h2>페이스북</h2>";
    // console.log(msgId.innerHTML) ;
    // console.log(msgId.innerText) ;

    // msgIdtextContent = "<h2>페이스북</h2>";
    // console.log(msgId.textContent) ;

//  태그만들기
    /* msg 영역에 div 3개를 생성*/
    // 1. 태그 만들기
    // let tag = ""; // ① 변수선언(공백처리)
    // for (let i = 1; i <= 3; i++) {  //② 반복문   
    //     // tag = tag + '<div class = "divMsg">' + i + '</div>' ;      
    //    tag = tag + `<div class = "divMsg">${i}</div>`; //③ 함수 백틱주의
    // }
    // console.log(tag);
    let tag = "";
    /*
    for (let i = 1; i <=6; i++) {
        tag = tag + `<div class = "divMsg"><img src = "./images/${i}.png"></div>`; //이미지 경로 오류
    }
    */
   let i = Math.floor(Math.random() * 6)+1;
    tag = tag + `<div class = "divMsg"><img src = "./images/${i}.png" id="msgImgId"></div>`; //이미지 경로 오류
    console.log(tag);
    // 2. DOM에서 태그를 넣을 요소 선택
    // document.querySelector(`#msg).innerHTML = tag;
    // const msgDiv = document.querySelector(`#msg`)
    const msgDiv = document.querySelector('.msg'); //백틱, 작은따옴표 구분
    // 3. 선택된 요소의 HTML 변경 
    // msgDiv.innerHTML = tag ;
    msgDiv.innerHTML = tag;
/*  
>> 화살표함수 축약 : 함수 내 명령이 하나일 때 {} 생략가능
                    만약 return문 하나이면 return도 생략가능
const show = () => console.log("show 화살표함수");
*/

document.addEventListener("DOMContentLoaded", () => {   
});
}