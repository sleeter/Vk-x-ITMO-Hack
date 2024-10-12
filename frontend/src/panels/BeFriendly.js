import back from "../assets/back.svg";
import {Card, CardScroll, Group} from "@vkontakte/vkui";
import beFriendly from "../assets/BeFriendly.svg";

export const BeFriendly = () => {
    return (
        <Group style={{
            backgroundImage: `url(${back})`,
            minHeight: '100vh',
            margin: '0 auto',
            display:'flex',

            justifyContent: 'center',
            // alignItems: 'center',
            flexDirection: 'column'
        }}>
            <img src={beFriendly}
                 style={{
                     width:'40%',
                     alignItems:'center',
                     justifyContent:'center',
                     marginLeft:'auto',
                     marginRight:'auto',
                      marginBottom:'5%'
                 }}
            ></img>


            <Group description="Tests">
                <CardScroll size="s">
                    <Card style={{ width: '20%', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={"https://optim.tildacdn.com/tild3431-3063-4533-b136-333865666339/-/format/webp/_pdfio_1.png"}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            alt="Card Image"
                        />
                    </Card>
                    <Card style={{ width: '20%', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={"https://optim.tildacdn.com/tild3831-6466-4437-b262-333263626234/-/format/webp/_pdfio_2.png"}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            alt="Card Image"
                        />
                    </Card>
                    <Card style={{ width: '20%', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={"https://optim.tildacdn.com/tild3266-3937-4566-b961-643565373539/-/format/webp/_pdfio_1_2.png"}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            alt="Card Image"
                        />
                    </Card>
                    <Card style={{ width: '20%', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={"https://optim.tildacdn.com/tild6561-3164-4335-b766-313063323461/-/format/webp/_pdfio_1.png"}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            alt="Card Image"
                        />
                    </Card>
                    <Card style={{ width: '20%', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={"https://optim.tildacdn.com/tild6534-6531-4563-b363-313130313432/-/format/webp/___pdfio_1.png"}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            alt="Card Image"
                        />
                    </Card>
                    <Card style={{ width: '20%', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={"https://optim.tildacdn.com/tild3166-3133-4138-b030-636661303937/-/format/webp/_-1.png"}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            alt="Card Image"
                        />
                    </Card>


                </CardScroll>
            </Group>


        </Group>
    );
};
