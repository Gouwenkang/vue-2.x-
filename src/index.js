import Vue from 'vue'

const vm = new Vue({
    el: "app",
    data() {
        return {
            title: '学生列表',
            classNum: 1,
            total: 2,
            teacher: ['张三', '李四'],
            cities:{
                first:'四川'
            },
            students: [
                {
                    id: 1,
                    name: '小红'
                },
                {
                    id: 2,
                    name: '小明'
                }
            ]
        }
    }
})
