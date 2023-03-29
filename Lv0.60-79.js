/* 60. 저주의 숫자 3 */
function solution60(n) {
  let cnt = 0;
  for(let i = 0; i < n; i++){
    cnt++;
    while(1){
      if(cnt.toString().includes('3') || cnt % 3 === 0){
        cnt++;
      } else {
        break;
      }
    }
  }
  return cnt;
}
console.log('60',solution60(15));
console.log('60',solution60(40));

/* 61. 평행 */
function solution61(dots) {
  let dx1 = dots[0][0] - dots[1][0];
  let dy1 = dots[0][1] - dots[1][1];
  let dx2 = dots[2][0] - dots[3][0];
  let dy2 = dots[2][1] - dots[3][1];
  if(dy1/dx1 === dy2/dx2) return 1;

  dx1 = dots[0][0] - dots[2][0];
  dy1 = dots[0][1] - dots[2][1];
  dx2 = dots[1][0] - dots[3][0];
  dy2 = dots[1][1] - dots[3][1];
  if(dy1/dx1 === dy2/dx2) return 1;

  return 0;
}
console.log('61',solution61([[1, 4], [9, 2], [3, 8], [11, 6]]));
console.log('61',solution61([[3, 5], [4, 1], [2, 4], [5, 10]]));

/* 62. 겹치는 선분의 길이 */
function solution62(lines) {
  let list = [];
  lines.forEach(bar => {
    for(let i = bar[0]; i < bar[1]; i++){
      list.push(i);
    }
  });
  list.sort();
  let cnt = 0;
  [...new Set(list)].forEach(num => {
    if(list.filter(item => item === num).length > 1) cnt++;
  })
  return cnt;
}
console.log('62',solution62([[0, 1], [2, 5], [3, 9]]));
console.log('62',solution62([[-1, 1], [1, 3], [3, 9]]));
console.log('62',solution62([[0, 5], [3, 9], [1, 10]]));

/* 63. 유한소수 판별하기 */
/*function solution63(a,b) {
  if((a/b).toString().length === 18) return 2;
  return 1;
}*/
function solution63(a,b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a,b); i++) {
    if (a%i===0 && b%i===0) n = i;
  }

  b/=n;
  while (b%2===0) b/=2;
  while (b%5===0) b/=5;

  return b === 1 ? 1 : 2;
}


console.log('63',solution63(7,	20));
console.log('63',solution63(11,	22));
console.log('63',solution63(12,	21));

/* 64. 특이한 정렬 */
function solution64(numlist, n) {
  //return numlist.sort((a,b) => b - a).sort((a,b) => Math.abs(n - a) - Math.abs(n - b));
  return numlist.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || b - a);
}
console.log('64',solution64([1, 2, 3, 4, 5, 6],	4));
console.log('64',solution64([10000,20,36,47,40,6,10,7000],	30));

/* 65. 등수 매기기 */
function solution65(score) {
  let list = score.map(item => (item[0] + item[1]) / 2)
  let scores = [...list].sort((a,b) => b - a);
  return list.map(item => 1 + scores.indexOf(item));
}
console.log('65',solution65([[80, 70], [90, 50], [40, 70], [50, 80]]));
console.log('65',solution65([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]));

/* 66. 로그인 성공? */
function solution66(id_pw, db) {
  for(let i = 0; i < db.length; i++){
    if(db[i][0] === id_pw[0] && db[i][1] === id_pw[1]) return 'login';
  }
  for(let i = 0; i < db.length; i++){
    if(db[i][0] === id_pw[0]) return 'wrong pw';
  }
  return 'fail';
}
console.log('66',solution66(["meosseugi", "1234"],	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]));
console.log('66',solution66(["programmer01", "15789"],	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]));
console.log('66',solution66(["rabbit04", "98761"],	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]));

