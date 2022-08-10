import {
    CircularProgress,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {useEffect, useState} from "react";
import {fetchOrders} from "../service/apiRequests";


const useStyles = makeStyles(() => ({
    'tableContainer': {
        'margin': '16px',
        'width': 'auto'
    }
}));


export const Orders = () => {
    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        setTimeout(() => {
            fetchOrders().then((data) => setOrders(data));
        }, 500);
    }, [])

    useEffect(() => {
        if (orders) {
            setIsLoading(false);
        }
    }, [orders])

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell> Amount </TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        orders?.map((item) => {
                            const {id, totalAmount, address} = item;
                            return (
                                <TableRow key={id}>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>{totalAmount}</TableCell>
                                    <TableCell>{address}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            {isLoading && <CircularProgress color="secondary" size={20}/>}
        </TableContainer>
    )
}
