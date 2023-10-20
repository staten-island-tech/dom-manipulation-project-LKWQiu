const DOMselectors= {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".firstName"),
    h2: document.querySelectorAll("h2"),
};
DOMselectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMselectors.firstName.value);
    DOMselectors.h2.forEach(
<<<<<<< HEAD
        (e1) => {e1.textContent = DOMselectors.firstName.value});
=======
        (h2) => (h2.textContent = DOMselectors.firstName.value)
    );
>>>>>>> 4790d45bcb67961e7b4a8f416bd5be913c2b165b
});