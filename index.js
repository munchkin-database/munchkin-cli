const package = require('./package.json')
const chalk = require('chalk')
const figlet = require('figlet')
const clear = require('clear')
const {Command} = require('commander')

// Init
const program = new Command()

// Version
program.version(package.version)

// Welcome banner
program.command('welcome')
    .description('Show welcome banner')
    .action(()=>{
        clear()
        figlet('MUNCHKIN-CLI‌', function(err, data) {
            if (err) {
                console.log(chalk.red('Something went wrong...'));
                console.dir(err);
                return;
            }
            console.log(chalk.blueBright(data+package.version))
        });
        
    })

program.parse(process.argv)