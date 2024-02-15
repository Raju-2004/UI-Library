import { createTemplate,updateState,componentDidMount } from "./packages/ui-library"

let state = {count : 0}

const render = ()=>{
    const props = {
        handleClick : ()=>{
            updateState(state,{count:state.count+1},render)
        }
    }
    const template = createTemplate(state,props)
    document.getElementById('app').innerHTML = ''
    document.getElementById('app').appendChild(template)
}

componentDidMount(()=>{
    console.log('Component mounted')
    render()
})
