const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'L-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('L-users')){
if(!message.author.id === '285805483510726657') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
 client.on('message',async message => {
  if(message.content.startsWith(prefix + "2bc")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
        });
        }
      });
    });
    });
  }
});
client.on('message', message => {
    if(message.content == 'L-bot-all-server') {
             if(!message.author.id === '285805483510726657') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });


client.on('message', message => {
         var prefix = "L-"
        if(!message.channel.guild) return;
     if(message.content.startsWith(prefix + 'bc')) {
     if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
     if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
     let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
     let BcList = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setAuthor(`محتوى الرساله ${args}`)
     .setDescription(`
     عند إرآدة حضرتك إرسآل هذه الرسآلة بأمبيد أضغط على 📝
     عند إرآدة حضرتك إرسآل هذه الرسآلة بدون أمبيد أضغط على ✏
     عند إرآدتك منشن العضو أكتب 
     <user>
     لإرسال اسم السيرفر
     <server>
     لمنشنه أسم المرسل
     <by>
     `)
     if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
     msg.react('📝')
     .then(() => msg.react('✏'))
     .then(() =>msg.react('📝'))
      
     let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
     let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
      
     let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
     let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
     EmbedBc.on("collect", r => {
      
     message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
     message.guild.members.forEach(m => {
     let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
     var bc = new
     Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(EmbedRep)
     .setThumbnail(message.author.avatarURL)
     m.send({ embed: bc })
     msg.delete();
     })
     })
     NormalBc.on("collect", r => {
       message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
     message.guild.members.forEach(m => {
     let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
     m.send(NormalRep);
     msg.delete();
     })
     })
     })
     }
     });
 
 client.on('message', message => {
   if(message.content === "L-bot") {
       const embed = new Discord.RichEmbed()
       .setColor("#00FFFF")
       .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
 **Users**👥 **__${client.users.size}__**
 **Channels**📚 **__${client.channels.size}__** `)
              message.channel.sendEmbed(embed);
          }
 });
 client.on('message', message => {
     if(message.content === 'L-inv') {
     const embed = new Discord.RichEmbed()
     .setTitle('click her to add L-bot to your server-إضغط هنا لإضافه البوت الى سيرفرك ')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=453902836133265410&permissions=8&scope=bot')
     .setColor('RANDOM')
     message.author.send(embed);
     }
   });

client.on('message', message => {
    if (message.content.startsWith("L-avatar")) {
if(!message.channel.guild) return;

        var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;

      }

        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")

        .setColor(000000)
        .setFooter( L-bot , 'ur bot image link')
        .setImage(${client.avatarURL})
      message.channel.sendEmbed(embed);
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("L-cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
                  message.channel.send('__**Done ✅**__')                
    }
    });
client.on("message", (message) => {
    if (message.content.startsWith("L-ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
                  message.channel.send('__**Done ✅**__')            
    }
    });
client.on('message', message => {

    if (message.content === "L-ser") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()

.addField('***SERVER OWNER👑***: ' , message.guild.owner)
.addField('***SERVER NAME💳***: ' , message.guild.name)
.addField('***SERVER ID🆔***:' , message.guild.id)
.addField('***SERVER VERIFICATIONLEVEL❓***: ' , message.guild.verificationLevel)
.addField('***SERVER REGION:globe_with_meridians: ***: ' , message.guild.region)
.addField('***DEFAULT CHANNEL1⃣ ***: ' , message.guild.defaultChannel)
.addField('***CHANNELS SIZE🔋***: ' , message.guild.channels.size)
.addField('***ROLES🔢***: ' , message.guild.roles.size)
.addField('***MEMBERS📡***: ' , message.guild.memberCount)
.addField('**SERVER CREATED IN🕑***: ' ,year + "-"+ month +"-"+ day)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});


          
client.login(process.env.BOT_TOKEN);
