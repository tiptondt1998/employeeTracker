const fs = require('fs');
const inquirer = require('inquirer');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/employee.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the employee database.');
  });

function createDB(firstName, lastName, role, manager){
    
    }
    
    function readDB(){
    
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
        case 'View current employees': console.log("Insert sql chart here");
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
                createDB(addEmployeeAnswers.firstName, addEmployeeAnswers.lastName, addEmployeeAnswers.role, addEmployeeAnswers.manager);
            });
        break;
        case 'Update employee info': console.log('Fetching');
    }
})
}

employeeTracker();