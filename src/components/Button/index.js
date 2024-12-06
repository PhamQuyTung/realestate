
function Button() {
    function handlebtn() {
        alert('Button clicked!');
        // Add your own logic here...
    }

    return <button onClick={handlebtn}>Click me!</button>;
}

export default Button;