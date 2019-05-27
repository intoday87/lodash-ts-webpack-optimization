import get from 'lodash-es/get'

const a = {}

console.log(get(a, 'a.b.c', 'default value'))
