type TProps = {
  className?: string;
};

export function Profile ({ className }: TProps) {
  return (
    <div className={`${className}`}>
      <img
        src="https://i.pravatar.cc/300"
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full shadow-lg cursor-pointer"
      />
    </div>
  );
};