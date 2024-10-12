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
import { Icon28CheckCircleOutline, Icon28CancelCircleOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import back from "../assets/back.svg"

const questions = [
    { id: 1, text: "Поблагодарить своих коллег", category: "friendly" },
    { id: 2, text: "Попасть на допсу по ITMO.ENTER", category: "unfriendly" },
    { id: 3, text: "Сходить на менторскую консультацию", category: "friendly" },
    { id: 4, text: "Закрыться в комнате с компьютером", category: "unfriendly" }
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
            <Panel id="game">
                <PanelHeader>Викторина</PanelHeader>
                <div style={{
                    height: 'calc(100vh - var(--vkui_internal--panel_header_height) - 18px)',
                    backgroundImage: `url(${back})`,
                    backgroundSize: 'cover',
                }}>
                    <Group style={{  }}>
                        <Div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: '15px',
                            justifyContent: 'space-around',
                            marginBottom: 16,
                        }}>
                            {questions.map((question) =>
                                !userAnswers.some((a) => a.id === question.id) ? (
                                    <Div
                                        key={question.id}
                                        draggable
                                        onDragStart={() => handleDragStart(question)}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            backgroundColor: '#1673DB',
                                            color:'#fff',
                                            fontWeight:500,
                                            borderRadius:'20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            border: '3px solid #1366c2',
                                            cursor: 'grab'
                                        }}
                                    >
                                        {question.text}
                                    </Div>
                                ) : null
                            )}
                        </Div>
                        {/* Зоны для перетаскивания */}
                        <Div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Div
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => handleDrop('friendly')}
                                style={{
                                    marginTop: '70px',
                                    width: 150,
                                    height: 150,
                                    // border: '2px dashed #4BB34B',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Icon28CheckCircleOutline fill="#4BB34B" width={50} height={50} />
                                <Title level="2" weight="bold">Friendly</Title>
                            </Div>

                            <Div
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => handleDrop('unfriendly')}
                                style={{
                                    marginTop: '70px',
                                    width: 150,
                                    height: 150,
                                    // border: '2px dashed #E64646',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Icon28CancelCircleOutline fill="#E64646" width={50} height={50} />
                                <Title level="2" weight="bold">Unfriendly</Title>
                            </Div>
                        </Div>
                        <Div style={{ marginTop: 16}}>
                            <Button size="l" stretched onClick={finishGame} disabled={userAnswers.length !== questions.length} style={{backgroundColor:'#1673DB', opacity:1, color:'#FFF'}}>
                                Завершить игру
                            </Button>
                        </Div>
                    </Group>
                </div>
            </Panel>

            <Panel id="result">
                <PanelHeader>Результат</PanelHeader>
                <Group>
                    <Div>
                        <Title level="1" weight="bold">Игра окончена!</Title>
                        <Placeholder>
                            Вы правильно распределили {score} из {questions.length} вопросов.
                            {score === questions.length && (
                                <p>Ты настоящий член ITMO.FAMILY!</p>
                            )}
                            {score > questions.length / 2 && score < questions.length && (
                                <p>Похоже, ты уже хорошо знаком с нашими ценностями</p>
                            )}
                            {score <= questions.length / 2 && score > 0 && (
                                <p>Неплохо, но есть куда стремиться. Может, сходить на ITMO FAMILY DAY?</p>
                            )}
                            {score === 0 && (
                                <p>Срочно подключайся на наши friendly vibes</p>
                            )}
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