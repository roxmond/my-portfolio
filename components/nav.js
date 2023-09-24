export const Nav = () => {

    return (
        <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
      
        <span></span>
        <span></span>
        <span></span>
      
        <ul id="menu">
            <a href="./index.html"><li>Home</li></a>
            <a href="./about.html"><li>About</li></a>
            <a href="./portfolio.html"><li>Portfolio</li></a>
            <a href="./framework.html"><li>Framework</li></a>
            <a href="./components.html"><li>Components</li></a>
            <a href="./contact.html"><li>Contact</li></a>
        </ul>
        </div>
    </nav>
    )
    }