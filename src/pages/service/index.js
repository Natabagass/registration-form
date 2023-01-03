import { kelas } from "../../dummy-data";

const Service = {
    getData: ({from, to}) => {
        return new Promise((res, reject) => {

            const data = kelas.slice(from, to);

            res({
                count: kelas.length,
                data: data
            })
        })
    }
}

export default Service;