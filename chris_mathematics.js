function executeOperation( )
{

 let user = document.getElementById('fname').value;
 var a = parseInt( document.getElementById('input1').value);
 var b = parseInt( document.getElementById('input2').value);
 let answer = a+b;
 
    alert( 'Hi ' + user +'! ' + a +"+" + b +" = " + answer);
   // document.getElementById('answer').value = answer;
} 
