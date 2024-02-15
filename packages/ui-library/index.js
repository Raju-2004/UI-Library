import {h} from 'snabbdom'

export const createTemplate = (state,props) => {
    return h('div',[
        h('h1',state.count),
        h('button',{on:{click:props.handleClick}},'Add')
    ])
}

export const updateState = (currentState,newState,render)=>{
    Object.assign(currentState,newState)
    render()
}

export const componentDidMount = (callback)=>{
    document.addEventListener('DOMContentLoaded',callback)
}