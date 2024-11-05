import { PiX } from "react-icons/pi";

export default function PaymentFailed() {
  return (
    <div className=" space-y-4">
      <div className=" border-2 border-black border-solid h-[10rem] w-[10rem] flex justify-center items-center rounded-full bg-[#121212]">
        <div className=" border-green-800 bordher-2 border-solid h-[8rem] w-[8rem] flex items-center justify-center rounded-full bg-[#121212] shadow-2xl">
          <PiX size={94} color="white" />
        </div>
      </div>
      <p className=" whitespace-nowrap font-semibold">Payment Failed</p>
    </div>
  );
}
