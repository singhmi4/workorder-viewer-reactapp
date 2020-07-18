import axios from 'axios';

const workOrderURL = 'https://www.hatchways.io/api/assessment/work_orders';

export const fetchWorkOrders = async () => {

    try {
        const { data: { orders } } = await axios.get(workOrderURL);
        return { orders };
    } catch (error) {
        console.log(error);
    }
}