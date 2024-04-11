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
                <div className="flex w-full">
                    <div className="mt-9 mr-5">
                    <h1 className="w-[350px] h-[100px] text-4xl text-white font-bold" id="main-text">
                        Build your best community starting from here.
                    </h1>
                    <h3 className={`w-[330px] mt-10 text-white font-thin opacity-50 ${poppins.className} text-xs`}>
                        Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way
                    </h3>
                    <div className="flex mt-5 items-center gap-4">
                    <Button type="primary" id="get-started-button">
                        Get Started
                    </Button>
                    <Button type="secondary" icon={Arrow}>
                        Learn More
                    </Button>
                    </div>
                    <div className="flex gap-5 mt-16 mb-10">
                        { getIconServiceContent() }
                    </div>
                    </div>
                    <div>
                    <Image src={content} alt="Content" id="main-image" />
                    </div>
                    </div>
            </Container>
        </main>
    )

}