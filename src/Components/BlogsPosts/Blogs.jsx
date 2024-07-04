import React from 'react'
import './Blogs.css'
import img1 from './foot1.jpg';
import img2 from './foot2.jpg';
import img3 from './foot3.jpg';
import img4 from './foot4.jpg';

const Blogs = () => {
  const blogs = [
    { id: 1, image: img1, content: 'This is a short description of blog 1' },
    { id: 2, image: img2, content: 'This is a short description of blog 2' },
    { id: 3, image: img3, content: 'This is a short description of blog 3' },
    { id: 4, image: img4, content: 'This is a short description of blog 4' },
    { id: 5, image: img3, content: 'This is a short description of blog 5' },
    { id: 6, image: img2, content: 'This is a short description of blog 6' },
  ];
  return (
    <div className='blogcontainer' id='blogs'>
      <div className="headingb">
        <h1 className='bh'>Our Blogs and Articles</h1>
        <p className='bp'>Read our interesting Blogs and articles</p>
      </div>
      <div className="blog-container">
      {blogs.map(blog => (
        <div className="blog-box" key={blog.id}>
          <img src={blog.image} alt={`Blog ${blog.id}`} className="blog-image" />
          <p className="blog-content">{blog.content}</p>
          <button className="read-more">Read More</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Blogs




