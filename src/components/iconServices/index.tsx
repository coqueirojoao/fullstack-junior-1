import { poppins } from "@/app/fonts";
import Image from "next/image";

type IconServicesProps = {
  children: React.ReactNode;
  icon: string;
};

export default function IconServices({ children, icon }: IconServicesProps) {
    return(
        <div className="flex gap-2 items-center">
            <Image src={icon} alt="Icon" className="w-[64px] h-[64px]" />
            <p className={`${poppins.className} text-lg font-semibold w-28 text-white`}>{children}</p>
        </div>
    )
}