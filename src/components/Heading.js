import React from 'react'
//import { UserOutlined } from '@ant-design/icons'
export default function heading(props) {
  return (
    <div  className='head' >
      <div><img  className='imghead' src="head.png" alt="." />
      </div>
      <div className='headtitle'>
        <span> <span style={{
            fontWeight:'bold',
            }}>{props.data5.title}</span><br/>{props.data5.subtitle}
        </span>
      </div>
    </div>
  )
}
