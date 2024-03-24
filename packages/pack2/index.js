import { faker } from '@faker-js/faker';
import { saludar } from '../pack1/index.js';
import { faker } from '@faker-js/faker';


export function generatepack2() {
    return faker.internet.email();
}

const fn2 = generatepack2();
console.log(fn2);

saludar();