import instance from "./instance";
const categoryList = ()=>{
    const url = '/cate'
    return instance.get(url)
}