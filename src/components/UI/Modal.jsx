import React from 'react';
import portfolios from '../../assets/data/portfolioData';

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find(portfolio => portfolio.id === activeID);

  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-headingColor bg-opacity-40'>
    <div className='fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-headingColor bg-opacity-40'>
    <div className='relative w-11/12 md:w-3/4 max-w-[600px] bg-white rounded-lg p-5'>
      <div className="flex justify-center">
        {portfolio && (
          <img className='rounded-lg' src={portfolio.imgUrl} alt={portfolio.title} />
        )}
      </div>
      <div>
        <h2 className='text-2xl text-headingColor font-bold my-5'>{portfolio.title}</h2>
        <p className='text-sm text-smallTextColor'>{portfolio.description}</p>
        <div className='mt-5 flex flex-wrap'>
          <h4 className='text-headingColor text-lg font-bold'>Technologies</h4>
          {portfolio.technologies.map((item, index) => (
            <span key={index} className='bg-gray-200 py-1 px-2 rounded-md text-sm leading-none mr-2 mb-2'>{item}</span>
          ))}
        </div>
        <a href={portfolio.siteUrl}>
          <button className='bg-primaryColor text-white py-2 px-4 mt-5 rounded-md font-semibold hover:bg-headingColor transition duration-300'>View Live</button>
        </a>
      </div>
      <button onClick={() => setShowModal(false)} className='absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none'>&times;</button>
    </div>
  </div>
  
    </div>
  );
};

export default Modal;
