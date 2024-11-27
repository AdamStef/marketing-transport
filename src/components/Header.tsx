import { Moon } from "lucide-react";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";

export const Header = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  // if (!document.documentElement.classList.contains("dark")) {
  //   document.documentElement.classList.add("dark");
  // }
  return (
    <header className="w-full fixed top-0 left-0 border-b shadow-sm dark:shadow-primary-foreground z-50 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between p-4 h-16 max-w-screen-xl mx-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            SwiftLink Logistics
          </h1>
        </Link>
        <nav className="flex gap-5 items-center">
          <NavLink to="/">Strona główna</NavLink>
          <NavLink to="/services">Usługi</NavLink>
          <NavLink to="/about">O nas</NavLink>
          <NavLink to="/partners">Zaufali nam</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </nav>
        <button onClick={toggleDarkMode}>
          <Moon size={24} />
        </button>
      </div>
    </header>
  );
};
