
// pulls useState function from react library
// allows us to make a value reactive (replace the variable in the
// template with the new value after an event)
// useState is a special function called a hook. All hooks 
// start with use


import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Yoshi')} title="Yoshi's Blogs"/>
        </div>
    );
}
 
export default Home;