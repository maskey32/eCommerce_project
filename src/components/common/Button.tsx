import { IButtonProps } from "../../types/components";

const Button = (props: IButtonProps) => {
  const { handleClick, children } = props;

  return (
    <button
      onClick={handleClick} 
      className="bg-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
    >
      {children}
    </button>
  )
}

export default Button;