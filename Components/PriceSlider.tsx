"use client";
import React from "react";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

type Props = {
  Min: number;
  Max: number;
  minmaxSetter: React.Dispatch<React.SetStateAction<number[]>>;
  minmax: number[];
};
function valueLabelFormat(value: number) {
  return `$ ${value}`;
}
export default function PriceSlider({ Min, Max, minmax, minmaxSetter }: Props) {
  return (
    <div>
      <Box sx={{ marginRight: 7, marginTop: 3, marginBottom: 1 }}>
        <div className="pb-4 font-semibold">Price range</div>
        <PrettoSlider
          className="ml-7"
          valueLabelDisplay="auto"
          valueLabelFormat={valueLabelFormat}
          defaultValue={[Min, Max]}
          min={Min}
          max={Max}
          onChange={(e, vals, index) => {
            minmaxSetter(vals as number[]);
          }}
        />
      </Box>
    </div>
  );
}
