import { axios } from 'core';

const messagesApi = {
    getAllByDialogId: (id: string) => axios.get(`/messages?dialog=${id}`),
};

export default messagesApi;