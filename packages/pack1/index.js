import { faker } from '@faker-js/faker';


export function generate() {
    return faker.internet.email();
}

const fn = generate();
console.log(fn);