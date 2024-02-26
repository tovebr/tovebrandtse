import './HeaderMenu.scss';
const HeaderMenu = () => {
  return (
    <div className='header-container'>
      <ul className='header-menu'>
        <a href='#code' className='header-menu-item'>
          <li>code</li>
        </a>
        <a href='#music' className='header-menu-item'>
          <li>music</li>
        </a>
        <a href='#art' className='header-menu-item'>
          <li>art</li>
        </a>
      </ul>
    </div>
  );
};

export default HeaderMenu;
