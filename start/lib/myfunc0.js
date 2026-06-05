const { proto, getContentType } = require('baileys')
const { exec } = require('child_process')
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const moment = require('moment-timezone')
const path = require('path')


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})