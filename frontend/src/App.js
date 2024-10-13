import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { DEFAULT_VIEW_PANELS } from './routes';
import {BeFriendly, BeItmo, Selection} from './panels/index.js';
import QuizGame from "./panels/QuizGame.js";
import Shop from "./panels/Shop.js";

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <QuizGame id="game" />
          <BeItmo id="be-itmo"/>
          <BeFriendly id="be-friendly"/>
          <Selection id="selection"/>
          <Shop id="shop"/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
