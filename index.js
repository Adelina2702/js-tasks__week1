// PART 1

//? #1
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    //   console.log(i);
  })
}
//! Что будет отображаться в консоли и почему?

//* Ответ: В  консоле отображается 10 раз число 10, так как мы используем цикл, а в цикле мы используем
//* "функцию setTimeout",которая вызывает функцию один раз, через определённый интервал времени.


////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #2
//! Напишите программу JavaScript для отображения текущего дня и времени в следующем формате.  
//! Пример вывода:
//! Today is: Friday. 
//! Current time is: 4PM:50:22

//* Ответ:
//  Для дня недели
let dayOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

let presentDay = dayOfTheWeek[new Date().getDay()]
console.log(`Today is: ${presentDay} `)

//  Для времени
let today = new Date()
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let amPm = "AM";
if (hours > 12 ){
    amPm = "PM";
    hours = hours - 12
}
let time = hours + amPm + ':' + minutes + ':' + seconds;
console.log(`Current time is: ${time}`)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #3
//! Напишите функцию JavaScript, которая переворачивает число.
//! Example x = 32243;
//! Expected Output : 34223

//*  Ответ:

function reverseNum(number){
    return String(number).split('').reverse().join('')
}
console.log(reverseNum(32243))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #4
//! Напишите программу на JavaScript для вычисления факториала числа. В математике
//! факториал неотрицательного целого числа n, обозначаемый n!, является произведением всех положительных целых чисел, меньших или равных n.
//! For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 

//* Ответ:

function factorial(num){
    if(num === 0){
        return 1
    }else{
        return num * factorial(num -1)
    }
}
let res = factorial(5)

console.log(res);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #5
//! Напишите программу JavaScript, которая принимает два целых числа в prompt() и предупреждает большее из них.

//* Ответ:

let num1 = 55;
let num2 = 99;
console.log(Math.max(num1,num2))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #6
//! Напишите простую программу на JavaScript для объединения всех элементов следующего массива в строку.
//! Sample array: myColor = ["Red", "Green", "White", "Black"];
//! Expected Output : 
//! "Red,Green,White,Black"
//! "Red+Green+White+Black"

//* Ответ:

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join("+"));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #7
//! Напишите функцию JavaScript, чтобы получить название месяца по определенной дате.
//! Данные испытаний:
//! console.log(month_name(new Date("10/11/2009"))); 
//! console.log(month_name(new Date("11/13/2014")));
//! Output :
//! "October" 
//! "November" 

//* Ответ:

let month = [
    "January",
    "February", 
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function presentMonth(day){
    return month[day.getMonth()]
} 

console.log(presentMonth(new Date("10/11/2009")));
console.log(presentMonth(new Date("11/13/2014")));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #8
//! Напишите программу JavaScript для проверки того, является ли первый символ строки прописным или нет.

//* Ответ:

function checkCase(str) {
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
       return true
     }
     else {
       return false
     }
 }

 console.log(checkCase('Qwerty'))
 

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//?  #9
//! Напишите программу на JavaScript для рисования улыбки

//* Ответ:

function drawSmile() 
{
  var canvas = document.getElementById('canvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');
    context.beginPath();
   //* Circle
    context.arc(75,75,50,0,Math.PI*2,true);
    context.moveTo(110,75);
    //* Mouth 
    context.arc(75,75,35,0,Math.PI,false); 
    //* Left and Right eye
    context.moveTo(55,65);
    context.arc(60,65,5,0,Math.PI*2,true); 
    context.arc(90,65,5,0,Math.PI*2,true);
    context.stroke();
  }
}
drawSmile()


///////////////////////////////////////////////////////////////////////////////////////////////////////////


// PART 2

//? #1
//! На странице есть верстка:
//! <div id="string-1">Ядра в вёдра, выдру в тундру!</div>
//! <div id="string-2">Выдрав с выдры в тундре гетры</div>
//! <div id="string-3">В недрах тундры, выдры в гетрах </div>
//! <div id="string-4">Вытру гетрой выдре морду </div>
//! <div id="string-5">Тырят в вёдра ядра кедров!</div>
//! <div id="string-6">Вытру выдрой ядра кедров</div>
	
//! Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

//! Вывод в консоли:
//! В недрах тундры, выдры в гетрах
//! Тырят в вёдра ядра кедров!
//! Выдрав с выдры в тундре гетры
//! Вытру выдрой ядра кедров
//! Вытру гетрой выдре морду
//! Ядра в вёдра, выдру в тундру!


