/*step:
1. Create XMLHttpRequest Object
2. initalize create request
3. request send
4. Handling server response
5. Response request function
*/

document.getElementById("btnajax").addEventListener("click", makerequest);


function makerequest(){
    console.log("Button clicked");

    // Create XMLHttpRequest Object
    const xhr = new XMLHttpRequest();

    // initalize create request
    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true)

    // json data to javascript object
    xhr.responseType = "json";

    // Handling server response [Anonymous function]
    xhr.onload = function (){
        // response request function
        if (xhr.status === 200){
            console.log(xhr.response);
            document.getElementById("info").innerText = "Data inserted";
        }
        else{
            console.log("Problem occurred")
        }
    };
    // request send
    mydata = {"name":"Sadiya","salary":"10","age":"25"}
    xhr.send(mydata);
}