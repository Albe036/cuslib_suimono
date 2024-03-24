import { faker } from '@faker-js/faker';


export function generate() {
    return faker.internet.email();
}

const fn = generate();
console.log(fn);

export function generate2() {
    return faker.internet.email();
}

const fn2 = generate2();
console.log(fn2);

export function saludar(){
    console.log('Hola mundo desde pack1');
}