import PropTypes from 'prop-types';
import {Panel} from '@vkontakte/vkui';
import {Header} from '../../components/Header.js';
import GreetingOne from '../../assets/GreetingOne.svg';
import GreetingTwo from '../../assets/GreetingTwo.svg';
import './Introduction.css';
import HelloAvatar from '../../assets/HelloAvatar.svg';
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';

export const Introduction = ({ id }) => {
    const routeNavigator = useRouteNavigator();

    return (
        <Panel id={id}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#2483E4',
                position: 'relative',
            }}>
                <Header auth={true} isLight={true}/>
                <div className='greetings-box'>
                    <img src={GreetingOne} alt='greeting-one'/>
                    <img src={GreetingTwo} alt='greeting-two'/>
                </div>
                <div className='avatar'>
                    <img src={HelloAvatar} alt='welcoming avatar'/>
                </div>
                <button
                    className='intro-button'
                    onClick={() => routeNavigator.push('/role')}
                >
                    Next
                </button>
            </div>
        </Panel>
    );
};

Introduction.propTypes = {
    id: PropTypes.string.isRequired,
};