import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import {DEFAULT_VIEW, DEFAULT_VIEW_PANELS} from './routes';
import {BeFriendly, BeItmo, Selection, Task} from './panels/index.js';
import {Start} from './panels/Start.js';
import {Introduction} from './panels/introduction/Introduction.js';
import QuizGame from "./panels/QuizGame.js";
import Shop from "./panels/Shop.js";
import {Role} from './panels/role/Role.js';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.START } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel} id={DEFAULT_VIEW}>
          <QuizGame id="game" />
          <BeItmo id="be-itmo"/>
          <BeFriendly id="be-friendly"/>
          <Selection id="selection"/>
          <Shop id="shop"/>
          <Task id="task"/>
          <Start id='start' />
          <Introduction id='intro' />
          <Role id="role"/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
