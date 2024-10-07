// Function to add new skill to the list
function addSkill() {
    var skill = document.getElementById("newSkill").value;
    var skillsList = document.getElementById("skillsList");
    var newSkillItem = document.createElement("div");
    newSkillItem.textContent = skill;
    skillsList.appendChild(newSkillItem);
    document.getElementById("newSkill").value = "";
}

// Function to add new education to the list
function addEducation() {
    var education = document.getElementById("newEducation").value;
    var educationList = document.getElementById("educationList");
    var newEducationItem = document.createElement("div");
    newEducationItem.textContent = education;
    educationList.appendChild(newEducationItem);
    document.getElementById("newEducation").value = "";
}

// Function to add new experience to the list
function addExperience() {
    var experience = document.getElementById("newExperience").value;
    var experienceList = document.getElementById("experienceList");
    var newExperienceItem = document.createElement("div");
    newExperienceItem.textContent = experience;
    experienceList.appendChild(newExperienceItem);
    document.getElementById("newExperience").value = "";
}

// Function to generate PDF from form details
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Personal details form
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cellnumber = document.getElementById('cellnumber').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;

    // Education details
    const institution = document.getElementById('institution').value;
    const degree = document.getElementById('degree').value;
    const fieldOfStudy = document.getElementById('fieldofstudy').value;
    const startDate = document.getElementById('startdate').value;
    const endDate = document.getElementById('enddate').value;

    // Adding content to PDF
    doc.text('Personal Details', 10, 10);
    doc.text(`Surname: ${surname}`, 10, 20);
    doc.text(`First Name: ${name}`, 10, 30);
    doc.text(`Email: ${email}`, 10, 40);
    doc.text(`Cell Number: ${cellnumber}`, 10, 50);
    doc.text(`Date of Birth: ${dob}`, 10, 60);
    doc.text(`Address: ${address}`, 10, 70);
    doc.text(`Gender: ${gender}`, 10, 80);

    doc.text('Education Details', 10, 100);
    doc.text(`Institution: ${institution}`, 10, 110);
    doc.text(`Degree: ${degree}`, 10, 120);
    doc.text(`Field of Study: ${fieldOfStudy}`, 10, 130);
    doc.text(`Start Date: ${startDate}`, 10, 140);
    doc.text(`End Date: ${endDate}`, 10, 150);

    // Save the PDF
    doc.save('personal_details.pdf');
}
