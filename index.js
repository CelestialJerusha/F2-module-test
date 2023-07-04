const StudentsData = document.getElementById('table');


const students = [ 
    { ID: 1, name: 'Alice', email: 'alice@example.com', age: 21, gpa: 8, degree: 'Btech'},
    { ID: 2, name: 'Bob', email: 'bob@example.com', age: 22, gpa: 9, degree: 'MBA' }, 
    { ID: 3, name: 'Charlie', email: 'charlie@example.com', age: 20, gpa: 9, degree:'Arts'}
];

const header = ['ID','Student Name','Email','Age','GPA','Degree'];


let table = document.createElement('table');
let headerRow = document.createElement('tr');
header.map(obj =>{
    let object = document.createElement('th');
    let textNode = document.createTextNode(obj);
    object.appendChild(textNode);
    headerRow.appendChild(object);
});
table.appendChild(headerRow);
students.map(item => {
    let row = document.createElement('tr');
    Object.values(item).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })
    table.appendChild(row);
});
StudentsData.appendChild(table);



function addOnClick(){
    var studentName = document.getElementById('name').value;
    var studentEmail = document.getElementById('email').value;
    var studentAge = document.getElementById('age').value;
    var studentGPA = document.getElementById('gpa').value;
    var studentDegree = document.getElementById('degree').value;
    

    if(studentName && studentEmail && studentAge && studentGPA && studentDegree){
        let id = students.length+1;
        let table = document.querySelector('table');
        let template = `
        <tr>
        <td>${id}</td>
        <td>${studentName}</td>
        <td>${studentEmail}</td>
        <td>${studentAge}</td>
        <td>${studentGPA}</td>
        <td>${studentDegree}<img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png" onclick="editData()"><img src="https://www.svgrepo.com/show/21045/delete-button.svg" onclick="removeItem(${id})"></td>
        </tr>`;
        table.innerHTML += template;
    }
   
}

function removeItem(id){
    let table = document.querySelector("table");
    table.deleteRow(id);
    
}

function searchData(){
var input, filter,table, tr, td, i,txtValue;
input = document.getElementById("searchBar");
filter = input.value.toUpperCase();
table = document.getElementById("table");
tr = table.getElementsByTagName("tr");


for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  

}
searchData();





