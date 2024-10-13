import {Icon28ArrowLeftOutline} from '@vkontakte/icons';
import PropTypes from 'prop-types';
import DarkLogo from '../assets/DarkLogo.svg';
import LightLogo from '../assets/LightLogo.svg';
import itmokk from '../assets/itmokk.svg';
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';

export const Header = ({ isArrow, auth, isLight }) => {
    const routeNavigator = useRouteNavigator();

    const isAuth = auth;
    const money = 100;

    const onBackClick = () => {
        routeNavigator.back();
    };

    const fontColor = isLight ? '#fff' : '#2483E4';
    const backColor = isLight ? '#2483E4' : '#fff';
    const logo = isLight ? LightLogo : DarkLogo;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px 3vw',
            alignItems: 'center',
            backgroundColor: backColor,
            fontFamily: 'font-family: "Inter", sans-serif',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>
            <div onClick={onBackClick}>
                {isArrow &&
                    <Icon28ArrowLeftOutline
                        style={{
                            color: fontColor,
                            cursor: 'pointer',
                        }}
                    />}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '7px',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                color: fontColor,
                fontSize: '20px',
            }}>
                <img
                    src={logo}
                    alt='logo'
                    style={{
                        width: '30px',
                        marginTop: '-6px',
                    }}
                />
                <span>ITMOKKA</span>
            </div>
            {isAuth &&
                <div style={{
                    color: fontColor
                }}>
                    {money}
                    <img
                        src={itmokk}
                        alt='icon of money'
                        style={{
                            width: '30px',
                        }}
                    />
                </div>}
        </div>
    );
}

Header.propTypes = {
    isArrow: PropTypes.bool,
    auth: PropTypes.bool.isRequired,
    isLight: PropTypes.bool.isRequired,
};

Header.defaultProps = {
    isArrow: true,
};