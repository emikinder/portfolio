import { Parallax } from "react-scroll-parallax";

const ParallaxRectangle = () => {
    return (
        <Parallax
            rotate={[-20, 5, "easeOutQuint"]}
            translateY={[50, -90, "easeOutQuint"]}
            speed={100}
            shouldAlwaysCompleteAnimation
        >
            <div
                className="bg-p_secondary w-screen h-60 relative -left-20 z-5"
            ></div>
        </Parallax>
    );
};

export default ParallaxRectangle;
