 //Задание 1
 let myName = "Даниил" ;
 let myAge = 24 ;
 let mySity = "Москва" ;
 console.log (typeof myName, typeof myAge, typeof mySity);

 //Задание 2 
 let myFullName = ( "Даниил "+ "Зуев")
 console.log(myFullName)

 //Задание 3
 let strNum = "2345";
 let numNum = Number(strNum);
 console.log ( numNum, typeof numNum);

 //Задание 4 
 let jsString = "JavaScript is fun!";
 let jsString1 = jsString.slice(14, 17);
 let jsString2 = jsString1.toUpperCase();
 console.log(jsString2);

 //Задание 5
 let product = "1 грамм палладия";
 let prise = 2835.73;
 console.log(`цена на  ${product} состовляет ${prise} рублей` );

 //Задание 6
 let newNumb=1232.34565432;
 console.log(newNumb.toFixed(0));

 //Задание 7
 let num15=15;
 let num12=12;
 let bul= (15>12);
 console.log(bul);

 //Задание 8
 let im ={ 
    againName:"Даниил",
    againAge: 24,
    favoritColor: "Фиолетовый" 
 };
 console.log(im)

 //Задание 9
 let newNumb2=1232.34565432;
 console.log(newNumb2.toFixed(0));

 //Задание 10 
 let fruits= "apple, orange, banana";
 let arrayFruits={
    firstfuit:fruits.slice(0,5),
    middleFruit:fruits.slice(8,14),
    lastFruit:fruits.slice(15,21)
  } 
  console.log(arrayFruits)

  //Задание 11 
 let stringNaN= isNaN("text"/5);
 console.log(stringNaN);

  //Задание 12
  let bigText=`первая строка
  вторая строка
  третья строка`;
  console.log(bigText);
  
  //Задание13
  let truue= true;
  let what= String(truue);
  let sas=typeof(what)
  console.log(sas)

  //Задание 14
  let id = Symbol("sid");
  let book={
    bookname:"Метро 2033"
  };
  book[id]=10;
  let id2= "asas"
  book[id2]= 15 
  console.log(book)

  //Задание 15 
  let lastArray=[1234,11121,1300909]
  let qusntity= lastArray.length
  console.log(qusntity)