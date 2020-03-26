import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import axios from "axios";
import ShipmentDetail from "./ShipmentDetail";

export default function Shipments() {
  const [checked, setChecked] = useState(false);
  const [ShipmentInfo, setShipmentInfo] = useState({
    id: "",
    name: "",
    cargo: [],
    mode: "",
    type: "",
    destination: "",
    origin: "",
    services: [],
    total: "",
    status: "",
    userId: ""
  });
  const [Reload, setReload] = useState(false);
  const [shipments, setShipments] = useState([]);
  const [column, setColumns] = useState({
    columns: [
      { title: "Id", field: "id" },
      { title: "Name", field: "name" },
      { title: "Mode", field: "mode" },
      { title: "Type", field: "type" },
      { title: "Destination", field: "destination" },
      { title: "Origin", field: "origin" },
      { title: "Total", field: "total" },
      { title: "Status", field: "status" },
      { title: "UserID", field: "userId" }
    ]
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/shipments")
      .then(function(oResp) {
        let oData = oResp.data;
        setShipments(oData);
      })
      .catch(function(err) {});
  }, Reload);

  const onGotoDetailPage = (oEvent, oRow) => {
    setChecked(prev => !prev);
    setShipmentInfo(oRow);
  };
  function update() {
    setReload(true);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <MaterialTable
          title="Shipments"
          columns={column.columns}
          data={shipments}
          onRowClick={onGotoDetailPage}
        />
        <ShipmentDetail
          checked={checked}
          ShipmentInfo={ShipmentInfo}
          callBack={update}
        />
      </Container>
    </React.Fragment>
  );
}
