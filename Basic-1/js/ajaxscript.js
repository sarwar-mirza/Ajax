//1. Create XMLHttpRequest Object. request to the server with JavaScript

//2. Initialize create Request. Syntax object.open("method", "send_request_file", true)

//3. if mehtod type POST then you may have to set Request Header before sending request
            // Syntax: xhr.setRequestHeader("Context-type", "application/JSON")

// 4. send the request. Syntax: xhr.send(body);

// Handling Server Response(after making a request, you will recevie a response back)
    // 1. At this stage, you need to tell the XMLHttpRequest object which JavaScript function will handle the
            // response, by setting the onreadystatechange property of the object and naming it after the function to call when the request changes state.
            // Syntax: xhr.onreadystatechange = nameOfTheFunction 
            // Ex-1: xhr.onreadystatechange = showdata; -> function showdata(){}
            // Ex-2: xhr.onreadystatechange = function(){}; [note-Anonymous function]
            // Ex-3: xhr.onreadystatechange = () => {}; [note-Arrow function]

// Response Handling Function 
        //1st: Ex: if(xhr.readyState === XMLHttpRequest.DONE){} else{}
        //next: Ex: if(xhr.status === 200){} else{}

// Property
    // xhr.responseText - it returns the server response as a string of text
    // xhr.responseXML - it returns the response as an XMLDocument object you can traverse with Javascript DOM function



document.getElementById("btnajax").addEventListener('click', makerequest);

function makerequest(){
    console.log("Button clicked")

    // Create XMLHttpRequest Object. request to the server with JavaScript 
    const xhr = new XMLHttpRequest();
    // Initialize create Request. Syntax object.open("method", "send_request_file", true)
    xhr.open("GET", "data.txt", true);  // xhr.open("GET", "data.txt", Synchronous)

    // Handling server response [using Anonymous function]
    xhr.onreadystatechange = function(){
        // Response handling function
        if(xhr.readyState === 4){

            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
            }else{
                console.log("Problem Occured")
            }
        
        }
    };
    // send the request
    xhr.send();
}

