import {Panel} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import './Role.css';
import {Header} from '../../components/Header.js';
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';

export const Role = ({ id }) => {
    const routeNavigator = useRouteNavigator();

    return (
        <Panel id={id}>
            <div className='role-container'>
                <Header isLight={false} auth={false}/>
                <h2>Пожалуйста, выберите роль</h2>
                <div className='buttons'>
                    <button
                        onClick={() => {routeNavigator.push('/selection')}}
                    >
                        Студент
                    </button>
                    <button
                        onClick={() => {routeNavigator.push('/not-ready')}}
                    >
                        Сотрудник
                    </button>
                </div>
            </div>
        </Panel>
    );
}

Role.propTypes = {
    id: PropTypes.string.isRequired,
};