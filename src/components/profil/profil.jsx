import React from 'react'
import CustomButton from '../UI/button'
import Input from '../UI/input'
import CustomTable from '../UI/table'
import {Data} from '../../data'

export default function profil() {
  return (
    <div>
        <Input type='file' placeholder='Avatar' className='form-controls' label='Avatar'/>
        <Input type='text' placeholder='Username' className='form-controls' label='Username'/>
        <Input type='text' placeholder='Email' className='form-controls' label='Email'/>
        <Input type='password' placeholder='password' className='form-controls' label='password'/>
        <div className ='d-flex justify-content-center '>
            <CustomButton className='m-3' variant='outline-primary'/>
            <CustomButton className='m-3' variant='outline-danger'/>
        </div> 
       <CustomTable Data={Data}/>
       <CustomTable Data={Data.filter(el => el.roles[0].role != 'guest'&& el.roles[0].role != 'gestionaire' ? el : '')}/>
    </div>
  )
}
