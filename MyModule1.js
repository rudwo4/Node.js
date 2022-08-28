// 모듈 = 프로그램 조각
// 소스코드를 분할 작성한 뒤
// 프로그램 본체에서 해당 조각을 참조하여 사용하는 형태

// ES5 -> require(파일경로)
// ES6 -> import ...



// 사용자 정의 함수 작성

function helloWorld(){
  console.log("Hello World");
}

// 작성 함수 모듈 등록(내보내야할 파일) 
module.exports = helloWorld;

// 아래의 방법도 가능

//module.exports = function helloWorld(){
//  console.log("Hello World");
//}
