/* DOM 요소가 생성된 후에 실행 */

// show함수를 불러오기
/* 
>> 예전 버전 (function 키워드로 함수 생성)
function show() {
    console.log("show");
}
*/

/* 
>> 화살표 함수형식으로 생성
*/
const show = () => {
    console.log("show 화살표함수");
    
    // html의 msg 섹션을 가져온다 : querySelector(하나만가져옴)
    const msgId = document.querySelector("#msg");
    //HTML 내에 h2(페이스북)을 추가.
    msgId.innerHTML = "<h2>페이스북</h2>";
}

/* 
>> 화살표함수 축약 : 함수 내 명령이 하나일 때 {} 생략가능
                    만약 return문 하나이면 return도 생략가능
const show = () => console.log("show 화살표함수");
*/

document.addEventListener("DOMContentLoaded", () => {
    
});