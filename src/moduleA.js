
import{tname,hello}from './moduleB.js';
console.log(` ${tname}  ${hello} ` ); // TEN NE  WELCOME TO ES6 

// alias = as 
console.log("===========alias==============")
import{tname as na ,hello as he }from './moduleB.js';
console.log(` ${na}  ${he} ` ); // TEN NE  WELCOME TO ES6 

console.log("=========================")
import{tname as na1 ,hello as he1 ,obj }from './moduleB.js';
obj.pname ="chanced"; //ok // it can the chance
console.log(` ${na1}  ${he1} ` ); // TEN NE  WELCOME TO ES6 
console.log(`${obj.pname}`);//chanced

console.log("=========================")
import{default as cho}from './moduleB.js';
console.log(`${cho}`);
console.log("^^^^^^^^^^^^^^^");//