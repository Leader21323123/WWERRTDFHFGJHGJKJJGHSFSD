const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'L-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`L-inv | L-bc `,"http://twitch.tv/S-F")
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
if (message.content.startsWith('L-users')){ //الامر
 if(!message.author.id !== '285805483510726657') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});client.on('message', message => {
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
     if(message.content === 'L-inv') {
     const embed = new Discord.RichEmbed()
     .setTitle('click her to add L-bot to your server-إضغط هنا لإضافه البوت الى سيرفرك ')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=453902836133265410&permissions=8&scope=bot')
     .setColor('RANDOM')
     message.author.send(embed);
     }
   });
 if(message.content.startsWith(prefix + 'bot')) {
         const embed = new Discord.RichEmbed()
             .setColor("#00FFFF")
             .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
 **Users**👥 **__${client.users.size}__**
 **Channels**📚 **__${client.channels.size}__** `)
         message.channel.sendEmbed(embed);
     }
 
 });
client.login(process.env.BOT_TOKEN);
