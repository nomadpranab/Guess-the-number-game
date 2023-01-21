//guess a number between 1 and 100


let x = Math.random() * 100;
x = Math.floor(x);
// console.log(x)
let y=10;

function start()
{
    while(y>0)
    {
    const input=parseInt(prompt("Enter your lucky number"));
        if(input==x)
        {
        document.write("You won");
        break;
        }
        else{  
        y--;
        window.alert(`You have ${y} chances left`);
        }
    }

}
