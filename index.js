const qrcode = require('qrcode-terminal')
const { Client, LocalAuth , Buttons } = require('whatsapp-web.js');
require('dotenv').config()
const {AI_TEXT_GENERATION} = require('./ai')

const client = new Client(
    {
        authStrategy: new LocalAuth()
    }
);

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED');
    console.log(qrcode.generate(qr, {
        small: true
    }));
});

client.on('ready', () => {
    console.log('Client is ready');
});

client.on('message', async (msg) => {
    // console.log(msg);
    if (msg.body.toLowerCase() == "hii" || msg.body.toLowerCase() == 'hi' || msg.body === 'hello' || msg.body === 'hey') {
        await msg.reply(`Hello, I'm Nebula, Boss will reply you soon`);
    }else{
        await AI_TEXT_GENERATION(msg.body , msg )
    }
    
    

});
client.initialize();

