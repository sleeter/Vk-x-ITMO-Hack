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
    BEFRIENDLY: 'be-friendly',
    BEITMO: 'be-itmo',
    SELECTION: 'selection',
    GAME: 'game',
    START: 'start',
    INTRO: 'intro',
    SHOP: 'shop',
    TASK: 'task',
    ROLE: 'role',
    UNCOMPLETE: 'not-ready',
};

export const routes = RoutesConfig.create([
        createRoot(DEFAULT_ROOT, [
                createView(DEFAULT_VIEW, [
                    createPanel(DEFAULT_VIEW_PANELS.START, `/`, []),
                    createPanel(DEFAULT_VIEW_PANELS.INTRO, `/${DEFAULT_VIEW_PANELS.INTRO}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.BEFRIENDLY, `/${DEFAULT_VIEW_PANELS.BEFRIENDLY}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.BEITMO, `/${DEFAULT_VIEW_PANELS.BEITMO}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.SELECTION, `/${DEFAULT_VIEW_PANELS.SELECTION}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.TASK, `/${DEFAULT_VIEW_PANELS.TASK}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.GAME, `/${DEFAULT_VIEW_PANELS.GAME}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.ROLE, `/${DEFAULT_VIEW_PANELS.ROLE}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.SHOP, `/${DEFAULT_VIEW_PANELS.SHOP}`, []),
                    createPanel(DEFAULT_VIEW_PANELS.UNCOMPLETE, `/${DEFAULT_VIEW_PANELS.UNCOMPLETE}`, []),
                ]),
    ]),
    ]
)
;

export const router = createHashRouter(routes.getRoutes());
