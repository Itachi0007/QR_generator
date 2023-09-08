import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
	.prompt([
		{
			type: "input",
			name: "name",
			message: "What is your name?",
		},
	])
	.then((answers) => {
		console.log(answers.name);
		var qr_svg = qr.image(answers.name, {type: "svg"});
		qr_svg.pipe(fs.createWriteStream("i_love_qr.svg"));
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log("Prompt couldn't be rendered in the current environment");
		} else {
			console.log("Something else went wrong", error.message);
		}
	});
