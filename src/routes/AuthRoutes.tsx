import {
    createNativeStackNavigator,
    NativeStackNavigationProp
} from '@react-navigation/native-stack'

import CardComp from '../components/Card'
import CardData from '../components/CardData'
import Panel from '../screens/Panel'
import Login from '../screens/Login'
import CardUsers from '../components/CardUsers'
import CardEmplooyes from '../components/CardEmplooyes'
import UserScreen from '../screens/UserScreen'
import EmplooyeScreen from '../screens/EmplooyeScreen'


type AuthRoutes = {
    Card: undefined
    Home: undefined
    Login: undefined
    Panel: undefined
    CardUsers: undefined
    CardEmplooyes: undefined
    UserScreen: undefined
    EmplooyeScreen: undefined
}

export type AuthNavigationRoutesProp = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Card" component={CardComp} />
            <Screen name="Login" component={Login} />
            <Screen name="Panel" component={Panel} />
            <Screen name="CardUsers" component={CardUsers} />
            <Screen name="CardEmplooyes" component={CardEmplooyes} />
            <Screen name="UserScreen" component={UserScreen} />
            <Screen name="EmplooyeScreen" component={EmplooyeScreen} />
        </Navigator>
    )
}