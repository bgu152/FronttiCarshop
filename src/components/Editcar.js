import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getThemeProps } from '@mui/system';



export default function Editcar(props) {
    const [open, setOpen] = React.useState(false);
    const [car,setCar] = React.useState({
        brand:'', model:'', color:'', fuel:'',year:'', price:''
    });

    const handleClickOpen = () => {
        console.log(props.car);
        setCar({
            brand:props.car.brand,
            model:props.car.model,
            color:props.car.color,
            fuel:props.car.fuel,
            year:props.car.year,
            price:props.car.price
        });
            
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInpuChange= (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    };



    const updateCar =() => {
        console.log('editing car');
        props.updateCar(car,props.car._links.car.href);
        handleClose();
    }
    

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Edit Car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange = {e => handleInpuChange(e)}
                        label="Brand"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange = {e => handleInpuChange(e)}
                        label="Model"
                        fullWidth
                        variant="standard"
                    />
                     <TextField
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange = {e => handleInpuChange(e)}
                        label="Color"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange = {e => handleInpuChange(e)}
                        label="Year"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange = {e => handleInpuChange(e)}
                        label="Price"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange = {e => handleInpuChange(e)}
                        label="Fuel"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={updateCar}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}