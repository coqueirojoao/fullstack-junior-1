import { poppins } from "@/app/fonts";
import Image from "next/image";

type ButtonProps = {
  children: React.ReactNode;
  type: string;
  icon?: string;
};



export default function Button({ children, type, icon }: ButtonProps) {

    const renderButton = () => {
        if(type === "primary") {
            return (
                <button className={`${poppins.className} py-2 px-8 bg-[#DB2A6B] text-white text-[9px] rounded-ss-lg rounded-se-lg rounded-ee-lg ` }>
                    {children}
                </button>
            )
        }

        return (
            <button className={`${poppins.className} text-white text-[9px] font-semibold underline underline-offset-1 flex items-center gap-1` }>
                {children}
                <Image src={icon ?? ""} alt="Arrow" className="w-5" />
            </button>
        )
    }

    return (
       renderButton()
    )
}