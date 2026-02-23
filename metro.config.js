const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Tambahkan svg ke daftar asset extension agar bisa di-require()
// dan ditampilkan oleh expo-image
config.resolver.assetExts.push("svg");

module.exports = config;
