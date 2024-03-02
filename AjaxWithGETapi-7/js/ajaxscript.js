/*step:
1. Create XMLHttpRequest Object
2. initalize create request
3. request send
4. Handling server response
5. Response request function
*/


/*
// Ex-01
document.getElementById("btnajax").addEventListener("click", makerequest);

let t = document.getElementById("title");
let b = document.getElementById("body");

function makerequest(){
    console.log("Button Clicked");

    // create XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // initalize create request [specific data target]
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true)

    // json data to javascript object
    xhr.responseType = "json";

    // Handling server response
    xhr.onload = function(){
        

        // Response request function
        if (xhr.status === 200 ){
            console.log(xhr.response);
            console.log(xhr.response.title);
            console.log(xhr.response.body);

            t.innerHTML = xhr.response.title;
            b.innerText = xhr.response.body;

        }else{
            console.log("Problem Occured");
        }
    };
    // request send
    xhr.send()
}
*/


// Ex-02
document.getElementById("btnajax").addEventListener("click", makerequest);

let table = document.getElementById("table");

function makerequest(){
    console.log("Button Clicked");

    // Create XMLHttpRequest Object
    const xhr = new XMLHttpRequest();

    // Json data to javascript object
    xhr.responseType = "json";

    // inialize Create request
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    // Handling server response[Anonymous function]
    xhr.onload = function(){
        // Response create function
        if(xhr.status === 200 ){
            // console.log(xhr.response);

            var x = xhr.response
            for( let i=0; i<x.length; i++){
                table.innerHTML +=
                "<thead><tr><td>" +
                x[i].id +
                "</td><td>" +
                x[i].title +
                "</td><td>" +
                x[i].body +
                "</td></tr></thead>"
            }

        }
        else{
            console.log("problem Occured");
        }
    };

    // request send
    xhr.send();
}