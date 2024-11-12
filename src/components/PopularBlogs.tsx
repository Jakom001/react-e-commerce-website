import { MessageCircle, ThumbsUp } from 'lucide-react'

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My amazing Blog Title 1",
      author: "Jordon",
      likes: 142,
      comments: 44,
    },
    {
      title: "My amazing Blog Title 2",
      author: "Mary",
      likes: 152,
      comments: 24,
    },
    {
      title: "My amazing Blog Title 3",
      author: "John",
      likes: 52,
      comments: 4,
    },
    {
      title: "My amazing Blog Title 4",
      author: "Victor",
      likes: 182,
      comments: 344,
    },
  ]
  return (
    <div className='bg-white p-5 w-[15rem] mt-4 border ml-5 rounded'>
      <h2 className='text-xl fotn-bold mb-5'>Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className='mb-4'>
            <div className="flex justify-between items-center">
              <span className='font-bold mb-2'>{blog.title}</span>
            </div>
            <span className='text-gray-600'>Publish by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16}/>
              <span className='text-gray-500 mr-5 ml-2'>{blog.likes}</span>
              <ThumbsUp size={16}/>
              <span className='text-gray-500 mr-2 ml-2'>{blog.comments}</span>
            
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularBlogs
