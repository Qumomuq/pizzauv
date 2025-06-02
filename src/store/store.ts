const defaultState = {
    product: []
}

export const reducerProduct = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return ADD_PRODUCT(state, action)
        case "DELETE_PRODUCT":
            return DELETE_PRODUCT(state, action)
        case "DELETE_ALL_PRODUCT":
            return DELETE_ALL_PRODUCT(state, action)
        default:
            return state
    }
}

const ADD_PRODUCT = (state, action) => {
    if (state.product.length !== 0) {
        let checkCard = false
        for (let i = 0; i < state.product.length; i++) {
            console.log(action)
            if ( state.product[i].card.id === action.payload.card.id) {
                const newPosts = state.product.map((card) => (
                    card.card.id === action.payload.card.id
                        ? { ...card, sumItems: card.sumItems + 1 }
                        : card
                ));
                checkCard = true
                return {...state, product: newPosts}
            }
        }
        if (!checkCard) {
            return {...state, product: [...state.product, { sumItems: 1, card: action.payload.card}]}
        }
    } else {
        return {...state, product: [...state.product, { sumItems: 1, card: action.payload.card}]}
    }
}

const DELETE_PRODUCT = (state, action) => {
    if(action.payload.sumItems === 1) {
        return DELETE_ALL_PRODUCT(state, action)
    } else {
        const newPosts = state.product.map((card) => (
            card.card.id === action.payload.card.id
                ? { ...card, sumItems: card.sumItems - 1 }
                : card
        ));
        return {...state, product: newPosts}
    }
}

const DELETE_ALL_PRODUCT = (state, action) => {
    return {...state, product: state.product.filter(card => (card.card.id !== action.payload.card.id))}
}
