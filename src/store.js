// store.js
import { reactive } from 'vue'

export const store = reactive({
    permit: false,
    next_func(to, from, next) {
        if (store.permit) {
            next()
            return
        }
        const passwd = prompt("This is a private project. Enter the password:");
        if (passwd === '8') {
            store.permit = true
            next()
        } else {
            next(false)
            if (passwd !== null) {
                alert('password is not correct.')
            }
        }
    }
})
