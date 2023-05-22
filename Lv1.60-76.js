/*
  60. 햄버거 만들기
  햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다.
  함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고, 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다.
  상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다.
  상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며, 재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.
  상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.

  1 ≤ ingredient의 길이 ≤ 1,000,000
  ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.
*/
const solution60 = (ingredient) =>  {
  let cnt = 0;
  let list = [];
  ingredient.forEach(item => {
    list.push(item);
    if(list.length >= 4){
      if(list.slice(-4).join('') === '1231'){
        list.pop();
        list.pop();
        list.pop();
        list.pop();
        cnt++;
      }
    }
  })
  return cnt;
}
console.log('60',solution60([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log('60',solution60([1, 2, 2, 3, 1]));

/*
  61. 푸드 파이트 대회
  수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다.
  이 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다.
  대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다.
  중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
  이때, 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양이 같아야 하며, 음식을 먹는 순서도 같아야 합니다.
  또한, 이번 대회부터는 칼로리가 낮은 음식을 먼저 먹을 수 있게 배치하여 선수들이 음식을 더 잘 먹을 수 있게 하려고 합니다.
  이번 대회를 위해 수웅이는 음식을 주문했는데, 대회의 조건을 고려하지 않고 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다.
  수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

  2 ≤ food의 길이 ≤ 9
  1 ≤ food의 각 원소 ≤ 1,000
  food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
  food[i]는 i번 음식의 수입니다.
  food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
  정답의 길이가 3 이상인 경우만 입력으로 주어집니다.
*/
const solution61 = (food) =>  {
  let foodList = [];
  for(let i = 1; i < food.length; i++){
    let cnt = Math.floor(food[i] / 2);
    foodList.push(Array(cnt).fill(i).join(''));
  }
  return foodList.join('') + 0 + foodList.reverse().join('');
}
console.log('61',solution61([1, 3, 4, 6]));
console.log('61',solution61([1, 7, 1, 2]));

/*
  62. 과일 장수
  과일 장수가 사과 상자를 포장하고 있습니다.
  사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다.
  사과 한 상자의 가격은 다음과 같이 결정됩니다.
    한 상자에 사과를 m개씩 담아 포장합니다.
    상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
  과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.
  (사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)
  사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

  3 ≤ k ≤ 9
  3 ≤ m ≤ 10
  7 ≤ score의 길이 ≤ 1,000,000
  1 ≤ score[i] ≤ k
  이익이 발생하지 않는 경우에는 0을 return 해주세요.
*/
const solution62 = (k, m, score) =>  {
  let list = score.sort((a,b) => b - a);
  let fruitList = [];
  for(let i = 0; i < score.length; i+=m){
    fruitList.push(list.slice(i, i + m));
  }

  let rst = 0;
  fruitList.forEach(el => {
    if(el.length === m) rst += (el[m - 1] * m);
  })

  return rst;
}
console.log('62',solution62(3,	4,	[1, 2, 3, 1, 2, 3, 1]));
console.log('62',solution62(4,	3,	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

/*
  63. 기사단원의 무기
  숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.
  각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다.
  단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.
  그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.
  기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때,
  무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

  1 ≤ number ≤ 100,000
  2 ≤ limit ≤ 100
  1 ≤ power ≤ limit
*/
const solution63 = (number, limit, power) =>  {
  let rst = 0;
  for(let i = 1; i <= number; i++){
    if(i === 1) rst += i;
    else {
      let cnt = 0;
      if(Number.isInteger(Math.sqrt(i))) cnt += 1;
      for(let j = 1; j < Math.sqrt(i); j++){
        if(i % j === 0) cnt += 2;
      }
      if(cnt > limit) rst += power;
      else rst += cnt;
      console.log(i,rst,cnt)
    }
  }
  return rst;
}
console.log('63',solution63(5, 3, 2));
console.log('63',solution63(10, 3, 2));

/*
  64. 명예의 전당 (1)
  "명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다.
  매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다.
  즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다.
  k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.
  명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

  3 ≤ k ≤ 100
  7 ≤ score의 길이 ≤ 1,000
    0 ≤ score[i] ≤ 2,000
*/
const solution64 = (k, score) =>  {
  let list = [];
  for(let i = 0; i < score.length; i++){
    if(i < k) list.push(Math.min(...[...score].slice(0,i + 1)))
    else {
      let num  = [...score].slice(0,i + 1).sort((a,b) => b - a).slice(0,k)[k-1];
      list.push(num)
    }
  }
  return list;
}
console.log('64',solution64(3,	[10, 100, 20, 150, 1, 100, 200]));
console.log('64',solution64(4,	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));

/*
  65. 문자열 나누기
  문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.
    먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
    이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
    처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
    s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다.
    남은 부분이 없다면 종료합니다.
    만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면,
    역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
  문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

  1 ≤ s의 길이 ≤ 10,000
  s는 영어 소문자로만 이루어져 있습니다.
*/
/*const solution65 = (s) =>  {
  let list = s.split('');
  let keyword = list[0];
  let thisCnt = 0;
  let anotherCnt = 0;
  let total = 0;
  list.forEach((item,index) => {
    if(item === keyword) thisCnt ++;
    else anotherCnt ++;
    if(thisCnt === anotherCnt){
      total ++;
      keyword = list[index + 1];
    }
  })
  if(thisCnt !== anotherCnt) total++;
  return total;
}*/
const solution65 = (s) =>  {
  let keyword = s[0];
  let cnt = 0;
  let total = 0;
  for(let i=0; i<s.length; i++){
    if(s[i] === keyword) cnt ++;
    else cnt--;
    if(cnt === 0){
      total ++;
      keyword = s[i + 1];
    }
  }
  if(cnt !== 0) total++;
  return total;
}
console.log('65',solution65("banana"));
console.log('65',solution65("abracadabra"));
console.log('65',solution65("aaabbaccccabba"));

/*
  66. 가장 가까운 같은 글자
  문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
  예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.
    b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
    a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
    n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
    a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
    n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
    a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
  따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.
  문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

  1 ≤ s의 길이 ≤ 10,000
  s는 영어 소문자로만 이루어져 있습니다.
*/
const solution66 = (s) =>  {
  let list = s.split('')
  return list.map((item,index) => {
    if(index === 0) return -1;
    // let k = [...list].slice(0,index).reverse().indexOf(item);
    // if( k === -1) return -1;
    // return k + 1;
    let k = [...list].slice(0,index).lastIndexOf(item);
    if( k === -1) return -1;
    return index - k;
  });
}
console.log('66',solution66("banana"));
console.log('66',solution66("foobar"));

/*
  67. 크기가 작은 부분문자열
  숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서,
  이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

  1 ≤ p의 길이 ≤ 18
  p의 길이 ≤ t의 길이 ≤ 10,000
  t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.
*/
const solution67 = (t, p) =>  {
  let cnt = 0;
  for(let i = 0;  i <= t.length - p.length; i++){
    let num = t.slice(i,i+p.length);
    if(+num <=+p) cnt++;
  }
  return cnt;
}
console.log('67',solution67("3141592",	"271"));
console.log('67',solution67("500220839878",	"7"));
console.log('67',solution67("10203", "15"));

/*
  68. 개인정보 수집 유효기간
  고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보 n개가 있습니다.
  약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다.
  당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다.
  수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.
  모든 달은 28일까지 있다고 가정합니다.
  오늘 날짜를 의미하는 문자열 today, 약관의 유효기간을 담은 1차원 문자열 배열 terms와 수집된 개인정보의 정보를 담은 1차원 문자열 배열 privacies가 매개변수로 주어집니다.
  이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
*/
const solution68_getThisDate = (date,num) => {
  yy = date.getFullYear();
  mm = date.getMonth() + Number(num);
  dd = date.getDate();
  return new Date(yy, mm, dd + 1);
}

const solution68 = (today, terms, privacies) =>  {
  terms = terms.map(term => term.split(' '));
  let rst = [];
  privacies.forEach((item,index) => {
    let date = item.split(' ');
    let gap = terms.find(el => el[0] === date[1])[1];
    let lastDate =  solution68_getThisDate(new Date(date[0]),gap)
    const thisDate = solution68_getThisDate(new Date(today),0)
    if(new Date(lastDate) - new Date(thisDate) <= 0) rst.push(index + 1);
  })
  return rst;
}
console.log('68',solution68("2022.05.19",	["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));
console.log('68',solution68("2020.01.01",	["Z 3", "D 5"],	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]));

/*
  69. 둘만의 암호
  두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다.
  암호의 규칙은 다음과 같습니다.
    문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
    index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
    skip에 있는 알파벳은 제외하고 건너뜁니다.
  두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.
*/
const solution69 = (s, skip, index) =>  {
  let apb = 'abcdefghijklmnopqrstuvwxyz';
  [...skip].forEach(item => apb = apb.replace(item,''));
  return [...s].map(el => {
    let apbIndex = apb.indexOf(el) + index;
    if(apbIndex >= apb.length) apbIndex = apbIndex % apb.length;
    return apb[apbIndex];
  }).join('');
}
console.log('69',solution69("aukks",	"wbqd",	5));

/*
  70. 카드 뭉치
  코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.
    원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
    한 번 사용한 카드는 다시 사용할 수 없습니다.
    카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
    기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
  문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.
*/
const solution70 = (cards1, cards2, goal) =>  {
  for(let i = 0; i < goal.length; i++){
    if(cards1[0] === goal[i]){
      cards1.shift()
    } else if(cards2[0] === goal[i]){
      cards2.shift();
    } else return 'No'
  }
  return 'Yes'
}
console.log('70',solution70(["i", "drink", "water"],	["want", "to"], ["i", "want", "to", "drink", "water"]));
console.log('70',solution70(["i", "water", "drink"],	["want", "to"], ["i", "want", "to", "drink", "water"]));

/*
  71. 대충 만든 자판
  휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 개의 문자가 할당될 수 있습니다.
  키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀝니다.
  같은 규칙을 적용해 아무렇게나 만든 휴대폰 자판이 있습니다.
  이 휴대폰 자판은 키의 개수가 1개부터 최대 100개까지 있을 수 있으며, 특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있습니다.
  또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, 키 하나에 같은 문자가 여러 번 할당된 경우도 있습니다.
  심지어 아예 할당되지 않은 경우도 있습니다.
  따라서 몇몇 문자열은 작성할 수 없을 수도 있습니다.
  이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.
  1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 입력하려는 문자열들이 담긴 문자열 배열 targets가 주어질 때,
  각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수를 완성해 주세요.
  단, 목표 문자열을 작성할 수 없을 때는 -1을 저장합니다.

  1 ≤ keymap의 길이 ≤ 100
    1 ≤ keymap의 원소의 길이 ≤ 100
    keymap[i]는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
      예를 들어 keymap[0] = "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
    keymap의 원소의 길이는 서로 다를 수 있습니다.
    keymap의 원소는 알파벳 대문자로만 이루어져 있습니다.
  1 ≤ targets의 길이 ≤ 100
    1 ≤ targets의 원소의 길이 ≤ 100
    targets의 원소는 알파벳 대문자로만 이루어져 있습니다.
*/
const solution71 = (keymap, targets) =>  {
  return targets.map(word => {
    let cnt = 0;
    for(let i = 0; i < word.length; i++){
      let keyList = [];
      keymap.forEach(item => keyList.push(item.indexOf(word[i])));
      // console.log(keyList);
      if(Math.max(...keyList) === -1) return -1;
      else{
        cnt += (Math.min(...keyList.filter(num => num !== -1)) + 1)
      }
    }
    return cnt;
  })
}
console.log('71',solution71(["ABACD", "BCEFD"],	["ABCD","AABB"]));
console.log('71',solution71(["AA"],	["B"]));
console.log('71',solution71(["AGZ", "BSSS"],	["ASA","BGZ"]));

/*
  72. 덧칠하기
  어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다.
  벽에 동아리 · 학회 홍보나 회사 채용 공고 포스터 등을 게시하기 위해 테이프로 붙였다가 철거할 때 떼는 일이 많고 그 과정에서 페인트가 벗겨지곤 합니다.
  페인트가 벗겨진 벽이 보기 흉해져 학교는 벽에 페인트를 덧칠하기로 했습니다.
  넓은 벽 전체에 페인트를 새로 칠하는 대신, 구역을 나누어 일부만 페인트를 새로 칠 함으로써 예산을 아끼려 합니다.
  이를 위해 벽을 1미터 길이의 구역 n개로 나누고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙였습니다. 그리고 페인트를 다시 칠해야 할 구역들을 정했습니다.
  벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다.
    롤러가 벽에서 벗어나면 안 됩니다.
    구역의 일부분만 포함되도록 칠하면 안 됩니다.
  즉, 롤러의 좌우측 끝을 구역의 경계선 혹은 벽의 좌우측 끝부분에 맞춘 후 롤러를 위아래로 움직이면서 벽을 칠합니다.
  현재 페인트를 칠하는 구역들을 완전히 칠한 후 벽에서 롤러를 떼며, 이를 벽을 한 번 칠했다고 정의합니다.
  한 구역에 페인트를 여러 번 칠해도 되고 다시 칠해야 할 구역이 아닌 곳에 페인트를 칠해도 되지만 다시 칠하기로 정한 구역은 적어도 한 번 페인트칠을 해야 합니다.
  예산을 아끼기 위해 다시 칠할 구역을 정했듯 마찬가지로 롤러로 페인트칠을 하는 횟수를 최소화하려고 합니다.
  정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요..

  1 ≤ m ≤ n ≤ 100,000
  1 ≤ section의 길이 ≤ n
    1 ≤ section의 원소 ≤ n
    section의 원소는 페인트를 다시 칠해야 하는 구역의 번호입니다.
    section에서 같은 원소가 두 번 이상 나타나지 않습니다.
    section의 원소는 오름차순으로 정렬되어 있습니다.
*/
const solution72 = (n, m, section) =>  {
  let paint = Array(n).fill(1);
  section.forEach(el => paint[el - 1] = 0);

  let cnt = 0;
  while(paint.includes(0)){
    let index_0 = paint.indexOf(0);
    for(let i = index_0; i < index_0 + m; i++){
      paint[i] = 1;
    }
    cnt++;
  }

  return cnt;
}
console.log('72',solution72(8,	4,	[2, 3, 6]));
console.log('72',solution72(5,	4,	[1, 3]));
console.log('72',solution72(4,	1,	[1, 2, 3, 4]));

/*
  73. 바탕화면 정리
  코딩테스트를 준비하는 머쓱이는 프로그래머스에서 문제를 풀고 나중에 다시 코드를 보면서 공부하려고 작성한 코드를 컴퓨터 바탕화면에 아무 위치에나 저장해 둡니다.
  저장한 코드가 많아지면서 머쓱이는 본인의 컴퓨터 바탕화면이 너무 지저분하다고 생각했습니다.
  프로그래머스에서 작성했던 코드는 그 문제에 가서 다시 볼 수 있기 때문에 저장해 둔 파일들을 전부 삭제하기로 했습니다.
  컴퓨터 바탕화면은 각 칸이 정사각형인 격자판입니다.
  이때 컴퓨터 바탕화면의 상태를 나타낸 문자열 배열 wallpaper가 주어집니다.
  파일들은 바탕화면의 격자칸에 위치하고 바탕화면의 격자점들은 바탕화면의 가장 왼쪽 위를 (0, 0)으로 시작해 (세로 좌표, 가로 좌표)로 표현합니다.
  빈칸은 ".", 파일이 있는 칸은 "#"의 값을 가집니다. 드래그를 하면 파일들을 선택할 수 있고, 선택된 파일들을 삭제할 수 있습니다.
    머쓱이는 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일을 선택해서 한 번에 지우려고 하며 드래그로 파일들을 선택하는 방법은 다음과 같습니다.
    드래그는 바탕화면의 격자점 S(lux, luy)를 마우스 왼쪽 버튼으로 클릭한 상태로 격자점 E(rdx, rdy)로 이동한 뒤 마우스 왼쪽 버튼을 떼는 행동입니다.
    이때, "점 S에서 점 E로 드래그한다"고 표현하고 점 S와 점 E를 각각 드래그의 시작점, 끝점이라고 표현합니다.
    점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때, "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의합니다.
    점 S에서 점 E로 드래그를 하면 바탕화면에서 두 격자점을 각각 왼쪽 위, 오른쪽 아래로 하는 직사각형 내부에 있는 모든 파일이 선택됩니다.
  머쓱이의 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열 wallpaper가 매개변수로 주어질 때
  바탕화면의 파일들을 한 번에 삭제하기 위해 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return하는 solution 함수를 작성해 주세요.
  드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]를 return하면 됩니다.

  1 ≤ wallpaper의 길이 ≤ 50
  1 ≤ wallpaper[i]의 길이 ≤ 50
    wallpaper의 모든 원소의 길이는 동일합니다.
  wallpaper[i][j]는 바탕화면에서 i + 1행 j + 1열에 해당하는 칸의 상태를 나타냅니다.
  wallpaper[i][j]는 "#" 또는 "."의 값만 가집니다.
  바탕화면에는 적어도 하나의 파일이 있습니다.
  드래그 시작점 (lux, luy)와 끝점 (rdx, rdy)는 lux < rdx, luy < rdy를 만족해야 합니다.
*/
const solution73 = (wallpaper) =>  {
  let lux = wallpaper.length;
  let luy = wallpaper[0].length;
  let rdx = 0;
  let rdy = 0;
  wallpaper.forEach((row,index) => {
    if(row.includes('#')){
      lux = Math.min(lux,index);
      rdx = Math.max(rdx,index);
      let colIndexS = row.indexOf('#');
      let colIndexE = row.lastIndexOf('#')
      luy = Math.min(luy,colIndexS);
      rdy = Math.max(rdy,colIndexE);
    }
  })
  return [lux, luy, rdx + 1, rdy + 1];
}
console.log('73',solution73([".#...", "..#..", "...#."]));
console.log('73',solution73(["..........", ".....#....", "......##..", "...##.....", "....#....."]));
console.log('73',solution73([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]));
console.log('73',solution73(["..", "#."]));

/*
  74. 공원 산책
  지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.
    ["방향 거리", "방향 거리" … ]
  예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.
    주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
    주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
  위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
  공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.
  공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때,
  로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

  3 ≤ park의 길이 ≤ 50
    3 ≤ park[i]의 길이 ≤ 50
      park[i]는 다음 문자들로 이루어져 있으며 시작지점은 하나만 주어집니다.
        S : 시작 지점
        O : 이동 가능한 통로
        X : 장애물
    park는 직사각형 모양입니다.
  1 ≤ routes의 길이 ≤ 50
    routes의 각 원소는 로봇 강아지가 수행할 명령어를 나타냅니다.
    로봇 강아지는 routes의 첫 번째 원소부터 순서대로 명령을 수행합니다.
    routes의 원소는 "op n"과 같은 구조로 이루어져 있으며, op는 이동할 방향, n은 이동할 칸의 수를 의미합니다.
      op는 다음 네 가지중 하나로 이루어져 있습니다.
        N : 북쪽으로 주어진 칸만큼 이동합니다.
        S : 남쪽으로 주어진 칸만큼 이동합니다.
        W : 서쪽으로 주어진 칸만큼 이동합니다.
        E : 동쪽으로 주어진 칸만큼 이동합니다.
      1 ≤ n ≤ 9
*/
const solution74 = (park, routes) =>  {
  let x = 0;
  let y = 0;
  for(let i = 0; i < park.length; i++){
    if(park[i].includes('S')){
      y = i;
      x = park[i].indexOf('S');
      break;
    }
  }

  routes.forEach(route => {
    let way = route[0];
    let step = Number(route[2]);
    let isBlock = false;

    switch (way) {
      case 'N':
        if(park[y - step] && park[y - step][x]){
          for(let i = 1; i <= step; i++){
            if(park[y - i][x] === 'X') {
              isBlock = true;
              break;
            }
          }
          if(!isBlock) y -= step;
        }
        break;
      case 'S':
        if(park[y + step] && park[y + step][x]){
          for(let i = 1; i <= step; i++){
            if(park[y + i][x] === 'X') {
              isBlock = true;
              break;
            }
          }
          if(!isBlock) y += step;
        }
        break;
      case 'W':
        if(park[y][x - step]){
          for(let i = 1; i <= step; i++){
            if(park[y][x - i] === 'X') {
              isBlock = true;
              break;
            }
          }
          if(!isBlock) x -= step;
        }
        break;
      case 'E':
        if(park[y][x + step]){
          for(let i = 1; i <= step; i++){
            if(park[y][x + i] === 'X') {
              isBlock = true;
              break;
            }
          }
          if(!isBlock) x += step;
        }
        break;
      default: break;
    }
  })
  return [y,x]
}
console.log('74',solution74(["SOO","OOO","OOO"],	["E 2","S 2","W 1"]));
console.log('74',solution74(["SOO","OXX","OOO"],	["E 2","S 2","W 1"]));
console.log('74',solution74(["OSO","OOO","OXO","OOO"],	["E 2","S 3","W 1"]));

/* 75. 추억 점수 */

const solution75 = (name, yearning, photo) =>  {
  return photo.map(item => {
    let rst = 0;
    item.forEach(el => {
      name.forEach((nm, i) => {
        if(nm === el) rst += yearning[i]
      })
    })
    return rst;
  });
}
console.log('75',solution75(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]));
console.log('75',solution75(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]));
console.log('75',solution75(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"],["kein", "deny", "may"], ["kon", "coni"]]));

/* 76. 달리기 경주 */

const solution76 = (players, callings) =>  {
  let map1 = new Map();
  let map2 = new Map();
  players.forEach((name, index) => {
    map1.set(name, index);
    map2.set(index, name)
  })
  callings.forEach(name => {
    let playerScore = map1.get(name);
    let otherPlayer = map2.get(playerScore - 1);

    map1.set(name, playerScore - 1);
    map1.set(otherPlayer, playerScore)
    map2.set(playerScore, otherPlayer);
    map2.set(playerScore - 1, name);
  });

  let rst = [];
  for(let [key, name] of map1.entries()){
    rst[name] = key;
  }
  return rst
}

console.log('76',solution76(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));
