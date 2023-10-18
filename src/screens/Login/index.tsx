import { Button, TextInput } from 'components'
import { Constants } from 'constants/index'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { setCookies } from 'utils/cookies'

const Login = () => {
  const { push } = useHistory()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isError, setIsError] = useState(false)

  const handleChangeInput = (value: string, key: 'email' | 'password') => {
    setIsError(false)
    setForm((prevState) => ({ ...prevState, [key]: value }))
  }

  const handleSubmit = () => {
    const emailValid = process.env.REACT_APP_EMAIL_USER
    const passwordValid = process.env.REACT_APP_PASSWORD_USER
    if (form.email === emailValid && form.password === passwordValid) {
      const token = window.btoa(JSON.stringify(form))
      setCookies('accessToken', token)
      push(Constants.route.HOME)
      window.location.reload()
    } else {
      setIsError(true)
    }
  }

  return (
    <div className='h-screen flex justify-center items-center bg-slate-100'>
      <div className='w-96 flex flex-col gap-4 bg-white p-5 rounded-lg'>
        <h2 className='text-xl'>Login</h2>

        {isError && <div className='bg-red-200 p-2'>Your email or password is incorrect</div>}

        <TextInput
          value={form.email}
          name='email'
          label='E-mail'
          onInput={(val) => handleChangeInput(String(val), 'email')}
        />
        <TextInput
          value={form.password}
          name='password'
          label='Password'
          type='password'
          onInput={(val) => handleChangeInput(String(val), 'password')}
        />
        <Button text='Login' className='justify-center' onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default Login
