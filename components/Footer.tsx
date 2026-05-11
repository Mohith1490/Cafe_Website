import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full relative border-t border-[#2A2A2A] mt-20">
      
      {/* Main Content */}
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-16
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-14
        "
      >
        
        {/* Contact Section */}
        <div className="text-center lg:text-left space-y-5">
          
          <h4 className="font-[harmond] font-semibold text-3xl sm:text-4xl">
            Contact Us
          </h4>

          <div className="text-sm sm:text-base text-[#AAAAAA] space-y-3 leading-relaxed">
            <p>
              Grote Markt 159060 Zelzate <br />
              (East Flanders) Belgium
            </p>

            <p>+91 1122334455</p>

            <p>info@caferegina.be</p>
          </div>
        </div>

        {/* Branding Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          <h1
            className="
            font-[harmond]
            font-semibold
            text-4xl
            sm:text-5xl
            lg:text-6xl
            text-[#DCCA87]
            leading-none
            "
          >
            CAFE REGINA
          </h1>

          <p
            className="
            text-sm
            sm:text-base
            text-[#AAAAAA]
            leading-relaxed
            max-w-md
            "
          >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <hr className="w-20 border-[#DCCA87]" />

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            
            <button
              aria-label="Facebook"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                loading="lazy"
                src={"/media/facebook.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
            </button>

            <button
              aria-label="Twitter"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                loading="lazy"
                src={"/media/twitter.svg"}
                alt="twitter"
                width={20}
                height={20}
              />
            </button>

            <button
              aria-label="Instagram"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                loading="lazy"
                src={"/media/instagram.svg"}
                alt="instagram"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="text-center lg:text-right space-y-5">
          
          <h4 className="font-[harmond] font-semibold text-3xl sm:text-4xl">
            Opening Hours
          </h4>

          <div className="text-sm sm:text-base text-[#AAAAAA] space-y-5 leading-relaxed">
            
            <p>
              Monday – Friday <br />
              08:00 am – 12:00 am
            </p>

            <p>
              Saturday – Sunday <br />
              07:00 am – 11:00 pm
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="
        border-t
        border-[#2A2A2A]
        py-5
        text-center
        text-sm
        sm:text-base
        text-[#777777]
        "
      >
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;