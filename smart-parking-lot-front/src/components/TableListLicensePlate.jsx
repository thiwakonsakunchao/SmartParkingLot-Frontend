import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';




const columns = [
    {
        name: 'FirstName',
        selector: row => row.first_name,
    },
    {
        name: 'LastName',
        selector: row => row.last_name,
    },
    {
        name: 'License plate number',
        selector: row => row.license_number,
    },
    {
        name: 'Province of license plate',
        selector: row => row.province,
    },
    {
        cell: (row) => <button onClick={() => handleButtonClick(row.id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
];

const handleButtonClick = (id) => {
    console.log('Deleting license plate with ID:', id);
    axios.delete(`http://localhost:8000/api/deleteLicense/${id}`)
        .then((response) => {
            console.log(response.data.message);
            window.location.reload();
        })
        .catch((error) => {
            console.error("Error deleting license plate:", error);
            if (error.response) {
                console.error("Server responded with status:", error.response.status);
                console.error("Error message from server:", error.response.data.message);
            } else {
                console.error("Request failed:", error.message);
            }
        });
};

function TableListLicensePlate() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/licensePlates")
            .then((response) => {
                const result = response.data;
                setData(result);
                console.log(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className="mb-5 mt-5"></div>
            <div className="">
                <DataTable
                    title="License Plates"
                    columns={columns}
                    data={data}
                />
            </div>
        </>
    );
}

export default TableListLicensePlate;
