import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleAuth from '../components/GoogleAuth';
import logoImage from '../assets/logo.png';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Client from '../utils/Client';
import { Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [trueUser, setTrueUser] = useState(true);
  const [userAuthorized, setUserAuthorized] = useState(false);

  const onFinish = async (values) => {
    const users = await Client.fetch(`*[_type == 'user']`);
    let flag = 0;


    users?.forEach(user => {
      if (user.email === values.email) {

        if (user.password === values.password) {
          flag = 1;
          setUserAuthorized(true);
          setTimeout(() => {
            setUserAuthorized(false);
            localStorage.clear();
            localStorage.setItem("PropertyVerseAuth", user._id);
            navigate("/");
          }, 2000);
        }
      }
    });


    if (flag === 0) {
      setTrueUser(false);
      setTimeout(() => {
        setTrueUser(true);
      }, 3000);
    }
  };

  if (localStorage.getItem("PropertyVerseAuth")) {
    return (
      <div className='p-5 max-md:p-2 max-sm:p-0 flex bg-gradient-to-tr from-slate-900 to-red-950  flex flex-start first-letter items-center justify-center flex-col h-screen'>
        <div className='py-6 px-8 bg-gradient-to-tr from-slate-800 to-slate-950 rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6 animate-fade-in-up z-50 shadow-3xl flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold text-white max-md:text-xl max-sm:text-lg my-2'>You are already Logged in</h1>
          <p className='text-2xl font-bold text-white max-md:text-lg max-sm:text-base my-2'>Go back to <Link to={'/'} className='text-blue-500 hover:text-blue-400 transition-all duration-300'>Home</Link> page</p>
          <Button type='default' onClick={() => {
            localStorage.removeItem("PropertyVerseAuth")
            navigate("/login")
          }} className='text-white max-sm:text-base py-2 px-4 flex items-center justify-center my-2'>
            Logout
          </Button>
        </div>
      </div>
    )
  }


  return (
    <div className='flex p-5 max-md:p-2 max-sm:p-0 flex bg-gradient-to-tr from-slate-900 to-red-950 justify-center flex-start first-letter items-center flex-col h-screen'>
      {userAuthorized &&
        <div className='z-10 fixed m-auto left-4 top-4 bg-white py-2 px-3 rounded-lg border-2 border-green-400 text-green-500 text-center shadow-green-400 shadow-inner animate-slide-in ' >
          Succefully authorized to HealBuddy
        </div>
      }
      <div className='p-5'>
        <img src={logoImage} alt='logo' className='w-20 h-20 mb-5 rounded-lg' />
      </div>

      <div className='py-6 bg-gradient-to-tr from-slate-800 to-slate-950 px-8 rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6 animate-fade-in-up z-50 shadow-3xl'>
        <h1 className='text-2xl font-bold text-gray-300'>Login here</h1>
        <p className='text-red-500 py-2 px-3 animate-slide-in transition-all duration-300 ease-in' >
          {(!trueUser && 'Enter valid credentials')}
        </p>

        <div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className='my-3'>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
            </div>
            <div>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>

            <Form.Item>
              <div className='flex'>
                <div className='mr-3'>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className='max-sm:text-xs text-white'>Remember me</Checkbox>
                  </Form.Item>
                </div>

                <a className="login-form-forgot max-sm:text-xs text-white" href="">
                  Forgot password?
                </a>
              </div>
            </Form.Item>

            <Form.Item>
              <div className='flex items-center pt-3'>
                <Button type="default" htmlType="submit" className="login-form-button mr-3 text-white">
                  Log in
                </Button>
                <a href="/signup" className='text-white'>register now!</a>
              </div>
            </Form.Item>
          </Form>
        </div>

        <div className='flex flex-col items-center jus py-3 justify-center'>
          <h1 className='line-through text-gray-300 my-3'>OR</h1>
          <GoogleAuth />
        </div>

      </div>
    </div>
  )
}
