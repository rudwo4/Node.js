// 노드에서 같은 경로라도 "./" 생략 불가

const my1 = require('./MyModule1');

my1();

//----------------------------------------------


const my2 = require('./MyModule2');

console.log(my2.name);
console.log(my2.property.id);
console.log(my2.property.type);
my2.say;

console.log(my2.home.postcode);
console.log(my2.home.address);
my2.home.getAddress();


