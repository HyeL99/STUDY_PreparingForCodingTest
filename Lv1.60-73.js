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
