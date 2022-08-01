import * as Btn from "./Button.styled";

export const Button = ({ className, id, text, children }) => {
  return (
    <>
      <Btn.Button type="button" id={id} className={className}>
        {text}
        {children}
      </Btn.Button>
    </>
  );
};
