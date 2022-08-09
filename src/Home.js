
// pulls useState function from react library
// allows us to make a value reactive (replace the variable in the
// template with the new value after an event)
// useState is a special function called a hook. All hooks 
// start with use


import { useState } from 'react';

const Home = () => {

    // let name = 'mario';


    // invoke the useState hook
    // can change the value in a variable assigned constant
    // each time the hook is used the page is re-rendered
    // to display the new value
    
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);


    // const handleClick = () => {
    //     // name = { name }
    //     setName('luigi');
    //     setAge(30);
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name);
    // }

    // useState with an array 

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    ]);


    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{ name } is { age } years old</p>
            <button onClick={ handleClick } >Click Me!</button> */}

            {/* if you want to pass in an argument during the click event, you have to nest it in an anonymous function */}
            {/* don't need curly braces for the anonymous function if it is on one line. */}

            {/* <button onClick={() => handleClickAgain('Penny')}>Click me again!</button> */}
            
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
            
        </div>
    );
}
 
export default Home;