//* Ответ:
console.log(document.getElementById('string-3').innerHTML)
console.log(document.getElementById('string-5').innerHTML)
console.log(document.getElementById('string-2').innerHTML)
console.log(document.getElementById('string-6').innerHTML)
console.log(document.getElementById('string-4').innerHTML)
console.log(document.getElementById('string-1').innerHTML)


////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #2
//! На странице есть верстка

//! <div class="element">Element 1</div>
//! <div class="element">Element 2</div>
//! <div class="element">Element 3</div>
//! <div class="element">Element 4</div>
//! <div class="element">Element 5</div>
//! <div class="element">Element 6</div>

//! С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.


//* Ответ:
function myFunction() {
    let myElements = document.querySelectorAll(".element");
    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.color = "green";
        if(i < 3){
        	myElements[i].style.color = "red";
        }
    }
}
myFunction()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


//? #3

//! На странице есть контейнер <ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом, взятым из массива задач из пяти элементов: 

//! const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

//! Ожидаемый результат в инспекторе после выполнения скрипта:

//! <ol id="todo-list">
//!   <li class="task">Buy lemonade</li>
//!   <li class="task">Make toasts</li>
//!   <li class="task">Repair car</li>
//!   <li class="task">Play games</li>
//!   <li class="task">Pet a cat</li>
//! </ol>

//* Ответ:

function myArray(){
	let task = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
	for(let i = 0;i < 5; i++){
	let newLi = document.createElement('li');
	newLi.className="task";
    newLi.innerHTML = task[i];
    todolist.appendChild(newLi);
    }
}
myArray()


/////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #4
//! На странице есть следующая разметка:

//! <article>
//! <h3>What is Lorem Ipsum?</h3>
//! <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
//! <h3>Where does it come from?</h3>
//! <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. from "The Extremes of Good and Evil" by Cicero</p>
//! <h3>Why do we use it?</h3>
//! <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
//! </article>

//! Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.
	
//! Указания:
//! Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
//! Нельзя модифицировать указанную разметку.
//! За использование цикла дополнительные баллы.


//* Ответ:

function myParagraph(){
    let paragraph = document.querySelectorAll(".pp");
    for (let i = 0; i < paragraph.length; i++) {
      let hr = document.createElement("hr");
      paragraph[i].after(hr);
    }
}

myParagraph()


////////////////////////////////////////////////////////////////////////////////////////////////////////

//? #5
//! Дана такая разметка:

//! <div id="cart-items">
//! 	<div class="item">Milk 1 l.<span class="qty">x 2</span></div>
//! 	<div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
//! 	<div class="item">Bread <span class="qty">x 2</span></div>
//! 	<div class="item">Cheese <span class="qty">x 1</span></div>
//! 	<div class="item">Chocolate bar <span class="qty">x 3</span></div>
//! </div>

//! Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.

//! Указания:
//!  Для удаления использовать .remove()
//! Для замены использовать .replaceChild()
//! Подразумевается, что вышеуказанная разметка находится внутри тега <body>.


//* Ответ:

function removeOperation(){
    let text = document.createTextNode("Canned Fish x4");
    let products = document.getElementById("cart-items");
    let newChild = document.createElement('div')
    newChild.setAttribute('class', 'item')
    let newChildContent = document.createTextNode('Canned Fish ')
    newChild.appendChild(newChildContent)

    let span = document.createElement('span')
    span.setAttribute('class', 'x-4')
    const spanContent = document.createTextNode('x 4')
    span.appendChild(spanContent)

    newChild.appendChild(span)

    const oldChild = products.children[4]
    const parentDiv = oldChild.parentNode 

    products.children[1].remove();
    parentDiv.replaceChild(newChild, oldChild)
    
}

removeOperation()


///////////////////////////////////////////////////////////////////////////////////////////////////////

//? #6
//! Напишите программу для создания списка, которые будет вводить пользователь.
//! Для каждого пункта:
//! Запрашивайте содержимое пункта у пользователя с помощью prompt.
//! Создавайте пункт и добавляйте его к <ul>.
//! Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую строку.


//* Ответ:

function addPrompt(){
	let ul = document.createElement('ul');
	document.body.appendChild(ul);
	while (true) {
    let newLi = prompt("Введите текст для пункта списка", "");

    if (newLi === null || newLi=== 0) {
       break;
    }

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newLi));
    ul.appendChild(li);
}
}
addPrompt()
