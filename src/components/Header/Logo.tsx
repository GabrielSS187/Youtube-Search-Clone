import { useNavigate } from "react-router-dom";

import logoYoutube from "../../assets/images/dark.webp"

type TProps = {
  className?: string;
};

export function Logo ({ className }: TProps) {
  const navigate = useNavigate();
  return (
    <img 
      src={logoYoutube}
      alt="logo"
      className={`w-24 cursor-pointer ${className}`}
      onClick={() => navigate("/")}
    />
  );
};