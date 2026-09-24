import { useTheme } from '../hooks';
import { IconSun, IconMoon } from './Icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="icon-btn theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
