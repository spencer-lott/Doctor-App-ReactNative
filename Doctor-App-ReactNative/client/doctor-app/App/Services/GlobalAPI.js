const BASE_URL = 'http://192.168.1.235:5236/api'

export const getAllSliders = () => {
    return fetch(`${BASE_URL}/Slider`).then((res) => res.json())
};

export const getAllCategories = () => {
    return fetch(`${BASE_URL}/Category`).then((res) => res.json())
};

export const getAllHospitals = () => {
    return fetch(`${BASE_URL}/Hospital`).then((res) => res.json())
};

export const getAllDoctors = () => {
    return fetch(`${BASE_URL}/Doctor`).then((res) => res.json())
};

export const getHospitalsByCategoryId = (id) => {
    return fetch(`${BASE_URL}/Hospital/GetHospitalsByCategoryId?categoryId=${categoryId}`).then((res) => res.json())
}; //NOT CURRENTLY BEING USED

export const getHospitalsByCategoryName = (name) => {
    return fetch(`${BASE_URL}/Hospital/GetHospitalsByCategoryName?categoryName=${name}`).then((res) => res.json())  
}

export const getDoctorsByCategoryName = (name) => {
    return fetch(`${BASE_URL}/Doctor/GetDoctorsByCategoryName?categoryName=${name}`).then((res) => res.json())  
}
