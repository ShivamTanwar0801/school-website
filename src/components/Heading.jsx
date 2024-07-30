const Heading = ({
  className,
  title,
  text,
  tag,
  titleStyles,
  textStyles,
  tagStyles,
}) => {
  return (
    <div
      className={`${className} max-w-[70rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <div
          className={`mb-4 flex md:justify-center text-[14px] font-semibold uppercase`}
        >
          <div className={`px-2 ${tagStyles}`}>{tag}</div>
        </div>
      )}
      {title && <h2 className={`h2 font-bold ${titleStyles}`}>{title}</h2>}
      {text && (
        <div className="flex justify-center">
          <p className={`body-2 mt-4 ${textStyles} max-w-[60rem] font-normal`}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Heading;
