import { MouseEvent, ComponentClass } from 'react'

import { Props as ArrowProps } from '../src/xcComponents/Arrow'
import { Props as CalendarProps } from '../src/xcComponents/Calendar'
import { Props as CardProps } from '../src/xcComponents/Card'
import { Props as DrawerProps } from '../src/xcComponents/Drawer'
import { Props as ListProps } from '../src/xcComponents/List'
import { Props as ListItemProps } from '../src/xcComponents/ListItem'
import { Props as MaskProps } from '../src/xcComponents/Mask'

declare const XcArrow: ComponentClass<ArrowProps>
declare const XcCalendar: ComponentClass<CalendarProps>
declare const XcCard: ComponentClass<CardProps>
declare const XcDrawer: ComponentClass<DrawerProps>
declare const XcList: ComponentClass<ListProps>
declare const XcListItem: ComponentClass<ListItemProps>
declare const XcMask: ComponentClass<MaskProps>

export { XcArrow, XcCalendar, XcCard, XcDrawer, XcList, XcListItem, XcMask }
