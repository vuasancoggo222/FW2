import instance from "./instance";
export const login = (values:any) =>{
    const url = `login`
    return instance.post(url,values)
}
export const register = (values:any) =>{
    const url = `register`
    return instance.post(url,values)
}