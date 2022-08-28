//ES6 스타일 모듈
//Path 라는 모듈의 모든 기능 path 에 객체 부여
import path from 'path';

//파라미터의 제한이 없다
//조합된 경로 문자열에 해당하는 Path가 실제로 존재하는지는 상관 없음
const currentPath = path.join('C:\Users\EZEN\Desktop\world','myphoto','..\photo.jpg');
console.group("path.join");
console.debug(currentPath);
console.groupEnd;

//경로에서 디렉토리, 파일명, 확장자 구분하기
//-> C:/Users/EZEN/Desktop/world.photo.jpg
const dirname = path.dirname(currentPath);
const basename = path.basename(currentPath);
const extname = path.extname(currentPath);
console.group("경로 분할하기");
console.debug("디렉토리 : %s", dirname);
console.debug("파일 이름 : %s", basename);
console.debug("확장자 : %s", extname);
console.groupEnd;

//경로의 성분을 json형태로 한번에 분할
const parse = path.parse(currentPath);
console.group("경로정보 파싱");
console.debug("%o", parse);
console.debug("root: " + parse.root);
console.debug("dir: "+ parse.dir);
console.debug("name: "+ parse.root);
console.debug("ext: "+ parse.dir);
console.groupEnd;
