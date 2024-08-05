//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "basanzietech@gmail.com";
global.location = "Goba,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/basanzietech/shakira-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e11bafaedba6aebcd9410.jpg";
global.devs = "255657779003";
global.sudo = process.env.SUDO || "+254 774 932620";
global.owner = process.env.OWNER_NUMBER || "254781263753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://shakira-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xEOVVwbkM2VGViL2VXWEg3QyttM0hiTm4xeVp0a2dBWSs1NmVpWWhVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWFWQXFVUmRPNDd2QzhGZ3dJL2RNQ2l1RnBYOFZMQmNMS1dOcVZLVTdScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSXJVYWZkS2NDNXdMbDBhYVQ1MkxINHhLS2t1K1JRVnFic2Q4Rml0N1hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtYWF0djNZWGQxeVZGSFNQY1lBeGVpZC9Nb20wY1JqcXJMY2JjN0wyeWh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLMWVLL1BRNDRqOXd0OGgzUVg0dFpNeU5FVCtEQmNMcFNFQkxOMFdqRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJSMENDMU1vdlBpRU5STUJETmpaUXZpbHo3YW9KV1lrRDhiMnBoR3VnaVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUF3aVJCU1FuZ3pDdnFEM1JzMVJocWYyWWl0YzJuTHhMNHZBVjd6NmhWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmp2WWRpSm1yU0Q1NkNDaFNnVXhEUmRsaU1qQ1d2dzE4a1FScFVhdjRnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh0aGhRRU5HVk13azBMVDBCbVA4V2dqY243ZW5YQzFVRW8xN3pqUUZKdHJWS2hSdTU1QmI3MkgrWGNRM21jbEN6UkdkUmVMUm9HcS9taG8zOFI4akFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJRSW1kTlhXeUp5MDJTb2EvRW9hRnZla05qdnRIRGxiZXZmZThkL0VPSmxVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLVmlRRG9EMFFUNlRGQUJGMTltWENnIiwicGhvbmVJZCI6IjBiOTYzOGVkLTlhMjAtNDE1NS05YTM1LWZhYjdlMDQ0NGQ3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzL2tzM256TmdNM2grZlNLQWRWVkpjVVV4UGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpMTlQ5ZzFNdFYxK29hUDZsSzBPWENBVEJVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhXTTc0RTVSIiwibWUiOnsiaWQiOiIyNTQ3ODEyNjM3NTM6MzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B5VXd3UVFpOFBDdFFZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJvVndTbXY0SHRKek9Pd0xUVDV4ZEc5djJUYVRvS216c2NESmloQUZlakE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlM1OU8yTEdlZjJadzFJb2lUWkN6WFNpTjBXenh1Wi85eWhrNEtTZnZWM0xSRHlJN1FtbEdWYmFWOVpKOUFLcXpFTG1GYmVPa05Udm9GNmhGZXZNV0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvaDFvWTBPQXY3dk05aU9RY3hmWm5MLzlUWk1CY2NHZExtWXIyTUVIbHF6dEJuZkx1Y05NMUFFVUQzaWRqR3JpdmpXV2pTTG1wN3dPUWlJR1ppM0lDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MTI2Mzc1MzozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRYUZjRXByK0I3U2N6anNDMDArY1hSdmI5azJrNkNwczdIQXlZb1FCWG93In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODUxNzM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJpdyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "💻basanzietech | shakira-md❤️",
  author: process.env.PACK_AUTHER || "basanzietech",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ALVIN-md",
  ownername: process.env.OWNER_NAME || "MISTAH X",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "SHAKIRA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
