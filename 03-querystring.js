//internet 주소에 포함 되어있는 ? 이후의 값(parameter 값)

import { URL,URLSearchParams } from "url";

const address = 'http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home';

const {searchParams} = new URL(address);
console.debug(searchParams);
//URL에서 추출한 모든 변수는 String 타입이다.

console.debug('요청 파라미터 중 a의 값 : %s (%s)',searchParams.get('a'),typeof searchParams.get('a'));
console.debug('요청 파라미터 중 b의 값 : %s (%s)',searchParams.get('b'),typeof searchParams.get('b'));
//encodeURIComponent('한글데이터') <-URLSearchParams 자동으로 이 기능 실행 해줌
// URL에 포함될 수 없는 글자는 자동으로 Encoding 처리 한다.
const obj = { name: 'hello', 
              nick: 'world',
              address: '서울시 서초구'
            };

const str = new URLSearchParams(obj);
console.log('조합된 요청 파라미터 : %s', str);