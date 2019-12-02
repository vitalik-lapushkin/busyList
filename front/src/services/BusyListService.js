import Api from "./Api";

let serverUrl = process.env.VUE_APP_SERVER_URL || 'localhost';
let serverPort = process.env.VUE_APP_SERVER_PORT || '3000';

export default {
    getList: () => {
        return Api().get(`${serverUrl}:${serverPort}/list`);
    },

    addItem: (item) => {
        return Api().post(`${serverUrl}:${serverPort}/list/add`, item);
    },

    deleteItem: (itemId) => {
        return Api().post(`${serverUrl}:${serverPort}/list/delete`, itemId);
    },

    updateItem: (item) => {
        return Api().post(`${serverUrl}:${serverPort}/list/update`, item);
    },
};