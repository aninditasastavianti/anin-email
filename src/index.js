import React from 'react';
import ReactDOM from 'react-dom';
import Email1 from './templates/Email1';
import Email2 from './templates/Email2';
import EmailGenerationButton from './EmailGenerationButton.jsx';

class EmailGenerationList extends React.Component{

    render(){
        var emailAddress = "anin.sastavianti@gmail.com";
        return(
            <>
                Email address configured: {emailAddress}
                <EmailGenerationButton template={Email1} address={emailAddress} firstname="Anin" lastname="Sastavianti" merchantname="Afound" merchantimage="https://cdn.klarna.com/1.0/shared/image/merchant/229759/logo.jpg?width=140&height=140" />

                <EmailGenerationButton template={Email2} address={emailAddress} firstname="Anin" lastname="Sastavianti" merchantname="Afound" merchantimage="https://cdn.klarna.com/1.0/shared/image/merchant/229759/logo.jpg?width=140&height=140" />

            </>
        );
    }
}

ReactDOM.render(<EmailGenerationList />, document.getElementById('root'));
