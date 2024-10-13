import {Group, Div, Title, HorizontalScroll, ContentCard, Text} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import itmokk from "../assets/itmokk.svg"
import back from "../assets/back.svg";
import {Header} from '../components/Header.js';
import {Footer} from '../components/Footer.js';
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';

// Пример данных для каждой категории
const merchProducts = [
    { id: 1, name: "Толстовка", price: "1 000", image: "https://store.itmo.ru/image/cache/catalog/sozdavaj/storsozdavajnasajt-05-500x500.png" },
    { id: 2, name: "Картхолдер \"ИТМО\"", price: "700", image: "https://store.itmo.ru/image/cache/catalog/800x80008-500x500.png" },
    { id: 3, name: "Кружка \"From ITMO with love\"", price: "1 500", image: "https://store.itmo.ru/image/cache/catalog/800x80019-500x500.png" },
];

const partnerDiscounts = [
    { id: 1, name: "Скидка в ЧИХО", description: "10% скидка на всё меню ЧИХО", price: "600", image: "https://sun9-16.userapi.com/impg/LueEAL2nxLesdFtvtD3lQz1dKIIObnifI4wg9w/zihrX4_1SQE.jpg?size=1080x1080&quality=95&sign=ac82f980a80b557ddebde0a51cd8ec15&type=album" },
    { id: 2, name: "Скидка в Asiatiq", description: "10% скидка на всё меню Asiatiq",price: "550", image: "https://menu2go.ru/images/org/531/531_20230124171514_2048.jpg" },
    { id: 3, name: "Скидка в Театр Нити", description: "20% скидка в Театр Нити",price: "700", image: "https://ticketscloud.com/s3/production/image/2024-03/66013b9cc85beaace3ba4f80.png" },
];

const services = [
    { id: 1, name: "Ректор", description: "ONE-TO-ONE с ректором", price: "20 000", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Vladimir_Vasiliev_byke.jpg" },
    { id: 2, name: "Сотрудник", description: "День сотрудника студофиса ИТМО", price: "6 000", image: "https://student.itmo.ru/admin/uploads/ckeditor/Студенческий%20офис/Фотки_2022/5P5A6070_bw.jpg" },
    { id: 3, name: "Рилс", description: "Съёмка в рилсе для ИТМО", price: "4 000", image: "https://avatars.dzeninfra.ru/get-zen_doc/105853/pub_5e425477f58c3b19c8d98dd8_5e4255bf5e0d7416b977d95e/scale_1200" },
];

const Shop = () => {
    const routeNavigator = useRouteNavigator();

    return (
        <Group>
            <Header auth={true} isLight={false}/>
            <div style={{
                height: '100%',
                backgroundImage: `url(${back})`,
                paddingTop: '70px',
                paddingBottom: '40px',
            }}>
                <Title weight="bold" style={{
                    marginBottom: '25px',
                    textAlign: 'center',
                    fontSize: '40px'
                }}>Биржа</Title>
                {/* Категория: Возможности ИТМО */}
                <Div>
                    <Title level="1" weight="bold" style={{marginBottom: '16px'}}>Возможности ITMO.FAMILY</Title>
                    <HorizontalScroll>
                        <div style={{display: 'flex'}}>
                            {services.map((service) => (
                                <ContentCard
                                    key={service.id}
                                    src={service.image}
                                    subtitle={
                                        <div style={{ color:'#1673DB'}}>{service.description}</div>
                                }
                                    maxHeight='400px'
                                    header={
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <Text weight="medium" style={{marginRight: '4px'}}>{service.price}</Text>
                                            <img src={itmokk} alt="Itmokk" style={{width: '20px'}}/>
                                        </div>
                                    }
                                    text="Используй свои итмокки на полную!"
                                    style={{minWidth: 200, margin: 12}}
                                    onClick={() => {
                                        routeNavigator.push('/not-ready')
                                    }}
                                />
                            ))}
                        </div>
                    </HorizontalScroll>
                </Div>
                {/* Категория: Скидки от партнёров */}
                <Div>
                    <Title level="1" weight="bold" style={{marginBottom: '16px'}}>Скидки от партнёров</Title>
                    <HorizontalScroll>
                        <div style={{display: 'flex'}}>
                            {partnerDiscounts.map((discount) => (
                                <ContentCard
                                    key={discount.id}
                                    src={discount.image}
                                    maxHeight='400px'
                                    subtitle={
                                        <div style={{color: '#1673DB'}}>{discount.description}</div>
                                    }
                                    header={
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <Text weight="medium" style={{marginRight: '4px'}}>{discount.price}</Text>
                                            <img src={itmokk} alt="Itmokk" style={{width: '16px', height: '16px'}}/>
                                        </div>
                                    }
                                    text="Не упусти выгоду!"
                                    style={{minWidth: 200, margin: 12}}
                                    onClick={() => {
                                        routeNavigator.push('/not-ready')
                                    }}
                                />
                            ))}
                        </div>
                    </HorizontalScroll>
                </Div>
                {/* Категория: Мерч */}
                <Div>
                    <Title level="1" weight="bold" style={{marginBottom: '16px'}}>Мерч</Title>
                    <HorizontalScroll>
                        <div style={{display: 'flex'}}>
                            {merchProducts.map((product) => (
                                <ContentCard
                                    key={product.id}
                                    src={product.image}
                                    width='100px'

                                    header={
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <Text weight="medium" style={{marginRight: '4px'}}>{product.price}</Text>
                                            <img src={itmokk} alt="Itmokk" style={{width: '16px', height: '16px'}}/>
                                        </div>
                                    }
                                    subtitle={
                                        <div style={{color: '#1673DB'}}>{product.name}</div>
                                    }
                                    text="Лучший мерч!"
                                    style={{minWidth: 200, margin: 12}}
                                    onClick={() => {
                                        routeNavigator.push('/not-ready')
                                    }}
                                />
                            ))}
                        </div>
                    </HorizontalScroll>
                </Div>
            </div>
            <Footer />
        </Group>
);
};

export default Shop;
