function myButton(){
    let s = parseInt(document.getElementById("input_number").value);
    fetch('https://jsonplaceholder.typicode.com/users/'+ s )
    .then(response => response.json())
    .then(json =>document.getElementById("results").innerHTML = JSON.stringify(
        "ID:" +json.id + "<br>Name:"+json.name + "<br>Email" + json.email 
    ));

    
   
}