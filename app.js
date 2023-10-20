const DOMselectors= {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".firstName"),
    h2: document.querySelectorAll("h2")
};
DOMselectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMselectors.firstName.value);
    DOMselectors.h2.forEach(
        (e1) => {e1.textContent = DOMselectors.firstName.value});
});