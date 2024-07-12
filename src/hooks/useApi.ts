
import {message} from "antd";

export const useApi = () => {

  const apiPost = ({
    api = process.env.RABBIT_API,
    endPoint,
    body,
    method = 'post'
  } :{
    api?: string
    method?: string
    endPoint: string
    body?: any
  }) => {
    console.log(`${api}${endPoint}`)
    return fetch(`${api}${endPoint}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        //@ts-ignore
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if(Math.floor(res.statusCode / 200) === 1 || Math.floor(res.status / 200) === 1) {
          return res.data
        }
        if(res.message && (Math.floor(res.statusCode / 400) === 1 || Math.floor(res.status / 400) === 1)) {
          message.error(res.message)
          throw new Error(res.message)
        }
        if(res.errors) {
          if(typeof res.errors === "object") {
            for(let i in res.errors) {
              message.error(res.errors[i])
            }
          }
          throw res.errors
        }
      })
  }

  const apiGet = (endPoint: string, params?: any) => {
    return fetch(`${process.env.RABBIT_API}${endPoint}${params && new URLSearchParams(params).toString()}`, {
      method: "get",
      headers: {
        //@ts-ignore
      }
      // mode: "no-cors"
    })
      .then((res) => res.json())
  }

  return {
    apiGet,
    apiPost
  }
}
