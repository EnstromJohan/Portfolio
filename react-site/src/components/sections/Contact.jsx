import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
    ).then((result) => {
        setStatusMessage("Email was succesfully sent")
        setIsError(false)
        setIsLoading(false)
    }).catch((error) => {
        setStatusMessage("There was an error sending the email. Please try again. ")
        setIsError(true)
        setIsLoading(false)
    })
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 text-black dark:text-white relative">
        <h3 className='text-5xl font-bold text-neutral-900 dark:text-neutral-400 mb-6'>CONTACT <br/><span className='text-neutral-300 dark:text-white'>ME</span></h3>
        <form onSubmit={handleSubmit} className='w-full max-w-md space-y-4'>
            <div className='flex space-x-4'>
                <label htmlFor='name' className='block text-sm font-medium text-neutral-700 dark:text-neutral-400'>Name
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-1 w-full p-2 rounded-md bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white shadow-md'
                    required
                />
                </label>

                <label htmlFor='email' className='block text-sm font-medium text-neutral-700 dark:text-neutral-400'>Email
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-1 w-full p-2 rounded-md bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white shadow-md'
                    required
                />
                </label>
                </div>
                <div>
                    <label htmlFor='message' className='block text-sm font-medium text-neutral-700 dark:text-neutral-400'>Message
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className='mt-1 w-full p-2 rounded-md bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-white shadow-md'
                            rows='6'
                            required
                        />
                    </label>
                </div>
                <div className='flex justify-center'>
                    <button
                        type='submit'
                        className={`w-full px-4 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg
                            ${isLoading ? ' bg-neutral-200 dark:bg-neutral-700 cursor-not-allowed' : 'bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300'}
                             text-neutral-700 dark:text-white font-semibold`}
                        disabled={isLoading}
                    >
                        {isLoading ? <AiOutlineLoading3Quarters className='animate-spin mr-2' /> : 'Submit'}
                    </button>
                </div>
        </form>
        {statusMessage && (
            <div className={`mt-4 w-full max-w-md p-2 rounded-lg text-center font-semibold ${isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                {statusMessage}
            </div>
        )}
    </section>
  );
};

export default Contact;
