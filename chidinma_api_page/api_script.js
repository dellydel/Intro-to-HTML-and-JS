function getData(){
    
    let a = document.getElementById('input').value 

    fetch('https://jsonplaceholder.typicode.com/users/' + a)
    .then(response => response.json())
    .then(json => console.log(json))
    .then(json => document.getElementById('answer').value = json )
    
}