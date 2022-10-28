// All the Code for the Admitted page goes here
let admission_acceptedArr=JSON.parse(localStorage.getItem("admission-accepted")) || [];

admission_acceptedArr.forEach(function (element)
    {
        let tr=document.createElement("tr");
        let name=document.createElement("td");
        name.innerText=element.name;
        let gender=document.createElement("td");
        gender.innerText=element.gender;
        let email=document.createElement("td");
        email.innerText=element.email;
        let mobile=document.createElement("td");
        mobile.innerText=element.phone;
        let course=document.createElement("td");
        course.innerText=element.course;
        tr.append(name,email,course,gender,mobile);
        document.querySelector("tbody").append(tr);
    });