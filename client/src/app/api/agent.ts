import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";


const sleep = () => new Promise(resolve => setTimeout(resolve, 300));

axios.defaults.baseURL = "http://localhost:5000/api/"

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response 
}, (error: AxiosError) => {
    const {data, status} = error.response!;
    switch (status) {
        case 400:
            toast.error("bad request");
            break;
        case 401:
            toast.error("unauthorized");
            break;
        case 500:
            history.push({
                pathname: "/server-error",
                state:{error: data}
            });
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests ={
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => requests.get('controller'),
    details: (id: number) => requests.get(`controller/${id}`)
}

const TestErrors = {
    get400Error: () => requests.get("controller/bad-request"),
    get401Error: () => requests.get("controller/unauthorised"),
    get404Error: () => requests.get("controller/not-found"),
    get500Error: () => requests.get("controller/server-error"),
    getValidationError: () => requests.get("controller/validation-error"),
}

const agent ={
    Catalog,
    TestErrors
}

export default agent