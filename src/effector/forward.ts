import {processArgsToConfig} from './config'
import {createNode} from './createNode'
import type {Subscription, NodeUnit, Cmd} from './index.h'
import {createSubscription} from './subscription'
import {assertNodeSet} from './is'

export const createLinkNode = (
  parent: NodeUnit | NodeUnit[],
  child: NodeUnit | NodeUnit[],
  node?: Array<Cmd | false | void | null>,
  op?: string,
  scopeFn?: Function,
) =>
  createNode({
    node,
    parent,
    child,
    scope: {fn: scopeFn},
    meta: {op},
    family: {owners: [parent, child], links: child},
    regional: true,
  })
export const forward = (opts: {
  from: NodeUnit | NodeUnit[]
  to: NodeUnit | NodeUnit[]
  meta?: Record<string, any>
}): Subscription => {
  const [{from, to}, config] = processArgsToConfig(opts, true)
  assertNodeSet(from, 'forward', '"from"')
  assertNodeSet(to, 'forward', '"to"')
  return createSubscription(
    createNode({
      parent: from,
      child: to,
      meta: {op: 'forward', config},
      family: {},
      regional: true,
    }),
  )
}
