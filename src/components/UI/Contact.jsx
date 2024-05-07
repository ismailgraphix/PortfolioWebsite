import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='pb-16'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                        <iframe
                            title='google-map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7197810461466!2d7.515722410253526!3d9.089271790936857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf862ad42923%3A0x764773dbfc7dc15e!2sAikinyi%20Limited!5e0!3m2!1sen!2sng!4v1715038647645!5m2!1sen!2sng"
                            className='border-0 w-full h-full'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
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
