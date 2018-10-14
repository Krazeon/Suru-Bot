//Command responses for Suru-bot
exports.helpMsg = getHelpMsgs();
exports.dadJokes = getDadJokes();

//Functions

//Consider storing text in .txt files and reading in from those.
function getHelpMsgs(){
    let returnedString = "";
    let helpMsg = [
        '**Suru Bot Commands:**',
        '-Type ! before a command prompt.',
        'ping - Pings Suru-bot to respond with Pong!',
        'help - Calls the Commands menu',
        'dadjoke - Tells a dad joke.' 
    ];
    
    for (let i = 0; i < helpMsg.length; i++){
        returnedString += helpMsg[i] + "\n";
    }
    return returnedString;
}

//TODO: Fix Random Generator, it only prints out 1 value
function getDadJokes(){
    let returnedString = "";
    let dadJokes = [
        '**Did you hear about the restaurant on the moon?** \nGreat food, no atmosphere.',
        '**What do you call a fake noodle?** \nAn Impasta.',
        '**How many apples grow on a tree?** \nAll of them.',
        '**Want to hear a joke about paper?** \nNevermind it\'s tearable.',
        '**I just watched a program about beavers.** \nIt was the best dam program I\'ve ever seen.',
        '**Why did the coffee file a police report?** \nIt got mugged.',
        '**How does a penguin build it\'s house?** \nIgloos it together.',
        '**Dad, did you get a haircut?** \nNo I got them all cut.',
        '**What do you call a Mexican who has lost his car?** \nCarlos.',
        '**Why did the scarecrow win an award?** \nBecause he was outstanding in his field.',
        '**Why don\'t skeletons ever go trick or treating?** \nBecause they have no body to go with.',
        '**Ill call you later.** \nDon\'t call me later, call me Dad.',
        '**What do you call an elephant that doesn\'t matter?** \nAn irrelephant',
        '**Want to hear a joke about construction?** \nI\'m still working on it.',
        '**What do you call cheese that isn\'t yours?** \nNacho Cheese.',
        '**Why couldn\'t the bicycle stand up by itself?** \nIt was two tired.',
        '**What did the grape do when he got stepped on?** \nHe let out a little wine.',
        '**I wouldn\'t buy anything with velcro.** \nIt\'s a total rip-off.',
        '**The shovel was a ground-breaking invention.**'
    ]
    let randNum = random(0, dadJokes.length);
    return dadJokes[randNum];
}

function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
  }