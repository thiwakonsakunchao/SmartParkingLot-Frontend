import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'FirstName',
        selector: row => row.firstname,
    },
    {
        name: 'LastName',
        selector: row => row.lastname,
    },
    {
        name: 'License plate number',
        selector: row => row.number,
    },
    {
        name: 'Province of license plate',
        selector: row => row.province,
    },
    {
				
        cell: () => <button onClick={handleButtonClick} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }
];



const handleButtonClick = () => {
    console.log('clicked');
};

const actions = (
	<button onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    </button>
);




function TableListLicensePlate() {
   
    const [data, setData] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:3000/licenseplates")
            .then((response) => {
                const result = response.data;
                setData(result)
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
                        actions={actions}
                    />
                </div>
               
        </>
    );
}

export default TableListLicensePlate;
