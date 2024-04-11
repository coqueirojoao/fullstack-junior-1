import { poppins } from "@/app/fonts";
import Container from "../container";
import Arrow from '@/assets/Arrow.svg';
import content from '@/assets/content.svg';
import Image from "next/image";
import Button from "../button";

export default function Hero() {
    return(
        <main>
            <Container>
                <div className="mt-5 flex w-full">
                    <div className="mt-9 mr-5">
                    <h1 className="w-[350px] h-[100px] text-4xl text-white font-bold">
                        Build your best community starting from here.
                    </h1>
                    <h3 className={`w-[330px] mt-10 text-white font-thin opacity-50 ${poppins.className} text-xs`}>
                        Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way
                    </h3>
                    <div className="flex mt-5 items-center gap-4">
                    <Button type="primary">
                        Get Started
                    </Button>
                    <Button type="secondary" icon={Arrow}>
                        Learn More
                    </Button>
                    </div>
                    </div>
                    <div>
                    <Image src={content} alt="Content" />
                    </div>
                    </div>
            </Container>
        </main>
    )

}