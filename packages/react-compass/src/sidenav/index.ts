import Divider from './divider'
import Sidenar from './sidenav'
import SidebarItem from './sidenav-item'
export type {DividerProps} from './divider'
export type {SidenavProps} from './sidenav'
export {SidenavContext} from './sidenav-context'
export type {SidenavContextValue} from './sidenav-context'
export type {SidenavItemProps} from './sidenav-item'

Sidenar.Item = SidebarItem
Sidenar.Divider = Divider

export default Sidenar
