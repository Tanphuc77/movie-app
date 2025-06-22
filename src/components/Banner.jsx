import IconRating from "../assets/rating.png";
import IconRatinghalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp.png";
import Icon from "../assets/play-button.png";

const Banner = () => {
    return <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
            <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                <p className="text-while bg-gradient-to-r from-red-600 to-red-600 text-md py-2 px-3 rounded-md">
                    TV Shows
                </p>
                <div className="flex flex-col space-y-5">
                    <h2 className="text-3xl text-white ">
                        Watch the latest movies and TV shows
                    </h2>
                    <div className="flex items-center space-x-3">
                        <img src={IconRating} alt="Rating" className="w-6 h-6" />
                        <img src={IconRating} alt="Rating" className="w-6 h-6" />
                        <img src={IconRating} alt="Rating" className="w-6 h-6" />
                        <img src={IconRating} alt="Rating" className="w-6 h-6" />
                        <img src={IconRatinghalf} alt="Rating" className="w-6 h-6" />
                    </div>
                    <p className="text-white text-sm">
                        Watch the latest movies and TV shows on our platform.
                        Enjoy high-quality streaming with a wide selection of content.
                    </p>
                    <div className="bottom-4 left-4 flex items-center space-x-3">
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                            <img src={Icon} alt="Play" className="w-5 h-5 inline-block mr-2" />
                            Play
                        </button>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
                <div className="w-[400px] h-[500px] relative group cursor-pointer">
                    <img src={ImgTemp} alt="Banner" className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center 
                    backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300">
                        <img src={Icon} alt="Play Button" className="w-16 h-16 relative z-20" />
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Banner;
