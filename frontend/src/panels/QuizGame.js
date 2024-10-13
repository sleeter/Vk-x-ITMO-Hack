import { useState } from 'react';
import {
    View,
    Panel,
    PanelHeader,
    Group,
    Div,
    Title,
    Button,
    Placeholder,
    Tappable
} from '@vkontakte/vkui';
import { Icon28CheckCircleOutline, Icon28CancelCircleOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import back from "../assets/back.svg"
import { Header } from '../components/Header.js';
import { Footer } from "../components/Footer.js";
import mokka1 from '../assets/mokka1.png';
import mokka2 from '../assets/mokka2.png'
import mokka3 from '../assets/mokka3.png'
import mokka4 from '../assets/mokka4.png'

const questions = [
    { id: 1, text: "Поблагодарить своих коллег", category: "friendly" },
    { id: 2, text: "Попасть на допсу по ITMO.ENTER", category: "unfriendly" },
    { id: 3, text: "Сходить на менторскую консультацию", category: "friendly" },
    { id: 4, text: "Закрыться в комнате с компьютером", category: "unfriendly" }
];

const QuizGame = () => {
    const [activePanel, setActivePanel] = useState('game');
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);

    // Обработчик выбора вопроса
    const handleSelectQuestion = (question) => {
        setSelectedQuestion(question);
    };

    // Обработчик выбора категории
    const handleCategorySelect = (category) => {
        if (selectedQuestion) {
            setUserAnswers((prev) => [...prev, { ...selectedQuestion, userCategory: category }]);
            setSelectedQuestion(null);
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
                <div style={{
                    height: '100vh',
                    backgroundImage: `url(${back})`,
                    backgroundSize: 'cover',
                }}>
                    <Header auth={true} isLight={false} />
                    <h2 style={{
                        fontWeight: '500',
                        textAlign: 'center',
                        marginTop: '100px',
                    }}>Викторина</h2>
                    <Group>
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
                                    <Tappable
                                        key={question.id}
                                        onClick={() => handleSelectQuestion(question)}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            backgroundColor: selectedQuestion?.id === question.id ? '#1366c2' : '#2483E4',
                                            color: '#fff',
                                            fontWeight: 500,
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: 14,
                                            lineHeight: '1.2em',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            padding: '8px',
                                            border: '3px solid #1366c2',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {question.text}
                                    </Tappable>
                                ) : null
                            )}
                        </Div>
                        {/* Зоны для выбора категории */}
                        <Div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Tappable
                                onClick={() => handleCategorySelect('friendly')}
                                style={{
                                    width: 150,
                                    height: 150,
                                    marginTop: '3vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Icon28CheckCircleOutline fill="#4BB34B" width={50} height={50} />
                                <Title level="2" weight="bold">Friendly</Title>
                            </Tappable>

                            <Tappable
                                onClick={() => handleCategorySelect('unfriendly')}
                                style={{
                                    marginTop: '3vh',
                                    width: 150,
                                    height: 150,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Icon28CancelCircleOutline fill="#E64646" width={50} height={50} />
                                <Title level="2" weight="bold">Unfriendly</Title>
                            </Tappable>
                        </Div>
                        <Div style={{ marginTop: 16 }}>
                            <Button size="l" stretched onClick={finishGame} disabled={userAnswers.length !== questions.length} style={{ backgroundColor: '#2483E4', color: '#FFF' }}>
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
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    padding: '20px'
                                }}>
                                    <p style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '20px',
                                    }}>
                                        Ты настоящий член ITMO.FAMILY!
                                    </p>
                                    <img
                                        src={mokka4}
                                        alt="ITMO Family"
                                        style={{
                                            maxHeight: 200,
                                            borderRadius: '10px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            )}
                            {score > questions.length / 2 && score < questions.length && (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    padding: '20px'
                                }}>
                                    <p style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '20px',
                                    }}>
                                        Похоже, ты уже хорошо знаком с нашими ценностями
                                    </p>
                                    <img
                                        src={mokka3}
                                        alt="ITMO Family"
                                        style={{
                                            maxHeight: 200,
                                            borderRadius: '10px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            )}
                            {score <= questions.length / 2 && score > 0 && (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    padding: '20px'
                                }}>
                                    <p style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '20px',
                                    }}>
                                        Неплохо, но есть куда стремиться. Может, сходить на ITMO FAMILY DAY?
                                    </p>
                                    <img
                                        src={mokka2}
                                        alt="ITMO Family"
                                        style={{
                                            maxHeight: 200,
                                            borderRadius: '10px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            )}
                            {score === 0 && (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    padding: '20px'
                                }}>
                                    <p style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '20px',
                                    }}>
                                        Срочно подключайся на наши friendly vibes
                                    </p>
                                    <img
                                        src={mokka1}
                                        alt="ITMO Family"
                                        style={{
                                            maxHeight: 200,
                                            borderRadius: '10px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            )}
                        </Placeholder>
                        <Button size="l" stretched onClick={() => window.location.reload()}>
                            Начать заново
                        </Button>
                    </Div>
                </Group>
            </Panel>
            <Footer style={{ marginTop: 'auto' }} />
        </View>
    );
};

export default QuizGame;
