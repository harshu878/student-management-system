// All the Code for All Students Page Goes Here
let admissionArr=JSON.parse(localStorage.getItem("admission")) || [];
let admission_acceptedArr=JSON.parse(localStorage.getItem("admission-accepted")) || [];
let admission_rejectedArr=JSON.parse(localStorage.getItem("admission-rejected")) || [];

displydata(admissionArr);
// disply data function
function displydata(admissionArr)
{
    document.querySelector("tbody").innerHTML="";
    admissionArr.forEach(function (element)
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
        let accept=document.createElement("td");
        accept.innerText="Accept";
        accept.style.backgroundColor="#027F00"
        accept.style.cursor="pointer";
        accept.addEventListener("click", function()
        {
            foraccept(element);
        });
        let reject=document.createElement("td");
        reject.innerText="Reject";
        reject.style.cursor="pointer";
        reject.addEventListener("click", function()
        {
            forreject(element);
        })
        reject.style.backgroundColor="#FE0000"
        tr.append(name,email,course,gender,mobile,accept,reject);
        document.querySelector("tbody").append(tr);
    });

}


// accept function
function foraccept(element)
{
    event.target.parentNode.remove();
    admission_acceptedArr.push(element);
    localStorage.setItem("admission-accepted", JSON.stringify(admission_acceptedArr));
    let index=(admissionArr.indexOf(element));
    admissionArr.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(admissionArr));
}
//reject function
function forreject(element)
{
    event.target.parentNode.remove();
    admission_rejectedArr.push(element);
    localStorage.setItem("admission-rejected", JSON.stringify(admission_rejectedArr));
    let index=(admissionArr.indexOf(element));
    admissionArr.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(admissionArr));
}
// filter on change 
function changeOnCourse()
{
    let selected=document.querySelector("#filter").value;
    let arr=[];
    admissionArr.map(function (element)
    {
        if(selected=="all")
        {
            arr.push(element);
        }
        if(selected==element.course)
        {
            arr.push(element);
        }

    });
    displydata(arr);
}