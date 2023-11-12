import { useNavigate } from "react-router-dom";

export const NavbarCreateClassComponent = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <nav className="w-full fixed py-1 md:py-1.5 bg-white" style={{ zIndex: "44", minWidth: "280px", borderBottom: "1px solid #E5E3E9" }}>
        <header className="sm:w-10/12 lg:w-10/12 xl:w-10/12 w-11/12 mx-auto">
            <div className="flex py-0 gap-4">
                <div className="flex gap-4">
                    <button className="my-auto hover:bg-gray-100 p-2 radius-full" onClick={navigateBack}>
                        <div className="h-icon-back">
                            <img
                                className="h-full"
                                src="/assets/arrow-back.svg"
                                alt="Back"
                                onMouseOver={(e) => e.currentTarget.src = "/assets/arrow-back-purple.svg"}
                                onMouseOut={(e) => e.currentTarget.src = "/assets/arrow-back.svg"}
                            />
                        </div>
                    </button>

                    <div className="my-2-cus-back text-left">
                        <h4 className="my-2 font16-res-400 text-gray-700">Membuat Kelas</h4>
                    </div>
                </div>
            </div>
        </header>
    </nav>

    );
};
