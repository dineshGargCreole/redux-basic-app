import React from 'react'
import {connect} from 'react-redux'
import {Table, Space, Button, Form, Input} from 'antd'
import {deleteUserAction, editUserAction, updateUserAction} from '../action/UserActions'

function DisplayUsers(props) {
    const [form] = Form.useForm();
    
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text, record) => {
          if(record.id === props.editRow) {
            return <Form.Item
              name='name'
              rules={[{
                required: true, message: 'This is required field'
              }]}
            >
              <Input />
            </Form.Item>
          } else {
            return <p>{text}</p>
          }
        }
      },

      {
        title: 'Username',
        dataIndex: 'username',
        render: (text, record) => {
          if(record.id === props.editRow) {
            return <Form.Item
              name='username'
              rules={[{
                required: true, message: 'This is required field'
              }]}
            >
              <Input />
            </Form.Item>
          } else {
            return <p>{text}</p>
          }
        }
      },

      {
        title: 'Email',
        dataIndex: 'email',
        render: (text, record) => {
          if(record.id === props.editRow) {
            return <Form.Item
              name='email'
              rules={[{
                required: true, message: 'This is required field'
              }]}
            >
              <Input />
            </Form.Item>
          } else {
            return <p>{text}</p>
          }
        }
      },

      {
        title: 'Actions',
        render: ((text, record) => {
          return (
            <Space>
              {props.editRow === record.id ?
                <Form.Item>
                  <Button
                    type='link'
                    htmlType='submit'
                  >
                    Save
                  </Button>
                  <Button
                      type='link'
                      onClick={() => props.deleteDispatch(record.id)}
                    >
                      Delete
                  </Button>
                </Form.Item> :
                <>
                  <Button
                    type='link'
                    onClick={() => {
                      props.editDispatch(record.id)
                      form.setFieldsValue({
                        name: record.name,
                        username: record.username,
                        email: record.email
                      })
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    type='link'
                    onClick={() => props.deleteDispatch(record.id)}
                  >
                    Delete
                  </Button>
                </>
                }
              {/* <Button
                type='link'
                onClick={() => props.deleteDispatch(record.id)}
              >
                Delete
              </Button> */}
            </Space>
          )
        })
      }
    ]
  return (
    <div>
      <Form form={form} onFinish={(user) => props.updateDispatch(user)}>
        <Table
          columns={columns}
          dataSource={props.users}
          rowKey={record => record.id}
        />
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.userReducer.users,
    editRow: state.userReducer.editRow,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteDispatch: (id) => dispatch(deleteUserAction(id)),
    editDispatch: (id) => dispatch(editUserAction(id)),
    updateDispatch: (user) => dispatch(updateUserAction(user)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (DisplayUsers)