import {URL} from 'url'; // export{} 여러개의 기능을 보내는 것

const myurl = 'http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home';
//프로토콜://컴퓨터 주소(ip):프로토콜/폴더의 하위경로(html,jsp.asp,php)?파라미터값(QueryString)#hash(특정 id값)

//url의 각 성분을 분해 --> javascript의 location 객체와 동일한 기능
const location = new URL(myurl);

console.group("URL 성분정보 확인");
console.debug(location);
console.debug('href : '+ location.href);
console.debug('protocol : '+ location.protocol); //통신 방식
console.debug("host: " +location.host); // 사이트 주소
console.debug('hostname : '+ location.hostname); // 사이트 주소에서 포트 번호를 제외한 값
console.debug('port : '+ location.port); // 포트 번호
console.debug("origin: " + location.origin); // 통신 방식 + 사이트 주소 + 포트 번호
console.debug('pathname : '+ location.pathname); // 사이트 주소에서 변수 영역 제외한 값
console.debug('search : '+ location.search); // "?"를 포함한 변수 영역
console.debug('hash : '+ location.hash); //"#"과 함께 표시되는 마지막 값
console.groupEnd;