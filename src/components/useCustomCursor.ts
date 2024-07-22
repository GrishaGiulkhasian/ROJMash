import { useEffect } from 'react';
import './useCustomCursor.css';

const useCustomCursor = () => {
  useEffect(() => {
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    customCursor.innerText = 'CLICK';
    document.body.appendChild(customCursor);

    const moveCursor = (e: MouseEvent) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY + window.scrollY}px`; // Добавляем scrollY
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || window.getComputedStyle(target).cursor === 'pointer') {
        customCursor.classList.add('cursor-hover');
      } else {
        customCursor.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      document.body.removeChild(customCursor);
    };
  }, []);
};

export default useCustomCursor;
