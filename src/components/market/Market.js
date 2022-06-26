import React from 'react'
import {Link} from 'react-router-dom'
import {suma} from '../../redux/actions/Actions'
import {useDispatch, useSelector} from 'react-redux'

export default function Market() {

  let dispatch = useDispatch()
  let state = useSelector(s => s)

  function onHandlerClick(){
    dispatch(suma())
  }

  return (
    <div>
    <h1>Market</h1>
    <button onClick={()=>onHandlerClick()}>Suma</button>
    <h3>{state.count}</h3>
    <Link to={'/'} >Volver a Home</Link>
    </div>
  )
}
