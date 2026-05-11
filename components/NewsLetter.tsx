import Image from "next/image";
import PageTitleContainer from "./PageTitleContainer";

const NewsLetter = () => {
  return (
    <div className="w-full pb-20 px-4 sm:px-6 lg:px-8" id="background2">
      
      {/* Top Divider */}
      <div className="w-full h-20 -translate-y-8 sm:-translate-y-12 relative flex items-center justify-center">
        
        <hr className="w-full border-[#696666]" />

        <Image
          loading="lazy"
          src={"/CafeLogo.svg"}
          alt="cafe logo"
          width={125}
          height={125}
          className="z-10 w-[80px] sm:w-[100px] md:w-[125px] h-auto"
        />

        <hr className="w-full border-[#696666]" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center">
        
        <PageTitleContainer
          Title={"Stay informed"}
          Para={
            "Stay up to date with everything that happens at Café Regina! This business believes it is important to keep its valued guests informed of news, events and special offers. You can always find all the latest news in the newsletter, so be sure to take a look."
          }
        />

        {/* Newsletter Card */}
        <div
          className="
          mt-8
          w-full
          max-w-6xl
          bg-[#0C0C0C]
          border
          border-[#AAAAAA]
          px-6
          py-10
          sm:px-10
          md:px-16
          flex
          flex-col
          items-center
          justify-center
          gap-10
          "
        >
          
          {/* Heading Section */}
          <div className="text-center space-y-4">
            
            <h6 className="text-xl sm:text-2xl font-[harmond] tracking-wide">
              NEWSLETTER
            </h6>

            <h2
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              text-[#DCCA87]
              font-[harmond]
              font-semibold
              leading-tight
              "
            >
              Subscribe to Our Newsletter
            </h2>

            <h5 className="text-sm sm:text-base md:text-lg text-gray-300">
              And never miss the latest updates!
            </h5>
          </div>

          {/* Input + Button */}
          <div
            className="
            w-full
            flex
            flex-col
            md:flex-row
            items-center
            gap-4
            "
          >
            
            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              md:flex-1
              h-[55px]
              border
              border-[#AAAAAA]
              bg-transparent
              px-5
              outline-none
              text-white
              "
            />

            <button
              className="
              w-full
              md:w-[180px]
              h-[55px]
              tracking-widest
              bg-[#DCCA87]
              text-black
              font-bold
              hover:opacity-90
              transition
              "
            >
              SUBSCRIBE
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;