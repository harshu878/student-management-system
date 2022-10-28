// All the JS Code for the Add Students Page Goes Here
let admissionArr=JSON.parse(localStorage.getItem("admission")) || [];
document.querySelector("form").addEventListener("submit", myfunction);


function myfunction(event)
{
    event.preventDefault();
    let admissionObj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
        gender:document.querySelector("#gender").value,
        course:document.querySelector("#course").value
    };
    admissionArr.push(admissionObj);
    localStorage.setItem("admission", JSON.stringify(admissionArr));
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
    phone:document.querySelector("#phone").value="";
    document.querySelector("#gender").value="Male";
    document.querySelector("#course").value="Web-Development";
}
