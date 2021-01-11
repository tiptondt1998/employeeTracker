const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tipton',
  password: 'root',
  database: 'employee'
});
connection.connect(function(err)
{
    if (err)
    throw err;
    employeeTracker();

})

function obtainRoleId(roleName){
    const query =  `SELECT id FROM role WHERE role.id = ?`;
    const args = [roleName];
    const rows = connection.query(query,args);
    return rows.id;
}

function obtainEmployeeId(employeeName){
    if(employeeName === null || ''){
        return null;
    }
    const firstName = employeeName.split(' ')[0];
    const lastName = employeeName.split(' ')[1];
    const query = `SELECT id FROM employee WHERE first_name = ? AND last_name = ?`;
    const rows = connection.query(query, [firstName, lastName], (err) => {
        if(err){
         console.log(err);
            throw err;
        }
        else{
            return rows.id;
        }
    });
}

    //add an employee
function insertEmployee (firstName, lastName, role, manager) {
    const roleId = obtainRoleId(role);
    const managerId = obtainEmployeeId(manager);
    const query = `INSERT INTO employee (first_name, last_name, role_id)
            VALUES (?, ?, ?)`;
    const args = [firstName, lastName, role];
    const rows = connection.query(query, args, (error) => {
        if (error) {
            console.log(error)
            throw error
        } else {
            console.log(`${firstName} ${lastName} added.`)
            return rows;
            employeeTracker();
        }
    });

};

    function readDB(){
        const query = `SELECT * FROM employee`;
        const rows = connection.query(query);
        console.table(rows);
    }
    
    function updateDB(){
    
    }
    
    function deleteDB(){
    
    }

function employeeTracker(){

    console.log(
        '#######                                                    #######');                                           
    console.log(
        '#       #    # #####  #       ####  #   # ###### ######       #    #####    ##    ####  #    # ###### #####');
    console.log(
        '#       ##  ## #    # #      #    #  # #  #      #            #    #    #  #  #  #    # #   #  #      #    #');
    console.log(
        '#####   # ## # #    # #      #    #   #   #####  #####        #    #    # #    # #      ####   #####  #    #'); 
    console.log(
        '#       #    # #####  #      #    #   #   #      #            #    #####  ###### #      #  #   #      #####');
    console.log(
        '#       #    # #      #      #    #   #   #      #            #    #   #  #    # #    # #   #  #      #   #');  
    console.log(
        '####### #    # #      ######  ####    #   ###### ######       #    #    # #    #  ####  #    # ###### #    #' );
inquirer.prompt([

    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: ['View current employees', 'Add employee', 'Update employee info']
    }
]).then(answers => {
    switch(answers.choices){
        case 'View current employees':
            readDB();
            employeeTracker();
        break;
        case 'Add employee':
            inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter first name: '
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter last name: '
            },
            {
                type: 'input',
                name: 'role',
                message: 'Enter role: '
            },
            {
                type:'input',
                name:'manager',
                message:'Enter manager name: '
            }
            ]).then(addEmployeeAnswers => {
                insertEmployee(addEmployeeAnswers.firstName, addEmployeeAnswers.lastName, addEmployeeAnswers.role,addEmployeeAnswers.manager);
                employeeTracker();
            });
        break;
        case 'Update employee info': console.log('Fetching');
    }
})
}