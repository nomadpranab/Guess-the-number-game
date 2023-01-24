//guess a number between 1 and 10


let x = Math.random() * 10;
x = Math.floor(x);
// console.log(x)
let y=4;

function start()
{
    while(y>0)
    {
    const input=parseInt(prompt("Enter your lucky number"));
        if(input==x)
        {
        document.write("You won for the first time in life ! Congrats");
        break;
        }
        else{  
        y--;
        window.alert(`You have ${y} chances left`);
        }
    }

}
