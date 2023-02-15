import { useEffect, useRef } from "react";
import { UserIcon } from "@heroicons/react/24/solid";

export function Dropdown(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.show) return null;

  return (
    <div ref={ref} className="info-box">
      <div className="absolute right-0 top-6 w-[200px] h-[200px] bg-foreground border border-black rounded-md p-4 space-y-3">
        <div className="bg-transparent flex flex-row space-x-5">
          <div className="bg-transparent">
            <UserIcon className="bg-transparent w-5" />
          </div>
          <div className="bg-transparent">Profile</div>
        </div>

        <div className="bg-transparent flex flex-row space-x-5">
          <div className="bg-transparent">
            <UserIcon className="bg-transparent w-5" />
          </div>
          <div className="bg-transparent">Wallet</div>
        </div>

        <div className="bg-transparent flex flex-row space-x-5">
          <div className="bg-transparent">
            <UserIcon className="bg-transparent w-5" />
          </div>
          <div className="bg-transparent">Debit/Credit Card</div>
        </div>

        <div className="bg-transparent flex flex-row space-x-5">
          <div className="bg-transparent">
            <UserIcon className="bg-transparent w-5" />
          </div>
          <div className="bg-transparent">Refer your friends</div>
        </div>

        <div className="bg-transparent flex flex-row space-x-5">
          <div className="bg-transparent">
            <UserIcon className="bg-transparent w-5" />
          </div>
          <div className="bg-transparent">Logout</div>
        </div>

      </div>
    </div>
  );
}
