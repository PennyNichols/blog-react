
// pulls useState function from react library
// allows us to make a value reactive (replace the variable in the
// template with the new value after an event)
// useState is a special function called a hook. All hooks 
// start with use


import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    );
}
 
export default Home;