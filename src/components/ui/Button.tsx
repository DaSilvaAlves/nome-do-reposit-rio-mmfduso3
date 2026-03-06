import React fromreact';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;