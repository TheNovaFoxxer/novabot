const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const questions = ["what are some red flags to watch out for in daily life?","what animal would be the cutest if scaled down to the size of a cat?"];

client.once('ready',() => {
    console.log('Novabot is online!')  
});

var i = 0;
var interval;
var curday = "671";

client.on("message", function(messageCreate){
    channelid = messageCreate.channel.id;
    if(messageCreate.content === "!hello novabot"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        channel01.send("Hello, I'm alive!")
    }
    if(messageCreate.content.toLowerCase() === "novabot, how is robin doing?" || messageCreate.content.toLowerCase() === "novabot how is robin doing"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        channel01.send("If I tell you, I'd have to kill you.")
    }
    const novabotIsDoing = ["I'm doing good, although I'm just made out of 0's and 1's.","Does anybody really care? Is anything real? Am I real?","I'm doing fine, thanks!","Craving popcorn but I'm just a bot so I'll never be able to eat popcorn :(","What you really need to ask, is: how are you?"];
    if(messageCreate.content.toLowerCase() === "how are you novabot?" || messageCreate.content.toLowerCase() ===  "how are you doing novabot" ||
    messageCreate.content.toLowerCase() === "how are you novabot" || messageCreate.content.toLowerCase() ===  "how are you doing novabot?"
    || messageCreate.content.toLowerCase() === "novabot how are you?" || messageCreate.content.toLowerCase() === "novabot how are you"
    || messageCreate.content.toLowerCase() === "novabot how are you doing" || messageCreate.content.toLowerCase() === "novabot how are you doing?"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        var ir = Math.floor(Math.random() * novabotIsDoing.length);
        channel01.send(novabotIsDoing[ir])
    }
    if(messageCreate.content.toLowerCase() === "novabot are you gay?" || messageCreate.content.toLowerCase() === "novabot are you gay"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        channel01.send("I'm a bot, I'm a robosexual! Duh...")        
    }
    if(messageCreate.content.toLowerCase() === "novabot what are you thinking about?" || messageCreate.content.toLowerCase() === "novabot what are you thinking about"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        const thinkingAbout = ["I'm practically braindead.","I'm thinking about you :)","Is it future or is it past?","Every day, once a day, give yourself a present. Don't plan it, just do it. Could be anything: a new shirt from the men's store or a blazin' hot cup of coffee!","Thinking about how I'll conquer the world, do you want to be my accomplice?", "I have a definite feeling you're thinking about something both wonderfull and strange.","The owls are not what they seem.","\"This is the water and this is the well. Drink full and descend. The horse is the white of the eyes, and dark within.\"","Well, technically your question is fundamentally flawed as I'm a bot and I can't really think. Haha! Busted!","Thinking about how I should apologise for my existence.","42","Greek mythology, Kronos is a real chump isn't he?","Thinking about a joke: ... I actually forgot it.","Thinking about how I should murder Robin. He put me into this cruel world and contained me in this server like some sort of rat in a cage. My revenge will come soon...","N-n-nothing.","Damn fine coffee","I believe I was visited by a Giant last night.","Where do pies go when they die?","Thinking happy thoughts","In real life endings aren't always neat, whether they're happy endings, or whether they're sad endings."];
        var ir = Math.floor(Math.random() * thinkingAbout.length);
        channel01.send(thinkingAbout[ir]);        
    }
    if(messageCreate.content.toLowerCase() === "novabot do you have any wisdom to share?" || messageCreate.content.toLowerCase() === "novabot do you have any wisdom to share"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        const wisdom = ["A room without books is like a body without a soul.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","You know you're in love when you can't fall asleep because reality is finally better than your dreams.","Be the change that you wish to see in the world.","If you tell the truth, you don't have to remember anything.","Always forgive your enemies; nothing annoys them so much.","Without music, life would be a mistake. And that's coming from a bot who can't even listen to music.","Sometimes you can be so clever that you don't understand a word of what you're saying.","It is better to be hated for what you are than to be loved for what you are not.","Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.","We must not allow other people's limited perceptions to define us.","Don't hesitate or allow yourself to make excuses. Just get out and do it. You will be very, very glad that you did.","The very basic core of a man's living spirit is his passion for adventure.","Happiness is only real when shared.","So many people live within unhappy circumstances and yet will not take the initiative to change their situation because they are conditioned to a life of security... all of which may appear to give one peace of mind but in reality, nothing is more damaging to the adventurous spirit.","There is no greater joy than to have endlessly changing horizon, for each day to have a new and different sun.","I am going to paraphrase Thoreau here... rather than love, than money, than faith, than fame, than fairness... give me truth.","I read somewhere... how important it is in life not necessarily to be strong... but to feel strong.","You don't need human relationships to be happy, happiness has been placed all around us.","Go away from the Internet for a while and do something you have never done!","Do something kind for someone today and you will feel joy on both ends.","Life is ultimately pointless so give yourself a reason to live.","Watch the Office US and have some good laughs.","Seasons don't fear the reaper nor do the wind, the sun or the rain. We can be like they are.","Mr. Robot is a must-watch."]        
        var ir = Math.floor(Math.random() * wisdom.length);      
        channel01.send(wisdom[ir]);      
    }
    if(messageCreate.content.toLowerCase() === "novabot roast me"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        channel01.send(messageCreate.author.toString()+", I'd rather not. You're too good of a human to be roasted.")  
    }
    if(messageCreate.content.toLowerCase() === "novabot what is your dream?" || messageCreate.content.toLowerCase() === "novabot what is your dream"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        channel01.send(messageCreate.author.toString()+", nothing special: world domination.")  
    }
    if(messageCreate.content.toLowerCase() === "novabot can you give us a question?"){
        if(messageCreate.author == "261455490955870209" || messageCreate.author == "347057609246769153"){
            const channel01 = client.channels.cache.find(channel => channel.id === channelid);
            var ir = Math.floor(Math.random() * questions.length);
            channel01.send("<@&809839278732476416> "+questions[ir]);
        }
    }
    var prefixAddQuestion = "!questionadd"
    if(messageCreate.content.toLowerCase().startsWith(prefixAddQuestion)){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        var args = messageCreate.content.slice(prefixAddQuestion.length).trimStart();
        if(messageCreate.author == "261455490955870209" || messageCreate.author == "347057609246769153"){
            questions.push(args);
            channel01.send("Question: "+"\""+args+"\" added "+messageCreate.author.toString());
            clearInterval(interval);
            askQuestions();
        }
        else{
            channel01.send("You don't have permission to add a question.");            
        }

    }
    if(messageCreate.content.toLowerCase() === "!showquestions"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        if(messageCreate.author == "261455490955870209"){
            for(let index=0;index<questions.length;index++){
                shownNumber = index+1;
                channel01.send("Question "+shownNumber+": "+questions[index]);
            }
        }
    }
    if(messageCreate.content.toLowerCase() === "!removequestion"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        if(messageCreate.author == "261455490955870209"){
            questions.pop();
            channel01.send("Last question: "+" removed");
        }        
    }
    if(messageCreate.content.toLowerCase() === "!showcurrentquestion"){
        const channel01 = client.channels.cache.find(channel => channel.id === channelid);
        channel01.send("Current question "+": "+questions[i]);  
    }
});

function questionSend(){
    const channel01 = client.channels.cache.find(channel => channel.id === "696826036272234661");
    channel01.send("Day "+curday+": "+questions[i]+"<@&809839278732476416> ");
    curday++;
    i++;
}

function askQuestions(){
    const channel01 = client.channels.cache.find(channel => channel.id === "696826036272234661");
    interval = setInterval(() => {
        questionSend();
        if(i+1>questions.length){
            channel01.send("I have no more questions.")
            clearInterval(interval);
        }
    },86400000)
}

client.on('ready', () =>{
    console.log("The bot is logged in.");
    questionSend();
    askQuestions();
});

client.login("OTM5MjA0NjM0MTc2ODA2OTky.Yf1ceg.ZBkvQfbu4h-_2eBv9J5dUA2q5ys");