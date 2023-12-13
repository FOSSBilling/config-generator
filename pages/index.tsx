// @todo - remove ignore statement once carbon-design-system/carbon#12513 resolved.
// @ts-ignore
import { Checkbox, Stack, Select, SelectItem, TextInput, Link } from '@carbon/react'
import { LogoGithub, Need, LogoDiscord, Debug } from '@carbon/icons-react';
import { useState, useEffect } from 'react'
import React from 'react'; 
import PageLayout from "app/components/PageLayout";
import Result from "app/components/Result";

const Index = () => {
  const [webServer, setWebServer] = useState("nginx");
  const [sourcePath, setSourcePath] = useState("/var/www/fossbilling.org/src");
  const [domainName, setDomainName] = useState("fossbilling.org");
  const [includeWWW, setIncludeWWW] = useState(true);
  const [conf, setConf] = useState("");
  const [err, setErr] = useState("");

  const callTheAPI = async () => {
    try {
      const res = await fetch(`/api/generate?webServer=${webServer}&sourcePath=${sourcePath}&domainName=${domainName}&includeWWW=${includeWWW}`);
      const data = await res.text();
      if (res.ok) {
        setConf(data)
        setErr("")
      } else {
        setConf("")
        setErr(data)
      }
    } catch (err) {
      setConf("")
      setErr(err)
    }
  };

  useEffect(() => {
    callTheAPI();
  });

  return (
    <PageLayout title="FOSSBilling configuration generator">
    <div className="container">
      <div className="warning">
          WARNING: This tool has been archived and is not guaranteed to provide a working configuration. 
      </div>
      <img src="https://fossbilling.org/img/logo-white.svg" alt="FOSSBilling logo" width="350px" />
      <div>
        <h1
          className="text-sans"
          dir="auto"
          style = {{
            fontWeight: 600,
            marginTop: '24px',
          }}
        >
          Configuration file generator
        </h1>
      </div>

      <div style={{
        marginTop: '24px',
      }}>
        <Stack gap={6} orientation="horizontal">
          <Select
            id="webServer"
            defaultValue="nginx"
            labelText="Web server"
            onChange={(e) => setWebServer(e.target.value)}>
            <SelectItem value="nginx" text="nginx" />
          </Select>

          <TextInput
            id="sourcePath"
            type="text"
            defaultValue="/var/www/fossbilling.org/src"
            onChange={(e) => setSourcePath(e.target.value)}
            labelText="Path to the source files"
          />

          <TextInput
            id="domainName"
            type="text"
            defaultValue="fossbilling.org"
            labelText="Domain name"
            onChange={(e) => setDomainName(e.target.value)}
          />

        </Stack>
      </div>

      <div style={{
        marginTop: '16px',
      }}>
        <Stack gap={6} orientation="horizontal">
          <Checkbox defaultChecked labelText={`Also include www.${domainName || "fossbilling.org"}`} invalidText="Invalid" warnText="Warning" id="www" onChange={(e) => setIncludeWWW(e.target.checked)} />
        </Stack>
      </div>

      <div style={{
        marginTop: '24px',
        marginBottom: '24px',
      }}>
          <Result conf={conf} err={err} />
      </div>
      <hr />
      <div style={{
        marginTop: '24px',
      }}>
          - <Link href='https://github.com/FOSSBilling/config-generator' renderIcon={LogoGithub} target='_blank' rel='noreferrer'>
            This tool is open-sourced! Help us improve it.
          </Link>
          <br />
          - <Link href='https://github.com/sponsors/FOSSBilling' renderIcon={Need} target='_blank' rel='noreferrer'>
            Did it help you? Consider donating to the project.
          </Link>
          <br />
          - <Link href='https://fossbilling.org/discord' renderIcon={LogoDiscord} target='_blank' rel='noreferrer'>
            Join our Discord server.
          </Link>
          <br />
          - <Link href='https://github.com/FOSSBilling/config-generator/issues' renderIcon={Debug} target='_blank' rel='noreferrer'>
            Report a bug.
          </Link>
      </div>
    </div>
    </PageLayout>
  )
}

export default Index
