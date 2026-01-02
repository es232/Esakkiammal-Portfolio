import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  magneticStrength?: number;
  onClick?: () => void;
  disabled?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  magneticStrength = 0.3,
  onClick,
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * magneticStrength, y: y * magneticStrength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: 'bg-cherry text-primary-foreground hover:bg-cherry-dark shadow-cherry hover:shadow-cherry-glow',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-gray-200',
    ghost: 'bg-transparent text-foreground hover:bg-gray-100',
    outline: 'border-2 border-cherry text-cherry hover:bg-cherry hover:text-primary-foreground',
  };

  const sizes = {
    sm: 'px-4 py-2 text-body-sm',
    md: 'px-6 py-3 text-body-md',
    lg: 'px-8 py-4 text-body-lg',
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        'relative inline-flex items-center justify-center font-display font-semibold rounded-full transition-colors duration-300',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
