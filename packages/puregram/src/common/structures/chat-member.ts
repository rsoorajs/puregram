import { inspectable } from 'inspectable'

import * as Interfaces from '../../generated/telegram-interfaces'
import { filterPayload } from '../../utils/helpers'

import { User } from './user'

export class ChatMember {
  constructor(public payload: Interfaces.TelegramChatMember) { }

  get [Symbol.toStringTag]() {
    return this.constructor.name
  }

  /** Information about the user */
  get user() {
    return new User(this.payload.user)
  }

  /** The member's status in the chat */
  get status() {
    return this.payload.status
  }

  /** Owner and administrators only. Custom title for this user */
  get customTitle() {
    return this.payload.custom_title
  }

  /** Owner and administrators only. `true`, if the user's presence in the chat is hidden */
  get isAnonymous() {
    return this.payload.is_anonymous
  }

  /**
   * Restricted and kicked only.
   * Date when restrictions will be lifted for this user;
   * unix time
   */
  get untilDate() {
    return this.payload.until_date
  }

  /**
   * Administrators only.
   * `true`, if the bot is allowed to edit administrator privileges of that
   * user
   */
  get canBeEdited() {
    return this.payload.can_be_edited
  }

  /**
   * Administrators only.
   * `true`, if the administrator can access the chat event log, chat statistics,
   * message statistics in channels, see channel members, see anonymous administrators 
   * in supergroups and ignore slow mode.
   * Implied by any other administrator privilege
   */
  get canManageChat() {
    return this.payload.can_manage_chat
  }

  /**
   * Administrators only.
   * `true`, if the administrator can post in the channel;
   * channels only
   */
  get canPostMessages() {
    return this.payload.can_post_messages
  }

  /**
   * Administrators only.
   * `true`, if the administrator can edit messages of other users
   * and can pin messages; channels only
   */
  get canEditMessages() {
    return this.payload.can_edit_messages
  }

  /**
   * Administrators only.
   * `true`, if the administrator can delete messages of other users
   */
  get canDeleteMessages() {
    return this.payload.can_delete_messages
  }

  /**
   * Administrators only.
   * `true`, if the administrator can manage video chats
   */
  get canManageVideoChats() {
    return this.payload.can_manage_video_chats
  }

  /**
   * Administrators only.
   * `true`, if the administrator can restrict, ban or unban chat members
   */
  get canRestrictMembers() {
    return this.payload.can_restrict_members
  }

  /**
   * Administrators only.
   * `true`, if the administrator can add new administrators with a subset o
   * their own privileges or demote administrators that he has promoted,
   * directly or indirectly (promoted by administrators that were appointed by
   * the user)
   */
  get canPromoteMembers() {
    return this.payload.can_promote_members
  }

  /**
   * Administrators and restricted only.
   * `true`, if the user is allowed to change the chat title,
   * photo and other settings
   */
  get canChangeInfo() {
    return this.payload.can_change_info
  }

  /**
   * Administrators and restricted only.
   * `true`, if the user is allowed to invite new users to the chat
   */
  get canInviteUsers() {
    return this.payload.can_invite_users
  }

  /**
   * Administrators and restricted only.
   * `true`, if the user is allowed to pin messages;
   * groups and supergroups only
   */
  get canPinMessages() {
    return this.payload.can_pin_messages
  }

  /**
   * Restricted only.
   * `true`, if the user is a member of the chat at the moment of the request
   */
  get isMember() {
    return this.payload.is_member
  }

  /**
   * Restricted only.
   * `true`, if the user is allowed to send text messages,
   * contacts, locations and venues
   */
  get canSendMessages() {
    return this.payload.can_send_messages
  }

  /**
   * Restricted only.
   * `true`, if the user is allowed to send audios, documents,
   * photos, videos, video notes and voice notes
   */
  get canSendMediaMessages() {
    return this.payload.can_send_media_messages
  }

  /** Restricted only. `true`, if the user is allowed to send polls */
  get canSendPolls() {
    return this.payload.can_send_polls
  }

  /**
   * Restricted only.
   * `true`, if the user is allowed to send animations, games,
   * stickers and use inline bots
   */
  get canSendOtherMessages() {
    return this.payload.can_send_other_messages
  }

  /**
   * Restricted only
   * `true`, if the user is allowed to add web page previews to their messages
   */
  get canAddWebPagePreviews() {
    return this.payload.can_add_web_page_previews
  }
}

inspectable(ChatMember, {
  serialize(member: ChatMember) {
    const payload = {
      user: member.user,
      status: member.status,
      customTitle: member.customTitle,
      isAnonymous: member.isAnonymous,
      untilDate: member.untilDate,
      canBeEdited: member.canBeEdited,
      canManageChat: member.canManageChat,
      canPostMessages: member.canPostMessages,
      canEditMessages: member.canEditMessages,
      canDeleteMessages: member.canDeleteMessages,
      canManageVideoChats: member.canManageVideoChats,
      canRestrictMembers: member.canRestrictMembers,
      canPromoteMembers: member.canPromoteMembers,
      canChangeInfo: member.canChangeInfo,
      canInviteUsers: member.canInviteUsers,
      canPinMessages: member.canPinMessages,
      isMember: member.isMember,
      canSendMessages: member.canSendMessages,
      canSendOtherMessages: member.canSendOtherMessages,
      canAddWebPagePreviews: member.canAddWebPagePreviews
    }

    return filterPayload(payload)
  }
})
