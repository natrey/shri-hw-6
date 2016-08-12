"use strict";
class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        return this.name + " приветствует вас!";
    }
}

new Person("Наташа").greet();