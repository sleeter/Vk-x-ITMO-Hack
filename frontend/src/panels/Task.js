import { Button, Card, CardGrid, ContentCard, Group, Header, Panel, PanelHeader } from "@vkontakte/vkui";
import Calendar from '../assets/Calendar.svg';
import Coin from '../assets/Coin.svg';
import List from '../assets/List.svg';

export const Task = () => {
    const cardIconWidth = 100; // ширина карточек с иконками

    return (
        <Panel id="profile">
            <PanelHeader>ContentCardExample</PanelHeader>
            <Group style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', height: '100vh' }}>

                {/* Контентная карточка */}
                <CardGrid size="l" style={{ width: `${cardIconWidth * 3 + 20}px` }}> {/* ширина для контентной карточки как 3 карточки с иконками */}
                    <ContentCard
                        src="https://sun9-10.userapi.com/impg/5adpdJOfhzjsu95rQotCP9M2L3dluoF9EUUvFw/j3qZ2iyu5Xg.jpg?size=1060x1060&quality=95&sign=a023e58ccd25e991deddbc6189fed249&type=album"
                        alt="Picture of person's left hand with pink paint"
                        header="Name (подтягивать с бэка)"
                        text="Описание (Подтягивать с бэка)"
                        maxHeight={500}
                        style={{ width: '100%' }}
                    />
                </CardGrid>

                {/* Карточки с иконками и текстом в 1 строку */}
                <CardGrid size="s" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Card style={{ textAlign: 'center', padding: '10px', width: cardIconWidth }}>
                        <div style={{ paddingBottom: '10%' }}>
                            <img src={Coin} alt="Coin Icon" style={{ width: 40, height: 40 }} />
                        </div>
                        <div>+5</div>
                    </Card>
                    <Card style={{ textAlign: 'center', padding: '10px', width: cardIconWidth }}>
                        <div style={{ paddingBottom: '10%' }}>
                            <img src={List} alt="List Icon" style={{ width: 40, height: 40 }} />
                        </div>
                        <div>Категория:</div>
                    </Card>
                    <Card style={{ textAlign: 'center', padding: '10px', width: cardIconWidth }}>
                        <div style={{ paddingBottom: '10%' }}>
                            <img src={Calendar} alt="Calendar Icon" style={{ width: 40, height: 40 }} />
                        </div>
                        <div>Дедлайн:</div>
                    </Card>
                </CardGrid>

                {/* Карточка с заданием */}
                <Group mode="plain" header={<Header mode="secondary">Задание</Header>} style={{ width: 410 }}> {/* ширина для карточки с заданием */}
                    <CardGrid size="l">
                        <Card style={{ textAlign: 'center', padding: 20,  }}>
                            <div>Задание</div>
                        </Card>
                    </CardGrid>
                </Group>

                {/* Кнопка по центру */}
                <Button size="l" style={{ marginRight: 'auto', alignSelf: 'center', marginTop: '30px' }}>Начать</Button>
            </Group>
        </Panel>
    );
};
