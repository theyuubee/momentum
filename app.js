

function sayHello(nameOFPerson, age)//nameOFPerson이 argumant임, 여러개도 될수있음
 {
  console.log("Hello my name is " + nameOFPerson + " and I'm " + age);
  }

sayHello("felix", 23);  //보내는법
sayHello("dal", 10);
sayHello("lynn", 12);

// sayHello를 누를 때 실제 출력되길 원하는 이름은 felix, dal, lynn


//그러나 실제 내가 원한 것은 hello my name is A,B,C 이렇게 끝의 이름을 바꾸는것.
//function 의 목적은 여러가지 일을 같은 코드로 하기 위함임. 따라서 function 의 밖에서 데이터값을 넣어주는것이 좋다.
//이것을 위해서는 argumant (인수) 라는 것을 실행해야 함.

//console. log는 그대로 출력되지만, sayHello는 hello m name is + 각각의 이름이 출력되어야함

function plus(a, b) {
   console.log(a + b);
}
plus (5,5) //데이터를 function안으로 보내는 법!
//a나 b가 아니고 포테이토 샐러드 뭐 이런걸로 해도 됩니다잉~

function minusFive(patato) {
  console.log(potato - 5);
}
minusFive(5, 10, 30, 50);
//이렇게 해도 값은 0만 출력됨 5-5=0 ,이 function은 오직 첫번째 argument만 받기 때문에


function devide(firstnumber, secondnember) {
  console.log(firstnumber / secondnember);
}

devide(40, 5)
//더하기 계산기와 나누기 계산기


const player = {
  name: "felix",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you!");
  },
};

player.sayHello("lynn");
player.sayHello("felix");
//여기까지 function에게 정보를 보내는 법 완료

"text" //따옴표가 붙는 순간 string
5,3,4,4 // 따옴표 없이 써야함. 일반 숫자!\
true false //boolean 이라는 두가지 옵션의 데이터임
null //변수안에 할당된 값이 아무것도 없다(=비어있다)
undefined //변수에 값을 부여하지 않은 상태.
//(ex.
// let hello;(값 미정)
// 이 때 console.log(hello); 를 넣어줘도 값은 미정이기 때문에 underfined 이라고 콘솔에 출력ㄷ

const days =[];

//변수 안에 많은 값을 가지고 싶을때, 예를 들어 한 주의 요일을 저장할 때 ,일종의 list, 다른말로 array라는 것을 만든다.
// []를 쓴다는 것을 꼭 기억하자

const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text", me];

const toBuy = ["patato", "pizza", "cheeze"];
console.log(toBuy[2]);
//이렇게 하면 피자가 출력됨
//다 출력하고 싶으면 2를 빼주면 됩니다~

toBuy[2] = "water";
console.log(toBuy);
//이렇게 하면 치즈가 물로 바뀌어서(업데이트 되어서) 출력됨
toBuy.push("one")
// array끝에 아이템 하나 더 추가할 때 push 사용

const a = 5;
console.log(a);  //변수값 고정, 5 출력

const isYubinFat = true;
isYubinFat = false; //내 상태가 날씬한 걸로 변동되었다 하더라고  자바스크립트는 이를 허용하지않은.
//왜냐하면 const(값 업데이트 불가능)에서 isYubinFat은 true라고 설정해놨기 때문에!
//따라서 이럴 땐 let 을 사용함.

const a = 5;
let isYubinFat = true;
//let을 붙이게 되면 변수 업데이트 가능
//var 은 아주 구식이므로 사용하지 말 것

//--
// list는 기본적으로, 항목들에 공통된 맥락이 있음
//ex const days[여기안에 요일이라는 맥락의 값들이 들어갈 것을 앎]

//그렇다면 연관되어 있는 property들을 그룹으로 묶어서 저장해야 할 떄는 어떻게 해야할까?
const player = {

}
// player라는 object의 property를 작성 할 수 잇음
const player = {
  name:
}
//player라는 variable 안에 name이라는 일종의 variable를 만든 거임
const player ={
  name: "felix",
  age: 23,
};
// 이렇게 object가 생성, player에는 name와 age 라는 두 가지 선택사항이 생김
console.log(player);
//player을 불러오면 name:felix age:23출력.
//여기서 만약에 이름을 업데이트 하고 싶다면?

const player = {
  name: "felix",
  age: 23
}
player.name = "happy";
console.log(player);
//{name: 'happy', age: 23} 이렇게 출력

//object를 만든 이후, object 안에 새로운 item을 만드는 것도 가능!
player.sexy = "soon";
console.log(player);
//{name: 'happy', age: 23, sexy: 'soon'} 이렇게 출력 됨


//숙제
const calculator = {
  add: function (a, b) {
    console.log(a, b);
  },
};

calculator.add(5, 1);
console.log();

//끝에 밑에꺼 넣어주기
calculator.add(1, 2)
calculator.minus(1, 2)
calculator.div(1, 2)
calculator.powerof(1, 2)


//숙제시작
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
};

calculator.add(5, 1);
console.log(calculator);
//더하기

const calculator = {
  minus: function (a, b) {
    console.log(a - b);
  },
};
calculator.minus(80. 50)
//빼기

const calculator = {
  devide: function (a, b) {
    console.log(a / b);
  },
};
calculator.devide(40, 5)
//나누기

