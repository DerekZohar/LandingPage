import React from "react";
import { makeStyles, Paper, Tab, Tabs } from "@material-ui/core";
import MultiCarouselMostView from "./CarouselMostView";

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // margin: "0 5%",
  },
});
export default function FilterFollowTopic() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="filter-fl-topic">
      <h2>The world's largest selection of courses</h2>
      <p>
        Choose from 130,000 online video courses with new additions published
        every month
      </p>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          //   centered
        >
          <Tab label="Javascript" />
          <Tab label="Python" />
          <Tab label="C++" />
          <Tab label="C" />
          <Tab label="C#" />
          <Tab label="Java" />
          <Tab label="ReactJs" />
        </Tabs>
      </Paper>

      <MultiCarouselMostView />
      <MultiCarouselMostView />
      <MultiCarouselMostView />
      <MultiCarouselMostView />
    </div>
  );
}
