import type {Node, StateRef} from './index.h'
import type {Scope} from './unit.h'

export const getGraph = (graph: any): Node => graph.graphite || graph
export const getOwners = (node: Node) => node.family.owners
export const getLinks = (node: Node) => node.family.links
export const getStoreState = (store: any): StateRef => store.stateRef
export const getValue = (stack: any) => stack.value
export const getSubscribers = (store: any) => store.subscribers
export const getParent = (unit: any) => unit.parent
export const getForkPage = (val: any): Scope | void => val.scope
export const getMeta = (unit: any, field: string) => getGraph(unit).meta[field]
export const setMeta = (unit: any, field: string, value: any) =>
  (getGraph(unit).meta[field] = value)
