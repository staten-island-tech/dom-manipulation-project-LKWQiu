
const DOMselectors = {
    form1 : document.getElementById("form1"),
    Name : document.getElementById("Name"),
    Range : document.getElementById("Range"),
    HP : document.getElementById("HP"),
    Class : document.getElementById("Class"),
    Image: document.getElementById("Image"),
    card1: document.querySelector(".card"),
};
function callvalue(){
    const callName = DOMselectors.Name.value;
    const callRange = DOMselectors.Range.value;
    const callClass = DOMselectors.Class.value;
    const callImage = DOMselectors.Image.value;
    const callHP = DOMselectors.HP.value;

    return{
        Name: callName,
        Range: callRange,
        Class: callClass,
        Image: callImage,
        HP: callHP,

    };
}

function byevalue(){
    DOMselectors.Name.value= "";
    DOMselectors.Range.value= "";
    DOMselectors.Class.value= "";
    DOMselectors.Image.value= "";
    DOMselectors.HP.value= "";
}

function printvalues(x){
    const HTMLout = `<div class="ncard" id="ncard">
        <img src="${x.Image}" alt="Error" class="img">
        <p>Name:${x.Name}</p>
        <p>Class:${x.Class}</p>
        <p>Range:${x.Range}</p>
        <p>HP:${x.HP}</p>
        <button class="removebutton">Remove</button>
        </div>`;
    DOMselectors.card1.insertAdjacentHTML("beforeend", HTMLout);
}

DOMselectors.form1.addEventListener("submit", function(event){
    event.preventDefault();
    const newcard = callvalue();
    printvalues(newcard);
    byevalue();
});

function RemoveCard(event){
    if(event.target.classList.contains("removebutton")){
        event.target.closest(".ncard").remove()
    }
}
DOMselectors.card1.addEventListener("click", RemoveCard);