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
