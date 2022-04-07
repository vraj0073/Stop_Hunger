import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";
import data from "../data";
import dayjs from "dayjs";
import axios from "axios";
import NavigationBar from "./NavigationBar";

export default function Recycle() {
  console.log("EHEREREE");
  const [items, setItems] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/getItems");
      const ds = [];
      res.data.map((i) => {
        if (
          i.status === "NOT_ACCEPTED" &&
          dayjs().diff(i.createdAt, "hours") >= 0
        ) {
          ds.push(i);
        }
      });
      console.log(ds);
      setItems(ds);
    };
    getData();
  }, []);

  return items ? (
    <div>
      <NavigationBar />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "2%" }}
      >
        {items.map((i) => (
          <CardElement
            itemName={i.name}
            content={i.sender.address}
            quantity={i.quantity}
            sender={i.sender}
            itemId={i._id}
            // imageUrl={i.imageUrl}
          ></CardElement>
        ))}
      </Grid>
    </div>
  ) : (
    <p>loading</p>
  );
}
