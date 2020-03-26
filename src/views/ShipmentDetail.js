import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import {
  TextField,
  Slide,
  Input,
  InputLabel,
  FormControl,
  Snackbar
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: 180
  },
  wrapper: {
    width: 800 + theme.spacing(2)
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  },
  form: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ShipmentDetail(props) {
  const classes = useStyles();
  const [AlertSuccess, setOpen] = useState(false);
  const [AlertError, setError] = useState(false);
  const [ShipmentName, setShipmentName] = useState(props.ShipmentInfo.name);
  //const [Reload, setReload] = useState(props.Reload);
  useEffect(() => {
    setShipmentName(props.ShipmentInfo.name);
  }, [props.ShipmentInfo.name]);

  function onKeyPressName(e) {
    if (e.key === "Enter") {
      props.ShipmentInfo.name = e.target.value;
      _onShipmentUpdate(e.target.value);
    }
  }

  function onChangeName(e) {
    setShipmentName(e.target.value);
  }

  function _onShipmentUpdate(sName) {
    let sShipmentId = props.ShipmentInfo.id;
    let sUrl = "http://localhost:3001/shipments/" + sShipmentId + "/";
    axios
      .put(sUrl, props.ShipmentInfo)
      .then(resp => {
        setOpen(true);
        props.callBack();
      })
      .catch(error => {
        setError(true);
      });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Slide direction="up" in={props.checked} mountOnEnter unmountOnExit>
          <form className={classes.form} noValidate autoComplete="off">
            <FormControl disabled>
              <InputLabel htmlFor="component-simple">ShipmentId</InputLabel>
              <Input id="ShipmentId" value={props.ShipmentInfo.id} />
            </FormControl>

            <FormControl>
              <TextField
                id="standard-number"
                label="Name"
                value={ShipmentName}
                onKeyPress={onKeyPressName}
                onChange={onChangeName}
                helperText="Please Enter for Save"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>

            <FormControl disabled>
              <InputLabel htmlFor="component-disabled">Mode</InputLabel>
              <Input id="ModeId" value={props.ShipmentInfo.mode} />
            </FormControl>

            <FormControl disabled>
              <InputLabel htmlFor="component-error">Type</InputLabel>
              <Input
                id="TypeId"
                value={props.ShipmentInfo.type}
                aria-describedby="component-error-text"
              />
            </FormControl>

            <FormControl disabled>
              <InputLabel htmlFor="component-outlined">Destination</InputLabel>
              <Input
                id="DestinationId"
                value={props.ShipmentInfo.destination}
              />
            </FormControl>

            <FormControl disabled>
              <InputLabel htmlFor="component-filled">Origin</InputLabel>
              <Input id="OriginId" value={props.ShipmentInfo.origin} />
            </FormControl>

            <FormControl disabled>
              <InputLabel htmlFor="component-filled">Total</InputLabel>
              <Input id="TotalId" value={props.ShipmentInfo.total} />
            </FormControl>

            <FormControl disabled>
              <InputLabel htmlFor="component-filled">Status</InputLabel>
              <Input id="StatusId" value={props.ShipmentInfo.status} />
            </FormControl>

            <FormControl disabled>
              <InputLabel htmlFor="component-filled">UserId</InputLabel>
              <Input id="UserId" value={props.ShipmentInfo.userId} />
            </FormControl>
          </form>
        </Slide>
        <div>
          <Snackbar
            open={AlertSuccess}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              Saved successfully !
            </Alert>
          </Snackbar>
          <Snackbar
            open={AlertError}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              Couldnt Save !
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}
