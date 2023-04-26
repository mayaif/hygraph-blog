import React from 'react'
import Image from 'next/image'

function Author({author}) {
 
  return (
    <div className='text-center mt-20 p-6 mb-8 relative rounded-lg  bg-black bg-opacity-30'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          className='align-middle rounded-full'
          src={author.photo.url}
        />
        
      </div>
        <h3 className='text-white mb-2 text-lg font-bold'>
          {author.name}
        </h3>
        <p className="text-white text-sm text-right lg:text-center">{author.bio}</p>
    </div>
  )
}

export default Author


