
import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { BeItmo, Selection, BeFriendly} from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <BeItmo id="beItmo"/>
          <BeFriendly id="beFriendly"/>
          <Selection id="selection"/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
