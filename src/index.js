require("dotenv").config("../.env");
const { Client, Intents } = require("discord.js");
const { getSeezeitTellerMeal } = require(`./commands/ping.js`);

const client = new Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILDS
    ]
})


client.once("ready", () => {
    console.log(`Ready! ${client.user.tag}!`);
    client.user.setActivity("an sich selbst. lul");
})


let prefix = "!";

client.on('messageCreate', (msg) => {
    if (msg.content.at(0) !== prefix) return;
    if (msg.author.bot) return;
    let args = msg.content.split(' ');
    if (!args[0].includes('mb') && !args[0].includes('mensabot')) return;

    let mealPlanRequest = args[1].toLocaleLowerCase();
    console.log(mealPlanRequest);

    switch (mealPlanRequest) {
        case "szt":
            getSeezeitTellerMeal(msg);
            break;
        case "seezeitteller":
            getSeezeitTellerMeal(msg);
            break;
        default:
            console.log(args)

    }

});


client.login(process.env.BOT_TOKEN)
