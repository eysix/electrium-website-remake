// TODO
import { links } from './data';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='container'>
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;