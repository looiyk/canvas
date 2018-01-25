// @flow

import type { ReduxActionObjectType, ReduxThunkType } from 'canvas/constants/redux'

import * as LOG from 'canvas/constants/log'
//import * as logAction from 'canvas/actions/log'
import * as ROUTER from 'canvas/constants/router'
import * as routerSelectors from 'canvas/constants/router'
import * as routerUtil from 'canvas/util/router'
import * as STACK from 'canvas/constants/stack'

const navigate: ReduxThunkType<{
  data? : Object,
  path: RouterRoutePathType,
}> = ({
  data,
  path,
}) => ( dispatch, getState ) => {
  dispatch(naviagteWithTracking({
    activeStackId: routerSelector.activeStackId(getState()),
    data,path,
    type: ROUTER.ACTION_TYPE.NAVIGATE,
  }))
}

const navigateBack: ReduxThunkType<> = () => (dispatch, getState) => {
  dispatch(naviagteWithTracking({
    activeStackId: routerSelector.activeStackId(getState()),
    type: ROUTER.ACTION_TYPE.NAVIGATE_BACK,
  }))
}

module.exports = {
  navigate,
  navigateBack
}
