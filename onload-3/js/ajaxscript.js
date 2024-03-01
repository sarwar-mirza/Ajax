/* step:
1. Create XMLHttpRequest Object [Ex: const xhr = new XMLHttpRequest()]
2. Initalize create request [Ex: xhr.open("method", "request_file_access or URL", true)]
3. request send [Ex: xhr.send()]
4. Handling server response(onload) [Ex: xhr.onload = function (){}]     note- Anonymous function or array function
5. Response handling request [Ex(1st): if(xhr.readyState === 4){} Ex(next): if(xhr.status === 200){}else{}]
*/

document.getElementById("btnajax").addEventListener("click", makerequest);

function makerequest() {
    console.log("Button clicked")

    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // initalize create request
    xhr.open("GET", "data.txt", true);

    // Handling server response [Focusing topic - onload]
    xhr.onload = function () {
        // response handling request
        if (xhr.status === 200){
            console.log(xhr);
            console.log(xhr.responseText);
        } else{
            console.log("problem occured")
        }
    };
    // request send
    xhr.send()
}