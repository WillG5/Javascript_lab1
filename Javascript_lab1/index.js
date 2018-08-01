let name1 = prompt("What is the first name?");
let name2 = prompt("What is the second name?");
let name3 = prompt("What is the third name?");

if (name3.length >= name2.length && name3.length >= name1.length){
    console.log(name3);
}

else if (name1.length >= name2.length){
    console.log(name1);
}
else if(name2.length >= name3.length){
  console.log(name2);
}
