import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ scroll }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <nav
                className={`z-10 ${
                    scroll
                        ? "bg-p_secondary fixed top-0 w-inherit"
                        : "w-available absolute"
                }`}
            >
                <div className="flex justify-between items-center w-full px-8 py-4">
                    <div className="flex items-center">
                        <h1 className="text-[white] text-3xl ml-2 font-alfaSlabOne">
                            ek
                        </h1>
                    </div>
                    <div className="flex items-center z-21">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color="#fff"
                        />
                    </div>
                    <section
                        className={`transition-all absolute bg-[white] rounded-md z-20 ${
                            isOpen
                                ? "opacity-100 top-7 right-20 w-64 h-64 "
                                : "opacity-0 top-7 -right-20 w-0 h-64 "
                        }`}
                    ></section>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
