import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@material-ui/core';
import * as React from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login(props) {
  const {open, setOpen} = props;


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        onBackdropClick
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{textAlign:"center",width:'100%'}}><b >LOGIN</b></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <TextField style={{width:'100%',marginTop:"20px"}} id="outlined-basic" label="Họ Và Tên" variant="outlined" />
          <TextField style={{width:'100%',marginTop:"20px"}} id="outlined-basic" label="Số điện thoại" variant="outlined" />
          <TextField style={{width:'100%',marginTop:"20px"}} id="outlined-basic" label="Email" variant="outlined" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Login</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}