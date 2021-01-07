import React from 'react';
import { Image, Container, Row, DefaultProps, Link } from 'postonents';

export class KlarnaFooter extends React.Component {
    render() {
        return (
            <Container
                alignment="center"
                style={{backgroundColor: 'white', padding: '0px 0px 0px 30px'}}>

                <Row style={{verticalAlign: 'middle'}}>
                    <Link href={'https://www.facebook.com/Klarna'} style={{margin: '0px 5px 0px 0px'}}> <Image
                        src="https://cdn.klarna.com/1.0/shared/image/mail/icon/2019_facebook.png"
                        height="16px"/> </Link>
                    <Link href={'https://www.instagram.com/klarna/'} style={{margin: '0px 5px 0px 5px'}}> <Image
                        src="https://cdn.klarna.com/1.0/shared/image/mail/icon/2019_instagram.png"
                        height="16px"/> </Link>
                    <Link href={'https://www.twitter.com/Klarna'} style={{margin: '0px 5px 0px 5px'}}> <Image
                        src="https://cdn.klarna.com/1.0/shared/image/mail/icon/2019_twitter.png" height="16px"/>
                    </Link>
                    <Link href={'https://www.linked.com/company/klarna/'} style={{margin: '0px 5px 0px 5px'}}>
                        <Image src="https://cdn.klarna.com/1.0/shared/image/mail/icon/2019_linkedin.png"
                               height="16px"/> </Link>
                </Row>
                <Row>Klarna Bank AB (publ)</Row>
                <Row>Sveavägen 46</Row>
                <Row>111 34 Stockholm</Row>
                <Row>Organisationsnummer: SE556737-0431</Row>
                <Row><Link href={'https://www.klarna.com/'} type="secondary"
                           style={{color: '6e9896', textDecoration: 'underline'}}>klarna.com</Link></Row>
            </Container>
        );
    }
};
export default KlarnaFooter;