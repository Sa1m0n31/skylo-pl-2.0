import axios from "axios";

const sendForm = (name, phoneNumber, email, category, msg) => {
    return axios.post('http://localhost:5000/send-form', {
        name, phoneNumber, email, category, msg
    });
}

export { sendForm }
