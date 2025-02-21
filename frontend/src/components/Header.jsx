
import siteLogo from "../assets/site-logo.jpg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
     <header className="">
      <div className="container mx-auto" style={{margin:"0 auto"}}>
        <div className="header flex justify-between items-center ">
        {/* Logo */}
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        <Link to={"/"} ><img src={siteLogo} alt="site-logo" className='h-15' /></Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:pe-4">
        <Link to={"/login"} className="nav-link">Login</Link>
        <Link to={"/signUp"} className="nav-link">Signup</Link>
        
        {/* Theme Toggle */}
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}
      </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header