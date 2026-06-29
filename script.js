const form = document.getElementById("studentForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const student = {

            appNo: document.getElementById("appNo").value,
            name: document.getElementById("name").value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            course: document.getElementById("course").value,
            gender: document.getElementById("gender").value

        };

        localStorage.setItem(
            student.appNo,
            JSON.stringify(student)
        );

        alert("Registration Saved Successfully");

        form.reset();
    });
}

/* Load Existing Registration */

window.onload = function(){

    let current =
        sessionStorage.getItem("currentStudent");

    if(current){

        let student =
            JSON.parse(localStorage.getItem(current));

        if(student){

            document.getElementById("appNo").value =
                student.appNo;

            document.getElementById("name").value =
                student.name;

            document.getElementById("mobile").value =
                student.mobile;

            document.getElementById("email").value =
                student.email;

            document.getElementById("course").value =
                student.course;

            document.getElementById("gender").value =
                student.gender;
        }
    }
}