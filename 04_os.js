//Ipv4만 알면 되며 Mac 주소는 하드웨어 일련번호이다.
//192.168 또는 172.16 으로 시작되는 주소는 VM,유동 IP'
//넷마스크 A,B,C,D 총 4개 중 넷마스크 255 자리 수에 따라 같은 네트워크 확인 가능
//공인IP(네이버와 같은 것)와 유동IP
//공유기 -> IP분배 -> DHCP
//공인 IP -> 고정 IP
import os from 'os';

console.group('시스템 기본 정보');
console.debug('홈 디렉토리 : ' + os.homedir);
console.debug('시스템 아키텍처 : ' + os.arch);
console.debug('os 플랫폼 : ' + os.platform);
console.debug('시스템 hostname : %s',os.hostname);
console.debug;
console.groupEnd;

//사용자 계정 정보
const userInfo = os.userInfo();
console.group('사용자 계정정보');
console.debug('사용자 계정명 : ' + userInfo.username);
console.debug('사용자 홈 디렉토리 : ' + userInfo.homedir);
console.debug('사용자 쉘 환경 : ' + userInfo.shell);
console.debug;
console.groupEnd;

//메모리 용량
//freemem() -> 시스템에서 현재 사용 가능한 메모리 용량
//totalmem() -> 시스템의 전체 메모리 용량
console.group('메모리 용량');
console.debug('시스템의 메모리 : %d(free) / %d(total)', os.freemem, os.totalmem);
console.debug;
console.groupEnd;

//cpu 정보
const cpus = os.cpus();

console.group('메모리 용량');
console.debug('cpu 코어 수 : ' + cpus.length);

cpus.map((v,i) => {
  console.group('[%d번재 CPU] %s',i + 1,v.model);
  console.debug('처리속도 : %d',v.speed);
  console.debug('수행시간 정보 %j',i + 1,v.times);
  console.groupEnd;
});

console.debug;
console.groupEnd;

//네트워크 정보
const nets = os.networkInterfaces();

for (const attr in nets){
  console.group('Network장치 이름 : %s', attr);

  const item = nets[attr];
  item.map((v,i)=> {
    console.debug('주소형식 : %s', v.family);
    console.debug('IP주소 : %s', v.address);
    console.debug('맥주소 : %s', v.mac);
    console.debug('넷마스크 : %s', v.netmask);
    console.debug
  });
  console.groupEnd
}

