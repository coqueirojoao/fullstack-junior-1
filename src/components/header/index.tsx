import { poppins } from "@/app/fonts";
import { navBarLinks } from "@/components/header/utils/navBarLinks";
import Menu from '@/assets/Menu.svg';
import Image from "next/image";
import Container from "../container";

export default function Header() {

    const getNavBarLinks = () => {
        return navBarLinks.map((link) => {
            return (
                <li className={`list-none text-[8px] text-white font-light pb-[2px] cursor-pointer ${link.name === 'Home' && 'relative after:absolute after:bottom-[-2px] after:left-0 after:w-[60%] after:border-b-2 after:rounded after:border-[#DB2A6B]'} ${poppins.className}`} key={link.name}>{link.name}</li>
            )
        })
    }
         

    return (
     <header>
        <Container height="h-[60px]">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl text-white" id="logo">
                    <span className="text-[#DB2A6B]">Gath</span>
                    Session
                    <span className="text-[#DB2A6B]">.
                    </span></h1>
                <div className="flex gap-7 items-center">
                { getNavBarLinks() }
                <Image src={Menu} alt="Menu" width={15} height={15} className="ml-5 cursor-pointer"/>
                </div>
            </div>
        </Container>
     </header>
    );
}