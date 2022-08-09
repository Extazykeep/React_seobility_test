import React from 'react';
import './Button.scss';

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick: (event: any) => void;
}

export default React.memo(function Button({
    children,
    disabled = false,
    onClick,
}: ButtonProps) {
    const disabledClassName = 'base-button__disabled';
    return (
        <button
            className={`base-button ${disabled ? disabledClassName : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
});
