// @flow

import type { RouterRoutePathType } from 'canvas/constants/router'

import * as _ from 'lodash'

type GetLabelType = ({ path?: RouterRoutePathType }) => string

export const getLabel : GetLabelType = ({ path }) => (
  path ? path.split('/').map(chunk => _.startCase(chunk)).join(': ') : ''
)
