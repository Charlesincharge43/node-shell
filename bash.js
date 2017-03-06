

var importobj=require('./commands.js')


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', importobj.commands);
//
// console.log(process.argv)

//when someone types input into the terminal, pass that into
//the importobj.commands (the function)
//don't worry about what 'data' means in the argument
//process.stdin is the event emitter
//on... tells what happens when the event happens
//(on is like eventlistener)
//Remember addeventlistener "click".. is kind of like the analog of 'data'
