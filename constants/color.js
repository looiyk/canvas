// @flow

import type { $Values } from 'canvas/constants/flow'

module.exports = {
  // Main color palette

  // Shades of White to Black
  WHITE         : '#FFF',
  OFF_WHITE     : '#F8F7FA',
  LIGHT_WHITE   : '#EAEAF0',
  SILVER        : '#DCDCE0',
  DARK_SILVER   : '#CCCCCD3',
  LIGHT_GRAY    : '#AAAAB3',
  GRAY          : '#9999A2',
  DARK_GRAY     : '#787884',
  BLACK         : '#3B3A44',
  JET_BLACK     : '#000',

  // Transparent
  TRANSPARENT : 'transparent',

}

export type ColorType = $Values<typeof module.exports>
