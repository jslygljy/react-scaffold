
class HttpErrorHandle {
    constructor() {
        this.handleMap = new Map()
        this.codeMap = {
            61005: 'tokenTimeout',
            500: 'serverError'
        }
    }

    clearListener () {
        this.handleMap = new Map()
    }

    addEventListener (name, fn) {
        this.handleMap.set(name, fn)
        /*if (this.handleMap.has(name)) {
            this.handleMap.get(name).push(fn)
        } else {
            let arr = []
            arr.push(fn)
            this.handleMap.set(name, arr)
        }*/
    }

    fireEvent (name) {
        if (this.handleMap.has(name)) {
            const fn = this.handleMap.get(name)
            fn && typeof fn === 'function' && fn()
            // const fnArr = this.handleMap.get(name)
            // fnArr.forEach((fn) => {
            //     fn && typeof fn === 'function' && fn()
            // })
        }
    }

    checkResponse (json) {
        if (!json) {
            retrun ;
        }
        let code = json.code
        const name = this.codeMap[code]
        let data = null
        switch (name) {
            case 'tokenTimeout':
                this.fireEvent(name)
                data = json
                break;
            case 'serverError':
                this.fireEvent(name)
                data = json
            default:
                data = json
        }
        return data;
    }
}

let httpErrorHandle = new HttpErrorHandle();
export default httpErrorHandle
