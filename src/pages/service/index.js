import { itemKelas } from "../../dummy-data";

const Service = {
    getData: ({from, to}) => {
        return new Promise((res, reject) => {

            const data = itemKelas.slice(from, to);

            res({
                count: itemKelas.length,
                data: data
            })
        })
    }
}

export default Service;