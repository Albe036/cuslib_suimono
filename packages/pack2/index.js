import { faker } from '@faker-js/faker';
import { saludar } from '../pack1/index.js';


export function generate2() {
    return faker.internet.email();
}

const fn2 = generate2();
console.log(fn2);

saludar();