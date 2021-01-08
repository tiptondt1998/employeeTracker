const fs = require('fs');
const inquirer = require('inquirer');


function employeeTracker(){
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
        case 'Add employee': console.log('Execute sql transaction');
        break;
        case 'Update employee info': console.log('Fetching');
    }
})
}
employeeTracker();