import {Icon28ArrowLeftOutline} from '@vkontakte/icons';
import PropTypes from 'prop-types';
import DarkLogo from '../assets/DarkLogo.svg';
import LightLogo from '../assets/LightLogo.svg';
import Itmokk from '../assets/Itmokk.svg';

export const Header = ({ auth, isLight }) => {
    const isAuth = auth;
    const money = 100;

    const onBackClick = () => {

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
                <Icon28ArrowLeftOutline style={{color: fontColor}} />
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
                        src={Itmokk}
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
    auth: PropTypes.bool.isRequired,
    isLight: PropTypes.bool.isRequired,
};