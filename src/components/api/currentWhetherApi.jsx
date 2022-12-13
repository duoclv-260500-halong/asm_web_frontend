import axiosClient from "./axiosClient";

const currentWeatherApi = {
    getByLatAndLon (params) {
        const url = '/weather';

        return axiosClient.get(url, {
            params: params
        })
    },
    getByCityName () {

    },
    getById () {

    }
};

export default currentWeatherApi;