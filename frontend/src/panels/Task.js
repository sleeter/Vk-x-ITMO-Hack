import {Card, CardGrid, ContentCard, Group, Header, Panel, PanelHeader} from "@vkontakte/vkui";
import Calendar from '../assets/Calendar.svg';
import Coin from '../assets/Coin.svg';
import List from '../assets/List.svg';

export const Task = () => {
    return (
        <Panel id="profile">
            <PanelHeader>ContentCardExample</PanelHeader>
            <Group>
                <CardGrid size="l">
                    <ContentCard
                        src="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        alt="Picture of person's left hand with pink paint"
                        header="Name (подтягивать с бэка)"
                        text="Описание (Подтягивать с бэка)"
                        maxHeight={500}
                    />
                </CardGrid>
                <CardGrid size={"s"}>
                    <Card>
                        <div style={{ paddingBottom: '92%' }}></div>
                        <img src={Coin}></img>
                    </Card>
                    <Card>
                        <div style={{paddingBottom: '92%'}}></div>
                        <img src={List}></img>

                    </Card>
                    <Card>
                        <div style={{paddingBottom: '92%'}}></div>
                        <img src={Calendar}></img>

                    </Card>
                </CardGrid>
                <Group mode="plain" header={<Header mode="secondary"> Задание </Header>}>
                    <CardGrid size="l">
                        <Card>
                            <div style={{ height: 96, padding:20}} >Задание</div>
                        </Card>
                    </CardGrid>
                </Group>

            </Group>
        </Panel>
    );
};
