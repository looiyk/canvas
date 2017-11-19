// @flow

import { StateType } from 'canvas/constants/state'

export type ReduxActionTypeType = Symbol | string
export type ReduxActionObjectType = { ..any, type: ReduxActionTypeType }
export type ReduxActionType<A = void> = A => ReduxActionObjectType

export type ReduxDispatchType = (action: (
  ReduxActionObjectType
  |
  ReduxThunkActionType<>
  |
  Promise<>
)) => any
type ReduxGetStateType = () => StateType
type ReduxThinkActionType<R = void> = (dispatch: ReduxDispatchType, getState: ReduxGetStateType) => R

export type ReduxThunkType<A = void, R = void> = A => ReduxThunkActionType<R>
