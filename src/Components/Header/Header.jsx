import './Header.scss'
import { Link } from 'react-router-dom'
function Header(){
    return (
      <header>
        <header className="h1">
          <div className='hh'>
        <h1 className='header-title'>ToDo </h1>
       <Link  style={{ color: "purple", textDecoration: 'none' ,padding:'12px'}} to='/'>Home</Link>
       <Link style={{ color: "purple", textDecoration: 'none',padding:'12px' }} to='/settings'>Settings</Link>
   
      

          </div>
        </header>
      </header>
    );
};
export default Header;
