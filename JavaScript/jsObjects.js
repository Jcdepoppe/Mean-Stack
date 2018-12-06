function printStudents(students) {
    for (var i = 0; i < students.length; i++) {
        var str = ""
        str += "Name: " + students[i].name;
        str += ", Cohort: " + students[i].cohort;
        console.log(str);

    }
}

let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

// printStudents(students);

function printEmployees(users){
    console.log("EMPLOYEES");
    var count = 0;
    for(var i = 0; i < users.employees.length; i++){
        count++;
        var length = users.employees[i].first_name.length + users.employees[i].last_name.length;
        console.log(count + " - " + users.employees[i].last_name.toUpperCase() + ", " + users.employees[i].first_name.toUpperCase() + " - " + length);
    }
    console.log("MANAGERS");
    count = 0;
    for(var i = 0; i < users.managers.length; i++){
        count++;
        var length = users.managers[i].first_name.length + users.managers[i].last_name.length;
        console.log(count + " - " + users.managers[i].last_name.toUpperCase() + ", " + users.managers[i].first_name.toUpperCase() + " - " + length);
    }

}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 printEmployees(users);