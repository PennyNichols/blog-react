
// pulls useState function from react library
// allows us to make a value reactive (replace the variable in the
// template with the new value after an event)
// useState is a special function called a hook. All hooks 
// start with use


// useEffect function runs with every render of the page
// if you don't want useEffect to run every single time the page is rendered
// you have to use dependency arrays. An empty array will cause the function to run
// at the initial render of the page only.

// useEffect(() => {
//     console.log('use effect ran');
//     console.log(blogs);
// }, []);


// add state values as dependencies in useEffect
// function will only run if that state value changes

// useEffect(() => {
//     console.log('use effect ran');
//     console.log(blogs);
// }, [name]);



import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Yoshi')} title="Yoshi's Blogs"/> */}
            <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;