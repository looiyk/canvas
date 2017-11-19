//@flow

type $Object<V> = { +[key: string]: V }
type $ObjectValues<V, O: $Object<V>> = V
export type $Values<O: Object> = $ObjectValues<*, O>
