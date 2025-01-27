const deleteBtn = document.querySelectorAll('.fa-trash') //declares variable "deleteBtn" which will contains all '.fa-trash' classes
const item = document.querySelectorAll('.item span') //declares variable "item" which will contains all '.item span' classes
const itemCompleted = document.querySelectorAll('.item span.completed') //declares variable "itemCompleted" which will contains all '.item span.completed' classes

Array.from(deleteBtn).forEach((element)=>{  //organizes all elements within variable, 'deleteBtn', into array through a loop through whole array, then adds an event listener to each - specifically a click
    element.addEventListener('click', deleteItem) //when element from array is clicked, invoke 'deleteItem'
}) //closes loop

Array.from(item).forEach((element)=>{ //organizes all elements within variable, 'item', into array through a loop through whole array, then adds an event listener to each - specifically a click
    element.addEventListener('click', markComplete) //when element from array is clicked, invoke 'markComplete'
}) //closes loop

Array.from(itemCompleted).forEach((element)=>{ //organizes all elements within variable, 'itemCompleted', into array through a loop through whole array, then adds an event listener to each - specifically a click
    element.addEventListener('click', markUnComplete) //when element from array is clicked, invoke 'markUnComplete'
}) //closes loop

async function deleteItem(){ //starts function block, with async/await syntax
    const itemText = this.parentNode.childNodes[1].innerText  //'this' refers to the element clicked on. Refer to parent element, then drop down to the child's innerText. Store this inner text in the variable 'itemText'
    try{ //begin try block
        const response = await fetch('deleteItem', { //await response from fetch call
            method: 'delete', //name of method
            headers: {'Content-Type': 'application/json'}, //sets headers for request, specifically json 
            body: JSON.stringify({ //retrieve body of request and returns as json data
              'itemFromJS': itemText //data  is sent to server in the request body
            }) 
          })
        const data = await response.json() //parses response as JSON data
        console.log(data) //console log data variable
        location.reload() //reloads current page to show update

    }catch(err){ //catches and logs errors that may occur
        console.log(err) //console log the error if needed
    }
}

async function markComplete(){ //starts function block, with async/await syntax
    const itemText = this.parentNode.childNodes[1].innerText //'this' refers to the element clicked on. Refer to parent element, then drop down to the child's innerText. Store this inner text in the variable 'itemText'
    try{ //begin try block
        const response = await fetch('markComplete', { //await response from fetch call
            method: 'put', //name of method
            headers: {'Content-Type': 'application/json'}, //sets headers for request, specifically json 
            body: JSON.stringify({ //retrieve body of request and returns as json data
                'itemFromJS': itemText //data  is sent to server in the request body
            })
          })
        const data = await response.json() //parses response as JSON data
        console.log(data)  //console log data variable
        location.reload()  //reloads current page to show update

    }catch(err){  //catches and logs errors that may occur
        console.log(err)  //console log the error if needed
    }
}

async function markUnComplete(){ //starts function block, with async/await syntax
    const itemText = this.parentNode.childNodes[1].innerText //'this' refers to the element clicked on. Refer to parent element, then drop down to the child's innerText. Store this inner text in the variable 'itemText'
    try{ //begin try block
        const response =  await fetch('markUnComplete', { //await response from fetch call
            method: 'put', //name of method
            headers: {'Content-Type': 'application/json'}, //sets headers for request, specifically json 
            body: JSON.stringify({ //retrieve body of request and returns as json data
                'itemFromJS': itemText //data  is sent to server in the request body
            })
          })
        const data = await response.json() //parses response as JSON data
        console.log(data) //console log data variable
        location.reload() //reloads current page to show update

    }catch(err){ //catches and logs errors that may occur
        console.log(err) //console log the error if needed
    }
}