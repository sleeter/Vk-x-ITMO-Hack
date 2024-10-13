import { useState, useEffect } from 'react';
import { Group, Panel, Title, ContentCard, Div, Spinner, Snackbar, Avatar } from "@vkontakte/vkui";
import { Icon16Done } from '@vkontakte/icons';
import vkBridge from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import place from "../assets/place.png";


// URL API и пример ID пользователя
const API_URL = 'http://84.201.137.6:8080/api/v1/topic/info';
const PAGE_ID = 3;

export const BeFriendly = ({ id }) => {
    const routeNavigator = useRouteNavigator();
    const [categoryData, setCategoryData] = useState(null);  // Данные категории
    const [loading, setLoading] = useState(true);  // Индикатор загрузки
    const [snackbar, setSnackbar] = useState(null);  // Для отображения уведомления
    const [error, setError] = useState(null);  // Для отображения ошибки

    const fetchCategoryData = async (categoryName) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}?name=${categoryName}&id=${PAGE_ID}`)
            const result = await response.json();
            console.log(result)
            if (result.errors.length === 0) {
                setCategoryData(result.data);
            } else {
                setError('Ошибка получения данных');
            }
        } catch (err) {
            setError('Ошибка соединения с сервером');
        } finally {
            setLoading(false);
        }
    };

    // При монтировании компонента загружаем данные для категории
    useEffect(() => {
        fetchCategoryData('be friendly');  // Здесь имя категории


    }, []);

    // Обработчик для "Мест" — вызов сканера QR-кодов
    const handleCardClickForPlaces = () => {
        vkBridge.send('VKWebAppOpenCodeReader')
            .then((data) => {
                if (data.code_data) {
                    setSnackbar(
                        <Snackbar
                            onClose={() => setSnackbar(null)}
                            before={<Avatar size={24} style={{ background: 'green' }}><Icon16Done fill="#fff" /></Avatar>}
                        >
                            Ура, теперь ты ещё более ITMO friendly!
                        </Snackbar>
                    );
                }
            })
            .catch((error) => {
                console.log("Ошибка при сканировании QR-кода", error);
            });
    };

    // Разделяем задачи по категориям
    const categorizeTasks = (taskList) => {
        const categories = {
            tests: [],
            events: [],
            places: []
        };

        taskList.forEach(task => {
            if (task.category === "Тест") {
                categories.tests.push(task);
            }
            if (task.category === "Мероприятие") {
                categories.events.push(task);
            }
            if (task.category === "Место") {
                categories.places.push(task);
            }
        });
        return categories;
    };

    // Рендеринг списка задач на основе данных из API
    const renderTasks = (taskList, handleCardClick) => (
        <Div style={{ display: 'flex', flexDirection: 'column' }}>
            {taskList.map((task) => {
                let picturePath;
                if (task.picture === 'place') {
                    picturePath = place;
                }
                return (
                    <ContentCard
                    key={task.id}
                    src={picturePath || 'https://via.placeholder.com/150'}  // Картинка задачи или заглушка
                    header={task.name}
                    description={`Набери ${task.points} баллов`}
                    caption="Нажми для подробностей"
                    onClick={handleCardClick}  // Логика клика
                    style={{ cursor: 'pointer', marginBottom: '16px' }}
                />
            )})}
        </Div>
    );

    return (
        <Panel id={id} style={{ width: '100%', maxWidth: 'none' }}>
            <Header isLight={false} auth={true} />
            <Group style={{
                minHeight: '100vh',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
                maxWidth: 'none',
            }}>
                {/* Индикатор загрузки */}
                {loading && <Spinner size="large" style={{ margin: 'auto' }} />}

                {/* Если данные загружены, отображаем категорию */}
                {categoryData && (
                    <>
                        <Title level="1" weight="bold" style={{ margin: '16px 0' }}>{categoryData.name}</Title>
                        <Div>{categoryData.description}</Div>

                        {/* Разделяем задачи по категориям */}
                        {(() => {
                            const categorizedTasks = categorizeTasks(categoryData.taskList);

                            return (
                                <>
                                    {/* Категория Тесты */}
                                    {categorizedTasks.tests.length > 0 && (
                                        <Group>
                                            <Title level="2" weight="bold">Тесты</Title>
                                            {renderTasks(categorizedTasks.tests, () => routeNavigator.push('/task'))}
                                        </Group>
                                    )}

                                    {/* Категория Мероприятия */}
                                    {categorizedTasks.events.length > 0 && (
                                        <Group>
                                            <Title level="2" weight="bold">Мероприятия</Title>
                                            {renderTasks(categorizedTasks.events, () => routeNavigator.push('/task'))}
                                        </Group>
                                    )}

                                    {/* Категория Места */}
                                    {categorizedTasks.places.length > 0 && (
                                        <Group>
                                            <Title level="2" weight="bold">Места</Title>
                                            {renderTasks(categorizedTasks.places, handleCardClickForPlaces)}
                                        </Group>
                                    )}
                                </>
                            );
                        })()}
                    </>
                )}

                {/* Если произошла ошибка */}
                {error && <Div style={{ color: 'red', textAlign: 'center' }}>{error}</Div>}
            </Group>

            {/* Snackbar для уведомлений */}
            {snackbar}
            <Footer />
        </Panel>
    );
};

BeFriendly.propTypes = {
    id: PropTypes.string.isRequired,
};
