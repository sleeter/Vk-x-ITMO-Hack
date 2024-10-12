<<<<<<< HEAD

=======
// import { useState, useEffect } from 'react';
// import bridge from '@vkontakte/vk-bridge';
>>>>>>> f3e81e5b5473ae2a74891afdd64b67aa9560c7c0
import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { DEFAULT_VIEW_PANELS } from './routes';
<<<<<<< HEAD
=======
import TetrisBoard from "./panels/QuizGame.js";
>>>>>>> f3e81e5b5473ae2a74891afdd64b67aa9560c7c0
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
<<<<<<< HEAD
          <QuizGame id="game" />
=======
            <QuizGame id="game" />
          {/*<Home id="home" fetchedUser={fetchedUser} />*/}
          {/*<Persik id="persik" />*/}
          {/*<Start id="start" />*/}
>>>>>>> f3e81e5b5473ae2a74891afdd64b67aa9560c7c0
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
