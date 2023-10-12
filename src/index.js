const fs = require('fs');
const path = require('path');

class Env {
  constructor() {
    this.envFilePath = path.resolve(process.cwd(), '.env');
    this.config = {};
    this.load();
  }

  load() {
    if (fs.existsSync(this.envFilePath)) {
      const envFile = fs.readFileSync(this.envFilePath, 'utf8');
      const envLines = envFile.split('\n');
      envLines.forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
          this.config[key] = value;
        }
      });
    } else {
      throw new Error(`Environment file ${this.envFilePath} not found.`);
    }
  }

  get(key) {
    return this.config[key];
  }
  getAsString(key) {
    return this.config[key].getAsString;
  }
}

module.exports = Env;