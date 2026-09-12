import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className=''>
        <div className='container mx-auto flex justify-between items-center py-4'>
            <img src={Logo} alt="DevStack" className='w-[130px]' />
            <ul className='flex gap-5'>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Technologies</li>
                <li><a href="#"></a>Projects</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Contact</li>
            </ul>
            <div className='flex gap-3'>
            <button className=" ">Sign In</button>
            <button className="btn btn-active btn-secondary rounded-2xl">Sign Up</button>
            </div>
        </div>
        </nav>
    );
};

export default Nav;