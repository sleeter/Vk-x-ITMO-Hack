import {Panel} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import './Role.css';
import {Header} from '../../components/Header.js';

export const Role = ({ id }) => {
    return (
        <Panel id={id}>
            <div className='role-container'>
                <Header isLight={false} auth={false}/>
                <h2>Пожалуйста, выберите роль</h2>
                <div className='buttons'>
                    <button>Студент</button>
                    <button>Сотрудник</button>
                </div>
            </div>
        </Panel>
    );
}

Role.propTypes = {
    id: PropTypes.string.isRequired,
};