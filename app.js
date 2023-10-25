document.addEventListener("DOMContentLoaded", function() {
    function DOMselectors(){
        var form1 = document.getElementById("form1");
        var firstName = form1.elements["firstName"].value;
        var Date = form1.elements["Date"].value;
        var Class = form1.elements["Class"].value;
        return {
            firstName: firstName,
            Date: Date,
            Class: Class
        };
    };
    

    document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault();
        
        var formValues = DOMselectors();

        document.getElementById("in1").innerHTML = formValues.firstName;
        document.getElementById("in2").innerHTML = formValues.Date;
        document.getElementById("in3").innerHTML = formValues.Class;
    });
});