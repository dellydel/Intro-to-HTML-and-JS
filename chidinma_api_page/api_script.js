function getData(){
    
    let a = parseInt(document.getElementById("input").value); 

    let url = "https://jsonplaceholder.typicode.com/users/"+ a;
    let defaultvalue = parseInt(document.getElementById("input").value);
    fetch(url)
    .then(response => response.json())
    
    .then(
        json =>
        { document.getElementById('name').value = json.name;
        document.getElementById('username').value = json.username;
        document.getElementById('email').value = json.email;
        document.getElementById('phone-number').value = json.phone;
        document.getElementById('website').value = json.website;
    
    })
         
            
        
        
    
}