import { faker } from '@faker-js/faker';


export function generate2() {
    return faker.internet.email();
}

const fn2 = generate2();
console.log(fn2);