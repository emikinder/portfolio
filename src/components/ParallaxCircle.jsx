import { Parallax } from "react-scroll-parallax";

const ParallaxCircle = () => {
    return (
        <Parallax
            translateY={["200px", "200px"]}
            translateX={["86%", "15%", "easeOutQuint"]}
            scale={["1", "2", "easeOutQuint"]}
            speed={100}
            shouldAlwaysCompleteAnimation
        >
            <div className="bg-p_secondary w-80 h-80 rounded-full"></div>
        </Parallax>
    );
};

export default ParallaxCircle;
