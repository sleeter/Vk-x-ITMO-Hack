import { useState } from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Group,
    Div,
    Title,
    Button,
    Placeholder
} from '@vkontakte/vkui';
import { Icon28HeartOutline, Icon28HeartBrokenOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

// Вопросы с указанием верной категории
const questions = [
    { id: 1, text: "Доброжелательный вопрос", category: "friendly" },
    { id: 2, text: "Грубый вопрос", category: "unfriendly" },
    { id: 3, text: "Приветственное сообщение", category: "friendly" },
    { id: 4, text: "Оскорбление", category: "unfriendly" }
];

const QuizGame = () => {
    const [activePanel, setActivePanel] = useState('game');
    const [draggedItem, setDraggedItem] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);

    // Обработчик начала перетаскивания
    const handleDragStart = (question) => {
        setDraggedItem(question);
    };

    // Обработчик завершения перетаскивания (отпускаем элемент на friendly/unfriendly)
    const handleDrop = (category) => {
        if (draggedItem) {
            setUserAnswers((prev) => [...prev, { ...draggedItem, userCategory: category }]);
            setDraggedItem(null);
        }
    };

    // Подсчет правильных ответов и завершение игры
    const finishGame = () => {
        let correctAnswers = 0;
        userAnswers.forEach((answer) => {
            if (answer.category === answer.userCategory) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setActivePanel('result');
    };

    return (
        <View activePanel={activePanel}>
            {/* Панель игры */}
            <Panel id="game">
                <PanelHeader>Викторина</PanelHeader>
                <Group>
                    <Div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        {/* Вопросы в голубых блоках с закругленными углами */}
                        {questions.map((question) =>
                            !userAnswers.some((a) => a.id === question.id) ? (
                                <Div
                                    key={question.id}
                                    draggable
                                    onDragStart={() => handleDragStart(question)}
                                    style={{
                                        width: '45%',
                                        height: 80,
                                        backgroundColor: '#4A90E2',
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '12px',
                                        marginBottom: '16px',
                                        cursor: 'grab',
                                        textAlign: 'center',
                                        padding: '10px',
                                        fontSize: '16px'
                                    }}
                                >
                                    {question.text}
                                </Div>
                            ) : null
                        )}
                    </Div>

                    {/* Зоны для перетаскивания */}
                    <Div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 50 }}>
                        <Div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop('friendly')}
                            style={{
                                width: 120,
                                height: 100,
                                backgroundColor: '#4BB34B',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <Icon28HeartOutline fill="#ffffff" width={50} height={50} />
                            <Title level="3" weight="bold" style={{ color: '#ffffff' }}>Friendly</Title>
                        </Div>

                        <Div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop('unfriendly')}
                            style={{
                                width: 120,
                                height: 100,
                                backgroundColor: '#E64646',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <Icon28HeartBrokenOutline fill="#ffffff" width={50} height={50} />
                            <Title level="3" weight="bold" style={{ color: '#ffffff' }}>Unfriendly</Title>
                        </Div>
                    </Div>

                    {/* Кнопка завершения игры */}
                    <Div style={{ marginTop: 40 }}>
                        <Button size="l" stretched onClick={finishGame} disabled={userAnswers.length !== questions.length}>
                            Завершить игру
                        </Button>
                    </Div>
                </Group>
            </Panel>

            {/* Панель с результатами */}
            <Panel id="result">
                <PanelHeader>Результат</PanelHeader>
                <Group>
                    <Div>
                        <Title level="1" weight="bold">Игра окончена!</Title>
                        <Placeholder>
                            Вы правильно распределили {score} из {questions.length} вопросов.
                        </Placeholder>
                        <Button size="l" stretched onClick={() => window.location.reload()}>
                            Начать заново
                        </Button>
                    </Div>
                </Group>
            </Panel>
        </View>
    );
};

export default QuizGame;
