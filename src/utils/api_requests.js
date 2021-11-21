import * as axios from 'axios'

export const SERVER_API_START_URL = "http://127.0.0.1:8080/api/"

const defaultRequestData = {
    apiUrl: "unknown_url/frontender-lox/haha/",
    token: false,
}

export const DELETE_METHOD = 'delete'
export const GET_METHOD = 'get'
export const PUT_METHOD = 'put'
export const POST_METHOD = 'post'

export default function sendApiRequest(method, data=defaultRequestData, goodResponseHandler=standartGoodResponseHandler, badResponseHandler=standartErrorResponseHandler) {

    const apiUrl = SERVER_API_START_URL + data.apiUrl
    if (method == null || apiUrl == null){
        console.log("Error to send request")
        return
    }

    console.log(`Send post request: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (data.token){
        option["Authorization"] = `Token ${data.token}`
        console.log(`With token: ${data.token}`)
    }
    let requestData = {
        method: method,
        url: apiUrl,
        headers: option
      }
    if (data.data != null){
        requestData.data = data.data
    }
    axios(requestData).then(response => {
        goodResponseHandler(response)
    }).catch(err => {
        badResponseHandler(err)
    })
    
}

export function standartGoodResponseHandler(response) {
    console.log(response)
}

export function standartErrorResponseHandler(err) {
    if (err?.response) {
        // Request made and server responded
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    } else if (err?.request) {
        // The request was made but no response was received
        console.log(err.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err?.message);
    }
}

