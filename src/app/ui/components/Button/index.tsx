interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  handleClick: () => void;
  text: string
}

export const Button = ({ type, handleClick, text }: ButtonProps) => {
  return <button data-testid="button" type={type} onClick={handleClick}>{text}</button>;
}