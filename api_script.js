function siteInfo(){
    let number = parseInt(document.getElementById('idNum').value);
    fetch('https://jsonplaceholder.typicode.com/todos/' + number)
    .then(response => response.json())
    .then(json => document.getElementById("output").innerHTML = JSON.stringify(
        "<i>ID: </i>" + json.id +
        "<br>" +
        "<i>User ID: </i>" + json.userId +
        "<br>" +
        "<i>Title: </i>" + json.title +
        "<br>" +
        "<i>Completed: </i>" + json.completed
    ));
}