class HelloWorld{
  constructor() {
    console.log("--helloworld의 객체가 생성되었습니다.--");
  }

  say(){
    console.log("hello world");
  }
}
//클래스에 대한 객체를 모듈에 추가
module.exprots = new HelloWorld();