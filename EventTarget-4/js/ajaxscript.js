/* step:
1. Create XMLHttpRequest Object [Ex: const xhr = new XMLHttpRequest()]
2. Initalize create request [Ex: xhr.open("method", "request_file_access or URL", true)]
3. request send [Ex: xhr.send()]
4. Handling server response(onload) [Ex: xhr.onload = function (){}]     note- Anonymous function or array function
5. Response handling request [Ex(1st): if(xhr.readyState === 4){} Ex(next): if(xhr.status === 200){}else{}]
*/


document.getElementById("btnajax").addEventListener("click", makerequest);

function makerequest() {
    console.log("Button Clicked");

    // Create XMLHttpRequest Object
    const xhr = new XMLHttpRequest();

    // initalize Create request
    xhr.open("GET", "data.txt", true);

    xhr.timeout = 2000  // note- time out sob shomoy mili second dekhabe ar open method nichei likthe hobe

    // Event Target[onload, onprogress, onerror, onloadstart, onabort, ontimeout, onloadend]
    // Handling server response [onload]
    xhr.onload = function (){
        // response handling request
        if (xhr.status === 200){
            console.log(xhr);
            console.log(xhr.responseText);
        } else{
            console.log("Problem Occured");
        }
    };

    // Handling server response [onprogress]
    xhr.onprogress = function (e){
        // response handling request
        console.log(e.loaded);
        console.log(e.total);   
    };

    // Handling server response [onerror]
    xhr.onerror = function (){
        console.log("Network not available")
    };

    // Handling server response [onloadstart]
    xhr.onloadstart = function () {
        console.log("Transaction has started....")
    };

    // Handling server response [onloadend]
    xhr.onloadend = function () {
        console.log("Transaction End")
    };

    // Handling server response [onlabort]
    xhr.onabort = function () {
        console.log("Abort...")
    };


    // Handling server response [ontimeout]
    xhr.ontimeout = function () {
        console.log("TimeOut.")
    };


    // request send
    xhr.send()
}