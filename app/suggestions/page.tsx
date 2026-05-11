import NewsLetter from "@/components/NewsLetter";
import PageInfo from "@/components/PageInfo";
import PageTitleContainer from "@/components/PageTitleContainer";

const page = () => {
  const suggestions = [
    "Steak met peper of champignonsaus",
    "Steak taratar",
    "Stoofvlees van varkenswangentjes",
    "Preparéschotel",
    "Diverse croques",
  ];

  return (
    <main className="w-full overflow-hidden">
      
      <PageInfo
        firstText={"Geniet Van De"}
        secondText={"Suggesties!"}
        para={
          "Wilt u genieten van een Weekend Suggestie in Zelzate? Dan bent u bij Café Regina aan het juiste adres! In het weekend bij Café Regina kun je jezelf trakteren op een heerlijke warme maaltijd die met veel zorg en liefde wordt bereid. Kom dus zeker eens langs in de zaak of neem contact op!"
        }
      />

      <PageTitleContainer
        Title={"Vlaamse Klassiekers"}
        Para={
          "Er zijn heel wat verschillende suggesties waar u in het weekend van kan genieten bij deze zaak. Zo zijn er bijvoorbeeld de traditionele Vlaamse klassiekers die door de chef-kok op tafel getoverd worden. Zo kan u genieten van huisbereid stoofvlees, maar ook van varkenswangetjes met abdijbier. Een andere optie is dan weer konijn op grootmoeders wijze."
        }
      />

      <section
        className="
        w-full
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        lg:px-8
        py-16
        md:py-24
        "
      >
        
        <div
          className="
          w-full
          sm:w-[90%]
          md:w-[80%]
          lg:w-1/2
          flex
          flex-col
          items-center
          justify-center
          "
        >
          
          <h1
            className="
            font-[harmond]
            text-3xl
            sm:text-4xl
            md:text-5xl
            mb-10
            text-center
            "
          >
            SUGGESTIES
          </h1>

          <ul className="w-full space-y-8 sm:space-y-10">
            
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="
                w-full
                flex
                items-center
                justify-between
                gap-3
                sm:gap-6
                "
              >
                
                <h4
                  className="
                  font-[harmond]
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-semibold
                  text-[#DCCA87]
                  wrap-break-word
                  "
                >
                  {item}
                </h4>

                <hr className="w-full border-white" />

                <p
                  className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-medium
                  whitespace-nowrap
                  "
                >
                  VIEW
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NewsLetter />
    </main>
  );
};

export default page;