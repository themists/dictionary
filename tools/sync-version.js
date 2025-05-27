// tools/sync-version.js
const fs = require("fs");
const path = require("path");

const pkg = require("../package.json");
const version = pkg.version;

const envPath = path.resolve(__dirname, "../.env");

let content = "";
if (fs.existsSync(envPath)) {
  content = fs.readFileSync(envPath, "utf-8");
}

// VITE_APP_VERSION 줄 찾아서 교체하거나 추가
if (content.includes("VITE_APP_VERSION=")) {
  content = content.replace(/VITE_APP_VERSION=.*/g, `VITE_APP_VERSION=${version}`);
} else {
  content += `\nVITE_APP_VERSION=${version}`;
}

fs.writeFileSync(envPath, content.trim() + "\n", "utf-8");
console.log(`✅ .env 파일에 VITE_APP_VERSION=${version} 반영됨`);
