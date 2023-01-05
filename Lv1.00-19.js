/*
  00. 폰켓몬
  당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.

  홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

      첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
      첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
      첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
      두 번째(1번), 세 번째(2번) 폰켓몬을 선택
      두 번째(1번), 네 번째(3번) 폰켓몬을 선택
      세 번째(2번), 네 번째(3번) 폰켓몬을 선택

  이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.

  당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.
*/
const solution00 = (nums) => {
  let array = [...new Set(nums)];
  return array.length > nums.length/2 ? nums.length / 2 : array.length;
}
console.log('00',solution00([3, 3, 3, 2, 2, 2]));

/*
  01. 2016년
  2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/
const solution01 = (a, b) => {
  return new Date(`2016-${a}-${b}`).toString().slice(0,3).toUpperCase()
}

console.log('01',solution01(5,24));

/*
  02. 가운데 글자 가져오기
  단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/
const solution02 = (s) => {
  // let length = Math.floor(s.length / 2);
  // return s.length % 2 === 0 ? s.slice(length - 1 , length + 1) : s.slice(length , length + 1);
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

console.log('02',solution02("abcdef"));

/*
  03. 가운데 글자 가져오기
  배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

      arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
      arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

  배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
*/
const solution03 = (arr) => {
  // let num = -1;
  // let answer = [];
  // arr.map(item => {
  //   if(item !== num){
  //     answer.push(item);
  //     num = item;
  //   }
  // })
  // return answer;
  return arr.filter((val,index) => val != arr[index+1]);
}

console.log('03',solution03([1,1,3,3,0,1,1]));

/*
  04. 나누어 떨어지는 숫자 배열
  array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.

  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/
const solution04 = (arr, divisor) => {
  let answer = arr.filter(item => item % divisor === 0).sort((a,b) => a - b)
  return answer.length > 0 ? answer : [-1]
}

console.log('04',solution04([3, 2, 6], 10));

/*
  05. 두 정수 사이의 합
  두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
  
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

  !! 공차가 1인 수열의 합 : (초항과 끝항의 합) * (항 수) / 2
*/
const solution05 = (a, b) => {
  // if(a === b) return a;
  // let answer = 0;
  // if(a > b) {
  //   for(let i = b; i <= a; i++){
  //     answer += i
  //   }
  // } else {
  //   for(let i = a; i <= b; i++){
  //     answer += i
  //   }
  // }
  // return answer;
  return (a+b)*(Math.abs(a-b)+1)/2
}

console.log('05',solution05(3, 5));

/*
  06. 문자열 내 마음대로 정렬하기
  문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/

const solution06 = (strings, n) => {
  // let strArray = strings.map(item => item.substr(n,1)).sort();
  // strArray = [...new Set(strArray)];
  // let answer = [];
  // for(let al of strArray){
  //   let array = strings.filter(item => item.substr(n,1) === al).sort();
  //   array.map(item => answer.push(item));
  // }
  // return answer;
  return strings.sort().sort((a,b) => a.charCodeAt(n)-b.charCodeAt(n));
}

console.log('06',solution06(["sun", "bed", "car"], 1));

/*
  07. 문자열 내 p와 y의 개수
  대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

  예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
*/

const solution07 = (s) => {
  let array = s.toLowerCase().split('');
  let p = array.filter(item => item === 'p').length;
  let y = array.filter(item => item === 'y').length;
  return p === y ? true : false;

  //return s.match(/p/ig).length == s.match(/y/ig).length;
  //return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;

}

console.log('07',solution07("pPoooyY"));

/*
  08. 문자열 내림차순으로 배치하기
  문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.

  s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
*/

const solution08 = (s) => {
  // let lowerCase = []
  // let upperCase = []
  // s.split('').sort().map(item => item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90 ? upperCase.push(item) : lowerCase.push(item));
  // return answer = [...lowerCase.reverse(),...upperCase.reverse()].join('');
  return s.split('').sort().reverse().join('');
}

console.log('08',solution08("Zbcdefg"));

