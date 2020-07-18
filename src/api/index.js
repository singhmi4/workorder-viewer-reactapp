import axios from 'axios';

const workOrderURL = 'https://www.hatchways.io/api/assessment/work_orders';

export const fetchWorkOrders = async () => {

   
    try {

        let workerDetails = [];
        const numOfWorkers = 5;

        for (let i=0; i < numOfWorkers; i++) {
            let workerDetailURL = `https://www.hatchways.io/api/assessment/workers/${i}`;
            const { data : { worker } } = await axios.get(workerDetailURL);
            workerDetails.push(worker);
        }

        // console.log(workerDetails);

        let modifiedData = [];

        const { data: { orders } } = await axios.get(workOrderURL);
        // console.log(orders);
        orders.forEach(({ deadline, description, id, name, workerId }) => {
            let workOrderId = id;
            let workOrderName = name;
            workerDetails.forEach(( { companyName, email, id, image, name } ) => {
                if (workerId === id ) {
                    modifiedData.push({
                       deadline,
                       description,
                       workerId,
                       workOrderId,
                       workOrderName,
                       companyName,
                       email,
                       image,
                       name, 
                    });
                }
            })
        })

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}