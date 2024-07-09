import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212619841293
*instagram:*\ninstagram.com/gtx_33_ys

*youtube:*\nyoutube.com/@yassinamhamdi7

*facebook page:*\nhttps://www.facebook.com/yassin.amhamdi.5?mibextid=ZbWKwL

*script bot :* github.com/noureddineouafy

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