/*
  09. 문자열 다루기 기본
  문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

const solution09 = (s) => {
  if(s.length !== 4 && s.length !== 6) return false;
  if(s.includes('e')) return false;
  return !isNaN(Number(s))
}

console.log('09',solution09("3e10"));

/*
  10. 서울에서 김서방 찾기
  String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
*/

const solution10 = (seoul) => {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`
}

console.log('10',solution10(["Jane", "Kim"]));

/*
  11. 소수 찾기
  1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)
*/

const solution11 = (n) => {
  // let answer = [];
  // for(let i=0; i <= n; i++){
  //   answer.push(true)
  // }
  // for(let i=2; i*i <= n; i ++){
  //   if (answer[i]) {
  //     for (let j = i * i; j <= n; j += i) {
  //         answer[j] = false;
  //     }
  //   }
  // }
  // return answer.filter(item => item === true).length - 2;
  const answer = new Set();
    for(let i=1; i<=n; i+=2){
        answer.add(i);
    }
    answer.delete(1);
    answer.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(answer.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                answer.delete(k);
             }
        }
    }
    return answer.size;
}

console.log('11',solution11(10));

/*
  12. 수박수박수박수박수박수?
  길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
*/

const solution12 = (n) => {
  //return n % 2 === 0 ? '수박'.repeat(n/2) : '수박'.repeat((n-1)/2)+'수'
  return '수박'.repeat(n / 2 + 1).slice(0,n);
}

console.log('12',solution12(9));

/*
  13. 문자열을 정수로 바꾸기
  문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

    제한 조건
    s의 길이는 1 이상 5이하입니다.
    s의 맨앞에는 부호(+, -)가 올 수 있습니다.
    s는 부호와 숫자로만 이루어져있습니다.
    s는 "0"으로 시작하지 않습니다.
*/

const solution13 = (s) => {
  //return Number(s)
  return s/1;
}

console.log('13',solution13('-5'));

/*
  14. 시저 암호
  어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/

const solution14 = (s, n) => {
  let array = s.split('');
  let rst = [];
  array = array.map(item => {
    if(item === ' ') return rst.push(' ')
    let ascii = item.charCodeAt();
    if( ascii >= 65 && ascii <= 90){
      rst.push(ascii + n > 90 ? String.fromCharCode(ascii + n - 26) : String.fromCharCode(ascii + n))
    } else {
      rst.push(ascii + n > 122 ? String.fromCharCode(ascii + n - 26) : String.fromCharCode(ascii + n))
    }
  })
  return rst.join('');
}

console.log('14',solution14("  a B z",4));

/*
  15. 약수의 합
  정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

const solution15 = (n) => {
  // let array = [];
  // for(let i=1; i<=n; i++){
  //   for(j=n; j>0; j--){
  //     if(i * j === n) array.push(i,j);
  //   }
  // }
  // array = [...new Set(array)];
  // let answer = 0;
  // for(let item of array) answer += item;
  // return answer;
  let answer = 0;
  for(let i=1; i<=n; i++){
    if(n % i === 0) answer += i;
  }
  return answer;
}

console.log('15',solution15(12));

/*
  16. 이상한 문자 만들기
  문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
    제한 사항
    문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
    첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
*/

const solution16 = (s) => {
  let array = s.split(' ').map(word => {
    let wordArray = word.split('').map((item,index)=>{
      return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    })
    return wordArray.join('');
  })
  return array.join(' ');
}

console.log('16',solution16("try hello world"));

/*
  17. 자릿수 더하기
  자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
  예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/

const solution17 = (n) => {
  return String(n).split('').reduce((a,b) => Number(a) + Number(b))
}

console.log('17',solution17(987));

/*
  18. 자연수 뒤집어 배열로 만들기
  자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

const solution18 = (n) => {
  return n.toString().split('').reverse().map(item => Number(item))
}

console.log('18',solution18(12345));

/*
  19. 정수 내림차순으로 배치하기
  함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

const solution19 = (n) => {
  return parseInt((n + '').split('').sort((a,b) => b - a).map(item => item / 1).join(''));
}

console.log('19',solution19(12345));