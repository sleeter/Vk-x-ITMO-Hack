import { Card, CardGrid, Group } from "@vkontakte/vkui";
import beITMO from '../assets/beITMO.jpg';
import './BeItmoStylea.css';

export const BeItmo = () => {
    return (
        <Group description="6 направлений 'be itmo' " style={{ backgroundColor: '#f5f5f5', minHeight: '100vh',  margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {/* Главная картинка */}
            <CardGrid size="l" spaced style={{  justifyContent: 'center' }}>
                <Card style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <img
                        src={beITMO}
                        style={{
                            maxWidth: "500px",
                            height: "auto",
                            borderRadius: 10,
                        }}
                        alt="Be ITMO"
                        className="hover-image" // Применяем класс для эффекта
                    />
                    <div className="hover-text">Стиль жизни Университета ИТМО, основанный на принципах благополучия человека
                        (well-being) и всестороннего развития членов ITMO Family.</div>
                    <div style={{ paddingBottom: '0' }} />
                </Card>
            </CardGrid>

            {/* Мелкие карточки */}
            <CardGrid size="s" spaced style={{
                marginTop: 20,
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                width: '100%'
            }}>
                <a href="/healthy" className="card-link">
                    <Card className="hover-card" style={{
                        backgroundColor: '#E74C3C',
                        opacity: 0.7,
                        borderRadius: 10,
                        width: '150px',
                        height: '150px',
                        position: 'relative'
                    }}>
                        <div style={{color: 'white', fontSize: 16, textAlign: 'center', paddingTop: '30%'}}>
                            be healthy
                        </div>
                    </Card>
                </a>
                <a href="/#" className="card-link">
                    <Card className="hover-card" style={{
                        backgroundColor: '#27AE60',
                        borderRadius: 10,
                        opacity: 0.7,
                        width: '150px',
                        height: '150px',
                        position: 'relative'
                    }}>
                        <div style={{color: 'white', fontSize: 16, textAlign: 'center', paddingTop: '30%'}}>
                            be eco
                        </div>
                    </Card>
                </a>
                <a href="/#" className="card-link">
                    <Card className="hover-card" style={{
                        backgroundColor: '#E91E63',
                        borderRadius: 10,
                        opacity: 0.7,
                        width: '150px',
                        height: '150px',
                        position: 'relative'
                    }}>
                        <div style={{color: 'white', fontSize: 16, textAlign: 'center', paddingTop: '30%'}}>
                            be friendly
                        </div>
                    </Card>
                </a>
            </CardGrid>
            <CardGrid size="s" spaced style={{justifyContent: 'center', gap: '10px', flexWrap: 'wrap', width: '100%'}}>
                <a href="/#" className="card-link">
                    <Card className="hover-card" style={{
                        backgroundColor: '#9B59B6',
                        borderRadius: 10,
                        opacity: 0.7,
                        width: '150px',
                        height: '150px',
                        position: 'relative'
                    }}>
                        <div style={{color: 'white', fontSize: 16, textAlign: 'center', paddingTop: '30%'}}>
                            be pro
                        </div>
                    </Card>
                </a>
                <a href="/healthy" className="card-link">
                    <Card className="hover-card" style={{
                        backgroundColor: '#3498DB',
                        borderRadius: 10,
                        opacity: 0.7,
                        width: '150px',
                        height: '150px',
                        position: 'relative'
                    }}>
                        <div style={{color: 'white', fontSize: 16, textAlign: 'center', paddingTop: '30%'}}>
                            be fit
                        </div>
                    </Card>
                </a>
                <a href="/healthy" className="card-link">
                    <Card className="hover-card" style={{
                        backgroundColor: '#E67E22',
                        borderRadius: 10,
                        opacity: 0.7,
                        width: '150px',
                        height: '150px',
                        position: 'relative'
                    }}>
                        <div style={{color: 'white', fontSize: 16, textAlign: 'center', paddingTop: '30%'}}>
                            be open
                        </div>
                    </Card>
                </a>
            </CardGrid>
        </Group>
);
};