/* 67. 치킨 쿠폰 */
function solution67(chicken) {
  let service = 0;
  while(chicken >= 10){
    let k = Math.floor(chicken / 10);
    service += k;
    chicken = chicken % 10 + k;
  }
  return service;
}
console.log('67',solution67(100));
console.log('67',solution67(1081));

/* 68. 이진수 더하기 */
function solution68(bin1, bin2) {
  return (parseInt(bin1,2) + parseInt(bin2,2)).toString(2);
}
console.log('68',solution68("10",	"11"));
console.log('68',solution68("1001",	"1111"));

/* 69. A로 B 만들기 */
function solution69(before, after) {
  return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}
console.log('69',solution69("olleh",	"hello"));
console.log('69',solution69("allpe",	"apple"));

/* 70. k의 개수 */
function solution70(i, j, k) {
  let str = '';
  for(let m = i; m <= j; m++){
    str += m;
  }
  return [...str].filter(item => item === k.toString()).length;
}
console.log('70',solution70(1,	13,	1));
console.log('70',solution70(10,	50,	5));
console.log('70',solution70(3, 10, 2));

/* 71. 중복된 문자 제거 */
function solution71(my_string) {
  // let list = [];
  // [...my_string].forEach(item => {
  //   if(!list.includes(item)) list.push(item);
  // })
  // return list.join('');
  return [...new Set(my_string)].join('');
}
console.log('71',solution71("people"));
console.log('71',solution71("We are the world"));

/* 72. 삼각형의 완성조건 (1) */
function solution72(sides) {
  sides.sort((a, b) => a - b);
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
}
console.log('72',solution72([1, 2, 3]));
console.log('72',solution72([3, 6, 2]));
console.log('72',solution72([199, 72, 222]));

/* 73. 가까운 수 */
function solution73(array, n) {
  array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0]
}
console.log('73',solution73([3, 10, 28],	20));
console.log('73',solution73([10, 11, 12],	13));

/* 74. 369게임 */
function solution74(order) {
  return order.toString().replace(/[^369]/g,'').length
}
console.log('74',solution74(3));
console.log('74',solution74(29423));

/* 75. 암호 해독 */
function solution75(my_string) {
  return [...my_string].map(item => {
    if(/[a-z]/.test(item)) return item.toUpperCase();
    else return item.toLowerCase();
  }).join('');
}
console.log('75',solution75("cccCCC"));
console.log('75',solution75("abCdEfghIJ"));

/* 76. 대문자와 소문자 */
function solution76(my_string) {
  return [...my_string].map(item => {
    if(/[a-z]/.test(item)) return item.toUpperCase();
    else return item.toLowerCase();
  }).join('');
}
console.log('76',solution76("cccCCC"));
console.log('76',solution76("abCdEfghIJ"));

/* 77. 영어가 싫어요 */
function solution77(numbers) {
  let numStrings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for(let i = 0; i < numStrings.length; i++){
    numbers = numbers.split(numStrings[i]).join(`${i}`);
  }
  return Number(numbers);
}
console.log('77',solution77("onetwothreefourfivesixseveneightnine"));
console.log('77',solution77("onefourzerosixseven"));

/* 78. 인덱스 바꾸기 */
function solution78(my_string, num1, num2) {
  let list = [...my_string];
  list[num1] = my_string[num2];
  list[num2] = my_string[num1];
  return list.join('');
}
console.log('78',solution78("hello",	1,	2));
console.log('78',solution78("I love you",	3,	6));

/* 79. 한 번만 등장한 문자 */
/*function solution79(s) {
  let rst = '';
  let list = [...s]
  let wList = [...new Set(s)].sort();
  wList.forEach(item => {
    if(list.filter(el => el === item).length === 1) rst += item;
  })
  return rst;
}*/
function solution79(s) {
  let rst = [];
  for(let item of s){
    if(s.indexOf(item) === s.lastIndexOf(item)) rst.push(item);
  }
  return rst.sort().join('');
}
console.log('79',solution79("abcabcadc"));
console.log('79',solution79("abdc"));
console.log('79',solution79("hello"));
