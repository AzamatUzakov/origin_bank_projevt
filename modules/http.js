import axios from 'axios'
export const BASE_URL =
    import.meta.env.VITE_BASE_URL

export const postData = async (path, body) => {
    try {
        const res = await axios.post(BASE_URL + path, body)

        return res
    } catch (e) {
        throw new Error('Something went wrong ' + e.message)
    }
}

export const getData = async (path) => {
    try {
        const res = await axios.get(BASE_URL + path)

        return res
    } catch (e) {
        throw new Error('Something went wrong ' + e.message)
    }
}

export const patchData = async (path, body) => {
    try {
        const res = await axios.patch(BASE_URL + path, body)

        return res
    } catch (e) {
        throw new Error('Something went wrong ' + e.message)
    }
}

export const getSymbols = async () => {
    let symbols = JSON.parse(localStorage.getItem('symbols'))
    if (symbols) {
        return symbols
    } else {
        try {
            const res = await axios.get("https://api.apilayer.com/fixer/symbols", {
                headers: {
                    apiKey: import.meta.env.VITE_API_KEY
                }
            })

            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
            }

            return res.data.symbols
        } catch (e) {
            console.log(e.message);
        }
    }
}