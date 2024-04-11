import { poppins } from "@/app/fonts";
import Image from "next/image";

type IconServicesProps = {
  children: React.ReactNode;
  icon: string;
};

export default function IconServices({ children, icon }: IconServicesProps) {
    return(
        <div className="flex gap-2 items-center">
            <Image src={icon} alt="Icon" width={30} height={30} />
            <p className={`${poppins.className} text-[9px] font-semibold text-white`}>{children}</p>
        </div>
    )
}