function fechUsers(){
    let number = parseInt(document.getElementById("input_number").value);
    fetch('https://jsonplaceholder.typicode.com/users/'+ number )
    .then(response => response.json())
    .then(json =>document.getElementById("results").innerHTML = JSON.stringify(
        "<b>ID:</b>" +json.id + "<br><b>Name:</b>"+json.name + "<br><b>Email:</b>" + json.email
        + "<br><b><b>Street:</b></b>" +json.address.street  + "<br><b>Suite:</b>" +json.address.suite
        + "<br><b>City:</b>" +json.address.city + "<br><b>Zipcode:</b>" +json.address.zipcode
        + "<br><b>Phone:</b>" +json.phone  + "<br><b>Website:</b>" +json.website  

    ));

    
   
}