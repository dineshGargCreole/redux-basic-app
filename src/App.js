import React, {useEffect, useState} from 'react'
import './App.css';
import {initialSetUsers} from './action/UserActions'
import {connect} from 'react-redux'
import DisplayUsers from './components/DisplayUsers';
import Header from './components/Header'
import {Modal} from 'antd'
import CreateUser from './components/CreateUser';


function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    props.setUsers();

  },[])

  return (
    <div className="">
      <Header setOpen={() => setIsOpen(!isOpen)} />
      <h1>Redux app</h1>
      <DisplayUsers />
      <Modal
        visible={isOpen}
        title={'New User'}
        onCancel={() => setIsOpen(false)}
        footer={false}
        onOk={() => setIsOpen(false)}
      >
        <CreateUser
          onCancel={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: () => dispatch(initialSetUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
