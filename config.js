const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_37_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICA3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVlUVI3ekwxQ2VoQnR2Q016bXJmYkJ2MHRKRTRORkVyS0lYRHpYUmZROHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm13dkpNenJhU18tYzlpNjYwRzNXZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjc2YmJhNzQtZjY1Zi00ZmU0LWE2YTEtMmI2ZmIwY2NjNjNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAxMTcsXG4gICAgICAxMjIsXG4gICAgICAyNSxcbiAgICAgIDI0MixcbiAgICAgIDIyNixcbiAgICAgIDEzMyxcbiAgICAgIDExNSxcbiAgICAgIDI0MyxcbiAgICAgIDI2LFxuICAgICAgMTY3LFxuICAgICAgMTY5LFxuICAgICAgNzUsXG4gICAgICA5OCxcbiAgICAgIDE2NyxcbiAgICAgIDI2LFxuICAgICAgMjI0LFxuICAgICAgMTAwLFxuICAgICAgNzQsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgNzEsXG4gICAgICAzMSxcbiAgICAgIDIxNSxcbiAgICAgIDIyLFxuICAgICAgMTAyLFxuICAgICAgMzIsXG4gICAgICA2MixcbiAgICAgIDE1NSxcbiAgICAgIDI1NCxcbiAgICAgIDgzLFxuICAgICAgMTEzLFxuICAgICAgOTcsXG4gICAgICA0NSxcbiAgICAgIDU4LFxuICAgICAgMTcyLFxuICAgICAgODMsXG4gICAgICAyMDEsXG4gICAgICAxMTYsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTJZTFpORFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNTYxOTc3MjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUwNTkwMzcwMjM0NDUxOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLZWcyVVFvYUMzdFFZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwielVZeHdXMEtwYmZXR3NFY0lVT09UZGd4aGJzYWhaOXoySXFTTy81QUlsOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhZHQ5UGw0SGJKWHNRUHhtUVo2b3ZWUi9Ed3VUekFYVmlwSGx6RTN4M2JSTzZXREpRZlFtczZlYjVWaFkwN3MzUFRWb2dUUkdaUzM2UDZjS3N2dDFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYVU1kYWJmckplUXh2U3dLZVJPYnM4RWZ4eUlKUktDYnlaUzRud0l3Q09Kb3RqcGpqVzBRK3U1K1k2VTVXUzNGREhKTXdYTkcxMThpQ3ZBUi9jemRDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMDU2MTk3NzI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjY3MDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkpFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGSkUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJndkw3d3FSaUJXaUozT0dMMEFna3VMS0hMcWNXSWZZcThMc0JaeWN1ZHhZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTg2NTM5NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQwNTA4MzIzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9473851fd4bfd02f198e5.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ *sufyan* ²²¹-ᴍᴅ" 


global.devs = "923105619772" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923105619772";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923105619772,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n "),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sufyan-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "sufyan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "sufyan"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

