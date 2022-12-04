import { GridItemType } from '../../types/GridItemType'
import * as C from './styles'
import b7 from '../../svgs/b7.svg'
import { items } from '../../data/items'

type Props = {
    item: GridItemType
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container showBackGround={item.permanentShown || item.shown} onClick={onClick}>
            {!item.permanentShown && !item.shown &&
                <C.Icon opacity={.1} src={b7} alt="" />
            }

            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    )
}