import instance from "./instance";
export const categoryList = ()=>{
    const url = '/cates'
    return instance.get(url)
}
export const addCategory = ()=>{
    const url = '/cates'
    return instance.post(url)
}
export const updateCategory = (id:any,category:any) =>{
    const url = `cates/${id}`
    return instance.put(url,category)
}

export const getProductByCate = (id:any) =>{
    console.log(id);
    const url = `/cates/${id}?_embed=products`
    return instance.get(url)
}
export const readCategory = (id:any)=>{
    const url = `cates/${id}`
    return instance.get(url)
}