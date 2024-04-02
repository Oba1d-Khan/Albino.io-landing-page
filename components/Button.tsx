import { ArrowRight } from "lucide-react";

const Button = ({
    buttonText = "Get started for free",
    bgColor = "bg-purple",
    textColor = "text-white",
    showArrow = true,
}) => {
    return (
        <div className="mt-3 rounded-lg sm:mt-0">
            <button
                className={`flex items-center gap-2 lg:gap-4 px-3 py-3 text-sm lg:text-base font-bold text-center ${textColor} transition duration-500 ease-in-out transform ${bgColor} lg:px-4 lg:py-[0.6rem] rounded-lg hover:bg-purple/65 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple/30`}
            >
                {buttonText}
                {showArrow && <ArrowRight size={22} />}
            </button>
        </div>
    );
};

export default Button;
