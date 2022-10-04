
function executeOperation(  )
{
 let a = parseInt( document.getElementById('input1').value);
 let b = parseInt( document.getElementById('input2').value);
var radioArray = document.getElementsByName("mathRadios");

let operation="";
let answer =0;
for( index=0; index < radioArray.length; index++ )
{
   if( radioArray[ index ].checked)
   {

        operation = radioArray[ index ].value;
        break; // stop looping if selected radio found
   }
}

switch( operation)
{
    case "+": { answer = a+b; break;}
    case "-": { answer = a-b; break; }
    case "*": { answer = a*b; break; }
    case "/": { answer = a/b; break;}
    default: { operation ="+" ; answer = a+b; }
}
 //let answer = a+b;
 
  //  alert( 'Hi ' + user +'! ' + a +"+" + b +" = " + answer);
  document.getElementById('input1').value = a;
  document.getElementById('input2').value = b;

  document.getElementById('answer').value = a +operation + b +" = " + answer;
 
  event.preventDefault(); // prevent page refresh

} 
