// @flow

import type { $Values } from 'canvas/constants/flow'
import type { RouterRoutePathType } from 'canvas/constants/router'

import * as ROUTER from 'canvas/constants/router'

export const ID: { [string]: RouterRoutePathType } ={
  //NEWSFEED : ROUTER.ROUTE_PATH.NEWSFEED,
}

export type StackIdType = $Values <typeof ID>

export const IDS: StackIdType[] = (Object.values(ID): any)

export const ID_LABEL: { [key: StackIdType] : string } = {
  //[ID.NEWSFEED] : 'Newsfeed',
}

export const USER_ID: StackIdType[] = [
  //ID.NEWSFEED,
]
