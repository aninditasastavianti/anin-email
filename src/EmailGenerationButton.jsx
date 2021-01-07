import React from 'react';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from './templates/EmailTemplate';

class EmailGenerationButton extends React.Component {

  renderEmail = (template: EmailTemplate, emailData?: object, headStyles?: string): string => {
    const docType = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
    const content = ReactDOMServer.renderToStaticMarkup(template.data(emailData));

    return `${docType}${content}`;
  };

  getHtml = () => {
    return this.renderEmail(this.props.template, { address: this.props.address, firstname: this.props.firstname, lastname: this.props.lastname, merchantname: this.props.merchantname, merchantimage: this.props.merchantimage });;
  };

  downloadTxtFile = () => {

    const element = document.createElement("a");
    const file = new Blob([this.getHtml()], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = "email.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();

    this.sendEmail();

  };

  sendEmail = () => {
    window.Email.send({
    Host : "smtp.sendgrid.net",
    Username : "apikey",
    Password : "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",
    To : this.props.address,
    From : "aninemailtest@gmail.com",
    Subject : "Test - Ditt köp från Afound är nu betalt!",
    Body : this.getHtml()
}).then(

);
}

  render() {
    return (
      <div>
        <button onClick={this.downloadTxtFile} style={{margin: "15px 0 0 0", backgroundColor: "black", color: "white", textAlign: 'center', padding: '13px 15px 13px 15px', fontFamily:'Helvetica', border: 0}}>Generate & send</button>
      </div>
    );
  }

}

export default EmailGenerationButton;
