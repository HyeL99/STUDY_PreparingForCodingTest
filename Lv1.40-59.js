/*
  40. 크레인 인형뽑기 게임
  게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
  "죠르디"는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.

  게임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다.
  (위 그림은 "5 x 5" 크기의 예시입니다).
  각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다.
  모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다.
  게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다.
  집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다.
  다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

  만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다.
  위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.

  크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다.
  또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다.
  (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)

  게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때,
  크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

  board 배열은 2차원 배열로 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
  board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
    0은 빈 칸을 나타냅니다.
    1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
  moves 배열의 크기는 1 이상 1,000 이하입니다.
  moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
*/
const solution40 = (board, moves) =>  {
  let list = [...board];
  let res = [];
  let cnt = 0;

  moves.forEach(item => {
    for(let i=0; i<board[0].length; i++){
      if(list[i][item-1] !== 0){
        res.push(list[i][item-1]);
        list[i][item-1] = 0;
        break;
      }
    }
    if(res.length >= 2 && res[res.length - 2] === res[res.length - 1]){
      res = res.slice(0,-2);
      cnt += 2;
    }
  })
  return cnt;
}
console.log('40',solution40([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4]	));
console.log('40',solution40([[0,0,0,0],[0,0,0,0],[0,4,4,0],[1,2,2,1]], [2,3,1,4,2,3]));

