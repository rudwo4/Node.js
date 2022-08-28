import my1 from './MyModule1.js';
my1();

// --------------------------------
//받고 싶은 기능만 골라서 받을 수 있음
import {name, property, say, home} from './MyModule2.js';

console.log(name);
console.log(property.id);
console.log(property.type);
say();

console.log(home.postcode);
console.log(home.address);
home.getAddress();

// --------------------------------

import my3 from './MyModule3.js';
//클래스의 형태이므로 인스턴스를 생성해야 한다.
var module_obj = new my3();
module_obj.say();

// ------------------------------
//모듈 내에서 사전에 인스턴스 생성을 한 후 export한 경우
import my4 from './MyModule4.js';
my4.say();