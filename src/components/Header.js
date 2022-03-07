import React from 'react'
import {Button, Divider} from 'antd'

function Header(props) {
  return (
    <div>
        <Button type={'text'} onClick={props.setOpen}>New User</Button>
        <Divider />
    </div>
  )
}

export default Header