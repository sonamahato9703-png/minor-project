// ====================== ADMIN DASHBOARD ======================

// Show selected section
function showSection(id) {
  document.querySelectorAll(".section").forEach((sec) => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ---------- Students ----------
function addStudent(e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const roll = document.getElementById("studentRoll").value;
  const dept = document.getElementById("studentDept").value;

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push({ name, roll, dept });
  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("studentForm").reset();
  loadStudents();
  updateCounts();
}

function loadStudents() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.forEach((s) => {
    tbody.innerHTML += `<tr><td>${s.name}</td><td>${s.roll}</td><td>${s.dept}</td></tr>`;
  });
}

// ---------- Subjects ----------
function addSubject(e) {
  e.preventDefault();
  const name = document.getElementById("subjectName").value;
  const code = document.getElementById("subjectCode").value;

  let subjects = JSON.parse(localStorage.getItem("subjects")) || [];
  subjects.push({ name, code });
  localStorage.setItem("subjects", JSON.stringify(subjects));

  document.getElementById("subjectForm").reset();
  loadSubjects();
  updateCounts();
}

function loadSubjects() {
  const tbody = document.querySelector("#subjectTable tbody");
  tbody.innerHTML = "";
  const subjects = JSON.parse(localStorage.getItem("subjects")) || [];
  subjects.forEach((s) => {
    tbody.innerHTML += `<tr><td>${s.name}</td><td>${s.code}</td></tr>`;
  });
}

// ---------- Results ----------
function addResult(e) {
  e.preventDefault();
  const roll = document.getElementById("resultRoll").value;
  const subject = document.getElementById("resultSubject").value;
  const marks = document.getElementById("resultMarks").value;

  let results = JSON.parse(localStorage.getItem("results")) || [];
  results.push({ roll, subject, marks });
  localStorage.setItem("results", JSON.stringify(results));

  document.getElementById("resultForm").reset();
  loadResults();
  updateCounts();
}

function loadResults() {
  const tbody = document.querySelector("#resultTable tbody");
  tbody.innerHTML = "";
  const results = JSON.parse(localStorage.getItem("results")) || [];
  results.forEach((r) => {
    tbody.innerHTML += `<tr><td>${r.roll}</td><td>${r.subject}</td><td>${r.marks}</td></tr>`;
  });
}

// ---------- Overview ----------
function updateCounts() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const subjects = JSON.parse(localStorage.getItem("subjects")) || [];
  const results = JSON.parse(localStorage.getItem("results")) || [];

  document.getElementById("countStudents").textContent = students.length;
  document.getElementById("countSubjects").textContent = subjects.length;
  document.getElementById("countResults").textContent = results.length;
}

// Load Dashboard Data
function loadAdminDashboard() {
  if (localStorage.getItem("adminLoggedIn") !== "true") {
    alert("Please log in as admin first!");
    window.location.href = "admin-login.html";
    return;
  }
  loadStudents();
  loadSubjects();
  loadResults();
  updateCounts();
}
