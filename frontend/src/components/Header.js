import {Icon28ArrowLeftOutline} from '@vkontakte/icons';
import PropTypes from 'prop-types';
import DarkLogo from '../assets/DarkLogo.svg';
import LightLogo from '../assets/LightLogo.svg';

export const Header = ({ auth, isLight }) => {
    const isAuth = auth;
    const money = 100;

    const onBackClick = () => {

    };

    const color = isLight ? '#fff' : '#1673DB';
    const logo = isLight ? LightLogo : DarkLogo;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px 3vw',
            alignItems: 'center',
            backgroundColor: '#ffffff00',
            fontFamily: 'font-family: "Inter", sans-serif',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>
            <div onClick={onBackClick}>
                <Icon28ArrowLeftOutline style={{color: color}}/>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '7px',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                color: color,
                fontSize: '20px',
            }}>
                <span>ITMOKKA</span>
                <img
                    src={logo}
                    alt='logo'
                    style={{
                        width: '25px',
                        height: '25px',
                        marginTop: '-7px',
                    }}
                />
            </div>
            {isAuth && <div style={{color: color}}>{money} ₽</div>}
        </div>
    );
}

Header.propTypes = {
    auth: PropTypes.bool.isRequired,
    isLight: PropTypes.bool.isRequired,
};