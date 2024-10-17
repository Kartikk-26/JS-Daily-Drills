// Call back is function inside function 


function greet(name,callBack){     // This si the main function
    console.log('Hello ' + name);
    callBack();
}

function sayGoodbye(){      // This is the callBack function
    console.log('Goodbye');
}

greet('kartik',sayGoodbye);  // pasing the name 