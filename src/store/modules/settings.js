const seetings = {
    state: {
        keepList: [],

    },
    mutations: {
        SET_KEEPLIST: (state, payload) => {
            if (payload.type == 'add') {
                let index = state.keepList.indexOf(payload.routeName)
                if (index != -1) return
                state.keepList.push(payload.routeName)
            } else if (payload.type == 'remove') {
                let index = state.keepList.indexOf(payload.routeName)
                if (index == -1) return
                state.keepList.splice(index, 1)
            }
        },
    },
    actions: {

    }

}

export default seetings