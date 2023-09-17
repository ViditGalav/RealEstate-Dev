import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import Client from '../utils/Client';
import { Button, Checkbox, Form, Input } from 'antd';

export default function SetPassword() {
   const navigate = useNavigate();
   const [docCreated, setDocCreated] = useState(false);
   const [errorFound, setErrorFound] = useState(false);


   const { JSONData } = useParams();
   const decodedData = decodeURIComponent(JSONData);
   const data = JSON.parse(decodedData);

   const onFinish = (values) => {
      const doc = {
         _id: data.sub,
         _type: 'user',
         fullName: data.name,
         email: data.email,
         password: values.password,
      }


      Client
         .createIfNotExists(doc)
         .then((data) => {
            console.log(data);
            setDocCreated(true);
            setTimeout(() => {
               setDocCreated(false);
               localStorage.clear();
               localStorage.setItem("PropertyVerseAuth", doc._id);
               navigate("/");
            }, 3000);
         })
         .catch((error) => {
            console.log("Error while creating doc using google auth", error);
            setErrorFound(true);
         });
   };

   if ( !data?.sub ){
      return (
         <div className='p-5 max-md:p-2 max-sm:p-0 flex bg-gradient-to-tr from-slate-900 to-red-950  flex flex-start first-letter items-center justify-center flex-col h-screen'>
            <div  className='py-6 px-8 bg-gradient-to-tr from-slate-800 to-slate-950 rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6 animate-fade-in-up z-50 shadow-3xl flex flex-col items-center justify-center'>
               <h1 className='text-3xl font-bold text-white max-md:text-xl max-sm:text-lg my-2'>Invalid request</h1>
               <p className='text-2xl font-bold text-white max-md:text-lg max-sm:text-base my-2'>Go back to <Link to={'/'} className='text-blue-500 hover:text-blue-400 transition-all duration-300'>Home</Link> page</p>
            </div>
         </div>
      )
   }

   if ( localStorage.getItem("PropertyVerseAuth")){
      return (
         <div className='p-5 max-md:p-2 max-sm:p-0 flex bg-gradient-to-tr from-slate-900 to-red-950  flex flex-start first-letter items-center justify-center flex-col h-screen'>
            <div  className='py-6 px-8 bg-gradient-to-tr from-slate-800 to-slate-950 rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6 animate-fade-in-up z-50 shadow-3xl flex flex-col items-center justify-center'>
               <h1 className='text-3xl font-bold text-white max-md:text-xl max-sm:text-lg my-2'>Oops.. you are on the wrong page</h1>
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
      <div className='p-5 max-md:p-2 max-sm:p-0 flex bg-gradient-to-tr from-slate-900 to-red-950  flex flex-start first-letter items-center justify-center flex-col h-screen'>

         {docCreated &&
            <div className='z-10 fixed m-auto top-4 bg-white py-2 px-3 rounded-lg border-2 border-green-400 text-green-500 text-center shadow-green-400 shadow-inner animate-slide-in ' >
               Succefully registered to PropertyVerse
            </div>
         }{errorFound &&
            <div className='z-10 fixed m-auto top-4 bg-white py-2 px-3 rounded-lg border-2 border-red-400 text-red-500 text-center shadow-red-400 shadow-inner animate-slide-in '>
               Error occured while registering, Try Again!
            </div>}

         <div className='p-5'>
            <img src={logoImage} alt='logo' className='w-20 h-20 mb-5 rounded-lg' />

         </div>
         <div className='py-6 px-8 bg-gradient-to-tr from-slate-800 to-slate-950 rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6 animate-fade-in-up z-50 shadow-3xl'>

            <h1 className='text-2xl font-bold text-gray-300'>New User - Set Password</h1>
            <p className='text-red py-2 px-3 animate-bounce transition-all duration-300 ease-in' >
               {/* Warning messages */}
            </p>


            <div>
               <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true, }}
                  onFinish={onFinish}
               >
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

                  <Form.Item>
                     <div className='flex justify-between'>
                        <div className='mr-3'>
                           <Form.Item name="remember" valuePropName="checked" noStyle>
                              <Checkbox className='max-sm:text-xs text-white'>Remember me</Checkbox>
                           </Form.Item>
                        </div>
                        <div>
                           <Form.Item name="agreement"
                              valuePropName="checked"
                              rules={[
                                 {
                                    validator: (_, value) =>
                                       value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                 },
                              ]}>
                              <Checkbox className='max-sm:text-xs text-white'>I have read the <Link href="">agreement</Link></Checkbox>
                           </Form.Item>
                        </div>
                     </div>
                  </Form.Item>

                  <Form.Item>
                     <div className='flex items-center pt-3'>
                        <Button type="default" htmlType="submit" className="login-form-button mr-3 text-white">
                           Confirm
                        </Button>
                     </div>
                  </Form.Item>
               </Form>
            </div>
         </div>
      </div>
   )
}
