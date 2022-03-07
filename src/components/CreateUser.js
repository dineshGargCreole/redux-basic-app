import React from 'react'
import {Form, Input, Button, Space, Divider} from 'antd'
import {addUserAction} from '../action/UserActions'
import {connect} from 'react-redux'

function CreateUser(props) {
  const [form] = Form.useForm();
  const addUser = (data) => {
    const user = {
      id: Math.random(),
      ...data
    }
    props.addDispatch(user)
    form.resetFields();
    props.onCancel()
  }
  return (
    <div>
      <Form
        name='user'
        layout='vertical'
        onFinish={addUser}
        form={form}
      >
        <Form.Item
          label='Full Name'
          name='name'
          rules={[{required: true, message: 'This is required field'}]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Username'
          name='username'
          rules={[{required: true, message: 'This is required field'}]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[{required: true, message: 'This is required field'}]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Divider/>
          <Space>
            <Button
              onClick={() => {
                props.onCancel()
                form.resetFields()
              }}
            >
              Cancel
            </Button>
            <Button type='primary' htmlType='submit'>Add</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDispatch: (user) => dispatch(addUserAction(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateUser)