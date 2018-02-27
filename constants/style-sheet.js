// @flow

// using some of native codes we want to alter the functionality that will suit our needs.

import ReactNative from 'react-native'

import * as COLOR from 'canvas/constants/color'
import * as SIZE from 'canvas/constants/size'
import * as FONT from 'canvas/constants/font'

module.exports = ReactNative.StyleSheet.create({

  ABSOLUTE_FILL : ReactNative.StyleSheet.absoluteFillOBject,

  CENTER: {
    alignItems  :'center',
    justifyContent: 'center',
  },

  FLEXED_FILL : {
    flexGrow: 1,
  },

  HIDDEN: {
    opacity: 0,
    zIndex: -1,
  },

  TEXT: {
    color   : COLOR.JET_BLACK,
    fontFamily: FONT.FAMILY.DEFAULT,
    fontSize: FONT.DEFAULT_SIZE,
    fontWeight: FONT.WEIGHT.REGULAR,
  },

  TEXT_INPUT: {
    borderBottomColor: COLOR.SILVER,
    borderBottomWidth: 1,
    paddingVertical: SIZE.BASE * 2,
  },

  TEXT_INPUT_TEXT: {
    fontSize: FONT.SIZE.$22,
  },
  TEXT_INPUT_TEXT_PLACEHOLDER: {
    color : COLOR.GRAY,
  },
})

export type StyleSheetIdType = number,
// unsure if required proptypes.
