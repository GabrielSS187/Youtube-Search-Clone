import logoError from "../../assets/images/error.png";

type TProps = {
  title: string;
  message: string;
};

export function Message ({ title, message }: TProps) {
  return (
    <div className="h-screen flex flex-col text-white text-sm text-center justify-center items-center select-none">
      <img src={logoError} alt="Error" className="mb-[-16px]" />
      <h1 className="text-lg">{ title }</h1>
      <p>{ message }</p>
    </div>
  );
};