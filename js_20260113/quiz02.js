// 문제 6) 덧셈, 뺄셈, 곱셈, 나눗셈을 진행하는 함수를 각각 sum, sub, multi, div 라는 이름으로 선언하고, 사용하는 프로그램을 작성하세요 (매개변수는 num1, num2)
// sum : 매개변수와 반환값이 모두 존재
// sub : 매개변수와 반환값이 모두 없음
// multi : 매개변수는 있고, 반환값은 없음
// div : 매개변수는 없고, 반환값은 있음

console.log("\n----- 문제 6 -----\n");

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function sub() {
  let num1 = 10;
  let num2 = 20;
  let result = num1 - num2;
  console.log("두수의 뺄셈은 : " + result);
}

function multi(num1, num2) {
  let result = num1 * num2;
  console.log("두수의 곱셈은 : " + result);
}

function div() {
  let num1 = 10;
  let num2 = 3;
  let result = num1 / num2;
  return result;
}

let result = sum(10, 20);
console.log("두수의 덧셈은 : " + result);
sub();
multi(10, 20);
result = div();
console.log("두수의 나눗셈은 : " + result);


// 문제 7) 사용자 입력을 통해서 점수를 입력받고, 입력 받은 점수에 따라 학점 등급을 출력하는 프로그램을 작성하세요 (함수 작성 필수)
console.log("\n----- 문제 7 -----\n");
function inputScore() {
  let score = prompt("당신의 점수를 입력하세요");
  score = Number(score);

  return score;
}

function calScore(score) {
  let level = "F";

  if (score >= 90) {
    level = "A";
  }
  else if (score >= 80) {
    level = "B";
  }
  else if (score >= 70) {
    level = "C";
  }
  else if (score >= 60) {
    level = "D";
  }

  return level;
}

function printScore(score, level) {
  console.log("당신의 점수는 " + score + " 점이고, 등급은 " + level + " 입니다.");
}

let myScore = inputScore();
let myLevel = calScore(myScore);
printScore(myScore, myLevel);

// 문제 8) 사용자 입력을 통해서 숫자를 하나 입력받고 해당 단수의 구구단을 출력하는 프로그램을 함수로 작성하세요
console.log("\n----- 문제 8 -----\n");
// 사용자 입력 부분
function inputGuGudan() {
  let dan = prompt("출력할 구구단의 단수를 입력하세요 : ");
  dan = Number(dan);

  return dan;
}

// 연산 부분
function calGuGudan(dan) {
  console.log("=== " + dan + "단 ===");

  for (let i = 1; i < 10; i++) {
    console.log(dan + " * " + i + " = " + dan * i);
  }
}

let dan = inputGuGudan();
calGuGudan(dan);

// 문제 9) 사용자 입력을 통해서 영문자를 하나 입력받고, 주어진 문장안에 해당 글자가 총 몇개 사용되었는지 출력하는 프로그램을 함수를 사용하여 작성하세요
console.log("\n----- 문제 9 -----\n");

function inputKey() {
  let key = prompt("영문자 하나를 입력하세요 : ", "a");

  return key;
}

function countKey(key, eng) {
  let count = 0;

  for (let i = 0; i < eng.length; i++) {
    if (key == eng[i]) {
      count++;
    }
  }

  return count;
}

function countPrint(key, count) {
  console.log(key + " 는 총 " + count + " 번 사용되었습니다.");
}

const eng = "creates a new array with the result of calling a function for each array element";
let myKey = inputKey();
let myCount = countKey(myKey, eng);
countPrint(myKey, myCount);

// 문제 10) 아래의 숫자 배열에서 3의 배수이면서 2의 배수인 숫자를 모두 출력하는 프로그램을 함수를 사용하여 작성하세요
console.log("\n----- 문제 10 -----\n");
function calNumber(numbers1) {
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 == 0 && numbers1[i] % 3 == 0) {
      console.log("2와 3의 배수인 숫자 : " + numbers1[i]);
    }
  }
}

const numbers1 = [10, 6, 9, 15, 12, 3, 7, 24, 32, 1];

calNumber(numbers1);

// 문제 11) 배열 안의 숫자 중 가장 큰 수를 출력하는 프로그램을 함수를 사용하여 작성하세요
console.log("\n----- 문제 11 -----\n");
function calMax(numbers2) {
  let max = 0;

  for (let i = 0; i < numbers2.length; i++) {
    if (max < numbers2[i]) {
      max = numbers2[i];
    }
  }

  return max;
}

function printMax(max) {
  console.log("배열안의 숫자 중 가장 큰 숫자는 " + max + " 입니다.");
}

const numbers2 = [10, 6, 9, 15, 20, 3, 7, 25, 32, 1];

let max = calMax(numbers2);
printMax(max);

