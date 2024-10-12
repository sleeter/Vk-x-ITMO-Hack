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
  START: 'start',
  INTRO: 'intro',
  HOME: 'home',
};

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.START, `/`, []),
      createPanel(DEFAULT_VIEW_PANELS.INTRO, `/${DEFAULT_VIEW_PANELS.INTRO}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
