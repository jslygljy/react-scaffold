/**
 * Created by ljy on 2017/10/26.
 */

import Buttons from 'containers/Buttons/containers'
import DropdownMenu from 'containers/DropdownMenu/containers'
import Icons from 'containers/Icons/containers'
import Pageination from 'containers/Pageination/containers'


const routeMap = new Map();

routeMap.set('Buttons', {
    component: Buttons
})
routeMap.set('DropdownMenu', {
    component: DropdownMenu
})
routeMap.set('Icons', {
    component: Icons
})
routeMap.set('Pageination', {
    component: Pageination
})

const route = new Map([
    ...routeMap,
]);

export default route;