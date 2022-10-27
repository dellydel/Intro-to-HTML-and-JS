// get todo response object
async function getTodos() {
    let fromUrl = "https://jsonplaceholder.typicode.com/todos";// 
    try {
        let res = await fetch(fromUrl);
        return await res.json();
    } catch (error) {
        console.log(error); // log
    }
}


 function renderTodoById(){
    //let todoCount = 200;   
    let defaultvalue = parseInt(document.getElementById("hidenNextValue").value); // got value when page loaded
    let userRequest = document.getElementById("inputId").value;
    let statusColor = "black"
    if (userRequest !="")
    {
        if( userRequest > 200 ) return; // max exceeded
    let url = "https://jsonplaceholder.typicode.com/todos/"+ userRequest;
    fetch(url)
    .then ( data => data.json())
    .then( 
        json => 
            {
                document.getElementById('title').value = json.title;
                document.getElementById("status").value = json.completed;


                json.completed == true? statusColor="green":statusColor ="red";                                       
                document.getElementById('title').style.color=statusColor;
                document.getElementById('title').style.fontWeight="bold";
                document.getElementById("status").style.color=statusColor;
                document.getElementById('status').style.fontWeight="bold";
            }
         )


       } 
    else // use next button
        {  
           
        defaultvalue = parseInt(document.getElementById("hidenNextValue").value);
         let url = "https://jsonplaceholder.typicode.com/todos/"+ defaultvalue;
         fetch(url)
         .then ( data => data.json())
         .then( 
             json => 
                 {
                   
                     document.getElementById('title').value = json.title;
                     document.getElementById("status").value = json.completed;                    
                     json.completed == true? statusColor="green":statusColor ="red";                                       
                     document.getElementById('title').style.color=statusColor;
                     document.getElementById('title').style.fontWeight=statusColor;
                     document.getElementById("status").style.color=statusColor;
                     document.getElementById('status').style.fontWeight=statusColor;


                     defaultvalue = parseInt(defaultvalue)+1; // prepare for next request
                     document.getElementById("hidenNextValue").value = defaultvalue; // ready for next request
                 }
         
              )
        } // 
 
event.preventDefault();
}
 
// list all todos from response object when page loads
async function renderTodos(event) {
    let todos = await getTodos();  
    let html = '';
       todos.forEach(todo => {
        let row = `<div class="todo">       
                            <p>${todo.id}${`.`} ${todo.title} ${`-`} ${todo.completed}<p>
                            <hr>
                    </div>`;


        html += row;
    });


    let container = document.querySelector('.container');
    container.innerHTML = html;
    event.preventDefault();
}


// load todolist when page loads
renderTodos();




