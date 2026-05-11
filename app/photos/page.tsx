import NewsLetter from "@/components/NewsLetter";
import PageInfo from "@/components/PageInfo";
import Image from "next/image";

const page = () => {
  return (
    <main className="w-full overflow-hidden">
      
      <PageInfo
        firstText={"Enjoy The Atmospheric"}
        secondText={"Photos!"}
        para={
          "If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos!"
        }
      />

      <div
        className="
        w-full
        mb-20
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-5
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        "
      >
        {[
          "image1",
          "image2",
          "image3",
          "image4",
          "image5",
          "image6",
          "image7",
          "image8",
          "image9",
          "image10",
          "image11",
          "image12",
          "image13",
          "image14",
          "image15",
        ].map((image, index) => {
          return (
            <div
              key={index}
              className="
              w-full
              overflow-hidden
              rounded-2xl
              "
            >
              <Image
              loading="lazy"
                src={`/photos/${image}.jpg`}
                alt="dishes"
                width={400}
                height={500}
                className="
                w-full
                h-[300px]
                sm:h-80
                md:h-[340px]
                object-cover
                rounded-2xl
                "
              />
            </div>
          );
        })}
      </div>

      <NewsLetter />
    </main>
  );
};

export default page;