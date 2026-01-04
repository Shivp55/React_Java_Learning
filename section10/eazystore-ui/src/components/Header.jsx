import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket, faTags, faSun, faMoon, faM } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";  //A progressively enhanced <a> wrapper to enable navigation with client side routing. Used for making fast responsive and single page applications in react. 
// NavLink wraps the <Link> with additional props for styling active and pending states. Applies automatically to the link based on its active and pending states.
//Used for styling the current active link to show to the end user for a better experience.
const Header = () => {
    const navLinkClass = "text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter";
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    return (
        <header className="border-b border-gray-300 sticky top-0 z-20 bg-normalbg dark:bg-darkbg dark:border-gray-600">
            <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
                <Link to="/home" className={navLinkClass}>
                    <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
                    <span className="font-bold"> Eazy Stickers</span>
                </Link>
                <nav className="flex items-center py-2 z-10">
                    <button className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600" aria-label="Toggle theme" onClick={toggleTheme}><FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} className="w-4 h-4 dark:text-light text-primary" /></button>
                    {/* Adding the NavLink class for the navigation links */}
                    <ul className="flex space-x-6 ">
                        <li>
                            <NavLink to="/home" className={({isActive})=>
                            isActive?`underline ${navLinkClass}`:navLinkClass
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive})=>
                            isActive?`underline ${navLinkClass}`:navLinkClass
                            }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive})=>
                            isActive?`underline ${navLinkClass}`:navLinkClass
                            }>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={({isActive})=>
                            isActive?`underline ${navLinkClass}`:navLinkClass
                            }>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className={navLinkClass}>
                                <FontAwesomeIcon icon={faShoppingBasket} className="dark:text-light" />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;