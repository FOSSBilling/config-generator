# [FOSSBilling configuration generator](https://config.fossbilling.org)

A simple configuration generator made by the FOSSBilling team. This tool makes use of IBM's [Carbon Design System](https://carbondesignsystem.com/) on a Next.js server. Use it now at [config.fossbilling.org](https://config.fossbilling.org)!

## API documentation
Generator endpoint: `https://config.fossbilling.org/api/generate`

### Parameters:
- `webServer`: Available options: `nginx` **(required)**
- `sourcePath`: Path to the source files, usually something like `/var/www/(...)/src` **(required)**
- `domainName`: The domain name of the website, e.g. `fossbilling.org` **(required)**
- `includeWWW`: Whether to include the `www` subdomain or not, `true` or `false` **(by default, true)**

Here is an example query: `https://config.fossbilling.org/api/generate?webServer=nginx&sourcePath=/var/www/fossbilling.org/src&domainName=fossbilling.org&includeWWW=true`

## How to customize the templates

## How to deploy

## Licensing
This tool is open source software and is released under the Apache v2.0 license. See [LICENSE](LICENSE) for the full license terms.