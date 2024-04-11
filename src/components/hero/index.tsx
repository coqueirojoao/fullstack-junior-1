import { poppins } from "@/app/fonts";
import Container from "../container";
import Arrow from '@/assets/Arrow.svg';
import content from '@/assets/content.svg';
import Image from "next/image";
import Button from "../button";
import IconServices from "../iconServices";
import { iconServiceContent } from "../iconServices/utils/iconServiceContent";

export default function Hero() {

    const getIconServiceContent = () => {
        return iconServiceContent.map((content) => {
            return (
                <IconServices key={content.title} icon={content.icon}>
                    {content.title}
                </IconServices>
            )
        })
    }

    return(
        <main>
            <Container>
                <div className="px-5 xl:px-0 flex w-full">
                    <div className="mt-14 mr-5">
                    <h1 className="w-[400px] xl:w-[784px] h-[303px] text-6xl xl:text-[80px] text-white font-bold" id="main-text">
                        Build your best community starting from here.
                    </h1>
                    <h3 className={`w-[350px] xl:w-[648px] mt-10 xl:mt-0 text-white font-thin opacity-50 ${poppins.className} text-xl`}>
                        Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way
                    </h3>
                    <div className="flex mt-5 items-center gap-5 xl:gap-8">
                    <Button type="primary" id="get-started-button">
                        Get Started
                    </Button>
                    <Button type="secondary" icon={Arrow}>
                        Learn More
                    </Button>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-10 mt-16 mb-24 xl:mb-10">
                        { getIconServiceContent() }
                    </div>
                    </div>
                    <div className="mt-12 hidden md:block">
                    <Image src={content} alt="Content" id="main-image" />
                    </div>
                    </div>
            </Container>
        </main>
    )

}