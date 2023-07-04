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
        <td>${studentDegree}<button type="button" onClick='removeItem(${students.id})'><img src="https://www.svgrepo.com/show/21045/delete-button.svg"></button></td>
        </tr>`;
        table.innerHTML += template;
        
    }   
}



