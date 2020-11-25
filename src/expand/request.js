import axios from 'axios';
import {base_url} from './api';

export function request(url, token) {
    console.log('**@@$$$token', token);
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            baseURL: base_url,
            headers: {
                'Content-Type': 'application/json',
                // eslint-disable-next-line prettier/prettier
                // token: token ? {} : '',
            },
            method: 'GET',
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
