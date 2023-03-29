/* 40. 공 던지기 */
function solution40(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}
console.log('40',solution40([1, 2, 3, 4],	2));

/* 41. 배열 회전시키기 */
function solution41(numbers, direction) {
  if(direction === 'right'){
    numbers.unshift(numbers.pop());
    return numbers;
  } else {
    numbers.push(numbers.shift());
    return numbers;
  }
}
console.log('41',solution41([1, 2, 3],	"right"));
console.log('41',solution41([4, 455, 6, 4, -1, 45, 6],	"left"));

/* 42. 주사위의 개수 */
function solution42(box, n) {
  let w = Math.floor(box[0] / n);
  let l = Math.floor(box[1] / n);
  let h = Math.floor(box[2] / n);
  return w*l*h;
}
console.log('42',solution42([1, 1, 1],	1));
console.log('42',solution42([10, 8, 6],	3));

/* 43. 합성수 찾기 */
function solution43(n) {
  let cnt = 0;
  for(let i = 4; i <= n; i++){
    for(let j = 2; j <= Math.sqrt(i); j++){
      if(i % j === 0){
        cnt++;
        break;
      }
    }
  }
  return cnt;
}
console.log('43',solution43(10));
console.log('43',solution43(15));

/* 44. 최댓값 만들기 (1) */
function solution44(numbers) {
  numbers.sort((a,b) => b - a);
  return numbers[0] * numbers[1];
}
console.log('44',solution44([1, 2, 3, 4, 5]));
console.log('44',solution44([0, 31, 24, 10, 1, 9]));

/* 45. 팩토리얼 */
function solution45(n) {
  let rst = 1;
  let fac = 1;
  while(fac <= n){
    rst++;
    fac *= rst;
  }
  return rst - 1;
}
console.log('45',solution45(3628800));
console.log('45',solution45(7));

/* 46. 모음 제거 */
function solution46(my_string) {
  return my_string.replace(/[aeiou]/g,'');
}
console.log('46',solution46("bus"));
console.log('46',solution46("nice to meet you"));

/* 47. 문자열 정렬하기 (1) */
function solution47(my_string) {
  return my_string.replace(/[^0-9]/g,'').split('').map(item => +item).sort();
}
console.log('47',solution47("hi12392"));
console.log('47',solution47("p2o4i8gj2"));
console.log('47',solution47("abcde0"));

/* 48. 숨어있는 숫자의 덧셈 (1) */
/*function solution48(n) {
  let i = 3;
  let numbers = n % 2 === 0 ? [2] : [];
  while(1){

    if(n % i === 0){
      n /= i;
      numbers.push(i);
    } else {
      i += 2;
      for(let j = 0; j < numbers.length; j++){
        if(i / numbers[j] === 0) {
          i += 2;
          break;
        }
      }
    }
    if(n < i) break;
  }

  return numbers;
}*/
function solution48(n) {
  let i = 3;
  let numbers = n % 2 === 0 ? [2] : [];
  while(i <= n){
    if(n % i === 0){
      numbers.push(i);
      n = n / i;
    } else {
      i += 2;
    }
  }

  return [... new Set(numbers)];
}
console.log('48',solution48(12));
console.log('48',solution48(17));
console.log('48',solution48(42009));

/* 49. 컨트롤 제트 */
/*function solution49(s) {
  let list = s.split(' ').map(item => item === 'Z' ? item : +item);
  list.forEach((item,index) => {
    if(item === 'Z') {
      list[index] = 0;
      list[index - 1] = 0;
    }
  })
  return list.reduce((acc,cur) => acc + cur, 0);
}*/
function solution49(s) {
  let list = [];
  s.split(' ').forEach((item,index) => {
    if(item === 'Z') list.pop();
    else list.push(+item);
  })
  return list.reduce((acc,cur) => acc + cur, 0);
}
console.log('49',solution49("1 2 Z 3"));
console.log('49',solution49("10 20 30 40"));
console.log('49',solution49("10 Z 20 Z 1"));
console.log('49',solution49("10 Z 20 Z"));
console.log('49',solution49("-1 -2 -3 Z"));

/* 50. 배열 원소의 길이 */
function solution50(strlist) {
  return strlist.map(word => word.length);
}
console.log(50,solution50(["We", "are", "the", "world!"]));
console.log(50,solution50(["I", "Love", "Programmers."]));

/* 51. 직사각형 넓이 구하기 */
function solution51(dots) {
  let s = dots[0];
  let e = null;
  for(let i = 1; i < 4; i++){
    if(s[0] !== dots[i][0] && s[1] !== dots[i][1]){
      e = dots[i];
      break;
    }
  }
  return Math.abs(s[0] - e[0]) * Math.abs(s[1] - e[1]);
}
console.log(51,solution51([[1, 1], [2, 1], [2, 2], [1, 2]]));
console.log(51,solution51([[-1, -1], [1, 1], [1, -1], [-1, 1]]));

