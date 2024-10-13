import SadMessage from '../../assets/SadMessage.svg';
import SadAvatar from '../../assets/SadAvatar.svg';
import {Panel} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import './Uncomplete.css';
import {Header} from '../../components/Header.js';

export const Uncomplete = ({ id }) => {
    return (
        <Panel id={id}>
            <Header auth={true} isLight={true}/>
            <div className="uncomplete-container">
                <div className='sad-message'>
                    <img src={SadMessage} alt='sad message'/>
                </div>
                <div className='avatar'>
                    <img style={{marginBottom: 100}} src={SadAvatar} alt='sad avatar'/>
                </div>
            </div>
        </Panel>
    );
}

Uncomplete.propTypes = {
    id: PropTypes.string.isRequired,
}