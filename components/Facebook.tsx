import React from 'react';
import Facebook from './Icons/Facebook';

const FacebookLink = () => {
  return (
    <a
      href='https://www.facebook.com/brukstorget/'
      className='absolute bottom-3  left-14 rounded-full bg-transparent p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none'
      target='_blank'
    >
      <Facebook />
    </a>
  );
};

export default FacebookLink;
