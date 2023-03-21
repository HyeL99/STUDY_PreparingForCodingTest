/*
  20. 정수 제곱근 판별
  임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
  n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

  n은 1이상, 50000000000000 이하인 양의 정수입니다.
*/
const solution20 = (n) =>  {
  let square = Math.sqrt(n)
  if(square % 1 === 0){
    return (square + 1) * (square + 1)
  } else return -1;
}
console.log('20',solution20(3));
console.log('20',solution20(121));

/*
  21. 정수 제곱근 판별
  정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
  단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
  예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

  arr은 길이 1 이상인 배열입니다.
  인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다. //중복값이 없음을 의미
*/
const solution21 = (arr) =>  {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  return arr.length > 0 ? arr : [-1]
}
console.log('21',solution21([4,3,2,1]));
console.log('21',solution21([10]));

/*
  22. 짝수와 홀수
  정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

  num은 int 범위의 정수입니다.
  0은 짝수입니다.
*/
const solution22 = (num) =>  {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log('22',solution22(3));
console.log('22',solution22(4));

/*
  23. 짝수와 홀수
  두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
  배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
  예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/
const solution23 = (n,m) =>  {
  let min = 1;
  for(let i=2; i<=Math.min(n,m); i++){
    if(n % i === 0 && m % i === 0) min = i;
  }
  let max = min;
  let i = 1;
  while(1){
    let num = max * i;
    if(num % n === 0 && num % m === 0 ){
      max = num;
      break;
    }
    i++;
  }

  return [min,max]
}
console.log('23',solution23(3,12));
console.log('23',solution23(2,5));

/*
  24. 콜라츠 추측
  1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.
  작업은 다음과 같습니다.

  --- 작업 ---
  1-1. 입력된 수가 짝수라면 2로 나눕니다.
  1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
  2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
  -------------

  예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다.
  위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
  단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
*/
const solution24 = (num) =>  {
  let rst = num;
  let i =0;
  if(rst === 1) return 0;
  for(i=1; i<500; i++){
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    if(num === 1) return i;
  }
  return -1;
}
console.log('24',solution24(6));
console.log('24',solution24(16));
console.log('24',solution24(626331));

/*
  25. 평균 구하기
  정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

  arr은 길이 1 이상, 100 이하인 배열입니다.
  arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
*/
const solution25 = (arr) =>  {
  // let sum = 0;
  // arr.forEach(item => sum += item);
  // return sum / arr.length;
  return arr.reduce((a,b) => a+b) / arr.length;
}
console.log('25',solution25([1,2,3,4]));
console.log('25',solution25([5,5]));

/*
  26. 하샤드 수
  양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
  예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
  자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

  x는 1 이상, 10000 이하인 정수입니다.
*/
const solution26 = (x) =>  {
  // let sum = 0;
  // arr.forEach(item => sum += item);
  // return sum / arr.length;
  return x % x.toString().split('').map(item => Number(item)).reduce((a,b) => a+b) === 0
}
console.log('26',solution26(10));
console.log('26',solution26(129));

/*
  27. 핸드폰 번호 가리기
  프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
  전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

  phone_number는 길이 4 이상, 20이하인 문자열입니다.
*/
const solution27 = (phone_number) =>  {
  return phone_number.split('').map(item => '*').slice(0,-4).join('') + phone_number.slice(-4);
  // return s.replace(/\d(?=\d{4})/g, "*");
  // return [...n].fill("*",0,n.length-4).join("")
}
console.log('27',solution27("01033334444"));
console.log('27',solution27("027778888"));

/*
  28. 행렬의 덧셈
  행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
  2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

  행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
*/
const solution28 = (arr1, arr2) =>  {
  return arr1.map((item,index) => item.map((el,i) => el + arr2[index][i]));
}
console.log('28',solution28([[1,2],[2,3]],[[3,4],[5,6]]));
console.log('28',solution28([[1],[2]],[[3],[4]]));

/*
  29. x만큼 간격이 있는 n개의 숫자
  함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
  다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

  x는 -10000000 이상, 10000000 이하인 정수입니다.
  n은 1000 이하인 자연수입니다.
*/
const solution29 = (x,n) =>  {
  let rst = [];
  for(let i=1; i<=n; i++){
    rst.push(i * x);
  }
  return rst;
  // return Array(n).fill(x).map((item, index) => (index + 1) * item);
}
console.log('29',solution29(2,	5));
console.log('29',solution29(4,	3));
console.log('29',solution29(-4,	2));

/*
  30. 직사각형 별찍기
  이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
  별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

  n과 m은 각각 1000 이하인 자연수입니다.
*/
const solution30 = (data) =>  {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  // let list = '';
  // while(list.length < a){
  //   list += '*'
  // }
  // let rst = '';
  // for(let i = 0; i < b; i++){
  //   rst = rst + list + '\n';
  // }

  let list = '*'.repeat(a);
  let rst = `${list}\n`.repeat(b)
  return rst;
}
console.log('30'+'\n'+solution30('5 3'));
console.log('30'+'\n'+solution30('2 2'));

/*
  31. 소수 만들기
  주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
  숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

  nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
  nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/
const solution31 = (nums) =>  {
  let answer = 0;

  for(let i=0; i<nums.length-2; i++){
    for(let j=i+1; j<nums.length-1; j++){
      for(let k=j+1; k<nums.length; k++){
        let sum = nums[i] + nums[j] + nums[k];
        if(solution31_isPrimeNumber(sum)) answer++;
      }
    }
  }

  return answer;
}
console.log('31',solution31(	[1, 2, 3, 4]));
console.log('31',solution31(	[1, 2, 7, 6, 4]));
function solution31_isPrimeNumber(num){
  if(num % 2 === 0) return false;
  for(let i = 3; i<=Math.sqrt(num); i+=2){
    if(num % i === 0) return false;
  }
  return true;
}

/*
  32. 예산
  S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다.
  그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다.
  그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
  물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다.
  예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
  부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

  d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
  d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
  budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
*/
const solution32 = (d, budget) =>  {
  let rst = 0;
  let list = d.sort((a,b) => a - b);
  for(let el of list){
    if(el > budget) break;
    budget -= el;
    if(budget >= 0) rst ++;
  }
  return rst;
}
console.log('32',solution32(	[1,3,2,5,4],	9));
console.log('32',solution32(	[2,2,3,3],	10));

/*
  33. [1차] 비밀지도
  네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다.
  그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
  다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

  1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
  2. 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
  3. "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
  4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
*/
const solution33 = (n, arr1, arr2) =>  {
  // let binary1 = arr1.map(item => {
  //   let binary = item.toString(2);
  //   if( binary.length < n){
  //     binary = '0'.repeat(n - binary.length)+binary;
  //     return binary.split('');
  //   }
  //   return binary.split('');
  // });
  // let binary2 = arr2.map(item => {
  //   let binary = item.toString(2);
  //   if( binary.length < n){
  //     binary = '0'.repeat(n - binary.length)+binary;
  //     return binary.split('');
  //   }
  //   return binary.split('');
  // });
  //
  // let rst = [...binary1];
  // return rst.map((item,index) => item.map((el,i) => {
  //   return el === '1' || binary2[index][i] === '1' ? '#' : ' ';
  // }).join(''))

  /* --- 비트연산자 사용 --- */
  return arr1.map((item,index) => (item|arr2[index]).toString(2).padStart(n,'0').replace(/1/g,'#').replace(/0/g,' '));
}
console.log('33',solution33(	5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log('33',solution33(	6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));

/*
  34. [1차] 다트 게임
  카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다.
  다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
  갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다.
  다트 게임의 점수 계산 로직은 아래와 같다.

  1. 다트 게임은 총 3번의 기회로 구성된다.
  2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
  3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
  4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
  5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
  6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
  7. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
  8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
  9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

  0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.
*/
const solution34 = (dartResult) =>  {
  let list = dartResult.split('').map(item => {
  if (/[A-Z]/.test(item)) {
    return item + '-'
  } else if(/[*#]/.test(item)){
    return item + '-'
  }else return item;
  }).join('').slice(0,-1).split('-');

  list = list.map(item => {
  let mode = item.slice(-1);
  let num = item.slice(0,-1);
  switch (mode){
    case 'S': return num;
    case 'D': return num * num;
    case 'T': return num * num * num;
    default: return item;
  }
  });
  list.forEach((item, index) => {
    if(item === '#') {
      list[index - 1] = Number(list[index - 1]) * (-1);
      list.splice(index,1);
    }
    if(item === '*'){
      list[index - 1] *= 2;
      list[index - 2] *= 2;
      list.splice(index,1);
    }
  });

  let sum = 0;
  list.forEach(num => {
    if(/[0-9]/.test(num)) sum += Number(num)
  })

  return sum;
}
console.log('34',solution34(	'1S2D*3T'));
console.log('34',solution34(	'1D2S#10S'));
console.log('34',solution34(	'1S*2T*3S'));
console.log('34',solution34(	'1D2S3T*'));

/*
  35. 완주하지 못한 선수
  수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
  마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

  마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
  completion의 길이는 participant의 길이보다 1 작습니다.
  참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
  참가자 중에는 동명이인이 있을 수 있습니다.
*/
const solution35 = (participant, completion) =>  {
  participant.sort();
  completion.sort();
  for(let i = 0; i < completion.length; i++){
    if(participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}
console.log('35',solution35(	["leo", "kiki", "eden"],	["eden", "kiki"]));
console.log('35',solution35(	["marina", "josipa", "nikola", "vinko", "filipa"],	["josipa", "filipa", "marina", "nikola"]));
console.log('35',solution35(	["mislav", "stanko", "mislav", "ana"],	["stanko", "ana", "mislav"]));

/*
  36. K번째수
  배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
  예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

  1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
  2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
  3. 2에서 나온 배열의 3번째 숫자는 5입니다.

  배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
  commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  array의 길이는 1 이상 100 이하입니다.
  array의 각 원소는 1 이상 100 이하입니다.
  commands의 길이는 1 이상 50 이하입니다.
  commands의 각 원소는 길이가 3입니다.
*/
const solution36 = (array, commands) =>  {
  return commands.map(list => {
    let [i,j,k] = list;
    return array.slice(i-1,j).sort((a,b) => a - b)[k-1];
  })
}
console.log('36',solution36([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

/*
  37. 모의고사
  수포자는 수학을 포기한 사람의 준말입니다.
  수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
  수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
  1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  시험은 최대 10,000 문제로 구성되어있습니다.
  문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
  가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/
const solution37 = (answers) =>  {
  const answer1 = [1,2,3,4,5];
  const answer2 = [2,1,2,3,2,4,2,5];
  const answer3 = [3,3,1,1,2,2,4,4,5,5];

  let score = [0,0,0]

  for(let i=0; i<answers.length; i++){
    if(answer1[i % answer1.length] === answers[i]) score[0] ++;
    if(answer2[i % answer2.length] === answers[i]) score[1] ++;
    if(answer3[i % answer3.length] === answers[i]) score[2] ++;
  }
  const maxValue = Math.max(...score);

  let answer = [];
  if(score[0] === maxValue) answer.push(1);
  if(score[1] === maxValue) answer.push(2);
  if(score[2] === maxValue) answer.push(3);
  return answer;
}
console.log('37',solution37([1,2,3,4,5]));
console.log('37',solution37([1,3,2,4,2]));

/*
  38. 체육복
  점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
  다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
  학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
  예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
  체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
  전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

  전체 학생의 수는 2명 이상 30명 이하입니다.
  체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
  여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
  여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
  여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/
const solution38 = (n, lost, reserve) => {
  let students = Array(n).fill(0);
  let lostList = lost.filter(item => !reserve.includes(item));
  let reserveList = reserve.filter(item => !lost.includes(item));

  reserveList.sort((a,b) => a - b);

  lostList.forEach(num => {
    students[num - 1] = 'no';
  })

  reserveList.forEach(num => {
    if(num - 2 >=0 && students[num - 2] === 'no') students[num - 2] = 0;
    else if(num !== n && students[num] === 'no') students[num] = 0;
  })
  return students.filter(el => el === 0).length
}
console.log('38',solution38(5,	[2, 4],	[1, 3, 5]));
console.log('38',solution38(5,	[2, 4],	[3]));
console.log('38',solution38(3,	[3],	[3]));
console.log('38',solution38( 13, [1, 2, 5, 6, 10, 12, 13], [2, 3, 4, 5, 7, 8, 9, 10, 11, 12]));


/*
  39. 실패율
  슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다.
  그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다.
  원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
  이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
  역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

  실패율은 다음과 같이 정의한다.
    스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

  전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

  스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
  stages의 길이는 1 이상 200,000 이하이다.
  stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
    각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
    단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
  만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
  스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
*/
const solution39 = (N, stages) => {
  let users = Array(N).fill(0);
  users.push(0);
  stages.forEach(stage => {
    users[stage - 1]++
  })

  let fails = users.map((el, index) => {
    let success = [...users].slice(index).reduce((a,b) => a + b);
    return el / success;
  });
  let result = fails.map((item,index) => {
    return {id: index + 1, fail: item}
  })
  return result.slice(0,result.length -1).sort((a,b) => b.fail - a.fail).map(item => item.id)
}
console.log('39',solution39(5,	[2, 1, 2, 6, 2, 4, 3, 3]));
console.log('39',solution39(4,	[4, 4, 4, 4, 4]));
