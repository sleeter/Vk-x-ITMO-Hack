import {Button, Card, CardGrid, ContentCard, Group, Panel, Title} from "@vkontakte/vkui";
import {Header} from '../components/Header.js';
import Calendar from '../assets/Calendar.svg';
import Coin from '../assets/Coin.svg';
import List from '../assets/List.svg';

export const Task = ({ id }) => {
    const tasks = [
        {id: 1, picture: 'https://cdn.culture.ru/images/ed6e78b6-c524-5e73-9f82-7ae0ec88160c', name: 'Я на friendly vibes', description: 'Пройди квиз и докажи, что ты шаришь за be friendly be ITMO!'}
    ];

    return (
        <Panel id="profile">
            <Header auth={true} isLight={false}/>

            <Group style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                height: '100vh',
                padding: '0 20px' // Отступы для мобильных
            }}>

                {/* Контентная карточка */}
                <CardGrid size="l" style={{width: '100%', maxWidth: '400px'}}>
                    <ContentCard
                        src="https://sun9-10.userapi.com/impg/5adpdJOfhzjsu95rQotCP9M2L3dluoF9EUUvFw/j3qZ2iyu5Xg.jpg?size=1060x1060&quality=95&sign=a023e58ccd25e991deddbc6189fed249&type=album"
                        alt="Picture of person's left hand with pink paint"
                        header="Name (подтягивать с бэка)"
                        text="Описание (Подтягивать с бэка)"
                        maxHeight={500}
                        style={{width: '100%', marginTop: '70px',}}
                    />
                </CardGrid>

                {/* Карточки с иконками и текстом в 1 строку */}
                <CardGrid size="s" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '10px',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                    <Card style={{textAlign: 'center', padding: '10px', flex: '1'}}>
                        <div style={{paddingBottom: '10%'}}>
                            <img src={Coin} alt="Coin Icon" style={{width: 40, height: 40}}/>
                        </div>
                        <div>+5</div>
                    </Card>
                    <Card style={{textAlign: 'center', padding: '10px', flex: '1'}}>
                        <div style={{paddingBottom: '10%'}}>
                            <img src={List} alt="List Icon" style={{width: 40, height: 40}}/>
                        </div>
                        <div>Категория:</div>
                    </Card>
                    <Card style={{textAlign: 'center', padding: '10px', flex: '1'}}>
                        <div style={{paddingBottom: '10%'}}>
                            <img src={Calendar} alt="Calendar Icon" style={{width: 40, height: 40}}/>
                        </div>
                        <div>Дедлайн:</div>
                    </Card>
                </CardGrid>

                {/* Кнопка по центру */}
                <Button size="l" style={{maxWidth: '400px', width: '100%', marginTop: '20px'}}>Начать</Button>
            </Group>

            {/* Адаптация под мобильные */}
            <style>
                {`
                @media (max-width: 768px) {
                    .vkuiCard {
                        width: 100% !important;
                        // margin-top: 70px !important;
                    }
                }
                `}
            </style>
        </Panel>
    );
};
