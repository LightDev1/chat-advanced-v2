import { format, isToday } from 'date-fns';

const getMessageTime = (createdAt: string) => {
    if (isToday(Date.parse(createdAt))) {
        return format(Date.parse(createdAt), 'HH:mm');
    } else {
        return format(Date.parse(createdAt), 'dd.MM.YYY')
    }
};

export default getMessageTime;