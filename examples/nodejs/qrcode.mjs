// QR Code API – Node.js example (Node 18+, ES module)
// Usage: CHARTQUERY_API_KEY=your-key node qrcode.mjs
import { writeFile } from "node:fs/promises";

const headers = { "x-api-key": process.env.CHARTQUERY_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "data": "https://chartquery.com",
  "format": "png",
});
const response = await fetch(`https://api.chartquery.com/v1/qrcode?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

await writeFile("qrcode.png", Buffer.from(await response.arrayBuffer()));
console.log("Saved qrcode.png");
