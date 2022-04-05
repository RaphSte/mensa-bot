const axios = require('axios').default;

const getSeezeitTellerMeal = async (msg) => {

    axios.get("https://seezeit.com/essen/speiseplaene/mensa-htwg/").then(function (response) {
        let meal = response.data.match(/(.|[\n])*contents_aktiv(.|[\n])*?Seezeit-Teller(.|[\n])*?title_preise_1(.|[\n])*?>(.|[\n])*?>((.|[\n])*?)<\/div>(.|[\n])*/)[6];
        if (meal) {
            let formattedMealString = meal.replace(/<sup>.*?<\/sup>/g, "");
            msg.reply(formattedMealString);
        } else {
            msg.reply("something went wrong!");
        }
    }).catch(function (error) {
        console.log(error);
    })


}

module.exports = { getSeezeitTellerMeal };
