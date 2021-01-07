import React from 'react';
import { Email, Image, Container, Row, Column, Header, Text, Link, PostonentsProvider } from 'postonents';
import EmailTemplate from './EmailTemplate';
import KlarnaFooter from './KlarnaFooter';
import Ad from './Ad';
import Questions from './Questions';

export class Email1 extends EmailTemplate {

    static get templatename(){
        return "email1";
    }

    static data = (emailData ) => {
        const { address, firstname, lastname, merchantname, merchantimage } = emailData;
        return (
            <PostonentsProvider theme={{ typo: { fontFamily: 'KlarnaSans'} }}>
                <Email
                    title={`Ditt köp från Afound är nu betalt!`}
                    headLinks={[
                        {
                            type: 'link',
                            props: {
                                rel: 'stylesheet',
                                href: 'https://cdn.klarna.com/1.0/shared/content/fonts/KlarnaFonts.css',
                            },
                        },
                        {
                            type: 'link',
                            props: {
                                rel: 'stylesheet',
                                href: 'https://a.klarnacdn.net/ui/fonts/v1.2/fonts.css',
                            },
                        },
                    ]}>

                    <Container alignment="center" style={{ padding:'0px 0px 0px 0px' }}>
                        <Header />
                        <Row>
                            <Column small={2} style={{ marginBottom: 0 }}>
                                <Image src="https://cdn.klarna.com/1.0/shared/image/generic/logo/sv_se/basic/logo_grey.png" width="100%" height="100%" />
                            </Column>
                        </Row>

                        <Row>
                            <Column small={10}>
                                <Row>
                                    <Text style={{ fontSize:34, fontWeight:'700', color:'#17120f' }}>
                                        {`${merchantname}`}
                                    </Text>
                                </Row>
                                <Row>
                                    <Text style={{ fontSize:20, fontWeight:'normal', color:'#17120f' }}>
                                        Ordernummer: PO1359894G7542
                                    </Text>
                                </Row>
                            </Column>
                            <Column small={2} style={{ marginBottom: 0, textAlign: 'right'}}>
                                <Image src={merchantimage} width="100%" height="100%"  style={{ borderRadius: 90 }}/>
                            </Column>
                        </Row>
                    </Container>

                    <Container alignment="center" style={{ backgroundColor:'white', padding:'15px 30px 15px 30px' }}>

                        <Row>
                            <Column small={12} style={{ padding: '10px 0px 10px 0px'}}>
                                <Text style={{ fontSize:16, fontWeight:'normal', color:'black' }}>
                                    Hej! Ditt köp från Afound är nu betalt. Tack för att du valde Klarna!
                                </Text>
                            </Column>
                        </Row>

                        <Row style={{ padding: '15px 0px 15px 0px', borderBottom:'1px solid #eae7e4'}}>
                            <Column small={6} style={{textAlign:'left', padding: '0' }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'black' }}>
                                    Betälningsstatus
                                </Text>
                            </Column>

                            <Column small={6} style={{ textAlign:'right', padding: '0' }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'green' }}>
                                    Betalt
                                </Text>
                            </Column>

                        </Row>

                        <Row style={{ padding: '15px 0px 15px 0px', borderBottom:'1px solid #eae7e4'}}>
                            <Column small={6} style={{textAlign:'left', padding: '0'  }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'black' }}>
                                    Beställningsdatum
                                </Text>
                            </Column>

                            <Column small={6} style={{ textAlign:'right', padding: '0' }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'black' }}>
                                    5 november
                                </Text>
                            </Column>
                        </Row>

                        <Row style={{ padding: '15px 0px 15px 0px', borderBottom:'1px solid #eae7e4'}}>
                            <Column small={6} style={{textAlign:'left', padding: '0'  }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'black' }}>
                                    Mottaget belopp
                                </Text>
                            </Column>

                            <Column small={6} style={{ textAlign:'right', padding: '0' }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'black' }}>
                                    300 kr
                                </Text>
                            </Column>
                        </Row>

                        <Row style={{ padding: '15px 0px 15px 0px' }}>
                            <Column small={6} style={{textAlign:'left', padding: '0' }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'black' }}>
                                    OCR
                                </Text>
                            </Column>

                            <Column small={6} style={{ textAlign:'right', padding: '0' }}>
                                <Text style={{ fontSize:15, fontWeight:'normal', color:'black' }}>
                                    2419435859999764
                                </Text>
                            </Column>

                        </Row>

                        <Row style={{ padding: '15px 0px 15px 0px' }}>
                            <Column small={12} style={{ marginBottom: 24, textAlign: 'left', color:'black', padding: '0' }}>
                                <Link href={`http://klarna.com`} type="primary" style={{ textAlign: 'center', backgroundColor:'black', padding: '13px 35px 30px 35px', borderRadius: '0' }}>
                                    Visa din beställning
                                </Link>
                            </Column>

                        </Row>

                    </Container>

                    <Ad />

                    <Questions />

                    <KlarnaFooter />

                </Email>
            </PostonentsProvider>
        );
    }
}
export default Email1;