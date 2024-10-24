import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
                    className='mt-1 w-full p-2 rounded-md bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white shadow-md'
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
                            className='mt-1 w-full p-2 rounded-md bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white shadow-md'
                            rows='6'
                            required
                        />
                    </label>
                </div>
                <div className='flex justify-center'>
                    <button
                        type='submit'
                        className='w-full bg-neutral-200 font-semibold text-neutral-700 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow-lg'
                    >
                        Submit
                    </button>
                </div>
        </form>
    </section>
  );
};

export default Contact;
