"use strict";

class Person{
  constructor(name){
    this.name = name;
  }

  greet(){
    return this.name + ' приветствует вас!'
  }
}

console.log(new Person('Наташа').greet());