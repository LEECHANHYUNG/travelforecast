import Rocket from '@/client/icons/Rocket';
import style from './Sidebar.module.scss';
import ArrowRight from '@/client/icons/ArrorRight';
import Calendar from '@/client/icons/Calendar';
import Search from '@/client/icons/Search';
import { useRef, useState } from 'react';
import cx from 'classnames';

const Sidebar = () => {
  const toggleRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={cx(style.Sidebar, { close: !isOpen })}>
      <header className={style.Sidebar__header}>
        <Rocket width="25" height="25" />
        <span className={style.Sidebar__header__text}>Travel Forecast</span>
        <span
          className={style.Sidebar__header__toggle}
          ref={toggleRef}
          onClick={toggle}
        >
          <ArrowRight width="16" height="16" />
        </span>
      </header>
      <div className={style.Sidebar__menuBar}>
        <div className={style.Sidebar__menuBar__menu}>
          <li className={style.Sidebar__menuBar__searchBox}>
            <Search width="20" height="20" />
            <input type="search" className={style.Sidebar__menuBar__search} />
          </li>
          <ul className={style.Sidebar__menuBar__links}>
            <li className={style.Sidebar__menuBar__navLink}>
              <a>
                <Calendar width="20" height="20" />
                <span className={style.Sidebar__menuBar__text}>여행 일정</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
