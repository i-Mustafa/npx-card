#!/usr/bin/env node
const chalk = require('chalk');
const boxen = require('boxen');


const info = {
    space:("               "),
    Nspace:("     "),
    name: chalk.black.bgWhiteBright(" Mohammed Mustafa "),
    work: chalk.blackBright("      Junior Web Developer at BeCode.org"),
    twitter: chalk.blackBright("   https://twitter.com/Dv_mustafa"),
    labeltwitter: chalk.gray.bold("Twitter:"),
    labelWork: chalk.gray.bold("Work:"),
    linkedin: chalk.blackBright("  https://www.linkedin.com/in/i-mustafa"),
    labelin: chalk.gray.bold("Linkedin:"),
    card: chalk.red.bold("npx mustafa"),
    labelcard: chalk.gray.bold("Card:"),
    


}
    const NEWLINE = "\n";

console.log(
    chalk.redBright(
        boxen(
            [ `${info.space}  ${info.name}`,
            "",
                `${info.labelWork} ${info.work}`,
                `${info.labeltwitter} ${info.twitter}`,
                `${info.labelin} ${info.linkedin}`,
                `${info.labelcard} ${info.Nspace} ${info.card}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "classic",
            },
        ),
    ),
);