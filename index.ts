async function asyncFunction(): Promise<string> {
    return "Hello World";
}

const greeting = await asyncFunction();

console.log(greeting);


export {}
