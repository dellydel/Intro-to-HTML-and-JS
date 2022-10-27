function grabPreferrdActivity(){
let url = ('https://jsonplaceholder.typicode.com/todos/1')
fetch(url)
.then(response => response.json())
.then(json => document.getElementById("").innerHTML = 
}
