import inquirer from "inquirer";
import chalk from "chalk";
let stocks = {
    Flavor: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    topping: ["Chocolate", "Peanut"],
};
let is_Shop_Open = true; // Set this to false to test the shop closed scenario
console.log(chalk.bold.bgRgb(187, 230, 78)("\n\t\t Welcome to our IceCream Shop \n"));
const order = async (time, work) => {
    if (is_Shop_Open) {
        await new Promise((resolve) => setTimeout(resolve, time));
        work();
    }
    else {
        throw new Error("Our shop is closed");
    }
};
const askQuestion = async () => {
    const answers = {};
    const flavorQuestion = {
        type: "list",
        name: "flavor",
        message: chalk.redBright("What kind of Flavor?"),
        choices: stocks.Flavor,
    };
    answers.flavor = await inquirer.prompt([flavorQuestion]);
    const toppingQuestion = {
        type: "list",
        name: "topping",
        message: chalk.redBright("What kind of topping?"),
        choices: stocks.topping,
    };
    answers.topping = await inquirer.prompt([toppingQuestion]);
    const holderQuestion = {
        type: "list",
        name: "holder",
        message: chalk.redBright("What kind of holder?"),
        choices: stocks.holder,
    };
    answers.holder = await inquirer.prompt([holderQuestion]);
    return answers;
};
const main = async () => {
    const { flavor, topping, holder } = await askQuestion();
    try {
        await order(1000, () => console.log(chalk.yellowBright(`\n\tThis is your selection`)));
        await order(1000, () => console.log(chalk.bold.rgb(255, 126, 5)(`\t1: ${flavor.flavor}`)));
        await order(1000, () => console.log(chalk.bold.rgb(255, 126, 5)(`\t2: ${holder.holder}`)));
        await order(1000, () => console.log(chalk.bold.rgb(255, 126, 5)(`\t3: ${topping.topping}`)));
        ``;
        await order(2000, () => console.log(chalk.bold.rgb(125, 209, 134)(`\n\tProcessing the Order....`)));
        await order(3000, () => console.log(chalk.bold.rgb(125, 209, 134)(`\n\t${chalk.yellow(`"${flavor.flavor}"`)} was selected`)));
        await order(1000, () => console.log(chalk.bold.rgb(125, 209, 134)("\n\tProduction has started")));
        await order(4000, () => console.log(chalk.bold.rgb(125, 209, 134)("\n\tThe flavor was prepared")));
        await order(2000, () => console.log(chalk.bold.rgb(125, 209, 134)(`\n\tPutting ${stocks.liquid[0]} and ${stocks.liquid[1]}`)));
        await order(2000, () => console.log(chalk.bold.rgb(246, 255, 79)("\n\n\tStarting the machine.....\n")));
        await order(4000, () => console.log(chalk.bold.rgb(125, 209, 134)("\n\tIce-cream is ready!")));
        await order(2000, () => console.log(chalk.bold.rgb(125, 209, 134)(`\n\tIce-cream placed on ${chalk.yellow(`"${holder.holder}"`)}`)));
        await order(3000, () => console.log(chalk.bold.rgb(125, 209, 134)(`\n\t${chalk.yellow(`"${topping.topping}"`)} was added`)));
        await order(3000, () => console.log(chalk.bold.rgb(125, 209, 134)("\n\tHere is your Ice-Cream Sir!\n")));
    }
    catch (error) {
        if (error instanceof Error && error.message === "Our shop is closed") {
            console.log(error.message);
            console.log("Customer left");
        }
        else {
            console.error(error);
        }
    }
    finally {
        console.log(chalk.bold.redBright("\t====..r==> Shop is closed <======"));
        console.log(chalk.italic.bold.rgb(110, 163, 64)("\n\tThanks for Visiting Our Shop"));
    }
};
main();
