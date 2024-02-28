import { useState } from 'react'
import '../styles/nav.scss'

interface NavProps {
  activeItem: string
  onItemClick: (item: string) => void
}

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

const Nav = ({ activeItem, onItemClick }: NavProps) => {

  console.log(activeItem)

  return (
    <nav>
      <ul className='menu'>
        {menuItems.map((item) => (
          <li key={item.name} onClick={() => onItemClick(item.name)}>
            <a href="#" className={activeItem === item.name ? 'active' : ''}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;