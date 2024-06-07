import heicConvert from 'heic-convert';
import fs from 'fs/promises';

const count = 10;

async function convert(i) {
	const inputBuffer = await fs.readFile(`images/test-${i + 1}.heic`);
	const outputBuffer = await heicConvert({
		buffer: inputBuffer,
		format: 'JPEG',
		quality: 0.8,
	});
	await fs.writeFile(`results/output-${i + 1}.jpg`, outputBuffer);
}
const startTime = Date.now();
const promises = Array.from({ length: count }, (_, i) => convert(i));
await Promise.all(promises);
const endTime = Date.now();

console.log(`Time: ${endTime - startTime}ms`);
