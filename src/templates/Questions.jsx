import React from 'react';
import {Image, Container, Row, Column, Text, Link} from 'postonents';

export class Questions extends React.Component {
    render() {
        return (
            <Container alignment="center" style={{ backgroundColor:'white', padding: '0px 0px 0px 20px' }}>
                <Row>
                    <Column small={9}>
                        <Text style= {{ fontSize:30, fontWeight:'bold', color:'#202124' }}>
                            Frågor?
                        </Text>
                    </Column>
                </Row>

                <Row>
                    <Column small={9}>
                        <Text style={{ fontSize:16, fontWeight:'normal', color:'black' }}>
                            Om du har frågor om din beställning, exempelvis leverans eller returer, ber vi dig kontakta Afound.
                        </Text>
                    </Column>
                </Row>

                <Row>
                    <Column small={9}>
                        <Text style={{ fontSize:16, fontWeight:'normal', color:'black' }}>
                            Om du har frågor om din betalning är du välkommen att kontakta oss via <Link href={`http://klarna.com`} type="secondary" style={{ color: '6e9896', textDecoration: 'underline' }}>
                            klarna.se</Link>.
                        </Text>
                    </Column>
                </Row>

                <Row>
                    <Column small={9}>
                        <Text style={{ fontSize:16, fontWeight:'normal', color:'black' }}>
                            Det här mejlet har skickats automatiskt och går inte att svara på.
                        </Text>
                    </Column>
                </Row>

                <Column small={7} style={{ marginTop: 50 }}>
                    <Image src="https://x.klarnacdn.net/plpp/images/logo/Klarna_Symbol_Black.png" width="7%" height="7%" />
                </Column>
            </Container>
        );
    }
}
export default Questions;