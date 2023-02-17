var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var nothing = function () {
  console.log('I hear nothing!');
}
var abc=function(){
  console.log('Hello world');
}
//Assign the event handler to an event:
//eventEmitter.addListener('scream', myEventHandler);
eventEmitter.on('scream', nothing);
eventEmitter.addListener('hello',abc);

//Fire the 'scream' event:
eventEmitter.emit('scream');
eventEmitter.emit('hello');
//eventEmitter.emit('scream');