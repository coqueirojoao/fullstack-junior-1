import { poppins } from "@/app/fonts";
import Container from "../container";

export default function Hero() {
    return(
        <main>
            <Container>
                <div className="mt-14">
                    <h1 className="w-[480px] h-[100px] text-5xl text-white font-bold">
                        Build your best community starting from here.
                    </h1>
                    <h3 className={`w-[400px] mt-16 text-white font-thin opacity-50 ${poppins.className} text-sm`}>
                        Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way
                    </h3>
                </div>
            </Container>
        </main>
    )

}