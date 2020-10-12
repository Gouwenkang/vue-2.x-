import { ARR_METHODS } from './config'
import observe from './observe'
import observeArr from  './observeArr'

let originArrMethods = Array.prototype
let arrMethods = Object.create(originArrMethods)

ARR_METHODS.map(item => {
    arrMethods[item] = function () {
        let args = Array.prototype.slice.call(arguments)
        let rt = originArrMethods[item].apply(this, args)

        let newArr

        switch (item) {
            case 'push':
            case 'unshift':
                newArr = args
                break;
            case 'splice':
                newArr = args.slice(2)
                break;
            default:
                break;
        }
        newArr && observeArr(newArr)
        return rt
    }
})

export {
    arrMethods
}