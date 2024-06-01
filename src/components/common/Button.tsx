import { IButtonProps } from "../../types/components";

const Button = (props: IButtonProps) => {
  const { handleClick, render } = props;

  return (
    <button
      onClick={handleClick} 
      className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
    >
      {render && render()}
    </button>
  )
}

export default Button;