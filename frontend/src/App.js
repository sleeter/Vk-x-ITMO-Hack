import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import {DEFAULT_VIEW, DEFAULT_VIEW_PANELS} from './routes';
import {BeFriendly, BeItmo, Selection, Task} from './panels/index.js';
import {Start} from './panels/Start.js';
import {Introduction} from './panels/introduction/Introduction.js';
import QuizGame from "./panels/QuizGame.js";
import Shop from "./panels/Shop.js";
import {Role} from './panels/role/Role.js';
import {Uncomplete} from './panels/uncomplete/Uncomplete.js';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.START } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel} id={DEFAULT_VIEW}>
          <Start id='start' />
          <Introduction id='intro' />
          <Role id="role"/>
          <Selection id="selection"/>
          <BeItmo id="be-itmo"/>
          <BeFriendly id="be-friendly"/>
          <Task id="task"/>
          <QuizGame id="game" />
          <Shop id="shop"/>
          <Uncomplete id='not-ready' />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
