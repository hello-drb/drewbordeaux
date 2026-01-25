import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ 
  to, 
  href, 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  disabled = false,
  type = 'submit'
}) => {
  // Styles: Sharp corners, bold text, high tracking. "Industrial / Rock" feel.
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 text-xs tracking-[0.25em] uppercase transition-all duration-300 font-bold cursor-pointer border disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-current";
  
  const variants = {
    primary: "bg-rust border-rust text-white hover:bg-ink hover:border-ink hover:text-white",
    // Secondary: Dark button (since bg is light)
    secondary: "bg-ink border-ink text-white hover:bg-stone hover:border-stone hover:text-white",
    // Outline: Default to white on dark images, but override-able via className
    outline: "border-white/30 text-white bg-transparent hover:border-rust hover:text-rust",
    ghost: "border-transparent text-stone hover:text-ink px-4"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to && !disabled) {
    return <Link to={to} className={combinedClasses} onClick={onClick}>{children}</Link>;
  }
  
  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return <button type={type} disabled={disabled} className={combinedClasses} onClick={onClick}>{children}</button>;
};

export default Button;