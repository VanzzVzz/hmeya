/*

  -! Credits By RuzxxOffc
  https://wa.me/6288980698613

*/

const fs = require('fs')

// ========= Setting Owner ========= //
global.owner = "265897238412@s.whatsapp.net"
global.ownername = "Vanzz"
global.botname = "BABU VANZZ"
// ========= Setting Channel ========= //
global.namasaluran = "ʙᴏᴋᴇᴘᴊᴇᴘᴀɴɢ"
global.idsaluran = "120363398454335106@newsletter"
global.linksaluran = "https://whatsapp.com/channel/0029Vb5ocSG6LwHnvz3sk530"

// ========= Setting Status ========= //
global.status = true
global.welcome = false
global.antispam = true
global.autoread = true
global.prefa = ['','!','.',',','🐤','🗿']

// ========= Setting Pembayaran ========= //
global.dana = "6285693454019" 
global.ovo = "628889618628" 
global.gopay = "6285814573477"

// ========= Setting WM ========= //
global.packname = 'vanzzr.me'
global.author = 'vanzzoffc'


global.gcount = {
    prem : 500,
    user: 15
}

//limit
global.limitCount = 10,

//message 
global.mess = {
    group: "👍🏻",
    grup: "👍🏻",
    privat: "👍🏻",
    admin: "👍🏻",
    owner: "👍🏻",
    premium: "👍🏻",
    prem: "👍🏻",
    botadmin: "👍🏻",
      op: "👍🏻",
  or: "👍🏻",
  ob: "👍🏻",
  oa: "👍🏻",
    limited: "👍🏻"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
