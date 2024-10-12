import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  PERSIK: 'persik',
  GAME: 'game'
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
<<<<<<< HEAD
      // createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.GAME, `/${DEFAULT_VIEW_PANELS.GAME}`, []),
=======
      // createPanel(DEFAULT_VIEW_PANELS.START, `/`, []),
      createPanel(DEFAULT_VIEW_PANELS.GAME, `/`, []),

>>>>>>> f3e81e5b5473ae2a74891afdd64b67aa9560c7c0
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
