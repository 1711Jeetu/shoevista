import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import { toast } from 'react-toastify';
export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const authDetails = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      };
      const data = await login(authDetails);

      data.accessToken ? navigate("/") : toast.error(data, {
        closeButton : true,
        position: "top-right"
      });
    } catch(error) {
      toast.error(error.message, {
        closeButton : true,
        position: "top-right"
      });
    }
  }
  return (
    <main>
      <div className="flex">
      <div style={{maxWidth: '50%', marginTop: '90px'}}>
        <video src='/videos/shoeVideo.mp4' autoPlay loop muted className='rounded-lg'/>
      </div>
      <div style={{maxWidth: '50%'}} className='ml-7 w-full'>
      <section className='pt-5'>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-12 underline underline-offset-8">
          Login
        </p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            placeholder="john@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            required
          />
        </div>
          <div className="flex">
          <button
          type="submit"
          className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          onClick={handleLogin}
        >
          Log In
        </button>
          <div className='dark:text-slate-100 ml-5'>
          No account yet? <div>
          <Link to='/register' className='ml-1 hover:text-gray-300 hover:underline'> Register here</Link>
          </div>
          </div>
          </div>
      </form>
      </div>
      </div>
    </main>


  )
}
