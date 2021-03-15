import { Grid } from "@material-ui/core";
import React from "react";
import TopCategoriesItem from "./TopCategoriesItem";

export default function TopCategories() {
  const value = 3;
  const list = [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1];
  return (
    <div className="top-categories-container">
      <h2>Top Categories</h2>

      <Grid
        container
        // justify="space-between"
        alignContent="center"
        alignItems="center"
        spacing={8}
      >
        {list.map((item, index) => (
          <Grid key={index} container item xs={value} lg={value} spacing={3}>
            <TopCategoriesItem />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
