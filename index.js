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
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=PK2lYJoaq7Y') // MUST BE A VALID YOUTUBE VIDEO LINK (e.g., https://www.youtube.com/watch?v=your_video_id)
    .setState('to "𝕊𝕝𝕒𝕪 𝔼𝕧𝕖𝕣𝕪𝕕𝕒𝕪"')
    .setName('in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setDetails(`𝑳𝒊𝒇𝒆![${formatTime()}]`) // Changed initial detail to match subsequent updates
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1016845411895488532/1142051842126262312/cybereden-cyber.gif?ex=6833a269&is=683250e9&hm=7d050b9a21feec337a51413f3e4f1221c9ee96486f10ad02f48a34cc287c940c&')
    .setAssetsLargeText('Join in 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1016845411895488532/1142051842499563591/verified-verificado.gif?ex=6833a269&is=683250e9&hm=7baf44f105d372cfcd05680deb84145ab78b8547b99360b43c3815d5b50a4cdf&')
    .setAssetsSmallText('𝑽𝒆𝒓𝒊𝒇𝒊𝒆𝒅')
    .addButton('Join the Discord Server', 'https://discord.gg/invite/muamGJmVju')
    .addButton('Add me on Facebook', 'https://www.facebook.com/ritwik.rahman1');

  client.user.setActivity(r);
  // Removed client.user.setPresence({ status: "idle" }); as STREAMING type implies online status.

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
