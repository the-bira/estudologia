import { useState } from 'react';
import '../styles/nav.scss';

type NavItem = {
  name: string
  href: string
}

const menuItems: NavItem[] = [
  {
    name: 'Questões',
    href: '/questoes',
  },
  {
    name: 'Respostas',
    href: '/respostas',
  },
];

const Nav = () => {
  const [active, setActive] = useState(menuItems.find((item) => item) || menuItems[0]);

  const handleClick = (item: NavItem) => {
    setActive(item);
  };

  return (
    <nav>
      <ul className='menu'>
        {menuItems.map((item) => (
          <li key={item.name} onClick={() => handleClick(item)}>
            <a href="#" className={active === item ? 'active' : ''}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;