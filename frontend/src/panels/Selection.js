import {CardGrid, ContentCard, Panel} from '@vkontakte/vkui';
import beITMO from '../assets/beITMO.jpg';
import back from '../assets/back.svg';
import PropTypes from 'prop-types';
import {Header} from '../components/Header.js';

export const Selection = ({ id }) => {
    return (
        <Panel id={id} >
            <Header auth={true} isLight={false}/>
            <CardGrid size="l" style={{
                marginTop: '70px',
                backgroundImage: `url(${back})`,
                backgroundPosition: 'center',
                height: '100%',
            }}>
                <ContentCard
                    onClick={() => {
                        // Переход на страницу "Be ITMO"
                    }}
                    src={beITMO}
                    alt="Be ITMO"
                    header="Be ITMO"
                    text="Стиль жизни Университета ИТМО, основанный на принципах благополучия человека (well-being) и всестороннего развития членов ITMO Family"
                    maxHeight={200}
                    hasHover={true}
                    style={{
                        width: '90%',
                        margin: '20px auto', // Отступы между карточками
                    }}
                />
                <ContentCard
                    onClick={() => {
                        // Переход на страницу "Well-being challenge"
                    }}
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    alt="Well-being challenge"
                    header="Well-being challenge"
                    text="Создание благоприятной среды для всестороннего развития членов ITMO.Family направлено на достижение баланса эмоционального, интеллектуального, физического и творческого состояний"
                    maxHeight={200}
                    hasHover={true}
                    style={{
                        width: '90%',
                        margin: '20px auto',
                    }}
                />
                <ContentCard
                    onClick={() => {
                        // Переход на страницу "Work-life balance"
                    }}
                    src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    alt="Work-life balance"
                    header="Work-life balance"
                    text="Работай чтобы жить, а не живи, чтобы работать. Развиваемся в разных направлениях вместе с университетом"
                    maxHeight={200}
                    hasHover={true}
                    style={{
                        width: '90%',
                        margin: '20px auto',
                    }}
                />
            </CardGrid>
        </Panel>
    );
};

Selection.propTypes = {
    id: PropTypes.string.isRequired,
};