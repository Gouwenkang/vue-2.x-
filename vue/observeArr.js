import observe from './observe'

export default function observeArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        observe(arr[i])
    }
}