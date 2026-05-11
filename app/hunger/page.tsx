import NewsLetter from '@/components/NewsLetter'
import PageInfo from '@/components/PageInfo'
import PageTitleContainer from '@/components/PageTitleContainer'
import MenuList from '@/components/ui/MenuList'
import { HUNGER } from '@/data/Data'

const page = () => {
    return (
        <span>
            <PageInfo
                firstText={"Small Hunger?"}
                secondText={"Drop By!"}
                para={"Are you looking for a cozy café in Zelzate ? Then look no further, because Café Regina is the right place for you! You can of course drink a lot of different things here, but if you want to eat something small, you are more than welcome here. You can always come here if you are hungry!"}
            />

            <PageTitleContainer
                Title={"Delicious Options"}
                Para={"At Café Regina you will find plenty of delicious options. This way you can satisfy your tasty cravings without it being too heavy on the stomach. For example, you can opt for the farm plank. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread."}
            />
            <MenuList
                List={HUNGER}
            />
            <NewsLetter />
        </span>
    )
}

export default page