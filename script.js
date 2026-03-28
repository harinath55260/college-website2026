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
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

setInterval(showSlide, 4000);

function showDept(dept) {

let data = {
    cs: [
        {name: "Mahesh Sir(HOD)", pdf: "pdfs/computers 6 Mahesh.pdf"},
        {name: "Rajanikanth Sir", pdf: "pdfs/profile rajanikanth.pdf"},
         {name: "kavitha medam", pdf: "pdfs/computers 4 Kavitha.pdf"},
        {name: "Devendra nayak Sir", pdf: "pdfs/devendra.pdf"},
        {name: "Megha vardhan Sir", pdf: "pdfs/megha.pdf"},
        {name: "Krishna hasan Sir", pdf: "pdfs/computers 5 Krishna hasan.pdf"},
        {name: "Moulali Sir", pdf: "pdfs/computers 7 moulali.pdf"},
        {name: "Swethann Sir", pdf: "pdfs/computers 10 swethan.pdf"} ,
        {name: "Teja Sir", pdf: "pdfs/computers 11 teja.pdf"},
    
    ],
    commerce: [
        {name: "Anitha Madam", pdf: "pdfs/anitha.pdf"}
    ],
    physics: [
        {name: "Ravi Sir", pdf: "pdfs/ravi.pdf"}
    ],
    chemistry: [
        {name: "Lakshmi Madam", pdf: "pdfs/lakshmi.pdf"}
    ],
    maths: [
        {name: "Kiran Sir", pdf: "pdfs/kiran.pdf"}
    ]
};

let facultyDiv = document.getElementById("facultyList");
facultyDiv.innerHTML = "<h3>Faculty Members</h3>";

data[dept].forEach(fac => {
    facultyDiv.innerHTML += `
        <p>
            <a href="${fac.pdf}" target="_blank">
                ${fac.name}
            </a>
        </p>
    `;
});

}
document.addEventListener("DOMContentLoaded", function(){
    showPage("home");
});
function toggleMenu(){
    let nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}









