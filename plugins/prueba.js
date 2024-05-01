import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "test"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "test"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "test",
            subtitle: "test",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"restringir , restrict, descripcion: bot.restrict  Activado Activated ❌ Desactivado || Disabled permisos para el Bot\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
          
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(Prueba)$/i

export default handler  
