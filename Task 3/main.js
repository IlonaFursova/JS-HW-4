//Task 3
// Напишите свои функции-аналоги методов массивов:
// ●	pop, 
// ●	push, 
// ●	shift, 
// ●	unshift, 
// ●	concat
//  используя только свойства массивов

// Метод pop 
//Удаляет последний элемент из массива и возвращает его
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits.pop() ); // удаляем "Груша" и выводим его
// alert( fruits ); // Яблоко, Апельсин


// let fruits = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits[2]);
// fruits.length = 2;
// alert(fruits);


// Метод push
// Добавляет элемент в конец массива
// let fruits = ["Яблоко", "Апельсин"];
// fruits.push("Груша");
// alert( fruits ); // Яблоко, Апельсин, Груша

// let fruits = ["Яблоко", "Апельсин"];
// fruits[fruits.length]="Груша";
// alert(fruits);


// Метод shift
// Удаляет из массива первый элемент и возвращает его
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits.shift() ); // удаляем Яблоко и выводим его
// alert( fruits ); // Апельсин, Груша

// let fruits = ["Яблоко", "Апельсин", "Груша"];
// let removed = fruits.splice(0, 1);
// alert(removed);
// alert(fruits);


// Метод unshift
// Добавляет элемент в начало массива
// let fruits = ["Апельсин", "Груша"];
// fruits.unshift('Яблоко');
// alert( fruits ); // Яблоко, Апельсин, Груша

// let arr = ["Апельсин", "Груша"];
// alert (arr[0] = "Яблоко," + arr);


//Метод concat cоздаёт новый массив, 
//в который копирует данные из других массивов
// let arr = ["Яблоко", "Апельсин"];
// alert( arr.concat(["Груша", "Киви"]) ); 
//Яблоко,Апельсин,Груша,Киви

// let fruits = ["Яблоко", "Апельсин"];
// fruits[fruits.length]="Груша," + "Киви";
// alert(fruits);

