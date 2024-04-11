import { poppins } from "@/app/fonts";
import Image from "next/image";

type ButtonProps = {
  children: React.ReactNode;
  type: string;
  icon?: string;
  id?: string;
};



export default function Button({ children, type, icon, id }: ButtonProps) {

    const renderButton = () => {
        if(type === "primary") {
            return (
                <button className={`${poppins.className} w-[150px] xl:w-[250px] h-[60px] bg-[#DB2A6B] text-white  rounded-ss-lg rounded-se-lg rounded-ee-lg ` } id={id}>
                    {children}
                </button>
            )
        }

        return (
            <button className={`${poppins.className} text-white  font-semibold underline underline-offset-1 flex items-center gap-1` }>
                {children}
                <Image src={icon ?? ""} alt="Arrow" className="w-10" />
            </button>
        )
    }

    return (
       renderButton()
    )
}