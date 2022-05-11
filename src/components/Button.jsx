import './Button.css'


export const Button = (props)=> {
    let title = props.title
    let setCount = props.setCount 

    const decrementCount = ()=> {
        if(title === '+'){
        setCount((prev)=> prev + 1)
    }else {
        setCount((prev)=> prev - 1)
    }
}
   return(
       <button onClick = {decrementCount} className="btn">{title}</button>
   )
}
