"use strict";
// ============== УСТАНОВКА GIT ===========================
// 1. git init  ввести если такое сообщение -  fatal: not a git repository (or any of the parent directories): .git
// 2. git config --global user.name "Alex"
// 3. git config --global user.email sanichen350@gmail.com
// 4. git status
// 5. git add -A (git начинает следить за существующими файлами)
// 6. git add mian.css (добавляем новый созданный файл для контроля гитом)
// 7. git commit -a -m"first comit"  (создаём первую контрльную точку)
// 8. git add -A (сохоаняем сделанне изменения в файлах)
// 9. git commit -a -m"three comit"  (создаём вторую контрльную точку с изменениями в файлах)
// 9.1 git push (после очередного изменения и комита отправляем обновлённые файлы на удалённый репозиторий)
// 10. git log (выводит все commit)
//============== gitHub =====================================
// 1. создаём репозиторий не gitHub (project)
// выполняем три вставки
// 2.1. git remote add origin https://github.com/Alexander3891/project.git
// 2.2  git branch -M main
// 2.3. git push -u origin main
// (2.3 git push --set-upstream origin master - эта работает)
// 4. теперть в репозитории появяться все файла с VS code
// 5. git push (после очередного изменения и комита отправляем обновлённые файлы на удалённый репозиторий)

//============== Github - работа с разных компьютеров ==================
// at work
// 1. https://github.com/Alexander3891/project.git
// 2. cd ..
// 3. cd work
// 4. git clone https://github.com/Alexander3891/project.git progect_2
// at home
//  git pull (получаем все обновления с репозитория)

//====================== gitignore ================
// файлы которые не хотим push

// ===== webpack ===== 
// node -v
// npm -v
// npm init
// webpack.config.js
// npm install webpack webpack-cli --save-dev
// npx webpack    

          //======== json-server ======
    
// fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));

    // для подключения json-server пишем в терминале - npx json-server --watch db.json
    // Resources
    // http://localhost:3000/menu
    // http://localhost:3000/requests

          //======== babel ======
//npm install --save-dev @babel/core @babel/cli @babel/preset-env
// npm install --save @babel/polyfill
// npm i --save-dev babel-loader    
// npm i --save-dev core-js 




//======================================================
// alert('Hello');

// 1. вопрос для пользователя
// const resalt = confirm("Are you here");
// console.log(resalt); // true/false
//======================================================

// 2. вопрос с формой (все ответы пользователя приходят в виде строки)
// const answer = prompt("Вам есть 18?", "18");
//проверка строки на ее тип
// console.log(answer); // 18
// console.log(typeof(answer));// string
//=======================================================
// делаем из строки число с помощью +
// const answerr = +prompt("Вам есть 18?", "18");
// console.log(typeof(answerr));// number

//=======================================================
// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Солько вам лет?', '');
// document.write(answers);// выводит на странице этот  массив
// console.log(typeof (answers)); // object

//========================================================
// 3. Интерполяция (вставляем переменные в строку)

// const category = 'toys';
// console.log(`https://somerl.com/${category}/5`);
// const userrr = "Ivan";
// alert(`Привет, ${userrr}`);

//===========================================================
// 4. Операторы js;

console.log('arr' + "- object");
console.log(4 + "9");
console.log(4 + +"9"); 

// Постфиксная  'a++' - ставим после переменной
// Префиксная '++a' - ставим перед переменной
let incr = 10,
    decr = 10;
// инкримент
// incr++; 
// декримент
// decr--; 
console.log(incr++); // не изменится
console.log(decr--); // не изменится

console.log(++incr); //  изменится
console.log(--decr); //  изменится

// остаток от деления
// console.log(5 % 2); // 1

// = - присвавание
// == - сравнение
// console.log(2*4 == 8); // сравнение только по значению true
// === -  сравнение по типу данных falsh (строгое сравнение)
// console.log(2*4 === '8');
console.log(2*4 == "8"); // true
console.log(2*4 === "8"); // false



// приоритет операторов
console.log(2 + 2 * 2 === 8);  //false
console.log(2 + 2 * 2 != 8);  //true
console.log(2 + 2 * 2 !=  '6');  //false 
console.log(2 + 2 * 2 !== '6');  //true (строгое сравнение по типу)



// &&  и
// || или
const isChecked = true,
      isClose = false; 

// console.log(isChecked && isClose); // false
// console.log(isChecked || isClose); // true
// console.log(isChecked && !isClose); // true



