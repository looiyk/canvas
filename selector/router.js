// @flow

import type { ROUTER_ROUTE_TYPE } from 'canvas/constants/router'
import type { stackIdType } from 'canvas/constants/stack'
import type { StateType } from 'canvas/constants/state'

import * as _ from 'lodash'
import * as reselect from 'reselect'

export const domain = (state: StateType) => state.router

export const activeStackId = (state: StateType) => (
  domain(state).activeStackId
)

export const stackIdRoutes = (state: StateType) => (
  domain(state).stackIdRoutes
)

export const routes = (
  state: StateType,
  { stackId }: { stackId: StateType }
) : ROUTER_ROUTE_TYPE[] => (
  stackIdRoutes(state)[stackId]
)

export const activeRoutes = reselect.createSelector(
  activeStackId,
  stackIdRoutes,
  ( activeStackIdValue, stackIdRoutesValue ) => (
    stackIdRoutesValue[activeStackIdValue]
  )
)

export const activePath = reselect.createSelector(
  activeStackId,
  activeRoutes,
  ( activeStackIdValue, activeRoutesValue ) => (
    activeRoutesValue.length
    ? _.last(activeRoutesValue).activePath
    : undefined
  )
)
