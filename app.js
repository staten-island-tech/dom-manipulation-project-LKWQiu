
const DOMselectors = {
    form1 : document.getElementById("form1"),
    fistName : document.getElementById("firstName"),
    Date : document.getElementById("Date"),
    Class : document.getElementById("Class"),
    Image: document.getElementById("Image"),
};
function callvalue(){
    const callfirstName = DOMselectors.fistName.value;
    const callDate = DOMselectors.Date.value;
    const callClass = DOMselectors.Class.value;
    const callImage = DOMselectors.Image.value;

    return{
        firstName: callfirstName,
        Date: callDate,
        Class: callClass,
        Image: callImage,

    };
}
