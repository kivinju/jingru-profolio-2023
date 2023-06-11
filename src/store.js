// store.js
import { reactive } from 'vue'
import ls from 'localstorage-slim'

export const store = reactive({
    permit: false,
    next_func(to, from, next) {
        
        store.permit = ls.get('permit') === 'true'
        if (store.permit) {
            next()
            return
        }
        const passwd = prompt("This is a private project. Enter the password:");
        if (passwd === '8') {
            store.permit = true
            ls.set('permit', 'true', { ttl: 86400 })
            next()
        } else {
            next(false)
            if (passwd !== null) {
                alert('password is not correct.')
            }
        }
    }
})
