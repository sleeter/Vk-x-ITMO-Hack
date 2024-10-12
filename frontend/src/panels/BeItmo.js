import {Card, CardGrid, ContentCard, Group, Panel} from "@vkontakte/vkui";
import beITMO from '../assets/beITMO.jpg';
import back from '../assets/back.svg';
import PropTypes from "prop-types";

export const BeItmo = ({id}) => {
    return (
        <Panel id={id}>
            <Group style={{
                height: '100vh',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                {/* Главная картинка */}
                <CardGrid size="m" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                    flexGrow: 0,
                }}>
                    <ContentCard
                        src={beITMO}
                        alt="Picture of person's left hand with pink paint"
                        header="Be ITMO"
                        text="ITMO University's lifestyle based on the principles of human well-being
                    (well-being) and comprehensive development of ITMO Family members."
                        maxHeight={350}  // Ограничиваем максимальную высоту
                        style={{
                            width: '60%',
                            margin: '0 auto',
                        }}
                    />
                </CardGrid>

                {/* Карточки */}
                <CardGrid size="s" spaced style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '20px 10px',
                    flexWrap: 'wrap',
                    flexGrow: 0,
                    maxWidth: '500px'
                }}>
                    {['be healthy', 'be eco', 'be Friendly', 'be pro', 'be fit', 'be open'].map((text, index) => (
                        //TODO Переадрессация
                        <a href={`/${text.replace(' ', '')}`} key={index} className="card-link"
                           style={{textDecoration: 'none'}}>
                            <Card className="hover-card" style={{
                                backgroundColor: ['#E74C3C', '#27AE60', '#E91E63', '#9B59B6', '#3498DB', '#E67E22'][index],
                                borderRadius: 10,
                                width: '150px',
                                height: '150px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <div style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
                                    {text}
                                </div>
                            </Card>
                        </a>
                    ))}
                </CardGrid>
            </Group>
        </Panel>
    );
};

BeItmo.propTypes = {
    id: PropTypes.string.isRequired,
};