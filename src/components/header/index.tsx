import { poppins } from "@/app/fonts";
import { navBarLinks } from "@/components/header/utils/navBarLinks";
import Menu from '@/assets/Menu.svg';
import Image from "next/image";
import Container from "../container";

export default function Header() {

    const getNavBarLinks = () => {
        return navBarLinks.map((link) => {
            return (
                <li className={`list-none text-[18px] hidden xl:block ${link.name === 'Home' ? 'text-white' : 'text-[#ABABAB]'} font-light pb-[2px] cursor-pointer ${link.name === 'Home' && 'relative after:absolute after:bottom-[-2px] after:left-0 after:w-[60%] after:border-b-4 after:rounded after:border-[#DB2A6B]'} ${poppins.className}`} key={link.name}>{link.name}</li>
            )
        })
    }
         

    return (
     <header>
        <Container height="h-[80px]">
            <div className="flex w-full justify-around xl:justify-between items-center">
                <h1 className="text-4xl text-white" id="logo">
                    <span className="text-[#DB2A6B]">Gath</span>
                    Session
                    <span className="text-[#DB2A6B]">.
                    </span></h1>
                <div className="flex gap-12 items-center">
                { getNavBarLinks() }
                <Image src={Menu} alt="Menu" className="ml-20 cursor-pointer"/>
                </div>
            </div>
        </Container>
     </header>
    );
}