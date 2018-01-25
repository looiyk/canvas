// @flow

import type { StateType } from 'canvas/constants/state'

export const isInitialized = (state: StateType): boolean => (
  state.app.isInitialized
)
