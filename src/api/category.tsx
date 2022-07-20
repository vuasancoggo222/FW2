import instance from "./instance";
export const categoryList = ()=>{
    const url = '/cate'
    return instance.get(url)
}