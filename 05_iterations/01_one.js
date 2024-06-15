// for 

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

// loop inside loop

for (let i = 0; i < 3; i++) {
    console.log(`Outer loop`);
    
    for (let j = 0; j < 2; j++) {
        console.log(`Inner loop`);;
    }
}