/* 52. 캐릭터의 좌표 */
function solution52(keyinput, board) {
  const boardMax_W = (board[0] - 1) / 2;
  const boardMax_H = (board[1] - 1) / 2;
  let position = [0,0];
  keyinput.forEach(dir => {
    switch(dir){
      case 'left':
        if(position[0] > -boardMax_W) position[0] --;
        break;
      case 'right':
        if(position[0] < boardMax_W) position[0] ++;
        break;
      case 'down':
        if(position[1] > -boardMax_H) position[1] --;
        break;
      case 'up':
        if(position[1] < boardMax_H) position[1] ++;
        break;
    }
  })
  return position;
}
console.log(52,solution52(["left", "right", "up", "right", "right"],	[11, 11]));
console.log(52,solution52(["down", "down", "down", "down", "down"],	[7, 9]));

/* 53. 최댓값 만들기 (2) */
function solution53(numbers) {
  let numberList = numbers.sort((a ,b) => a - b);
  let multiples = [numberList[0] * numberList[1], numberList[numberList.length - 2] * numberList[numberList.length - 1]];
  return Math.max(...multiples);
}
console.log(53,solution53([1, 2, -3, 4, -5]));
console.log(53,solution53([0, -31, 24, 10, 1, 9]));
console.log(53,solution53([10, 20, 30, 5, 5, 20, 5]));

/* 54. 다항식 더하기 */
function solution54(polynomial) {
  let list = polynomial.split(' ').map(item => item === 'x' ? '1x' : item);

  list = list.filter(item => item !== '+');

  let rst = [0,0];
  list.forEach(item => {
    if(item.includes('x')) rst[0] += Number(item.slice(0,-1));
    else rst[1] += +item;
  });

  let answer = '';
  if(rst[0] === 0) return rst[1].toString();
  else if(rst[1] === 0) return rst[0]=== 1 ? 'x' : rst[0] + 'x';
  else {
    return rst[0]=== 1 ? 'x + ' + rst[1] : rst[0] + 'x + ' + rst[1];
  }
}
console.log(54,solution54("3x + 7 + x"));
console.log(54,solution54("2x + 0"));

/* 55. 숨어있는 숫자의 덧셈 (2) */
function solution55(my_string) {
  // return my_string.replace(/[^0-9]/g,'a').replace(/a+/g,'a').split('a').filter(item => item !== '').reduce((acc,cur) => acc + +cur,0);
  return my_string.split(/[^[0-9]/).reduce((acc,cur) => acc + +cur,0);
}
console.log(55,solution55("aAb1B2cC34oOp"));
console.log(55,solution55("1a2b3c4d123Z"));

/* 56. 안전지대 */
function solution56(board) {
  let list = board.map(item => Array(item.length).fill(true));
  board.forEach((row,ri) => {
    row.forEach((col,ci) => {
      if(col === 1){
        if(list[ri - 1]){
          if(list[ri - 1][ci - 1]) list[ri - 1][ci - 1] = false;
          list[ri - 1][ci] = false;
          if(list[ri - 1][ci + 1]) list[ri - 1][ci + 1] = false;
        }
        if(list[ri + 1]){
          if(list[ri + 1][ci - 1]) list[ri + 1][ci - 1] = false;
          list[ri + 1][ci] = false;
          if(list[ri + 1][ci + 1]) list[ri + 1][ci + 1] = false;
        }
        if(list[ri][ci - 1]) list[ri][ci - 1] = false;
        list[ri][ci] = false;
        if(list[ri][ci + 1]) list[ri][ci + 1] = false;
      }
    })
  })
  let cnt = 0;
  list.forEach((row) => {
    row.forEach((col) => {
      if(col) cnt++;
    })
  })
  return cnt;
}
console.log(56,solution56([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(56,solution56([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
console.log(56,solution56([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));

/* 57. 삼각형의 완성조건 (2) */
function solution57(sides) {
  return Math.min(...sides) * 2 - 1;
}
console.log(57,solution57([1, 2]));
console.log(57,solution57([3, 6]));
console.log(57,solution57([11, 7]));

/* 58. 외계어 사전 */
function solution58(spell, dic) {
  for(let i = 0; i < dic.length; i++){
    if([...dic[i]].sort().toString() === spell.sort().toString()) return 1;
  }
  return 2;
}
console.log(58,solution58(["p", "o", "s"],	["sod", "eocd", "qixm", "adio", "soo"]));
console.log(58,solution58(["z", "d", "x"],	["def", "dww", "dzx", "loveaw"]));
console.log(58,solution58(["s", "o", "m", "d"],	["moos", "dzx", "smm", "sunmmo", "som"]));

/* 59. 외계어 사전 */
function solution59(n) {
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
console.log(59,solution59(15));
console.log(59,solution59(40));
