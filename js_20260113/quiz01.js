// 문제 1) while 문을 사용하여 1 ~ 100 까지의 총합을 구하는 프로그램을 작성하세요
console.log("\n----- 문제 1 -----\n");
let i = 1;
let total = 0;

while (i <= 100) {
  total = total + i;
  i++;
}

console.log("1 ~ 100 까지의 총합 : " + total);


// 문제 2) 사용자 입력을 통해서 출력할 구구단의 단수를 하나 입력받고, 입력받은 단수에 해당하는 구구단을 출력하는 프로그램을 작성하세요(while 문 사용)
console.log("\n----- 문제 2 -----\n");
let dan = prompt("출력할 구구단의 단수를 입력하세요", 5);
dan = Number(dan);

i = 1;

console.log("-----" + dan + "단 -----");
while (i < 10) {
  console.log(dan + " * " + i + " = " + dan * i);
  i++;
}


// 문제 3) 학생 5명의 수학 점수가 담긴 배열 scores 를 while 문을 사용하여 모든 점수의 총점과 평균을 출력하는 프로그램을 작성하세요
console.log("\n----- 문제 3 -----\n");
const scores = [80, 90, 75, 60, 85];
total = 0;
let avg = 0;

i = 0;

while (i < scores.length) {
  total = total + scores[i];
  i++;
}

avg = total / scores.length;

console.log("총점 : " + total + ", 평균 : " + avg);


// 문제 4) 숫자 배열의 요소를 하나씩 꺼내어서 reversed 라는 배열에 반대 순서로 입력하는 프로그램을 작성하세요 (reverse() 함수 미사용, while 사용)
console.log("\n----- 문제 4 -----\n");
const numbers = [10, 20, 30, 40, 50];
const reversed = [];

i = numbers.length - 1;

while (i >= 0) {
  reversed.push(numbers[i]);
  i--;
}

console.log("배열 reversed : ");
console.log(reversed);

// 문제 5) 주어진 배열의 숫자 중 가장 큰 수를 출력하는 프로그램을 작성하세요
console.log("\n----- 문제 5 -----\n");
const numbers2 = [10, 6, 9, 15, 20, 3, 7, 25, 32, 1];
let max = 0;

i = 0;

while (i < numbers2.length) {
  if (max < numbers2[i]) {
    max = numbers2[i];
  }

  i++;
}

console.log("배열의 요소 중 가장 큰 값은 : " + max);

