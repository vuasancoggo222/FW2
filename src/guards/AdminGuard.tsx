import React from 'react'
import { useNavigate } from 'react-router-dom'
type AdminGuardProps = {
    children: JSX.Element
}

export const AdminGuard = (props: AdminGuardProps) => {
  const navigate = useNavigate()
if(localStorage.getItem('user')){
    const {user} = JSON.parse(localStorage.getItem('user') as string)
    console.log(user);
    if(!user){
       return navigate('/login')
    }
    return props.children
}
else{
  navigate('/login')
}
}