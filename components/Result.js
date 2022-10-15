import React, { Component } from "react";
import { CodeSnippet, InlineNotification } from '@carbon/react'

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  render() {
    if (this.props.conf){
      return (
        <CodeSnippet type="multi" feedback="Copied to clipboard" align="left">
          {this.props.conf}
        </CodeSnippet>
      )
    } else {
        var err = this.props.err || "An unknown error occurred";
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
}

export default Result;