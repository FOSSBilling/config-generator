import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    var { webServer, sourcePath, domainName, includeWWW } = req.query;
    
    // When a parameter is defined twice, use the first one.
    // This keeps the variables as strings instead of arrays if they are defined more than once.
    webServer = Array.isArray(webServer) ? webServer[0] : webServer || '';
    sourcePath = Array.isArray(sourcePath) ? sourcePath[0] : sourcePath || "/var/www/fossbilling.org/src";
    domainName = Array.isArray(domainName) ? domainName[0] : domainName || "fossbilling.org";
    
    // Wrote this in an if statement to make it easier to read.
    if (Array.isArray(includeWWW)){
        var WWW = (includeWWW[0] == 'false') ? false : true;
    } else {
        WWW = (includeWWW == 'false') ? false : true;
    }

    const templateDirectory = path.join(process.cwd(), 'templates');
    const supportedWebServers = ['nginx'];

    if (!supportedWebServers.includes(webServer)) {
        res.status(400).send('Invalid web server. Accepted values are: ' + supportedWebServers.join(', '));
        return;
    }

    // Read the template file
    var template = await fs.readFile(templateDirectory + `/${webServer}.conf`, 'utf8');

    // Some server-specific replacements
    switch (webServer) {
        case "nginx":
            domainName = WWW ? `www.${domainName} ${domainName}` : domainName; // Add www if it's enabled   
        break;
        default:
    }

    // Replace the placeholders
    const config = template
        .replace(/%%SOURCE_PATH%%/g, sourcePath)
        .replace(/%%DOMAIN%%/g, domainName)

    res.status(200).send(config);
}
