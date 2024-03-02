/*step:
1. Create XMLHttpRequest Object
2. initalize Create request
3. request send
4. Handling server response
5. Response request function
*/

document.getElementById("btnajax").addEventListener("click", makerequest);

let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");


/*
// Ex-01(xhr.responsetype = "json")
function makerequest(){
    console.log("Button clicked");

    // create XMLHttpRequest Object
    const xhr = new XMLHttpRequest();
    // initalize create request
    xhr.open("GET", "data.json", true);

    // json data to object
    xhr.responseType = "json";

    // Handling server response [Anonymous function]
    xhr.onload = function (){
        // response request function
        if (xhr.status === 200 ){
            console.log(xhr.response);
            console.log(xhr.response.name);
            console.log(xhr.response.roll);

            // Showing browser
            n.innerText = xhr.response.name;
            r.innerText = xhr.response.roll;
        }else{
            console.log("Problem Occured")
        }
    };
    // request send
    xhr.send();
}

*/




// Ex- using parse method
function makerequest(){
    console.log("Button clicked")

    // Create XMLHttpRequest Object
    const xhr = new XMLHttpRequest();

    // initalize create request
    xhr.open("GET", "data.json", true)

    // Handling server response 
    xhr.onload = function(){
        // respone request function
        if (xhr.status === 200 ){
            console.log(xhr.response)

            let obj = JSON.parse(xhr.response)         // convert-> json to javascript object [usign parse() method]
            console.log(obj);

            // showing browser
            n.innerText = obj.name;
            r.innerText = obj.roll;


        }else{
            console.log("Problem Occured")
        }
    };
    // request send
    xhr.send()
}