const {fooBar} = await import('./asyncModule.js');

async function asyncFunction(): Promise<string> {
    return "Hello World";
}

const greeting = await asyncFunction();

console.log(await fooBar());
console.log(greeting);


export {}
