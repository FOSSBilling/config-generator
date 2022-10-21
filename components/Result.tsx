import React from "react";
import { CodeSnippet, InlineNotification } from '@carbon/react'

export default function Result({ conf, err }: { conf: string, err: string }) {
  if (conf){
    return (
      <CodeSnippet type="multi" feedback="Copied to clipboard" align="left">
        {conf}
      </CodeSnippet>
    )
  } else {
      err = err || "An unknown error occurred";
      return (
          <InlineNotification
              title="Error!"
              subtitle={err}
              hideCloseButton={true}
              kind="error"
              role="alert"
        />
      )
  }
}