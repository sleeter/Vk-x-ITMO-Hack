import PropTypes from 'prop-types';
import {Panel} from '@vkontakte/vkui';
import {Header} from '../../components/Header.js';
import GreetingOne from '../../assets/GreetingOne.svg';
import GreetingTwo from '../../assets/GreetingTwo.svg';
import './Introduction.css';
import HelloAvatar from '../../assets/HelloAvatar.svg';

export const Introduction = ({ id }) => {
    return (
        <Panel id={id}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#1673DB',
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
                <button className='intro-button'>Next</button>
            </div>
        </Panel>
    );
};

Introduction.propTypes = {
    id: PropTypes.string.isRequired,
};