import reactive from './reactive'
import { arrMethods } from './array'
import observeArr from './observeArr'

export default function Observer(data) {
    if (Array.isArray(data)) {
        data.__proto__ = arrMethods
        observeArr(data)
    } else[
        this.walk(data)
    ]
}
Observer.prototype.walk = function (data) {
    let keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        let value = data[key]
        reactive(data, key, value)
    }
}