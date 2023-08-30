import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GoogleAuth from '../components/GoogleAuth';
import { Button, Checkbox, Form, Input } from 'antd';
import logoImage from '../assets/logo.png';
import { v4 as uuidv4 } from 'uuid';
import Client from '../utils/Client'
import SendMail from '../utils/SendMail';


function generateRandomSixDigitNumber() {
  const min = 100000; // Minimum value for a 6-digit number
  const max = 999999; // Maximum value for a 6-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomSixDigitNumber = generateRandomSixDigitNumber();


export default function Signup() {
  const navigate = useNavigate();
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [isGoingToRegister, setIsGoingToRegister] = useState(false);
  const [randomEntered, setRandomEntered] = useState("");
  const [formData, setFormData] = useState(null);
  const [isWrongOTP, setIsWrongOTP] = useState(false);
  const [docCreated, setDocCreated] = useState(false);

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { fullName, email, password } = values;
    const uuid = uuidv4();
    const doc = {
      _id: uuid,
      _type: 'user',
      fullName,
      email,
      password,
    }

    let flag = 0;
    const users = await Client.fetch(`*[_type == 'user']`);
    users?.forEach(user => {
      if (user.email === values.email) {
        flag = 1;
        setIsEmailExist(true);
        setTimeout(() => {
          setIsEmailExist(false);
        }, 3000);
        return;
      }
    });

    if (flag === 0) {
      setFormData(doc);
      SendMail(values.fullName, values.email, `OTP is : ${randomSixDigitNumber}`);
      setIsGoingToRegister(true);
    }
  }

  const verifyAndSave = () => {
    if (randomEntered == randomSixDigitNumber) {
      !isEmailExist && Client
        .createIfNotExists(formData)
        .then((data) => {
          console.log(data);
        })
        .catch((console.error));

      setDocCreated(true);
      setTimeout(() => {
        setDocCreated(false);
        localStorage.clear();
        localStorage.setItem("PropertyVerseAuth", formData._id);
        navigate("/");
      }, 2000);

    } else {
      setIsWrongOTP(true);
      setIsGoingToRegister(false);
      setTimeout(() => {
        setIsWrongOTP(false);
        setIsGoingToRegister(true);
      }, 3000);
    }
  }

  if ( localStorage.getItem("PropertyVerseAuth")){
      return (
         <div className='p-5 max-md:p-2 max-sm:p-0 flex bg-gradient-to-tr from-slate-900 to-red-950  flex flex-start first-letter items-center justify-center flex-col h-screen'>
            <div  className='py-6 px-8 bg-gradient-to-tr from-slate-800 to-slate-950 rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6 animate-fade-in-up z-50 shadow-3xl flex flex-col items-center justify-center'>
               <h1 className='text-3xl font-bold text-white max-md:text-xl max-sm:text-lg my-2'>You are already Logged in</h1>
               <p className='text-2xl font-bold text-white max-md:text-lg max-sm:text-base my-2'>Go back to <Link to={'/'} className='text-blue-500 hover:text-blue-400 transition-all duration-300'>Home</Link> page</p>
               <Button type='default' onClick={()=>{
                localStorage.removeItem("PropertyVerseAuth")
                navigate("/login")}}  className='text-white max-sm:text-base py-2 px-4 flex items-center justify-center my-2'>
                Logout
               </Button>
            </div>
         </div>
      )
   }


  return (
    <div className='p-5 max-md:p-2 max-sm:p-0 flex bg-gradient-to-tr from-slate-900 to-red-950 justify-center items-center flex-col min-h-screen overflow-y-auto'>
      {docCreated &&
        <div className='z-10 fixed m-auto left-4 top-4 bg-white py-2 px-3 rounded-lg border-2 border-green-400 text-green-500 text-center shadow-green-400 shadow-inner animate-slide-in ' >
          Succefully registered to PropertyVerse
        </div>
      }
      
        <div>
          <img src={logoImage} alt='logo' className='w-20 h-20 mb-2 max-sm:h-16 max-sm:w-16 rounded-lg' />
        </div>
        <div className='py-4 px-8 bg-gradient-to-tr from-slate-800 to-slate-950  rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6  max-sm:px-4 max-sm:py-2 max-sm:pb-3 max-md:py-4 max-md:px-6 animate-fade-in-up z-50 shadow-3xl'>

          <h1 className='text-gray-200 text-2xl font-bold '>Signup here</h1>
          <div className='text-red-500 p-2 transition-all duration-300 ease-in flex flex-col items-center justify-center'>
            {componentDisabled && <p className=' animate-fade-in-up duration-100'>Already login or CLEAR CATCH!! <p className='p-2 text-blue-500 hover:text-blue-400 transition-all duration-300' onClick={()=>localStorage.clear()}>Click Here</p></p>}
            {isEmailExist && <p className='animate-fade-in-up duration-100'>Email already exists!!</p>}
            {isGoingToRegister && <p className='animate-fade-in-up duration-100'>Enter the OTP</p>}
            {isWrongOTP && <p className='animate-fade-in-up duration-100'>Wrong OTP entered, check again and enter</p>}
          </div>

          <div className='w-full flex justify-center'>
            {!localStorage.getItem('PropertyVerseAuth') ? (
              <Form
                className='w-full'
                labelCol={{ span: 15, }}
                wrapperCol={{ span: 25, }}
                layout="vertical"
                disabled={componentDisabled}
                onFinish={onFinish}
                scrollToFirstError
                name='register'
                form={form}
              >
                <div className='my-2'>
                  <Form.Item
                    name="fullName"
                    label="Full Name"
                    className="custom-label"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Full Name",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || value.replace("  ", "").length >= 4) {
                            return Promise.resolve();
                          } return Promise.reject(new Error('At least 4 character(without spaces) required!'));
                        }
                      })
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className='my-2'>
                  <Form.Item
                    name="email"
                    label="E-mail"
                    className="custom-label"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className='my-2'>
                  <Form.Item
                    name="password"
                    label="Password"
                    className="custom-label"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || value.length >= 6) {
                            return Promise.resolve();
                          } return Promise.reject(new Error('At least 6 character password!'));
                        }
                      })
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                </div>

                <div className='my-2'>
                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  className="custom-label"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The new password that you entered do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                </div>

                <Form.Item
                  name="agreement"
                  className="custom-label"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                  ]}
                >
                  <Checkbox className='max-sm:text-xs my-3'>
                    I have read the <Link href="">agreement</Link>
                  </Checkbox>
                </Form.Item>

                <div className='my-4'>

                  {!isGoingToRegister ?
                    <Form.Item>
                      <Button className='mr-5 max-sm:mr-2 max-sm:px-2 text-white' htmlType="submit">
                        Send OTP
                      </Button>
                      <Link className='text-sm text-white' to='/login'>Already a user?</Link>
                    </Form.Item>
                    :
                    <Form.Item>
                      <Button className='mr-5 max-sm:mr-2 max-sm:px-2 text-white' htmlType="submit">
                        Send OTP Again
                      </Button>
                      <Link className='text-sm text-white' to='/login'>Already a user?</Link>
                    </Form.Item>
                  }
                </div>


                {isGoingToRegister &&
                  <div className='flex flex-col text-white'>
                    <p
                      className='text-blue text-center animate-slide-in'
                    >An OTP is sent to {formData.email}</p>
                    <div className='flex bg-mainColor p-2 rounded-lg justify-center'>
                      <input type='text' onChange={(e) => setRandomEntered(e.target.value)} value={randomEntered}
                        className='outline-none text-black rounded-lg mr-4 p-1 px-3 w-20 border-2 border-gray-400 flex justify-center'
                      />
                      <button type='button' onClick={verifyAndSave}
                        className='py-1 px-2 text-white bg-blue-400 outline-none rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in cursor-pointer ' >Confirm</button>
                    </div>
                  </div>
                }

                {!localStorage.getItem("PropertyVerseAuth") &&
                  <div className='flex flex-col items-center justify-center'><h1 className='mx-3 my-1 line-through text-white'>OR</h1>
                    <GoogleAuth />
                  </div>
                }
              </Form>
            ) : (
              setComponentDisabled(true)
            )}
          </div>
        </div>
    </div>
  )
}