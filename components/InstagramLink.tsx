import React from 'react';
import Facebook from './Icons/Facebook';
import Instagram from './Icons/Instagram';

const InstagramLink = () => {
  return (
    <a
      href='https://www.instagram.com/brukstorget/'
      className='absolute bottom-3  left-3 rounded-full bg-transparent p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none'
      target='_blank'
    >
      <Instagram />
    </a>
  );
};

export default InstagramLink;
