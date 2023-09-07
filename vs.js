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
