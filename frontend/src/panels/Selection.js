import {CardGrid, ContentCard, } from '@vkontakte/vkui';
import beITMO from '../assets/beITMO.jpg';

export const Selection = () => {
    return (
        // // <Panel style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        //     {/* Шапка */}
        //     {/*<PanelHeader>*/}
        //     {/*    <div style={{ textAlign: 'center', color: '#007bff', fontWeight: 'bold' }}>ITMOKKA</div>*/}
        //     {/*</PanelHeader>*/}


        <CardGrid size="l" style={{marginTop: '20px'}}>
            <ContentCard
                onClick={() => {
                    // Переход на страницу "Be ITMO"
                }}
                src={beITMO}
                alt="Be ITMO"
                header="Be ITMO"
                text="Стиль жизни Университета ИТМО, основанный на принципах благополучия человека
(well-being) и всестороннего развития членов ITMO Family"
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
        //     {/* Подвал */}
        //     <PanelFooter>
        //         <div style={{ textAlign: 'center', color: '#007bff' }}>Footer Content</div>
        //     </PanelFooter>
        // </Panel>

    );
};
