/* 80. 약수 구하기 */
function solution80(n) {
  if(n === 1) return [1]
  let list = [1,n];
  let sqrt = Math.sqrt(n);
  if(Number.isInteger(sqrt)) list.push(sqrt);
  for(let i = 2; i < sqrt; i++){
    if(n % i === 0) list.push(i, n / i);
  }
  return [...list.sort((a, b) => a - b)];
}
console.log('80',solution80(24));
console.log('80',solution80(29));

/* 81. 편지 */
function solution81(message) {
  return message.length * 2;
}
console.log('81',solution81("happy birthday!"));
console.log('81',solution81("I love you~"));

/* 82. 가장 큰 수 찾기 */
function solution82(array) {
  let maxNum = Math.max(...array);
  return [maxNum, array.indexOf(maxNum)];
}
console.log('82',solution82([1, 8, 3]));
console.log('82',solution82([9, 10, 11, 8]));

/* 83. 문자열 계산하기 */
function solution83(my_string) {
  my_string = my_string.split(' ');
  let sum = 0;
  for(let i = 0; i < my_string.length; i++){
    if(my_string[i] === '+' || my_string[i] === '-') my_string[i + 1] = my_string[i] + my_string[i + 1];
    else sum += +my_string[i];
  }
  return sum
}
console.log('83',solution83("3 + 4"));

/* 84. 배열의 유사도 */
function solution84(s1, s2) {
  // let cnt = 0;
  // s1.forEach(word => {
  //   cnt += s2.filter(item => item === word).length
  // })
  // return cnt;
  return s1.filter(word => s2.includes(word)).length;
}
console.log('84',solution84(["a", "b", "c"],	["com", "b", "d", "p", "c"]));
console.log('84',solution84(["n", "omg"],	["m", "dot"]));

/* 85. 숫자 찾기 */
function solution85(num, k) {
  let str = num.toString();
  return str.includes(k) ? str.indexOf(k) + 1 : -1;
}
console.log('85',solution85(29183,	1));
console.log('85',solution85(232443,	4));
console.log('85',solution85(123456,	7));

/* 86. n의 배수 고르기 */
function solution86(n, numlist) {
  return numlist.filter(num => num % n === 0);
}
console.log('86',solution86(3,	[4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log('86',solution86(5,	[1, 9, 3, 10, 13, 5]));
console.log('86',solution86(12,	[2, 100, 120, 600, 12, 12]));

/* 87. 자릿수 더하기 */
function solution87(n) {
  return [...n.toString()].reduce((acc,cur) => acc + +cur, 0)
}
console.log('87',solution87(1234));
console.log('87',solution87(930211));

/* 88. OX퀴즈 */
function solution88(quiz) {
  return quiz.map(mathExp => {
    let [exp,rst] = mathExp.split(' = ')

    exp = exp.split(' ');
    let sum = 0;
    for(let i = 0; i < exp.length; i++){
      if(exp[i] === '+' || exp[i] === '-') {
        if(exp[i] === '-') exp[i + 1] = -1 * exp[i + 1];
      }
      else sum += +exp[i];
    }

    return sum === +rst ? 'O' : 'X';
  })
}
console.log('88',solution88(["3 - 4 = -3", "5 + 6 = 11"]));
console.log('88',solution88(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]));
console.log('88',solution88(["-1 - -3 = 2", "-3 - 3 = 71"]));

/* 89. 문자열안에 문자열 */
function solution89(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
console.log('89',solution89("ab6CDE443fgh22iJKlmn1o",	"6CD"));
console.log('89',solution89("ppprrrogrammers", 	"pppp"));
console.log('89',solution89("AbcAbcA","AAA"));

/* 88. 제곱수 판별하기 */
function solution90(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
console.log('90',solution90(144));
console.log('90',solution90(976));

/* 89. 세균 증식 */
function solution91(n, t) {
  return n * Math.pow(2, t);
}
console.log('91',solution91(2,	10));
console.log('91',solution91(7,	15));

/* 92. 문자열 정렬하기 (2) */
function solution92(my_string) {
  return my_string.toLowerCase().split('').sort().join('')
}
console.log('92',solution92("Bcad"));
console.log('92',solution92("heLLo"));
console.log('92',solution92("Python"));

/* 93. 7의 개수 */
function solution93(array) {
  //return array.join('').replace(/[^7]/g,'').length;
  return array.join('').split('7').length - 1;
}
console.log('93',solution93([7, 77, 17]));
console.log('93',solution93([10, 29]));

/* 94. 잘라서 배열로 저장하기 */
function solution94(my_str, n) {
  let list = [];
  for(let i = 0; i < my_str.length; i += n){
    if(i > my_str.length - n) list.push(my_str.slice(i))
    else list.push(my_str.slice(i, i + n));
  }
  return list;
}
console.log('94',solution94("abc1Addfggg4556b",	6));
console.log('94',solution94("abcdef123",	3));

/* 95. 문자열 밀기 */
function solution95(A, B) {
  // return (B+B).indexOf(A);
  if(A === B) return 0;
  for(let i = 1; i < A.length; i++){
    let tmp = A[A.length - 1];
    A = tmp + A.slice(0,-1);
    if(A === B) return i;
  }
  return -1;
}
console.log('95',solution95("hello",	"ohell"));
console.log('95',solution95("apple",	"elppa"));
console.log('95',solution95("atat",	"tata"));
console.log('95',solution95("abc",	"abc"));

/* 96. 종이 자르기 */
function solution96(M, N) {
  //return M * N - 1;
  return (Math.min(M, N) - 1) + (Math.min(M, N)) * (Math.max(M, N) - 1)
}
console.log('96',solution96(2, 2));
console.log('96',solution96(2, 5));
console.log('96',solution96(1, 1));

/* 97. 연속된 수의 합 */
function solution97(num, total) {
  let min = total / num + (1 - num) / 2;
  return Array(num).fill().map((_,i) => min + i);
}
console.log('97',solution97(3,	12));
console.log('97',solution97(5,15));
console.log('97',solution97(4, 14));
console.log('97',solution97(5, 5));

/* 98. 다음에 올 숫자 */
function solution98(common) {
  if(common[2] - common[1] === common[1] - common[0]) return common[common.length - 1] + common[1] - common[0];
  return common[common.length - 1] * common[1] / common[0]
}
console.log('98',solution98([1, 2, 3, 4]));
console.log('98',solution98([2, 4, 8]));

/* 99. 옹알이 (1) */
function solution99(babbling) {
  return babbling.map(babble => babble.replace('aya', '*').replace('ye', '*').replace('woo', '*').replace('ma', '*').replace(/\*/g, '')).filter(item => item.length === 0).length;
}
console.log('99',solution99(["aya", "yee", "u", "maa", "wyeoo"]));
console.log('99',solution99(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
