/**
 * Skript zum Erzeugen der Versionsdatei
 * 
 * Dieses Skript liest die aktuelle Version aus package.json aus
 * und erzeugt daraus eine TypeScript-Datei, die die Version exportiert.
 * Diese Datei wird während des Builds erzeugt und ersetzt die feste Version.
 */

const fs = require('fs');
const path = require('path');

// Pfade
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const versionFilePath = path.join(__dirname, '..', 'src', 'version.ts');

console.log('Erzeuge version.ts Datei...');

try {
  // Lese package.json
  if (!fs.existsSync(packageJsonPath)) {
    console.error(`Fehler: package.json existiert nicht: ${packageJsonPath}`);
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.version;
  
  // Generiere version.ts Datei
  const versionFileContent = `/**
 * Generiert von build-version.cjs
 * Bitte nicht manuell bearbeiten!
 */

export const version = '${version}';
`;

  fs.writeFileSync(versionFilePath, versionFileContent);
  console.log(`Version ${version} wurde in ${versionFilePath} geschrieben.`);

} catch (error) {
  console.error('Fehler beim Erzeugen der Versionsdatei:');
  console.error(error);
  process.exit(1);
} 