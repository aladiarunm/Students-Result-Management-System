var count = 0;
var students = []; 
var global_id;
/*function addStudent(){
 
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;

    if(document.querySelector("#submit").innerText == "Edit Student"){
        console.log("this will edit and not add");
        console.log(global_id);
        let index;

        for (let i = 0; i < students.length; i++) {
            if (students[i]['ID'] == global_id) {
                index=i;
                break;
            }
        }

        let studentobj = students[index];

        studentobj['name'] = nameValue;
        studentobj['email'] = emailValue;
        studentobj['grade'] = gradeValue;
        studentobj['age'] = ageValue;
        studentobj['degree'] = degreeValue;

        students[index] = studentobj;

        showTable();
        document.querySelector("#submit").innerHTML = "Add Student";

            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('age').value="";
            document.getElementById('grade').value="";
            document.getElementById('degree').value="";
        
     return;

    }
    if(nameValue=='' || emailValue=='' || ageValue=='' || gradeValue =='' || degreeValue==""){
        alert("All fields are required!")
        return;
    }
    count++;

    students.push({
        ID:count,
        name:nameValue,
        email:emailValue,
        age:ageValue,
        grade:gradeValue,
        degree:degreeValue
    });


    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('age').value="";
    document.getElementById('grade').value="";
    document.getElementById('degree').value="";
    console.log(students);
    showTable();
}*/

//test
function addStudent() {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;

    if (nameValue === '' || emailValue === '' || ageValue === '' || gradeValue === '' || degreeValue === '') {
        alert("All fields are required!");
        return;
    }

    let formData = new FormData();
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("age", ageValue);
    formData.append("grade", gradeValue);
    formData.append("degree", degreeValue);

    fetch('add_student.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        fetchStudents(); // Reload table after adding
    })
    .catch(error => console.error('Error:', error));

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('degree').value = "";
}


/*
function showTable(){
    const table = document.getElementById('tbody');
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

    table.value="";
    students.forEach((student)=>{

        const row = document.createElement("tr");
        var keys=Object.keys(student);

        var id = document.createElement('td');
        const name = document.createElement('td');
        const email = document.createElement('td');
        const age = document.createElement('td');
        const grade = document.createElement('td');
        const degree = document.createElement('td');

        keys.forEach((key)=>{
            if(key=='ID'){
                id.innerHTML = student[key];
            }
            else if(key=='name'){
                name.innerHTML = student[key];
            }
            else if(key=='email'){
                email.innerHTML = student[key];
            }
            else if(key=='age'){
                age.innerHTML = student[key];
            }
            else if(key=='grade'){  
                grade.innerHTML = student[key];
            }
            else
            degree.innerHTML = `<div class='degree'><div>${student[key]}</div> <div class="icons"><a onClick="edit(${student['ID']})" class='fa'>&#xf044;</a> <a onClick="del(${student['ID']})" class='fa'>&#xf1f8;</a> </div></div> `;

            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(email);
            row.appendChild(age);
            row.appendChild(grade);
            row.appendChild(degree);       
        })

        table.appendChild(row);
    })
}
*//*
function fetchStudents() {
    fetch('fetch_students.php')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('tbody');
            table.innerHTML = ""; // Clear existing data

            data.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.age}</td>
                    <td>${student.grade}</td>
                    <td>${student.degree}</td>
                `;
                table.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Load students when page loads
window.onload = fetchStudents;

*/
function fetchStudents() {
    fetch('fetch_students.php')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('tbody');
            table.innerHTML = ""; // Clear existing data

            data.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.age}</td>
                    <td>${student.grade}</td>
                    <td>
                        <div class='degree'>
                            <div>${student.degree}</div> 
                            <div class="icons">
                                <a onClick="editStudent(${student.id})" class='fa'>&#xf044;</a> 
                                <a onClick="deleteStudent(${student.id})" class='fa'>&#xf1f8;</a>
                            </div>
                        </div>
                    </td>
                `;
                table.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}
window.onload = fetchStudents;


function search(){
  var input, filter, table, tr, td, i, txtValue,txtValue1,txtValue2;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("tbody");
  tr = table.getElementsByTagName("tr");


  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td1 = tr[i].getElementsByTagName("td")[2];
    td2 = tr[i].getElementsByTagName("td")[5];
    if (td || td1 || td2) {
      txtValue = td.textContent || td.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function edit(id) {
    let student;
    console.log(id);
    for (let i = 0; i < students.length; i++) {
        if (students[i]['ID'] == id) {
            student = students[i];
            break;
        }
    }

    document.querySelector("#name").value = student['name'];
    document.querySelector("#email").value = student['email'];
    document.querySelector("#grade").value = student['grade'];
    document.querySelector("#age").value = student['age'];
    document.querySelector("#degree").value = student['degree'];

    document.getElementById("submit").innerText = "Edit Student";

    global_id=id;
}

function del(id){
    students.forEach((student,index) => {
        if(student['ID']==id){
            students.splice(index,1);
            showTable();
        }
    })
}

function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) {
        return;
    }

    fetch('delete_student.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${id}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        fetchStudents(); // Refresh table
    })
    .catch(error => console.error('Error:', error));
}

function editStudent(id) {
    fetch('get_student.php?id=' + id)
        .then(response => response.json())
        .then(student => {
            document.getElementById("name").value = student.name;
            document.getElementById("email").value = student.email;
            document.getElementById("age").value = student.age;
            document.getElementById("grade").value = student.grade;
            document.getElementById("degree").value = student.degree;
            document.getElementById("submit").innerText = "Update Student";
            document.getElementById("submit").setAttribute("onclick", `updateStudent(${student.id})`);
        })
        .catch(error => console.error('Error:', error));
}

function updateStudent(id) {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;

    if (nameValue === '' || emailValue === '' || ageValue === '' || gradeValue === '' || degreeValue === '') {
        alert("All fields are required!");
        return;
    }

    let formData = new FormData();
    formData.append("id", id);
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("age", ageValue);
    formData.append("grade", gradeValue);
    formData.append("degree", degreeValue);

    fetch('update_student.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        fetchStudents(); // Refresh table
        document.getElementById("submit").innerText = "Add Student";
        document.getElementById("submit").setAttribute("onclick", "addStudent()");
    })
    .catch(error => console.error('Error:', error));
}
