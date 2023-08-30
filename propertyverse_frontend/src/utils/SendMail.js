import emailjs from '@emailjs/browser';


export default function SendEmail(name, email, message) {
    let templateParams = {
        to_name: name,
        to_email: email,
        message: message,
    }

    const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;


    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
