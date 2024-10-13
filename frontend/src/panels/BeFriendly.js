import back from "../assets/back.svg";
import {Card, CardScroll, Group, Panel} from "@vkontakte/vkui";
import beFriendly from "../assets/BeFriendly.svg";
import PropTypes from "prop-types";
import {Header} from '../components/Header.js';
import {Footer} from "../components/Footer.js";
// import {useRouter} from '@vkontakte/vk-mini-apps-router'; // Импорт хука навигации

export const BeFriendly = ({ id }) => {
    // const router = useRouter();
    //
    //
    // const handleCardClick = (page) => {
    //     router.pushPage(page);
    // };

    return (
        <Panel id={id}>
            <Header isLight={false} auth={true}/>
            <Group style={{
                backgroundImage: `url(${back})`,
                minHeight: '100vh',
                margin: 'auto',
                marginTop: '3%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <img src={beFriendly}
                     style={{
                         maxWidth: '100%',  // Теперь картинка будет занимать всю доступную ширину
                         height: 'auto',    // Высота будет пропорциональной ширине
                         alignItems: 'center',
                         justifyContent: 'center',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                         marginBottom: '5%'
                     }}
                />

                <Group description="Задания">
                    <CardScroll size="s">
                        <Card style={{
                            width: '20%',  // Уменьшаем ширину до 20%
                            aspectRatio: '1 / 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer' // Добавляем указатель
                        }} onClick={() => handleCardClick('/page1')}> {/* Переход на страницу 1 */}
                            <img
                                src={"https://optim.tildacdn.com/tild3431-3063-4533-b136-333865666339/-/format/webp/_pdfio_1.png"}
                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}
                                alt="Card Image"
                            />
                        </Card>
                        <Card style={{
                            width: '20%',
                            aspectRatio: '1 / 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }} onClick={() => handleCardClick('/page2')}> {/* Переход на страницу 2 */}
                            <img
                                src={"https://optim.tildacdn.com/tild3831-6466-4437-b262-333263626234/-/format/webp/_pdfio_2.png"}
                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}
                                alt="Card Image"
                            />
                        </Card>
                        <Card style={{
                            width: '20%',
                            aspectRatio: '1 / 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }} onClick={() => handleCardClick('/page3')}> {/* Переход на страницу 3 */}
                            <img
                                src={"https://optim.tildacdn.com/tild3266-3937-4566-b961-643565373539/-/format/webp/_pdfio_1_2.png"}
                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}
                                alt="Card Image"
                            />
                        </Card>
                        <Card style={{
                            width: '20%',
                            aspectRatio: '1 / 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }} onClick={() => handleCardClick('/page4')}> {/* Переход на страницу 4 */}
                            <img
                                src={"https://optim.tildacdn.com/tild6561-3164-4335-b766-313063323461/-/format/webp/_pdfio_1.png"}
                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}
                                alt="Card Image"
                            />
                        </Card>
                        <Card style={{
                            width: '20%',
                            aspectRatio: '1 / 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }} onClick={() => handleCardClick('/page5')}> {/* Переход на страницу 5 */}
                            <img
                                src={"https://optim.tildacdn.com/tild6534-6531-4563-b363-313130313432/-/format/webp/___pdfio_1.png"}
                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}
                                alt="Card Image"
                            />
                        </Card>
                        <Card style={{
                            width: '20%',
                            aspectRatio: '1 / 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }} onClick={() => handleCardClick('/page6')}> {/* Переход на страницу 6 */}
                            <img
                                src={"https://optim.tildacdn.com/tild3166-3133-4138-b030-636661303937/-/format/webp/_-1.png"}
                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}
                                alt="Card Image"
                            />
                        </Card>
                    </CardScroll>
                </Group>
            </Group>

            <Footer/>
        </Panel>
    );
};

BeFriendly.propTypes = {
    id: PropTypes.string.isRequired,
};
