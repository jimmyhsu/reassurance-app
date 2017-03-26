import { createRouter } from '@expo/ex-navigation';

import Home from '../scenes/Home';
import Walkthrough1Scene from '../scenes/Walkthrough1';
import Walkthrough2Scene from '../scenes/Walkthrough2';
import Account from '../scenes/Account';
import Settings from '../scenes/Settings';

export default Router = createRouter(() => ({
    home: () => Home,
    wt1: () => Walkthrough1Scene,
    wt2: () => Walkthrough2Scene,
    account: () => Account,
    settings: () => Settings,
}));