/*
  41. 키패드 누르기
  스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
  이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
  맨 처음 왼손 엄지손가락은 [ * ] 키패드에 오른손 엄지손가락은 [ # ] 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

    1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
    2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
    3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
    4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
      4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

  순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

  numbers 배열의 크기는 1 이상 1,000 이하입니다.
  numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
  hand는 "left" 또는 "right" 입니다.
    "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
  왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
*/
const solution41 = (numbers, hand) =>  {
  let leftHandLast = '*';
  let rightHandLast = '#';
  let rst = numbers.map(item => {
    if(item === 1 || item === 4 || item === 7){
      leftHandLast = item;
      return 'L'
    }else if(item === 3 || item === 6 || item === 9){
      rightHandLast = item;
      return 'R'
    } else {
      let leftCnt = 0;
      let rightCnt = 0;
      switch (item){
        case 2:
          leftCnt = leftHandLast === 1 ? 1 : leftHandLast === 4 ? 2 : leftHandLast === 7 ? 3 : leftHandLast === 2 ? 0 : leftHandLast === 5 ? 1 : leftHandLast === 8 ? 2 : leftHandLast === 0 ? 3 : 4;
          rightCnt = rightHandLast === 3 ? 1 : rightHandLast === 6 ? 2 : rightHandLast === 9 ? 3 : rightHandLast === 2 ? 0 : rightHandLast === 5 ? 1 : rightHandLast === 8 ? 2 : rightHandLast === 0 ? 3 : 4;
          break;
        case 5:
          leftCnt = leftHandLast === 1 ? 2 : leftHandLast === 4 ? 1 : leftHandLast === 7 ? 2 : leftHandLast === 2 ? 1 : leftHandLast === 5 ? 0 : leftHandLast === 8 ? 1 : leftHandLast === 0 ? 2 : 3;
          rightCnt = rightHandLast === 3 ? 2 : rightHandLast === 6 ? 1 : rightHandLast === 9 ? 2 : rightHandLast === 2 ? 1 : rightHandLast === 5 ? 0 : rightHandLast === 8 ? 1 : rightHandLast === 0 ? 2 : 3;
          break;
        case 8:
          leftCnt = leftHandLast === 1 ? 3 : leftHandLast === 4 ? 2 : leftHandLast === 7 ? 1 : leftHandLast === 2 ? 2 : leftHandLast === 5 ? 1 : leftHandLast === 8 ? 0 : leftHandLast === 0 ? 1 : 2;
          rightCnt = rightHandLast === 3 ? 3 : rightHandLast === 6 ? 2 : rightHandLast === 9 ? 1 : rightHandLast === 2 ? 2 : rightHandLast === 5 ? 1 : rightHandLast === 8 ? 0 : rightHandLast === 0 ? 1 : 2;
          break;
        case 0:
          leftCnt = leftHandLast === 1 ? 4 : leftHandLast === 4 ? 3 : leftHandLast === 7 ? 2 : leftHandLast === 2 ? 3 : leftHandLast === 5 ? 2 : leftHandLast === 8 ? 1 : leftHandLast === 0 ? 0 : 1;
          rightCnt = rightHandLast === 3 ? 4 : rightHandLast === 6 ? 3 : rightHandLast === 9 ? 2 : rightHandLast === 2 ? 3 : rightHandLast === 5 ? 2 : rightHandLast === 8 ? 1 : rightHandLast === 0 ? 0 : 1;
          break;
        default: break;
      }

      if(leftCnt === rightCnt){
        if(hand === 'right'){
          rightHandLast = item;
          return 'R'
        } else {
          leftHandLast = item;
          return 'L'
        }
      }

      if(leftCnt < rightCnt){
        leftHandLast = item;
        return 'L'
      } else {
        rightHandLast = item;
        return 'R'
      }
    }
  });

  return rst.join('');
}
console.log('41',solution41([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log('41',solution41([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));

/*
  42. 두 개 뽑아서 더하기
  정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

  numbers의 길이는 2 이상 100 이하입니다.
  numbers의 모든 수는 0 이상 100 이하입니다.
*/
const solution42 = (numbers) =>  {
  numbers.sort();
  let sums = [];
  for(let i = 0; i < numbers.length - 1; i++){
    for(let j = i + 1; j < numbers.length; j++){
      sums.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(sums)].sort((a,b) => a - b)
}
console.log('42',solution42([2,1,3,4,1]));
console.log('42',solution42([5,0,2,7]));

/*
  43. 3진법 뒤집기
  자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

  n은 1 이상 100,000,000 이하인 자연수입니다.
*/
const solution43 = (n) =>  {
  // let list = n.toString(3).split('').reverse()
  // let sum = 0;
  // list.forEach((num,index) => {
  //   sum += num * Math.pow(3,list.length - 1 - index);
  // })
  // return sum;
  return parseInt(n.toString(3).split('').reverse().join(''),3);
  //parseInt: 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
}
console.log('43',solution43(45));
console.log('43',solution43(125));

/*
  44. 내적
  길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
  a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
  이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

  a, b의 길이는 1 이상 1,000 이하입니다.
  a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
*/
const solution44 = (a, b) =>  {
  return a.map((item, index) => item * b[index]).reduce((a,b) => a + b)
}
console.log('44',solution44([1,2,3,4],	[-3,-1,0,2]));
console.log('44',solution44([-1,0,1],	[1,0,-1]));

/*
  45. 신규 아이디 추천
  카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다.
  "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
  다음은 카카오 아이디의 규칙입니다.

    아이디의 길이는 3자 이상 15자 이하여야 합니다.
    아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
    단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

  "네오"는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
  신규 유저가 입력한 아이디가 new_id 라고 한다면,

  1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

  신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

  new_id는 길이 1 이상 1,000 이하인 문자열입니다.
  new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
  new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.
*/
const solution45 = (new_id) =>  {
  // const reg = /[^a-z0-9-_.]/g;
  // let str = new_id.toLowerCase().replace(reg ,'').replace(/\.+/g,'.');
  //
  // if(/^\./.test(str)) str = str.slice(1);
  // if(/\.$/.test(str))  str = str.slice(0,-1);
  //
  // if(str.length === 0) str = 'a';
  //
  // if(str.length >= 16) {
  //   str = str.slice(0, 15);
  //   if(/\.$/.test(str))  str = str.slice(0,-1);
  // }
  //
  // if(str.length <= 2){
  //   let a = str[str.length - 1];
  //   str  += (a+a);
  //   str = str.slice(0, 3);
  // }
  // return str

  const str = new_id.toLowerCase()  //1
      .replace(/[^\w.-]/g,'') //2
      .replace(/\.+/g, '.') //3
      .replace(/^\.|\.$/g,'') //4
      .replace(/^$/,'a')  //5
      .slice(0,15).replace(/\.$/,'')  //6

  return str.padEnd(3,str[str.length - 1])
}
console.log('45',solution45("...!@Ba-T#*..y.abcdefgh_ijklm"));
console.log('45',solution45(	"z-+.^."));
console.log('45',solution45(	"z-+.^.asdfwqefsadfasdfewasd"));
console.log('45',solution45(		"=.="));

/*
  46. 음양 더하기
  어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
  실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

  absolutes의 길이는 1 이상 1,000 이하입니다.
    absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
  signs의 길이는 absolutes의 길이와 같습니다.
    signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
*/
const solution46 = (absolutes, signs) =>  {
  return absolutes.reduce((acc,cur,i) => acc + cur * (signs[i] ? 1 : -1),0); //0: acc initial value;
}
console.log('46',solution46([4,7,12],	[true,false,true]));
console.log('46',solution46([1,2,3],	[false,false,true]));

/*
  47. 로또의 최고 순위와 최저 순위
  로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다.
  아래는 로또의 순위를 정하는 방식입니다.

  1등 6개일치, 2등 5개 일치, 3등 4개 일치, 4등 3개 일치, 5등 2개 일치, 6등 그외

  로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다.
  하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
  당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
  알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다.
  당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.
*/
const solution47 = (lottos, win_nums) =>  {
  let cnt = lottos.filter(num => win_nums.includes(num)).length;
  let zero = lottos.filter(num => num === 0).length;
  let win = [6,6,5,4,3,2,1];
  return [win[cnt + zero],win[cnt]];
}
console.log('47',solution47([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]));
console.log('47',solution47([0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]));
console.log('47',solution47([45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35]));

/*
  48.약수의 개수와 덧셈
  두 정수 left와 right가 매개변수로 주어집니다.
  left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

  1 ≤ left ≤ right ≤ 1,000
*/
const solution48 = (left, right) =>  {
  /*
  let sum = 0;
  for(let i = left; i<=right; i++){
    sum  = solution48_getDivisor(i) % 2 === 0 ? sum + i : sum - i;
  }
  return sum;
  */
  let sum = 0;
  for(let i = left; i <= right; i++){
    if(Number.isInteger(Math.sqrt(i))) sum -= i;
    else sum += i;
  }
  return sum;
}
/*const solution48_getDivisor = (num) => {
  let list = [];
  for(let i = 1; i <= num; i++){
    if(num % i === 0) list.push(i, num / i);
  }
  return [... new Set(list)].length;
}*/
console.log('48',solution48(13,	17));
console.log('48',solution48(24,	27));

/*
  49. 숫자 문자열과 영단어
  네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
  다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
    1478 → "one4seveneight"
    234567 → "23four5six7"
    10203 → "1zerotwozero3"

    이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
    s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

    1 ≤ s의 길이 ≤ 50
    s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
    return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
*/
const solution49 = (s) =>  {
  // return Number(s.replace(/zero/g,'0')
  //     .replace(/one/g,'1')
  //     .replace(/two/g,'2')
  //     .replace(/three/g,'3')
  //     .replace(/four/g,'4')
  //     .replace(/five/g,'5')
  //     .replace(/six/g,'6')
  //     .replace(/seven/g,'7')
  //     .replace(/eight/g,'8')
  //     .replace(/nine/g,'9'));

  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for(let i = 0; i < numbers.length; i++){
    s = s.split(numbers[i]).join(`${i}`);
  }
  return Number(s);
}
console.log('49',solution49("one4seveneight"));
console.log('49',solution49("23four5six7"));
console.log('49',solution49("2three45sixseven"));
console.log('49',solution49("123"));

/*
  50. 부족한 금액 계산하기
  새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
  이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
  놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
  단, 금액이 부족하지 않으면 0을 return 하세요.

  놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
  처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
  놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
*/
const solution50 = (price, money, count) =>  {
  // let rst = (1 + count) * count * 0.5 * price - money;
  // return rst > 0 ? rst : 0;
  return Math.max(0, (1 + count) * count * 0.5 * price - money)
}
console.log('50',solution50(3,	20,	4));

/*
  51. 없는 숫자 더하기
  0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
  numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

  1 ≤ numbers의 길이 ≤ 9
  0 ≤ numbers의 모든 원소 ≤ 9
  numbers의 모든 원소는 서로 다릅니다.
*/
const solution51 = (numbers) =>  {
  // let sum = 0;
  // for(let i=0; i<10; i++){
  //   if(!numbers.includes(i)) sum += i;
  // }
  // return sum;
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0)
}
console.log('51',solution51([1,2,3,4,6,7,8,0]));
console.log('51',solution51([5,8,4,0,6,7,9]));

/*
  52. 최소직사각형
  명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.
  다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
  이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

  모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
  모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

  sizes의 길이는 1 이상 10,000 이하입니다.
  sizes의 원소는 [w, h] 형식입니다.
  w는 명함의 가로 길이를 나타냅니다.
  h는 명함의 세로 길이를 나타냅니다.
  w와 h는 1 이상 1,000 이하인 자연수입니다.
*/
const solution52 = (sizes) =>  {
  let minSize = 1;
  let maxSize = 1;
  sizes.forEach(item => {
    let min = Math.min(...item);
    let max = Math.max(...item);

    if(minSize < min) minSize = min;
    if(maxSize < max) maxSize = max;
  })
  return minSize * maxSize;
}
console.log('52',solution52([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log('52',solution52([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log('52',solution52([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));

/*
  53. 나머지가 1이 되는 수 찾기
  자연수 n이 매개변수로 주어집니다.
  n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
  답이 항상 존재함은 증명될 수 있습니다.

  3 ≤ n ≤ 1,000,000
*/
const solution53 = (n) =>  {
  for(let i = 2; i < n; i++){
    if(n % i === 1) return i;
  }
}
console.log('53',solution53(10));
console.log('53',solution53(12));

/*
  54. 신고 결과 받기
  신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다.
  무지가 개발하려는 시스템은 다음과 같습니다.

  각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
    신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
    한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
  k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
    유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.



  3 ≤ n ≤ 1,000,000
*/
const solution54 = (id_list, report, k) =>  {
  let mailList = Object([...id_list]).fill([]);
  report.map(item => item.split(' ')).forEach(user => {
    mailList[id_list.indexOf(user[0])] = [...mailList[id_list.indexOf(user[0])],user[1]];
  });
  mailList = mailList.map(user => [...new Set(user)]);

  let reportList = Object([...id_list]).fill(0);
  let reportUsers = [];

  mailList.forEach(list => list.forEach(user => {
    reportList[id_list.indexOf(user)] ++;
  }))
  reportList.forEach((cnt, index) => {
    if(cnt >= k){
      reportUsers.push(id_list[index]);
    }
  });

  return mailList.map(users => {
    let cnt = 0;
    users.forEach(user => {
      if(reportUsers.includes(user)) cnt++;
    })
    return cnt;
  })
}
console.log('54',solution54(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));
console.log('54',solution54(["con", "ryan"],	["ryan con", "ryan con", "ryan con", "ryan con"],	3));

/*
  55. 성격 유형 검사하기
  나만의 카카오 성격 유형 검사지를 만들려고 합니다.
  성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분합니다.
  성격은 각 지표에서 두 유형 중 하나로 결정됩니다.

    지표 번호   성격 유형
    1번 지표   라이언형(R), 튜브형(T)
    2번 지표   콘형(C), 프로도형(F)
    3번 지표   제이지형(J), 무지형(M)
    4번 지표   어피치형(A), 네오형(N)

  질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다.
  이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.
*/
const solution55 = (survey, choices) =>  {
  let type = ['R','T','C','F','J','M','A','N'];
  let typeScore = [0,0,0,0,0,0,0,0]
  survey.forEach((types,index) => {
    let score = 4 - choices[index];
    if(score > 0) typeScore[type.indexOf(types.split('')[0])] += score;
    else if (score < 0) typeScore[type.indexOf(types.split('')[1])] += - score;
  })
  let result = [];
  for(let i = 0; i < 8; i += 2){
    if(typeScore[i] === typeScore[i + 1] || typeScore[i] > typeScore[i + 1]) result.push(type[i]);
    else result.push(type[i + 1]);
  }
  return result.join('')
}
console.log('55',solution55(["AN", "CF", "MJ", "RT", "NA"],	[5, 3, 2, 7, 5]));
console.log('55',solution55(["TR", "RT", "TR"],	[7, 1, 3]));

/*
  56. 숫자 짝꿍
  두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
  (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다).
  X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다.
  X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
  두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

  3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
  X, Y는 0으로 시작하지 않습니다.
  X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.
*/
const solution56 = (X, Y) =>  {
  let xArray = Array(10).fill(0); //0-9
  let yArray = Array(10).fill(0); //0-9

  X.split('').forEach(num => xArray[Number(num)]++);
  Y.split('').forEach(num => yArray[Number(num)]++);

  let numbers = [];
  for(let i = 0; i < 10; i++){
    if(xArray[i] > 0 && yArray[i]){
      for(let j = 0; j < Math.min(xArray[i],yArray[i]); j++){
        numbers.push(i);
      }
    }
  }
  numbers.sort((a,b) => b - a);
  if(numbers.length === 0) return '-1';
  if(numbers[0] === 0) return '0';
  return numbers.join('');
}
console.log('56',solution56("100",	"2345"));
console.log('56',solution56("100",	"203045"));
console.log('56',solution56("100",	"123450"));
console.log('56',solution56("12321",	"42531"));
console.log('56',solution56("5525",	"1255"));

/*
  57. 삼총사
  한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
  이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
  예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다.
  또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다.
  따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
  한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

  3 ≤ number의 길이 ≤ 13
  -1,000 ≤ number의 각 원소 ≤ 1,000
  서로 다른 학생의 정수 번호가 같을 수 있습니다..
*/
const solution57 = (number) =>  {
  let cnt = 0;
  for(let i = 0; i < number.length - 2; i++){
    for(let j = i + 1; j < number.length - 1; j++){
      for(let k = j + 1; k < number.length; k++){
        if(number[i] + number[j] + number[k] === 0) cnt ++;
      }
    }
  }
  return cnt;
}
console.log('57',solution57([-2, 3, 0, 2, -5]));
console.log('57',solution57([-3, -2, -1, 0, 1, 2, 3]));
console.log('57',solution57([-1, 1, -1, 1]));

/*
  58. 콜라 문제
  오래전 유행했던 콜라 문제가 있습니다. 콜라 문제의 지문은 다음과 같습니다.
    정답은 아무에게도 말하지 마세요.
    콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
    단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.
  콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다.
  상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

  1 ≤ b < a ≤ n ≤ 1,000,000
  정답은 항상 int 범위를 넘지 않게 주어집니다.
*/
const solution58 = (a, b, n) =>  {
  let cnt = 0;
  while(n >= a){
    let k = Math.floor(n / a) * b
    cnt += k;
    n = k + n % a;
  }
  return cnt;
  // return Math.floor(Math.max(n - b, 0) / (a - b)) * b

}
console.log('58',solution58(2,	1,	20));
console.log('58',solution58(3,	1,	20));
console.log('58',solution58(5,	3,	21));

/*
  59. 옹알이 (2)
  머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다
  문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

  1 ≤ babbling의 길이 ≤ 100
  1 ≤ babbling[i]의 길이 ≤ 30
  문자열은 알파벳 소문자로만 이루어져 있습니다.
*/
const solution59 = (babbling) =>  {
  let cnt = 0;
  for(let word of babbling){
    if(!/(aya|ye|woo|ma)\1+/.test(word)) {
      let str = word.replace(/aya|ye|woo|ma/g,'');
      if(str === '') {
        cnt++;
      }
    }
  }
  return cnt;
}
console.log('59',solution59(["aya", "yee", "u", "maa"]));
console.log('59',solution59(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
