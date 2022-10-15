import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    var { webServer, sourcePath, domainName, includeWWW } = req.query;

    const templateDirectory = path.join(process.cwd(), 'templates');
    const supportedWebServers = ['nginx'];

    if (!supportedWebServers.includes(webServer)) {
        res.status(400).send('Invalid web server. Accepted values are: ' + supportedWebServers.join(', '));
        return;
    }

    // Variables with their fallback values
    sourcePath = sourcePath || "/var/www/fossbilling.org/src";
    domainName = domainName || "fossbilling.org";
    includeWWW = (includeWWW == 'false') ? false : true;

    // Read the template file
    var template = await fs.readFile(templateDirectory + `/${webServer}.conf`, 'utf8');

    // Some server-specific replacements
    switch (webServer) {
        case "nginx":
            domainName = includeWWW ? `www.${domainName} ${domainName}` : domainName; // Add www if it's enabled   
        break;
        default:
    }

    // Replace the placeholders
    const config = template
        .replace(/%%SOURCE_PATH%%/g, sourcePath)
        .replace(/%%DOMAIN%%/g, domainName)

    res.status(200).send(config);
}
