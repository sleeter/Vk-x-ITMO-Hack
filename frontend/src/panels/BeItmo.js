import {Card, CardGrid, ContentCard, Group, Panel} from "@vkontakte/vkui";
import beITMO from '../assets/beITMO.jpg';
import PropTypes from "prop-types";
import back from "../assets/back.svg";
import {Header} from '../components/Header.js';
import {Footer} from "../components/Footer.js";
import {useRouteNavigator, useParams, useSearchParams} from '@vkontakte/vk-mini-apps-router';


export const BeItmo = ({id}) => {
    const routeNavigator = useRouteNavigator();

    const handleClick = (text) => {
        if (text === 'be friendly') {
            routeNavigator.push('/be-friendly');
        } else {
            routeNavigator.push('/not-ready');
        }
    };

    return (
        <Panel id={id}>
            <Header auth={true} isLight={false}/>
            <Group style={{
                margin: 0,
                marginBottom: '20px',
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundImage: `url(${back})`,
                height: '100%',
                paddingTop: '40px',
            }}>
                <Header auth={true} isLight={false}/>

                {/* Главная картинка */}
                <CardGrid size="m" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50px',
                    flexGrow: 0,
                    width: '100%',
                }}>
                    <ContentCard
                        src={beITMO}
                        alt="Picture of person's left hand with pink paint"
                        header="Be ITMO"
                        text="ITMO University's lifestyle based on the principles of human well-being
                        (well-being) and comprehensive development of ITMO Family members."
                        maxHeight={350}
                        style={{
                            width: '90%', // Для десктопов и планшетов
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
                    maxWidth: '500px',
                    width: '100%',
                }}>
                    {['be healthy', 'be eco', 'be friendly', 'be pro', 'be fit', 'be open'].map((text, index) => (
                        <Card
                            className="hover-card"
                            key={index}
                            style={{
                                backgroundColor: ['#E74C3C', '#27AE60', '#E91E63', '#9B59B6', '#3498DB', '#E67E22'][index],
                                borderRadius: 10,
                                width: '150px',
                                height: '150px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                marginTop: '0',
                            }}
                            onClick={() => handleClick(text)}
                        >
                            <div style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
                                {text}
                            </div>
                        </Card>
                    ))}
                    <Footer/>

                </CardGrid>
            </Group>


            <style>{`
                @media (max-width: 600px) {
                    .vkuiContentCard__in {
                        max-width: 100%; 
                    }

                    .vkuiContentCard {
                        width: 100% !important; 
                        max-height: 250px !important; 
                    }

                    .hover-card {
                        width: 120px;
                        height: 120px;
                    }

                    .vkuiCardGrid {
                        padding: 0; 
                        margin-top:0;
                    }

                    Group {
                        padding-top: 60px; 
                        
                    }
                }
            `}</style>

        </Panel>

    );
};

BeItmo.propTypes = {
    id: PropTypes.string.isRequired,
};
