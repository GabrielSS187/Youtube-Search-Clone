import { Spinner } from "phosphor-react";

export function LoadingIndicator () {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin text-white">
        <Spinner size={35} />
      </div>
    </div>
  );
};