import axios from 'axios';

const workOrderURL = 'https://www.hatchways.io/api/assessment/work_orders';

export const fetchWorkOrders = async () => {

    try {
        const { data } = await axios.get(workOrderURL);
        return { data };
    } catch (error) {
        console.log(error);
    }
}