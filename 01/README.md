# 자바스크립트
## 자바스크립트
### <script> 태그 사용
+ 내부
    + 위치1 : head 태그 영역
    + 위치2 : body 태그 영역 - 어느위치라도 가능

+ 외부
    + src 속성 > function 함수에 넣기 > bt에 onclick="funPrint(n);"

### ES6+
+ ★화살표 함수★ : const funPrint = (n) => {console.log(`버튼${n}`);}
    + 버튼${n}: 백틱사용 (1옆에.작은따옴표 아님.)

+ JS에서 변수는 var, let, const 3가지 였으나 es6+부터 var는 사용하지 않음
    + 함수는 const
    + 변수는 변하면 const, 안변하면 let