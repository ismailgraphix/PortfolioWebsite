import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='pb-16'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                        <div className='w-full h-full bg-gray-100 flex items-center justify-center'>
                            <div className='text-center'>
                                <i className='ri-map-pin-line text-4xl text-primaryColor mb-4'></i>
                                <p className='text-headingColor font-[500]'>Available for remote work worldwide</p>
                                <p className='text-smallTextColor text-sm mt-2'>Let's discuss your project!</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form
                            className='w-full'
                            action='https://formspree.io/f/moqgrzgz'
                            method='POST'>
                            <div className='mb-5'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter your name'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className='mb-5'>
                                <input
                                    type='email'
                                    name='_replyto'
                                    placeholder='Enter your email address'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className='mb-5'>
                                <input
                                    type='text'
                                    name='subject'
                                    placeholder='Subject'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className='mb-5'>
                                <textarea
                                    name='message'
                                    rows={3}
                                    placeholder='write your message'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
