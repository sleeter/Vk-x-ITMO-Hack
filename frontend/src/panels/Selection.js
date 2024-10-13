import {CardGrid, ContentCard, Group, Panel} from '@vkontakte/vkui';
import beITMO from '../assets/beITMO.jpg';
import back from '../assets/back.svg';
import PropTypes from 'prop-types';
import {Header} from '../components/Header.js';
import {Footer} from "../components/Footer.js";
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';

export const Selection = ({id}) => {
    const routeNavigator = useRouteNavigator();

    return (
        <Panel id={id} style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header auth={true} isLight={false}/>
            <Group style={{
                margin: 0,
                padding: 0,
                paddingBottom:'70vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundImage: `url(${back})`,
                height: '100%',
                paddingTop: '40px',
            }}>
                <CardGrid size="l" style={{
                    marginTop: '100vw',
                    // marginBottom: '100vw',
                    backgroundPosition: 'center',
                    flexGrow: 1,  // Это позволяет растянуть контейнер до максимальной высоты
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    flexDirection: 'column',  // Сделаем карточки в столбик
                }}>
                    <ContentCard
                        onClick={() => {
                            routeNavigator.push('/be-itmo')
                        }}
                        src={beITMO}
                        alt="Be ITMO"
                        header="Be ITMO"
                        text="Стиль жизни Университета ИТМО, основанный на принципах благополучия человека (well-being) и всестороннего развития членов ITMO Family"
                        hasHover={true}
                        style={{
                            width: '90%',         // Ширина для мобильных устройств
                            height: 'auto',        // Автоматическая высота
                            margin: '20px auto',
                            borderRadius: '10px',
                            overflow: 'hidden',
                        }}
                    />
                    <ContentCard
                        onClick={() => {
                            routeNavigator.push('/not-ready')
                        }}
                        src="https://i.pinimg.com/564x/ef/78/9d/ef789dddba116328ff84de7fc596c0eb.jpg"
                        alt="Well-being challenge"
                        header="Well-being challenge"
                        text="Создание благоприятной среды для всестороннего развития членов ITMO.Family направлено на достижение баланса эмоционального, интеллектуального, физического и творческого состояний"
                        hasHover={true}
                        style={{
                            width: '90%',         // Ширина для мобильных устройств
                            height: 'auto',        // Автоматическая высота
                            margin: '20px auto',
                            borderRadius: '10px',
                            overflow: 'hidden',
                        }}
                    />
                    <ContentCard
                        onClick={() => {
                            routeNavigator.push('/not-ready')
                        }}
                        src="https://i.pinimg.com/564x/ea/f2/93/eaf293e294e72c0387d06514dcaeb18c.jpg"
                        alt="Work-life balance"
                        header="Work-life balance"
                        text="Работай чтобы жить, а не живи, чтобы работать. Развиваемся в разных направлениях вместе с университетом"
                        hasHover={true}
                        style={{
                            width: '90%',         // Ширина для мобильных устройств
                            height: 'auto',        // Автоматическая высота
                            margin: '20px auto',
                            borderRadius: '10px',
                            overflow: 'hidden',
                        }}
                    />
                </CardGrid>

                <Footer style={{marginTop: 'auto'}}/>
            </Group>
            <style>{`
                @media (max-width: 768px) {
                    .vkuiCardGrid {
                        margin-top: 20vw; 
                        margin-bottom: 10vw; 
                        
                         
                    }

                    .vkuiContentCard {
                        width: 90%;        
                        height: auto; 
                        margin-top: 10vw;
                        margin-bottom:10vw;    
                    }

                    .vkuiContentCard img {
                        height: auto;      
                        width: 100%;      
                        object-fit: cover; 
                        
                    }
                }
                
            `}</style>
        </Panel>
    );
};

Selection.propTypes = {
    id: PropTypes.string.isRequired,
};
