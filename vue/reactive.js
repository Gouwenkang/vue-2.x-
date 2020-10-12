import observe from './observe'

export default function reactive(data, key, value) {
    observe(value)
    Object.defineProperty(data, key, {
        get() {
            console.log('获取:', value);
            return value
        },
        set(newValue) {
            console.log('设置',newValue);
            if (value === newValue) return
            observe(newValue)
            value = newValue
        }
    })
}