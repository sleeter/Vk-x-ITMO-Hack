import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { DEFAULT_VIEW_PANELS } from './routes';
import {BeFriendly, BeItmo, Selection} from './panels/index.js';
import {Start} from './panels/Start.js';
import {Introduction} from './panels/introduction/Introduction.js';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <BeItmo id="be-itmo"/>
          <BeFriendly id="be-friendly"/>
          <Selection id="selection"/>
          <Start id='start' />
          <Introduction id='intro' />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
