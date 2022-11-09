function siteInfo(){
    let urlDir = parseInt(document.getElementById('idNum').value);
    fetch('https://jsonplaceholder.typicode.com/comments/' + urlDir)
    .then(response => response.json())
    .then(json => {
        document.getElementById('postOP').value = json.postId;
        document.getElementById('nameOP').value = json.name;
        document.getElementById('emailOP').value = json.email;
        document.getElementById('bodyOP').value = json.body;
    })
}