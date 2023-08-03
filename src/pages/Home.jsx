import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParallaxRectangle from "../components/ParallaxRectangle";

const Home = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let piu = window.scrollY > 55;
            setScroll(piu);
        });
    }, []);

    return (
        <section className="w-full md:mt-14 md:w-10/12 md:relative">
            <Navbar scroll={scroll} />
            <section className="h-[200vh] rounded-t-md 'mt-14' bg-p_primary overflow-hidden">
                <ParallaxRectangle />
                <section className="w-full h-[50vh] border absolute top-36 flex items-center gap-10">
                    <div className="float-left w-72 h-72 ml-52">
                        <img
                            src="/images/profile.jpg"
                            alt="image"
                            className="border-fancy"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-left">
                        <p className="text-[white] text-6xl font-alfaSlabOne">
                            Frontend
                        </p>
                        <p className="text-[white] text-6xl font-alfaSlabOne">
                            Developer
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Home;
