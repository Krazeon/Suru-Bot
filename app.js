const { Client, Attachment } = require('discord.js');
const bot = new Client();
const cfg = require('./config.json');

bot.on('ready', () =>{
    console.log(`Logged in as ${bot.user.tag} (ID: ${bot.user.id}) on ${bot.guilds.size} servers.`);
    bot.user.setActivity(`${cfg.prefix}help | ${bot.guilds.size} on servers.`)
});

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member} please refer to #rules for more information!`);
});

bot.on('message', msg =>{

    if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
    const args = msg.content.slice(cfg.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){

        const then = Date.now();
        msg.channel.send('pinging... ').then(m =>{
            m.edit(`Pong! It took ${Date.now() - then}ms to send that message!\nDiscord Heartbeat: ${bot.ping}ms`);
});
    }
    if (command === 'help'){
        msg.member.send(`\`\`\`Here is a list of my commmands:
         Ignore the < > and type your command like s.ban @user#1234.
         If you run into any issues with Suru Bot contact Suru#0267 or your server admins.

         Normal Commands
         s.lolfind <username> - Looks up the username on op.gg. (NA Players)
         s.whosyourdaddy - Tells you who my daddy is.\`\`\``);

         if (msg.member.permissions.has('ADMINISTRATOR')){
             msg.member.send(`\`\`\`You are recieving this secondary list because you have administrative permissions:
         Admin Commands
         s.ban <@user#1234> - Bans the specifed user.
         s.kick <@user#1234> - Kicks the specied user. \`\`\``)
         }
    }

    if (command === 'ban'){
        if (!msg.member.permissions.has('ADMINISTRATOR')){return msg.reply ('You do not have access to this command.')};
        const member = msg.mentions.members.first();
        if (!member) return msg.reply('Invalid command, please use s.ban `@User#1234 <time>`');
        member.ban({
            //days: args[i] || null,
            reason: `Banned by ${msg.author.tag}`
        });
    }
    if (command === 'kick'){
        if (!msg.member.permissions.has('ADMINISTRATOR')){return msg.reply ('You do not have access to this command.')};
        const member = msg.mentions.members.first();
        if (!member) return msg.reply('Invalid command, please use s.kick `@User#1234`');
        member.kick({
            reason: `Kicked by ${msg.author.tag}`});
    }

    if (command === 'lolfind'){
        if (args.length > 1){
            msg.channel.send('Were you trying to look up a user name with a space in it? Use an underscore ` _ ` in place of the space and try again.');
        }
        else{
            msg.channel.send(`http://na.op.gg/summoner/userName=${args}`);
        }
    }

    if (command === 'whosyourdaddy'){
        msg.channel.send('I was created by Suru#0267.');
    }

    // Works but needs a reason to use
    // if (command === 'postImage'){
    //     const attachment = new Attachment('');
    //     msg.channel.send(attachment);
    //     console.log(`${attachment}`);
    // }

    //console.log(`Args: ${args}\nCommand: ${command}`);
});
 
bot.login(cfg.token);