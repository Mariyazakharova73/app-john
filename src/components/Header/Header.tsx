import cn from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import closeIcon from '../../assets/close.svg';
import menu from '../../assets/menu.svg';
import { useAppDispatch } from '../../hooks/hooks';
import { logout } from '../../services/thunks/loginUser';
import s from './Header.module.css';

const headerMenu = ['Works', 'Blog', 'Contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <header className={cn(s.header, headerMenu)}>
        <ul className={cn(s.links, { [s.menuMobile]: isMenuOpen })}>
          <li className={s.itemLink}>
            <NavLink to="#" className={cn(s.link, 'fade')} onClick={onClickLogout}>
              Logout
            </NavLink>
          </li>
          {headerMenu.map(itemLink => {
            return (
              <li key={itemLink} className={s.itemLink}>
                <NavLink to="#" className={s.link}>
                  {itemLink}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className={cn(s.menu, 'fade')} onClick={toggleMenu}>
          {!isMenuOpen ? (
            <img src={menu} alt="Меню." className={s.menuIcon} />
          ) : (
            <img src={closeIcon} alt="Закрыть меню." className={s.menuIcon} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
