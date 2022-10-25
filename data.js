function grabSomeData() {
    let url = 'https://jsonplaceholder.typicode.com/photos/2';
     fetch(url)
     .then(response => response.json())
     .then(json => console.log(json))

    

}