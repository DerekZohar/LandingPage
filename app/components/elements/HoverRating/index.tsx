import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Chip } from "@material-ui/core";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
export default function HoverRating({
  value,
  readOnly,
  label,
  valueLabel,
  numberRating,
  students,
}) {
  if (readOnly === undefined) readOnly = false;
  if (!label === undefined) label = false;
  if (valueLabel === undefined) valueLabel = true;
  if (!numberRating) numberRating = 0;
  if (!students) students = 0;

  // const [value, setValue] = (useState < number) | (null > ratingNumber);
  // const [hover, setHover] = useState(-1);
  return (
    <div>
      <div className="hover-rating">
        {numberRating === 0 && valueLabel === false ? (
          <div />
        ) : (
          <p className="hover-rating-value">{value}</p>
        )}
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          readOnly={readOnly}
          // disabled
        />
        {/* {numberRating === 0 || valueLabel === false ? (
          <div />
        ) : (
          <p className="course-swiper-student-rating">
            {formatNumber(numberRating)}
          </p>
        )} */}
        {label === false ||
          (students >= 10000 && (
            <div style={{ display: "flex" }}>
              {/* <Chip
                label={labels[Math.ceil(value)]}
                size="small"
                // onDelete={handleDelete}
                color="primary"
              /> */}
              <Chip
                label="Bestseller"
                size="small"
                style={{
                  backgroundColor: "#FFE799",
                  color: "#593D00",
                  fontWeight: "bold",
                }}
                // onDelete={handleDelete}
                color="secondary"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
