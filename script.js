function showPage(page){

let pages = document.querySelectorAll("section");

pages.forEach(function(p){
p.style.display = "none";
});

document.getElementById(page).style.display = "block";

}


// FORM SUBMIT
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("admissionForm").addEventListener("submit", function(e){

e.preventDefault();

let form = e.target;

let data = [
form.firstname.value,
form.middlename.value,
form.lastname.value,
form.fathername.value,
form.mothername.value,
form.mobile.value,
form.email.value
];

let csv = "First Name,Middle Name,Last Name,Father Name,Mother Name,Mobile,Email\n";
csv += data.join(",");

let blob = new Blob([csv], {type:"text/csv"});

let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "student_admission.csv";
a.click();

// success message
alert("Student Registered Successfully!");

});
});