'use babel'
import React from 'react'
import pull from 'pull-stream'
import mlib from 'ssb-msgs'
import MsgList from '../com/msg-list'
import Oneline from '../com/msg-list/oneline'
import app from '../lib/app'

export default class Inbox extends React.Component {
  cursor (msg) {
    if (msg)
      return [msg.value.timestamp, msg.value.author]
  }

  render() {
    return <div id="inbox">
      <MsgList
        threads
        ListItem={Oneline}
        live={{ gt: [Date.now(), null] }}
        emptyMsg="Your inbox is empty"
        source={app.ssb.patchwork.createInboxStream}
        cursor={this.cursor} />
    </div>
  }
}