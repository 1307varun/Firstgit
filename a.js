var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[0].textContent='Hello 1';
items[1].textContent='Hello 2';
items[2].textContent='Hello 3';
items[3].textContent='Hello 4';


items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';

items[2].style.backgroundColor='green';
var items=document.getElementsByClassName("school-list-schools");
console.log(schools);
console.log(schools[1]);
schools[0].textContent='School 1';
schools[1].textContent='School 2';
schools[2].textContent='School 3';
schools[3].textContent='School 4';


var li=document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent='shool 2';
li[1].style.fontWeight='bold';
li[1].style.backgroudColor='green';
li[0].textContent='School 1';
li[1].textContent='School 2';
li[2].textContent='School 3';
li[3].textContent='School 4';

