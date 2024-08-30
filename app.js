

console.log('Hello World');


function sayHello(user){
    console.log('Hello ' + user+' Wecome to our website'); 
}

let redc = 0.6;


function calculatePrice(price,redc){
      let totale = price - (price * redc);
      return totale;
}



console.log(calculatePrice(150,redc));

let finalPrice = calculatePrice(150,redc);


document.write('The final price is: ' + finalPrice);


let user = {
    "name" : "John",
    "lastname" : "Doe",
    "age" : 25,
    "sayHello" : function(){
        console.log('Hello from user');
    },
    "write" : function(){
        console.log('Write something');
    }
}

console.log(user.name);

user.sayHello();
user.write();


console.log(Object.keys(user));
console.log(Object.values(user));



console.log(delete user.name);
console.log(user);



// selection by id 

let title = document.getElementById('title');

console.log(title);
// console.log(title.innerHTML);
title.innerText = "el pc tbaz3et alih 9ahwa"

// selection by Class

let titleWithClass = document.getElementsByClassName('title');

console.log(titleWithClass[0]);

let paragraphs = document.getElementsByClassName('paragraphe');


console.log(paragraphs);

console.log(paragraphs[0]);
console.log(paragraphs[0].innerText);

console.log(paragraphs[1]);
console.log(paragraphs[1].innerText);


console.log(paragraphs[2]);
console.log(paragraphs[2].innerText);

paragraphs[1].innerText = "Hello from JS";




for (let i=0; i < paragraphs.length ; i++){
    paragraphs[i].innerText = "Content jdid"
    
}





// selection by HTML tag

let links  = document.getElementsByTagName('a');


let firstLink = links[0];
let secondLink = links[1];




function manipulateAnchorTag(a){
    a.innerText = "Google.com"
    a.style.textDecoration = "none";
    a.style.color = "rgb(200,0,255";
    a.href = "https://www.google.com";
    a.target = '_blank';

}



// manipulateAnchorTag(links[0]);
// manipulateAnchorTag(links[1]);

// let array = Array.from(links);

// array.forEach(function(oldValue){
//     manipulateAnchorTag(oldValue);
// });



console.log(typeof links);


let container =  document.getElementsByClassName('container')[0];

let items = document.getElementsByClassName('item');



console.log(container.classList.add('containerStyle'));

console.log(items);



console.log("######################");

// jebna beha lblassa li bch yethat feha l element
let titles = document.getElementsByClassName('titles')[0];



//  lahné sna3na html element feraagh
let newH2 = document.createElement('h2');

console.log(newH2);

// lahné 3abina el element b text 
newH2.innerText = "Welcome to our website"
// hatineh fel lista mta3 awled l blassa
titles.appendChild(newH2)








for (let i=0 ; i< items.length ; i+=1){
    items[i].classList.add('itemStyle');
   
}



// function createElementAndAppend(elementType,elementContent,elementParent){

//     let newElement = document.createElement(elementType);
//     newElement.innerText = elementContent
//     elementParent.appendChild(newElement)
// }


// createElementAndAppend('h3',"hello h3 from js",titles)
// createElementAndAppend('p','Ena paragraphe mel js',container)



let newInputField = document.createElement('input');
console.log(newInputField);


newInputField.type = 'password';
newInputField.placeholder = 'Enter your password';
titles.appendChild(newInputField);


// selecting elements with the querry selector 



let newParagraphe = document.querySelectorAll('.newP')
console.log(newParagraphe);


newParagraphe[0].textContent = "Content mell js"

newParagraphe[1].textContent = "Content mell js"


let newDiv = document.createElement('div');
let newH4 = document.createElement('h4');
newH4.textContent = "Hello from js am the child of div";

newDiv.appendChild(newH4);
document.body.insertBefore(newDiv,paragraphs[1]);