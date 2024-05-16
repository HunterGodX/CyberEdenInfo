const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Dhaka', //https://www.zeitverschiebung.net/en/ and find your city
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - CyberInfo started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1164997553541107762')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=6f2uhNDMX-Y&t=37s') //Must be a youtube video link 
    .setState('to "𝕊𝕝𝕒𝕪 𝔼𝕧𝕖𝕣𝕪𝕕𝕒𝕪"')
    .setName('in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setDetails(`@𝟑𝟐𝐊[${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1016845411895488532/1142051842126262312/cybereden-cyber.gif?ex=66469169&is=66453fe9&hm=a7436d30eef756c82eec06c431fbc42e63a051276b55c0401e94066f76595eb3&=')
    .setAssetsLargeText('Join in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1016845411895488532/1142051842499563591/verified-verificado.gif?ex=66469169&is=66453fe9&hm=3301ad1c1948c7e735945c3e2bb4ace2f5200aca365ac5be0f951bd6a82895a3&=')
    .setAssetsSmallText('𝑽𝒆𝒓𝒊𝒇𝒊𝒆𝒅')
    .addButton('Join the Discord Server', 'https://discord.gg/invite/muamGJmVju')
    .addButton('Add me on Facebook', 'https://www.facebook.com/ritwik.rahman1');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `𝑳𝒊𝒇𝒆![${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
