import axios from "axios";

const sendForm = (name, phoneNumber, email, category, msg) => {
    return axios.post('https://skylo.pl/send-form', {
        name, phoneNumber, email, category, msg
    });
}

export { sendForm }
