import { poppins } from "@/app/fonts";
import { navBarLinks } from "@/utils/navBarLinks";
import Menu from '@/assets/Menu.svg';
import Image from "next/image";

export default function Header() {

    const getNavBarLinks = () => {
        return navBarLinks.map((link) => {
            return (
                <li className={`list-none text-[8px] text-white ${poppins.className}`} key={link.name}>{link.name}</li>
            )
        })
    }
         

    return (
     <header>
        <div className="container h-[120px] mx-auto flex items-center">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl text-white">
                    <span className="text-[#DB2A6B]">Gath</span>
                    Session
                    <span className="text-[#DB2A6B]">.
                    </span></h1>
                <div className="flex gap-7 items-center">
                { getNavBarLinks() }
                <Image src={Menu} alt="Menu" width={20} height={20} className="ml-14"/>
                </div>
            </div>
        </div>
     </header>
    );
}