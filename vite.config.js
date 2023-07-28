import {
    resolve
} from 'path'
import {
    defineConfig
} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'pages/login/index.html'),
                wallets: resolve(__dirname, 'pages/wallets/index.html'),
                transactions: resolve(__dirname, 'pages/transactions/index.html'),
                signup: resolve(__dirname, 'pages/signup/index.html'),
                "create-transaction": resolve(__dirname, 'pages/create-transaction/index.html'),
                "create-card": resolve(__dirname, 'pages/create-card/index.html'),
                card: resolve(__dirname, 'pages/card/index.html')
            },
        },
    },
})