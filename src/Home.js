const Home = () => {

    const handleClick = () => {
        console.log('Hello Ninjas!');
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={ handleClick } >Click Me!</button>

            {/* if you want to pass in an argument during the click event, you have to nest it in an anonymous function */}
            {/* don't need curly braces for the anonymous function if it is on one line. */}

            <button onClick={() => handleClickAgain('Penny')}>Click me again!</button>
       
        </div>
    );
}
 
export default Home;