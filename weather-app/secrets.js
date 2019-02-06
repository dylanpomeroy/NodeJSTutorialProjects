const fs = require('fs');

var getSecrets = () => {
    var secrets = undefined
    try {
        secrets = fs.readFileSync('secrets.json');
        secrets = JSON.parse(secrets);
    } catch (e) {
        console.log(`Failed to read secrets file. ${e}`);
    }

    return secrets;
}

module.exports = {
    getSecrets,
}