import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-ID": "w2a6cwsv20row1slmr7kslio7oxg1i",
        "Authorization": "Bearer venc4u8ggf51422czvk8sq43d5m9jq"
        }
})

/*
    CLIENT_ID = 'w2a6cwsv20row1slmr7kslio7oxg1i';
    REDIRECT = 'https://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}/&response_type=token

    LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=w2a6cwsv20row1slmr7kslio7oxg1i&redirect_uri=https://127.0.0.1/&response_type=token
*/

export default api;
