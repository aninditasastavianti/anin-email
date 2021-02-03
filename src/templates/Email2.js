import React from 'react';
import { Email, Image, Container, Row, Column, Header, Text, Link, PostonentsProvider } from 'postonents';
import EmailTemplate from './EmailTemplate';
import KlarnaFooter from './KlarnaFooter';
import Ad from './Ad';
import Questions from './Questions';

export class Email2 extends EmailTemplate {

    static get templatename(){
        return "email2";
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
                                        Test
                                    </Text>
                                </Row>
                            </Column>

                        </Row>
                    </Container>


                </Email>
            </PostonentsProvider>
        );
    }
}
export default Email2;