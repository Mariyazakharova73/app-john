import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import { useAppDispatch } from '../../hooks/hooks';
import { logout } from '../../services/thunks/loginUser';
import s from './Header.module.css';

const headerMenu = ['Works', 'Blog', 'Contact'];

const Header = () => {
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className={cn(s.header, headerMenu)}>
        <div className={s.links}>
          <NavLink to="#" className={cn(s.link, 'fade')} onClick={onClickLogout}>
            Logout
          </NavLink>
          {headerMenu.map(itemLink => {
            return (
              <NavLink to="#" key={itemLink} className={s.link}>
                {itemLink}
              </NavLink>
            );
          })}
        </div>
        <div className={cn(s.menu, 'fade')}>
          <img src={menu} alt="Меню." className={s.menuIcon} />
        </div>
      </header>
    </>
  );
};

export default Header;
