
async function getUsers() {
    //let fromUrl = "https://jsonplaceholder.typicode.com/todos";// 
    let fromUrl = "https://jsonplaceholder.typicode.com/users";
    try {
        let res = await fetch(fromUrl);
        return await res.json();
    } catch (error) {
        console.log(error);  
    }
}

 function renderUserById( ){ 
    let defaultvalue = parseInt(document.getElementById("hidenNextValue").value); 
    let userRequest = document.getElementById("inputId").value;  
    if (userRequest !="")
    {
        if( userRequest > 10 ) return; // max exceeded        
    let url = "https://jsonplaceholder.typicode.com/users/"+ userRequest;
    fetch(url)
    .then ( data => data.json())
    .then( 
        json => 
            { 
                document.getElementById('container_users').innerHTML =  
                "<p/>"+
                "<div class="+ "header"+">"+ "BASIC INFO"+ "<br/>"+ "</div>"+ "<br/>"+
                "ID: " + json.id +"<br/>"+
                "name: " + json.name +"<br/>"+
                "username: " + json.username +"<br/>"+
                "email: " + json.email +"<br/>"+
                "<p/>"+
                "<div class="+ "header"+">"+ "ADDRESS"+ "<br/>"+ "</div>"+ "<br/>"+
                "street: " + json.address.street +"<br/>"+
                "suite: " + json.address.suite +"<br/>"+
                "city: " + json.address.city +"<br/>"+
                "zipcode: " + json.address.zipcode+"<br/>"+
                "<p/>"+
                "<div class="+ "header"+">"+ "GEOLOCATION"+ "<br/>"+ "</div>"+ "<br/>"+
                "lat: " + json.address.geo.lat +"<br/>"+
                "lng: " + json.address.geo.lng +"<br/>"+
                "<p/>"+
               "<div class="+ "header"+">"+ "CONTACT"+ "<br/>"+ "</div>"+ "<br/>"+
                "phone: " + json.phone +"<br/>"+
                "website: " + json.website +"<br/>"+  
                "<p/>"+
                "<div class="+ "header"+">"+ "COMPANY"+ "<br/>"+ "</div>"+ "<br/>"+
                "companey name: " + json.company.name +"<br/>"+
                "catchPhrase: " + json.company.catchPhrase  +"<br/>"+
                "bs: " + json.company.bs +"<hr/>"
                userRequest = userRequest + 1; // prepare for every click iteratively
            }
         )

       } 
    else // use next button
        {             
        defaultvalue = parseInt(document.getElementById("hidenNextValue").value);
         let url = "https://jsonplaceholder.typicode.com/users/"+ defaultvalue;
         fetch(url)
         .then ( data => data.json())
         .then( 
             json => 
                 {
                     document.getElementById('container_users').innerHTML =  
                    "<p/>"+
                    "<div class="+ "header"+">"+ "BASIC INFO"+ "<br/>"+ "</div>"+ "<br/>"+
                    "ID: " + json.id +"<br/>"+
                    "name: " + json.name +"<br/>"+
                    "username: " + json.username +"<br/>"+
                    "email: " + json.email +"<br/>"+
                    "<p/>"+
                    "<div class="+ "header"+">"+ "ADDRESS"+ "<br/>"+ "</div>"+ "<br/>"+
                    "street: " + json.address.street +"<br/>"+
                    "suite: " + json.address.suite +"<br/>"+
                    "city: " + json.address.city +"<br/>"+
                    "zipcode: " + json.address.zipcode+"<br/>"+
                    "<p/>"+
                    "<div class="+ "header"+">"+ "GEOLOCATION"+ "<br/>"+ "</div>"+ "<br/>"+
                    "lat: " + json.address.geo.lat +"<br/>"+
                    "lng: " + json.address.geo.lng +"<br/>"+
                    "<p/>"+
                   "<div class="+ "header"+">"+ "CONTACT"+ "<br/>"+ "</div>"+ "<br/>"+
                    "phone: " + json.phone +"<br/>"+
                    "website: " + json.website +"<br/>"+  
                    "<p/>"+
                    "<div class="+ "header"+">"+ "COMPANY"+ "<br/>"+ "</div>"+ "<br/>"+
                    "companey name: " + json.company.name +"<br/>"+
                    "catchPhrase: " + json.company.catchPhrase  +"<br/>"+
                    "bs: " + json.company.bs +"<hr/>"
    
                    defaultvalue = parseInt(defaultvalue)+1; // prepare for next request
                    document.getElementById("hidenNextValue").value = defaultvalue; // ready for next request
                 }
         
              )
        }  
 
event.preventDefault();
}
 
// list all Users from response object when page loads
async function renderUsers(event) {
    let Users = await getUsers();  
    let html = '';
    Users.forEach(user => {
        let row = `<div class="todo">       
                            <p>${user.id}${`.`} ${user.name} ${`-`} ${user.username}<p>
                            <hr>
                    </div>`;

        html += row;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
   event.preventDefault();
}

// load Userslist when page loads
renderUsers();