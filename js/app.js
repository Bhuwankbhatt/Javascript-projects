console.log("Hey I am creating my own reminder note")
console.log("Whats wrong?")
showText();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {

    let addText = document.getElementById("addTxt");
    let addTitle=document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj=
    {
        title:addTitle.value,
        text:addText.value
    }


    notesObj.push(myObj);
    
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    addTitle.value = "";
    console.log(notesObj);

    showText();


})
function showText() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card my-4 mx-3" style="width: 18rem;">

                <div class="card-body" style="border: solid blue;">
                    <h5 class="card-title">${element.title} </h5>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea class="form-control" style="border: solid rgb(100, 100, 158);" id="addTxt"
                            rows="3">${element.text}</textarea>
                    </div>
                    <button  id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary my-2 " id="addBtn">Delete note</button>
                </div>
            </div>`;



    } 

    );
    let notesElem=document.getElementById("notes");
    if(notesObj.length!=0){
        notesElem.innerHTML=html;
    } 
    else{
        notesElem.innerHTML=`You dont have any notes right now. Please add some`;
    }

}

function deleteNote(index) {
    console.log("I am deleting:")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showText();
    
}

let search=document.getElementById("searchTxt");
search.addEventListener('input',function () {

    let inputVal=search.value.toLowerCase();
    let card_body=document.getElementsByClassName("card-body");
    Array.from(card_body).forEach(function (element) {

        let cardTxt=element.getElementsByTagName("textarea")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        
    } 
        
    );
    
})