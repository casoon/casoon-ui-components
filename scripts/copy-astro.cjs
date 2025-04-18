/**
 * Skript zum Kopieren von Astro-Komponenten in den dist-Ordner
 * Kompatibel mit allen Node.js-Versionen
 */

const fs = require('fs');
const path = require('path');

// Pfade
const srcDir = path.join(__dirname, '..', 'src', 'astro-components');
const destDir = path.join(__dirname, '..', 'dist', 'astro-components');

console.log('Kopiere Astro-Komponenten...');
console.log(`Quellverzeichnis: ${srcDir}`);
console.log(`Zielverzeichnis: ${destDir}`);

// Erstelle Zielverzeichnis, falls nicht vorhanden
try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Verzeichnis erstellt: ${destDir}`);
  }

  // Prüfe, ob Quellverzeichnis existiert
  if (!fs.existsSync(srcDir)) {
    console.error(`Fehler: Quellverzeichnis existiert nicht: ${srcDir}`);
    process.exit(1);
  }

  // Kopiere Dateien
  const files = fs.readdirSync(srcDir);
  
  if (files.length === 0) {
    console.log('Keine Dateien im Quellverzeichnis gefunden.');
  } else {
    for (const file of files) {
      // Kopiere alle .astro und .js Dateien
      if (file.endsWith('.astro') || file.endsWith('.js')) {
        const srcFile = path.join(srcDir, file);
        const destFile = path.join(destDir, file);
        
        fs.copyFileSync(srcFile, destFile);
        console.log(`Kopiert: ${file}`);
      }
    }
    
    console.log('Astro-Komponenten erfolgreich kopiert!');
  }
} catch (error) {
  console.error('Fehler beim Kopieren der Astro-Komponenten:');
  console.error(error);
  process.exit(1);
} 