import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className='bg-amber-800'>
        <div className='container mx-auto flex justify-between items-center py-3'>
            <img src={Logo} alt="DevStack" />
            <ul className='flex gap-5'>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Technologies</li>
                <li><a href="#"></a>Projects</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Contact</li>
            </ul>
            <div>
            <button className="btn btn-soft btn-secondary">Secondary</button>
            <button className="btn btn-soft btn-secondary">Secondary</button>
            </div>
        </div>
        </nav>
    );
};

export default Nav;