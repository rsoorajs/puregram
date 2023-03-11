import { inspectable } from 'inspectable'

import * as Interfaces from '../../generated/telegram-interfaces'

import { Structure } from '../../types/interfaces'

/** This object contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button. */
export class ChatShared implements Structure {
  constructor (private payload: Interfaces.TelegramChatShared) { }

  get [Symbol.toStringTag] () {
    return this.constructor.name
  }

  /** Identifier of the request */
  get requestId () {
    return this.payload.request_id
  }

  /** Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
  get chatId () {
    return this.payload.chat_id
  }

  toJSON(): Interfaces.TelegramChatShared {
    return {
      request_id: this.requestId,
      chat_id: this.chatId
    }
  }
}

inspectable(ChatShared, {
  serialize (struct) {
    return {
      requestId: struct.requestId,
      chatId: struct.chatId
    }
  }
})
