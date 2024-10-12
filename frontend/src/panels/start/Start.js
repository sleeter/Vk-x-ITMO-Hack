import { Panel } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

export const Start = ({ id }) => {
    return (
        <Panel id={id}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#1673DB',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '17vh',
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