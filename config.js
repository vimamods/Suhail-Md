const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="slvimubro@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "VimaMods" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776734030";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_38_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkNGeTZ6cytxSHBNWFc2aDFEMWxrN0VEem9QWVprQlVEcGRsN2ZNSXcyUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0x4RXdaWk5SV0dZNThWdjVxT3N3d1wiLFxuICBcInBob25lSWRcIjogXCJkMmZmMDNhNS05YTQzLTQzOTQtYjdjNy0wZWZmNzVkZGM3M2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTIzLFxuICAgICAgMjIxLFxuICAgICAgOTIsXG4gICAgICAxOSxcbiAgICAgIDE0OSxcbiAgICAgIDU2LFxuICAgICAgOCxcbiAgICAgIDE2NyxcbiAgICAgIDI0MCxcbiAgICAgIDIxMSxcbiAgICAgIDIwMyxcbiAgICAgIDUzLFxuICAgICAgNDMsXG4gICAgICA1MSxcbiAgICAgIDU2LFxuICAgICAgMTg5LFxuICAgICAgMjE3LFxuICAgICAgMTcwLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgNCxcbiAgICAgIDIyNixcbiAgICAgIDIwMixcbiAgICAgIDI0MyxcbiAgICAgIDE2MCxcbiAgICAgIDIxNSxcbiAgICAgIDE0MyxcbiAgICAgIDIyMyxcbiAgICAgIDI0MSxcbiAgICAgIDUzLFxuICAgICAgMTU2LFxuICAgICAgMTUzLFxuICAgICAgNjEsXG4gICAgICAyMTUsXG4gICAgICAxNjEsXG4gICAgICAyNyxcbiAgICAgIDM5LFxuICAgICAgMjQxLFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjlSVFRIR0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY3NTU2NzMyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic1wiLFxuICAgIFwibGlkXCI6IFwiMTU2NjUwNzk1MjEyODQ1OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMMTFya0VFS3ZiNTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOVlLaUFUTzYwWkZWeWVVZkxzUEloTFpaZHMvNG9YTzlWUVYwRWxYdVFEcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRbnp6MzlWcWVZZE5lMDNwSUF2MmFpZDRRbm42OHpHYjVLY3Nab3FURW8wM0RXeE9Vb2o0N3ZmWGhkeWVKMzl6bU8yWFcxb0QxRHMzMWNDMUcrNkhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmQXdncDY5bXFzYVBzWVRwOFg3QlBCM0NRUWpyNmhSeXFpZmY5aWhaMkIxQ0orY3oxQll0OGEzZDBZM2JoNnZrVEllUFY3dFhtcWVtMkcyR1lvdVFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NzU1NjczMjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNjM4ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFINWVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg1ZS5qc29uIjogIntcImtleURhdGFcIjpcInh6UnBwVFY5d1lkL01kR1RXMEJmekVMRjMwd0VIK212cnVqVGsvTGFWVEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE5NDcwMzUzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
