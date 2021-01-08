const fs = require('fs');
const inquirer = require('inquirer');


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
            }
            ]);
        break;
        case 'Update employee info': console.log('Fetching');
    }
})
}
employeeTracker();