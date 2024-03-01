/* Step:
1. Create XMLHttpRequest Object [Ex: const xhr = new XMLHttpRequest();]
2. Inialize Create Request [Ex: xhr.open = ("method", "request_object_name or url ", true)]
3. send the request   [Ex: xhr.send()]
4. Handling server response [Using Anonymous Function Ex: xhr.onreadystatechange = function (){};]
5. Response Handling function [Ex(1st): if(xhr.readyState === 4){};]
6. Status check [Ex(next): if(xhr.Status === 200){}else{};]
*/


document.getElementById("btnajax").addEventListener("click", makerequest);

/*

function makerequest(){
        console.log("Button clicked")

        // Create XMLHttpRequest Object. request to the server with JavaScript
        const xhr = new XMLHttpRequest();

        // inialize Create request [Ex: xhr.open = ("method", "request_object_name or url ", true)]
        xhr.open("GET", "data.txt", true);

        // Handling server response [Using Anonoymous function or Ex(Arry function): xhr.onreadystatechange = () => {}]
        xhr.onreadystatechange = function () {
                console.log("readyState", xhr.readyState);
                // Response Handling function [4 means-> XMLHttpRequest.DONE]
                if (xhr.readyState === 4){
                        // status check
                        if (xhr.status === 200){
                                console.log(xhr);
                                console.log(xhr.responseText);

                        } else{
                                console.log("Problem Occured")
                        }
                }
        };
        // send request
        xhr.send()

}


*/




// Specific readyState check

function makerequest(){
        console.log("Button Clicked");

        // Create XMLHttpRequest Object
        const xhr = new XMLHttpRequest();

        // 1st-> Check ready state
        if (xhr.readyState === 0){
                console.log("Before Initalize for stage(unsent) 0 :", xhr.readyState);
        }

        // initalize create request
        xhr.open("GET", "data.txt", true);

        // 2nd-> Check ready state
        if (xhr.readyState === 1){
                console.log("After Initalize for stage(opened) 1 :", xhr.readyState);
        }

        // Handling server response[using Array function]
        xhr.onreadystatechange = () => {
                // 3rd-> Check ready state
                if (xhr.readyState === 2){
                        console.log("Header Receive for stage(recieve) 2 :", xhr.readyState);
                }
                // 4th-> Check ready state
                if (xhr.readyState === 3){
                        console.log("Loding request for stage(recieve) 3 :", xhr.readyState);
                }

                // 5th -> check ready state
                // response handiling function
                if (xhr.readyState === 4){
                        if(xhr.status === 200){
                                console.log(xhr);
                                console.log(xhr.responseText);
                        }else{
                                console.log("Some isshus this code")
                        }
                }
        };
        // send request
        xhr.send();
}