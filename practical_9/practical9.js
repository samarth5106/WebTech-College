function validateForm() {
let name = document.getElementById("name").value.trim();
let dob = document.getElementById("dob").value;
let email = document.getElementById("email").value.trim();
let mobile =
document.getElementById("mobile").value.trim();
let error = document.getElementById("error");
error.innerHTML = "";
let nameRegex = /^[A-Za-z ]+$/;
if (!nameRegex.test(name) || name.length < 6) {
error.innerHTML = "❌ Name must be at least 6 letters and contain alphabets only.";}
return false;
}

let dobDate = new Date(dob);
let today = new Date();
let age = today.getFullYear() - dobDate.getFullYear();
let monthDiff = today.getMonth() - dobDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() <
dobDate.getDate())) {
age--;
}
if (isNaN(dobDate) || age < 18) {
error.innerHTML = "❌ Age must be 18 or older.";
return false;
}
let emailRegex =
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
if (!emailRegex.test(email)) {
error.innerHTML = "❌ Please enter a valid email address.";

return false;
}
let mobileRegex = /^[0-9]{10}$/;
if (!mobileRegex.test(mobile)) {
error.innerHTML = "❌ Mobile number must contain exactly 10 digits.";

return false;
}
let course1 = document.getElementById("course1").checked;
let course2 = document.getElementById("course2").checked;
let course3 = document.getElementById("course3").checked;
if (!course1 && !course2 && !course3) {
error.innerHTML = "❌ Please select at least one course.";

return false;
}
alert("✅ Form submitted successfully!");
return true;