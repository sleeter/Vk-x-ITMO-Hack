// import { useState, useEffect } from 'react';
// import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { DEFAULT_VIEW_PANELS } from './routes';
import TetrisBoard from "./panels/QuizGame.js";
import QuizGame from "./panels/QuizGame.js";

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  // const [fetchedUser, setUser] = useState();
  // const [popout, setPopout] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     const user = await bridge.send('VKWebAppGetUserInfo');
  //     setUser(user);
  //     setPopout(null);
  //   }
  //   fetchData();
  // }, []);

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
            <QuizGame id="game" />
          {/*<Home id="home" fetchedUser={fetchedUser} />*/}
          {/*<Persik id="persik" />*/}
          {/*<Start id="start" />*/}
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
