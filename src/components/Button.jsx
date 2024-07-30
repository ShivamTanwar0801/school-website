import { arrow } from "../assets";

const Button = ({ className, href, children, onClick, px, arrowButton }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 text-n-1 transition-colors hover:text-n-3 ${
    className || ""
  } ${px || "px-7"}`;

  const spanClasses = `relative z-[10]`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {arrowButton && (
        <img src={arrow} width={24} height={24} className="ml-2" />
      )}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {arrowButton && (
        <img src={arrow} width={24} height={24} className="ml-2" />
      )}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
