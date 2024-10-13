import homeIcon from '../assets/HomeIcon.svg';
import shopIcon from '../assets/ShopIcon.svg';

export const Footer = () => {
    return (
        <div style={{
            width: '100%',
            position: 'fixed',
            bottom: '0',
            background: '#D9D9D9',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px 0',
            boxSizing: 'border-box',
            zIndex: 1000,
        }}>

            <div style={{
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img src={shopIcon} alt="Shop" style={{
                    width: '24px',
                    height: '24px',
                    marginBottom: '5px',
                }} />
                {/*<span>Shop</span>*/}
            </div>


            <div style={{
                textDecoration: 'none',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img src={homeIcon} alt="Home" style={{
                    width: '24px',
                    height: '24px',
                    marginBottom: '5px',
                }} />
                {/*<span>Home</span>*/}
            </div>
        </div>
    );
};
