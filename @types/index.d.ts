import { MouseEvent, ComponentClass } from 'react'

import { Props as ArrowProps } from '../src/xcComponents/Arrow'
import { Props as CalendarProps } from '../src/xcComponents/Calendar'
import { Props as DrawerProps } from '../src/xcComponents/Drawer'
import { Props as GroupProps } from '../src/xcComponents/Group'
import { Props as ListItemProps } from '../src/xcComponents/ListItem'
import { Props as MaskProps } from '../src/xcComponents/Mask'
import { Props as InfiniteScrollProps } from '../src/xcComponents/InfiniteScroller'

declare const XcArrow: ComponentClass<ArrowProps>
declare const XcCalendar: ComponentClass<CalendarProps>
declare const XcDrawer: ComponentClass<DrawerProps>
declare const XcGroup: ComponentClass<GroupProps>
declare const XcListItem: ComponentClass<ListItemProps>
declare const XcMask: ComponentClass<MaskProps>
declare const XcInfiniteScroll: ComponentClass<InfiniteScrollProps>

export { XcArrow, XcCalendar, XcDrawer, XcGroup, XcListItem, XcMask, XcInfiniteScroll }