const calculator = {
  powerof: function (a, b) {
    console.log(a ** b);
  },
};
calculator.power(3,2)

//최종 calculator값에는 식이 아닌 값만!!! 주어야함 이걸로 개고생해따....

//이제 우리는 functin 밖에서 결과값을 얻기를 원하기 때문에 console 사용을 그만둘것임


const calculator = {
  add: function (a, b) {
    return a + b; //주의할 점,return 을 하면 function은 작동을 멈추고 결과 값을 return하고 끝나버림
  },
};

calculator.add(5, 1);
return calculator;
//더하기

const calculator = {
  minus: function (a, b) {
    return a - b;
  },
};
calculator.minus(80. 50)
//빼기

const calculator = {
  devide: function (a, b) {
    return a / b;
  },
};
calculator.devide(40, 5)
//나누기

const calculator = {
  powerof: function (a, b) {
    return a ** b;
  },
};
calculator.power(3,2)


 const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10, minusResult); //곱하기
const divideResult = calculator.devide(timeResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);//제곱

//return 은 내게 반환값을 준다고 생각합시다
//console.log는 그림의 떡. 꺼내 먹으려면 return필요....
//console.log는 콘솔에 출력하기 위한 것, return은 화면에까지 멋지게 출력하기 위한것


//나이계산기 만들기 (음주가 가능한 나이인지 아닌지)
//promt 는 두개의 argumant를 받는데 하나는 메시지,하나는 default"
const age = prompt("How old are you?");
console.log(age);
//이것은 알림창을 띄우는 동시에 자바스크립트의 코드를 멈추게 하고, css설정도 안되고, 팝업 제한 걸릴수있고 기타등등의 이유로 너무 오래된 방법임
const age = prompt("How old are you?");
console.log(typeof age);
//변수 age의 타입을 보고싶을때 typeof 입력, string로 나옴
//따라서 알림창에 숫자를 입력하고 콘솔에 숫자가 출력되는 것 같아도 그 값의 타입은 실제로는 type임
// 그렇다면 어떻게 string를 다른 타입 , number로 바꿀수있을까? parseInt라는 함수를 쓰면됨
parseInt()
//ex
console.log(typeof "15", typeof parseInt("15"));
//string number 로 콘솔에서 출력됨

const age = prompt("How old are you?")
console.log(age,  parseInt(age));
//사용자가 숫자를 입력하는지 아니면 문자를 입력하는지 이제 콘솔창에서 구분이 가능해진다.

const age = parseInt( prompt("How old are you?") );
console.log(age);
//먼저 하우올드아유 창을 띄워서 값을 받고, 그 다음 이게 넘버인지 스트링인지 parseInt로 구분
//function은 내부에서 외부로 실행된다

const age = parseInt( prompt("How old are you?") );
console.log(isNaN(age));
//isNaN은 하나의 인자를 주면 참인지 아닌지를 알려줌, isNaN은  boolean을 반환함
//뜨는 알림창에 15를 입력하면 fales가 콘솔창에 반환되는데, 이는 number가 아닌것(nan)이 아니라는 뜻=숫자라는 뜻

if(condition){
  //조건문인 condition이 true일때 사용할 코드 적는 곳

}else {
  ////조건문인 condition이 false일때 사용할 코드 적는 곳
}
//보통 한가지 조건만 설정하면 되기 때문에 else 쪽은 지워도 됨
//condition 은 boolean으로 판별 가능해야 한다.

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
console.log("please write a number");
}

//숫자를 입력하면 콘솔창에 아무것도 나타나지 않지만, 문자를 입력하면 please write a number가 콘솔창에! 출력됨

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
console.log("please write a number");
} else {
  console.log("Thank you have a nice day!");
}

//
if(isNaN(age)){
console.log("please write a number");
} else {
  console.log("Thank you have a nice day!");
}
//여기에 더해 입력값이 18살보다 어리면, 너는 너무 어리다! 라는 경고문을 넣고 싶다면?
else if (age < 18) {
  console.log("You are too young!");
}

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
console.log("please write a number");
} else if (age <  18) {
  console.log("You are too young!");
} else {
  console.log("you can drink!");
}
//마지막 코드가 실현되기 위해서는 위의 두 코드가 모두 fales 여야 한다

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)|| age< 0 ){
console.log("please write a number");
} else if (age <  18) {
  console.log("You are too young!");

} else if(age >=18 && age <= 50) {
  console.log("you can drink!");

} else if (age > 50 && age <= 80) {
console.log("you should exercise!");

} else if (age > 80) {
console.log("you should die!");

} else if (age === 100) {
  console.log("wow!");

}

//그러나 이런경우에 100은 실행될 수 없음. 이미 위에서 80보다 큰 값이 입력될 경우 콘솔에 you should die!가 출력되도록 했기 때문
//따라서 코드를 위로 옮겨야함

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)|| age< 0 ){
console.log("please write a number");
} else if (age <  18) {
  console.log("You are too young!");

} else if(age >=18 && age <= 50) {
  console.log("you can drink!");

} else if (age > 50 && age <= 80) {
console.log("you should exercise!");

} else if (age === 100) {
  console.log("wow!");

} else if (age > 80) {
console.log("you should die!");

} else if (age !== 100) {
  //age가 100이 아니라면?
}
