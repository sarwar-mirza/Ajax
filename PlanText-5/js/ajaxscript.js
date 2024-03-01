/*step"
1. Create XMLHttpRequest Object
2. initalize create request
3. request send
4. Handling server response
5. Response handling request
*/


document.getElementById("btnajax").addEventListener("click", makerequest);

var data_get = document.getElementById("new_data");


function makerequest(){
    console.log("Button Clicked")
    // create XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // initalize create request
    xhr.open("GET", "data.txt", true);

    // Handling server response [Anonymous function]
    xhr.onload = function () {
        // response handling function
        if (xhr.status === 200){
            console.log(xhr.responseText);
            data_get.innerText = xhr.responseText;      // showing browser 
        }else{
            console.log("Problem Occured")
        }
    };

    // request send
    xhr.send()
}