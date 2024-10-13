import homeIcon from '../assets/HomeIcon.svg';
import shopIcon from '../assets/ShopIcon.svg';
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';

export const Footer = () => {
    const routeNavigator = useRouteNavigator();

    return (
        <div style={{
            width: '100%',
            position: 'fixed',
            bottom: '0',
            background: '#D9D9D9',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '10px 0',
            boxSizing: 'border-box',
            zIndex: 1000,
            height: '55px',
        }}>

            <div style={{
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img
                    src={shopIcon}
                    alt="Shop"
                    style={{
                        width: '24px',
                        height: '24px',
                        marginBottom: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={() => {routeNavigator.push('/shop')}}
                />
                {/*<span>Shop</span>*/}
            </div>


            <div style={{
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img
                    src={homeIcon}
                    alt="Home"
                    style={{
                        width: '24px',
                        height: '24px',
                        marginBottom: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={() => {routeNavigator.push('/selection')}}
                />
                {/*<span>Home</span>*/}
            </div>
        </div>
    );
};
