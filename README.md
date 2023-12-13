> **Warning**:
This repository has been archived and is no longer maintained. For information about how to get started with FOSSBilling check the official [documentation](https://fossbilling.org/docs/getting-started) where help is provided for getting started on multiple platforms.

# [FOSSBilling configuration generator](https://config.fossbilling.org)

![Screenshot](https://user-images.githubusercontent.com/35808275/196001874-c6ec9c0a-b564-4285-aca3-68e6265adbc7.png)


A simple configuration generator made by the FOSSBilling team. This tool makes use of IBM's [Carbon Design System](https://carbondesignsystem.com/) on a Next.js server. Use it now at [config.fossbilling.org](https://config.fossbilling.org)!

## API documentation
Generator endpoint: `https://config.fossbilling.org/api/generate`

### Parameters:
- `webServer`: Available options: `nginx` **(required)**
- `sourcePath`: Path to the source files, usually something like `/var/www/(...)/src` **(required)**
- `domainName`: The domain name of the website, e.g. `fossbilling.org` **(required)**
- `includeWWW`: Whether to include the `www` subdomain or not, `true` or `false` **(by default, true)**

Here is an example query: https://config.fossbilling.org/api/generate?webServer=nginx&sourcePath=/var/www/fossbilling.org/src&domainName=fossbilling.org&includeWWW=true

## How to customize the templates

## How to deploy
### Production
The website will be rebuilt automatically after every push and deployed to Vercel. Outside contributors don't need to do anything to get the website deployed.

### Testing locally
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
4. Open `localhost:3000` in your browser

## Licensing
This tool is open source software and is released under the Apache v2.0 license. See [LICENSE](LICENSE) for the full license terms.
