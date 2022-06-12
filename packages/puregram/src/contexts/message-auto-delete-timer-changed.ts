import { inspectable } from 'inspectable'

import * as Interfaces from '../generated/telegram-interfaces'
import { MessageAutoDeleteTimerChanged } from '../common/structures'

import { Telegram } from '../telegram'
import { applyMixins } from '../utils/helpers'
import { Message } from '../updates/'

import { Context } from './context'
import { NodeMixin, SendMixin, TargetMixin } from './mixins'

interface MessageAutoDeleteTimerChangedContextOptions {
  telegram: Telegram
  update: Interfaces.TelegramUpdate
  payload: Interfaces.TelegramMessage
  updateId: number
}

class MessageAutoDeleteTimerChangedContext extends Context {
  payload: Interfaces.TelegramMessage

  constructor(options: MessageAutoDeleteTimerChangedContextOptions) {
    super({
      telegram: options.telegram,
      updateType: 'message_auto_delete_timer_changed',
      updateId: options.updateId,
      update: options.update
    })

    this.payload = options.payload
  }

  clone(options?: MessageAutoDeleteTimerChangedContextOptions) {
    return new MessageAutoDeleteTimerChangedContext({
      telegram: this.telegram,
      payload: this.payload,
      updateId: this.updateId!,
      update: this.update!,
      ...options
    })
  }

  /** Message auto delete timer */
  get autoDeleteTimer() {
    return new MessageAutoDeleteTimerChanged(this.payload.message_auto_delete_timer_changed!)
  }
}

interface MessageAutoDeleteTimerChangedContext extends Message, TargetMixin, SendMixin, NodeMixin { }
applyMixins(MessageAutoDeleteTimerChangedContext, [Message, TargetMixin, SendMixin, NodeMixin])

inspectable(MessageAutoDeleteTimerChangedContext, {
  serialize(context) {
    return {
      id: context.id,
      from: context.from,
      senderId: context.senderId,
      createdAt: context.createdAt,
      chat: context.chat,
      chatId: context.chatId,
      chatType: context.chatType,
      autoDeleteTimer: context.autoDeleteTimer
    }
  }
})

export { MessageAutoDeleteTimerChangedContext }
