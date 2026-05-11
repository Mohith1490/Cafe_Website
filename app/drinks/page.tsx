import NewsLetter from '@/components/NewsLetter'
import PageInfo from '@/components/PageInfo'
import PageTitleContainer from '@/components/PageTitleContainer'
import MenuList from '@/components/ui/MenuList'
import {DRINKS} from '@/data/Data'

const page = () => {
    return (
        <div>
            <PageInfo
                firstText={"View The Extensive"}
                secondText={"Drinks Menu"}
                para={"Would you like to enjoy an extensive drinks menu in Zelzate and the surrounding area? Then look no further, because Café Regina is the place to be! You will find many different drinks here, so you will certainly find something you will like. So be sure to visit the store or contact us! "}
            />

            <PageTitleContainer
                Title={"Weekend Suggestion"}
                Para={"During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business! "}
            />
            <MenuList
            List={DRINKS}
            />
            <NewsLetter/>
        </div>
    )
}

export default page