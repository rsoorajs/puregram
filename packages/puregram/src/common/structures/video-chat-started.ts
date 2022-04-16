import { inspectable } from 'inspectable'

import { TelegramVideoChatStarted } from '../../telegram-interfaces'

/**
 * This object represents a service message about a video chat started in the chat.
 * Currently holds no information.
 */
export class VideoChatStarted {
  constructor(public payload: TelegramVideoChatStarted) { }

  public get [Symbol.toStringTag](): string {
    return this.constructor.name
  }
}

inspectable(VideoChatStarted, {
  serialize(event: VideoChatStarted) {
    return {}
  }
})
