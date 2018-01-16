// @flow

import type { LogLabelType } from 'canvas/constants/log'
import type { ReduxThunkType } from 'canvas/constants/redux'

const ReactNativeMixpanel = require('react-native-mixpanel')

//selectors
// consts userSelector = require('file location')


export const initialize: ReduxThunkType<> = () => (dispatch, getState) => {
  console.log('Initializing logging')
  ReactNativeMixpanel.sharedInstanceWithToken('')
}

//handles logging in, not requried at this moment.
