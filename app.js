
const DOMselectors = {
    form1 : document.getElementById("form1"),
    Name : document.getElementById("Name"),
    Date : document.getElementById("Date"),
    Class : document.getElementById("Class"),
    Image: document.getElementById("Image"),
    card1: document.querySelector(".card"),
};
function callvalue(){
    const callName = DOMselectors.Name.value;
    const callDate = DOMselectors.Date.value;
    const callClass = DOMselectors.Class.value;
    const callImage = DOMselectors.Image.value;

    return{
        Name: callName,
        Date: callDate,
        Class: callClass,
        Image: callImage,

    };
}
function printvalues(x){
    const HTMLout = `<div class="card" id="card">
        <img src="${x.Image}" alt="Error">
        <p>Name:${x.Name}</p>
        <p>Class:${x.Class}</p>
        <p>Date:${x.Date}</p>
        </div>`;
    DOMselectors.card1.insertAdjacentHTML("beforeend", HTMLout);
}

DOMselectors.form1.addEventListener("submit", function(event){
    event.preventDefault();
    const newcard = callvalue();
    printvalues(newcard);
});