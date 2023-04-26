import React, {useState, useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services';


function Comments({slug}) {

  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    getComments(slug)
      .then(result => setComments(result))
  
  }, []);


  return (
    <>
      {comments.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length === 0 && comments.length > 1 ? `${comments.length} Comments` : `${comments.length} Comment`}
            
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt}
              className='border-b border-gray-100 mb-4 pb-4'
            >
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span>
                {' '}
                on
                {' '}
                {moment(comment.id).format('MMM DD, YYYY')}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
              {typeof comment.comment === 'string' ? parse(comment.comment) : null}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments