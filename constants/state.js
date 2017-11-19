// @flow

import type { RouterRouteType } from 'canvas/constants/router'

export type StateType = {
  +router:{
    +activeStacId: StackIdType,
    +stackIdRouters: {
      +[StackIdType]: RouterRouteType[],
    },
  },
}
