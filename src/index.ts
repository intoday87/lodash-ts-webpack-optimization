import { get } from 'lodash'

const a = {}

console.log(get(a, 'a.b.c', 'default value'))
