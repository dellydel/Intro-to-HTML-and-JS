function grabSomeData(){
let url = ('https://jsonplaceholder.typicode.com/todos/5')
fetch(url)
.then(response => response.json())
.then(json => console.log(json))
}