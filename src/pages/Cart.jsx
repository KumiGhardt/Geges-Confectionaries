import React from "react";
import "../styles/Cart.css";
import { useCart } from "react-use-cart";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



//order confirmation
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Cart() {
  //anchorEl passes the location of the button that called it on payment method
  const [anchorEl, setAnchorEl] = React.useState(null);
  //order sumisssion
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //close menu
  const handleClose = () => {
    setAnchorEl(null);
  };


  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty.</p>;

  
  const handleSubmitClick = () => {
    setOpen(true);
  };

  const handleSubmitClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="cart">
      <h1>Cart Items:({totalItems})</h1>

      <div className="cartItem">
        {items.map((menuItem, index) => {
          // if (menuItem === sweet) {
          return (

            <Table key={index} className="cartTable">
              <TableHead>
              </TableHead>
              <TableBody>
                <TableRow key={menuItem.id}>
                  <TableCell><img src={menuItem.image} alt="item_image" width="50px" height="50px" /></TableCell>
                  <TableCell className="title">{menuItem.title}</TableCell>
                  <TableCell className="description">{menuItem.description}</TableCell>
                  <TableCell className="price">MWK {menuItem.price} each</TableCell>
                  <TableCell>
                    <Button
                      className="btn-remove" variant="outlined" style={{ color: '#724563' }}
                      onClick={() =>
                        updateItemQuantity(menuItem.id, menuItem.quantity - 1)
                      }
                    >
                      <RemoveCircleOutlineOutlinedIcon />
                    </Button>
                    <Button
                      className="btn-add" variant="outlined" style={{ color: '#724563' }}
                      onClick={() =>
                        updateItemQuantity(menuItem.id, menuItem.quantity + 1)
                      }
                    >
                      <AddCircleIcon />
                    </Button>
                    <Button
                      className="btn-delete" style={{ color: '#724563' }}
                      onClick={() =>
                        removeItem(menuItem.id, menuItem.quantity - 1)
                      }
                    >
                      <DeleteForeverOutlinedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          );
        })}
        <Grid container justify="flex-end">
          <Button variant="contained" color='secondary' className="emptyCart" style={{ height: 40 }} onClick={() => emptyCart()}>
            Empty Cart
          </Button>
        </Grid>
      </div>

      <div>
        <h2>Total Cost: MWK {cartTotal}</h2>
        <div>
          <Button aria-controls="simple-menu" color='primary' aria-haspopup="true" onClick={handleClick}>
            Payment Method<KeyboardArrowDownIcon />
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Mpamba</MenuItem>
            <MenuItem onClick={handleClose}>Mo626</MenuItem>
            <MenuItem onClick={handleClose}>Airtel Money</MenuItem>
          </Menu>

          {/* await selection and reflect selection */}

        </div>
        <div className="submit">
          <Button variant="contained" color='primary'onClick={handleSubmitClick}>Submit Order</Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleSubmitClose}>
        <Alert onClose={handleSubmitClose} severity="success">
          Your order is submitted!
        </Alert>
      </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Cart;
