import {Panel} from '@vkontakte/vkui';
import PropTypes from 'prop-types';

import {Header} from '../components/Header.js';

export const Start = ({id}) => {
    return (
        <Panel id={id}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#1673DB',
                justifyContent: 'space-between',
            }}>
                <Header auth={true} isLight={true}/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '20vh',
                }}>
                    <h1 style={{
                        color: '#FFFFFF',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        fontFamily: '"Golos Text", sans-serif',
                    }}>
                        ITMOKKA
                    </h1>
                </div>
            </div>
        </Panel>
    );
};

Start.propTypes = {
    id: PropTypes.string.isRequired,
};
