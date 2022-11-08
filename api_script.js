function siteInfo(){
    let number = parseInt(document.getElementById('idNum').value);
    fetch('https://jsonplaceholder.typicode.com/comments/' + number)
    .then(response => response.json())
    .then(json => document.getElementById("output").innerHTML = JSON.stringify(
        "<i>Post ID: </i>" + json.postId +
        "<br>" +
        "<i>ID: </i>" + json.id +
        "<br>" +
        "<i>Name: </i>" + json.name +
        "<br>" +
        "<i>Email: </i>" + json.email +
        "<br>" +
        "<i>Comment: </i>" + json.body
    ));
}