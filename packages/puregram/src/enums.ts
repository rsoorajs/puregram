export enum AttachmentType {
  ANIMATION = 'animation',
  AUDIO = 'audio',
  DOCUMENT = 'document',
  PHOTO = 'photo',
  STICKER = 'sticker',
  VIDEO = 'video',
  VIDEO_NOTE = 'video_note',
  VOICE = 'voice'
}

export enum EntityType {
  MENTION = 'mention',
  HASHTAG = 'hashtag',
  CASHTAG = 'cashtag',
  BOT_COMMAND = 'bot_command',
  URL = 'url',
  EMAIL = 'email',
  PHONE_NUMBER = 'phone_number',
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  STRIKETHROUGH = 'strikethrough',
  CODE = 'code',
  PRE = 'pre',
  TEXT_LINK = 'text_link',
  TEXT_MENTION = 'text_mention'
}

export enum UpdateType {
  CALLBACK_QUERY = 'callback_query',
  CHANNEL_CHAT_CREATED = 'channel_chat_created',
  CHOSEN_INLINE_RESULT = 'chosen_inline_result',
  DELETE_CHAT_PHOTO = 'delete_chat_photo',
  GROUP_CHAT_CREATED = 'group_chat_created',
  INLINE_QUERY = 'inline_query',
  INVOICE = 'invoice',
  LEFT_CHAT_MEMBER = 'left_chat_member',
  MESSAGE = 'message',
  EDITED_MESSAGE = 'edited_message',
  CHANNEL_POST = 'channel_post',
  EDITED_CHANNEL_POST = 'edited_channel_post',
  MIGRATE_FROM_CHAT_ID = 'migrate_from_chat_id',
  MIGRATE_FROM_TO_ID = 'migrate_from_TO_id',
  NEW_CHAT_MEMBERS = 'new_chat_members',
  NEW_CHAT_PHOTO = 'new_chat_photo',
  NEW_CHAT_TITLE = 'new_chat_title',
  PINNED_MESSAGE = 'pinned_message',
  POLL = 'poll',
  POLL_ANSWER = 'poll_answer',
  CHAT_MEMBER = 'chat_member',
  MY_CHAT_MEMBER = 'my_chat_member',
  PRE_CHECKOUT_QUERY = 'pre_checkout_query',
  SHIPPING_QUERY = 'shipping_query',
  SUCCESSFUL_PAYMENT = 'successful_payment',
  SUPERGROUP_CHAT_CREATED = 'supergroup_chat_created',
  MESSAGE_AUTO_DELETE_TIMER_CHANGED = 'message_auto_delete_timer_changed',
  VOICE_CHAT_STARTED = 'voice_chat_started',
  VOICE_CHAT_ENDED = 'voice_chat_ended',
  VOICE_CHAT_PARTICIPANTS_INVITED = 'voice_chat_participants_invited',
}
