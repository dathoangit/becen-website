import {message} from "antd";

export const apiGet = ({
  api = process.env.API_URL,
  endPoint,
  params,
  // accessToken
}: {
  api?: string,
  endPoint: string,
  // accessToken: string,
  params?: any
}) => {
  console.log(`${api}${endPoint}${params ? new URLSearchParams(params).toString() : ''}`)
  return fetch(`${api}${endPoint}${params ? '?' + new URLSearchParams(params).toString() : ''}`, {
    method: "get",
    // headers: {
      //@ts-ignore
      // Authorization: "Bearer " + accessToken
    // }
    // mode: "no-cors"
  })
    .then((res) => res.json())
    .then((res) => {
      if(Math.floor(res.statusCode / 200) === 1) {
        return res.data
      }
      if(res.message) {
        throw res.message
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
