import React from 'react';
import Link from 'next/link';

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

interface LegalNavigationProps {
  items: NavItem[];
}

export default function LegalNavigation({ items }: LegalNavigationProps) {
  return (
    <div className="w-full md:max-w-[176px] md:border-r md:border-gray-200">
      <ul className="tab-nav flex flex-col md:items-start items-center lg:gap-10 gap-6">
        {items.map((item, index) => (
          <li key={index}>
            {item.href.startsWith('/') ? (
              <Link 
                href={item.href}
                className={`font-medium text-base leading-7 ${
                  item.isActive ? 'text-green-600' : 'text-gray-500 hover:text-green-600'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a 
                href={item.href}
                className={`font-medium text-base leading-7 ${
                  item.isActive ? 'text-green-600' : 'text-gray-500 hover:text-green-600'
                }`}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
