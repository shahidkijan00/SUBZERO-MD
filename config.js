// ===== MAJOR CONFIGS =====
const fs = require('fs');
const path = require('path');
//const { getConfig } = require("./lib/configdb");
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "SUBZERO-MD~jQ4SR82oHjYovNYFJk05",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "CUTE BOY",
    MODE: process.env.MODE || "pravite",
    REPO: process.env.REPO || "https://github.com/mrfrankofcc/SUBZERO-MD",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "+994 40 889 85 08",
    OWNER_NAME: process.env.OWNER_NAME || "Cute boy",
    DEV: process.env.DEV || "263719647303",
    DEVELOPER_NUMBER: '263719647303@s.whatsapp.net',

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SUBZERO BOT VIEWED YOUR STATUS 🤖*",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    STICKER_NAME: process.env.STICKER_NAME || "SUBZERO-MD",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",

    // ===== MEDIA & AUTOMATION =====
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    BOT_IMAGE: "https://i.postimg.cc/XNTmcqZ3/subzero-menu.png",

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_CALL: process.env.ANTI_CALL || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_VV: process.env.ANTI_VV || "true",
    DELETE_LINKS: process.env.DELETE_LINKS || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    FOOTER: process.env.FOOTER || "*© Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Sᴜʙᴢᴇʀᴏ*",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    WELCOME_GOODBYE: process.env.WELCOME_GOODBYE || "false",
    AMDIN_EVENTS: process.env.ADMIN_EVENTS || "true",
};
