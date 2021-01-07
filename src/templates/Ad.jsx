import React from 'react';
import {Image, Container, Row, Column, Text} from 'postonents';

export class Ad extends React.Component {
    render() {
        return (
            <Container alignment="center" style={{ backgroundColor:'white', padding: '0px 0px 0px 20px' }}>
                <Row>
                    <Column small={5}>
                        <Text style={{ fontSize:27, fontWeight:'700', color:'black', textAlign: 'Left', marginBottom:'10px', lineHeight: '30px' }}>
                            Koppla ditt Klarnakort till Apple Pay eller Google Pay.
                        </Text>

                        <Container maxWidth={200}>
                            <Text style={{ fontSize:15, fontWeight:'normal', color:'#487b94', textAlign: 'Left', width: '50px' }}>
                                Betala med mobilen
                                överallt<Image src="https://x.klarnacdn.net/plpp/images/icon/6fa87c7ac15e3b93b8186267e6072e1de5330c1ee4103a96b7fbbd5f6237ceb1-arrow_icon.png" style={{ width: '11px' }} />
                            </Text>
                        </Container>
                    </Column>
                    <Column small={7} style={{ marginBottom: 10 }}>
                        <Image src="https://x.klarnacdn.net/plpp/images/card/f52e9439376e44eaf3eb38e41a061c53015e895e5c6002c607c6718132496437-TRX_SE_1200x1070.jpg" width="104%" height="104%" />
                    </Column>
                </Row>
            </Container>
        );
    }
}
export default Ad;