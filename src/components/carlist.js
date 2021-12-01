import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import Addcar from "./Addcar";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Editcar from "./Editcar";




export default function Carlist() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
    }

    const deleteCar = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, { method: 'DELETE' })
                .then(res => fetchData())
                .catch(error => console.error(error))
        }

    }

    const saveCar = (car) => {
        console.log('Saving car');
        console.log(JSON.stringify(car));
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car)
        })
            .then(res => fetchData())
            .catch(err => console.error(err))
    }

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Brand',
            accessor: 'brand'
        },
        {
            Header: 'Model',
            accessor: 'model'
        },
        {
            Header: 'Color',
            accessor: 'color'
        },
        {
            Header: 'Fuel',
            accessor: 'fuel'
        },
        {
            Header: 'Year',
            accessor: 'year'
        },
        {
            Header: 'Price',
            accessor: 'price',
            filterable: false
        },
        {

            accessor: '_links.self.href',
            sortablitiy: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcar updateCar = {updateCar} car={row.original} />
        },
        {
            accessor: '_links.self.href',
            sortablitiy: false,
            filterable: false,
            width: 100,
            Cell: row => <Button startIcon={<DeleteIcon />} onClick={() => deleteCar(row.value)}></Button>
        }
    ]

    return (
        <div>
            <Addcar saveCar={saveCar} />
            <ReactTable columns={columns} filterable={true} data={cars} />
            <p>Test</p>
        </div>
    )
}