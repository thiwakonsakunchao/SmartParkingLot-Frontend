import { useState, useEffect} from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function CarsChart(){
    
    const [option, setOption] = useState({
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories:[111,222,333,444]
        }
    })

    const [serie, setSerie] = useState([
        {
            name: 'cars',
            data: [10,20,30,40]
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/days')
            .then(response => {
                const result = response.data;
                console.log(result);
                const allHours = result[0].hours.map(hour => hour.hour);
                const allCars = result[0].hours.map(amountCars => amountCars.amountCars)
                console.log("All hours:", allHours);
                console.log("All Cars:", allCars);
                setOption({
                    ...option,
                    xaxis: {
                        categories: allHours
                    }
                })
                setSerie([
                    {
                        ...serie[0],
                        data: allCars
                    }
                ]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
    

    return(
        <>
           <div>
            <Chart
                options={option}
                series={serie}
                type="bar"
            />
           </div>
        </>

    )
}

export default CarsChart;
