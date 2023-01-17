'use client'
import React from 'react'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
type Props = {
  setRating: React.Dispatch<React.SetStateAction<number | null>>
  rating: number | null
  disabled: boolean
}

const labels: number[] = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

export default function RatingCom({ setRating, rating, disabled }: Props) {
  const [hover, setHover] = React.useState(-1)
  return (
    <Box
      sx={{
        width: 150,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        value={rating}
        precision={0.5}
        onChange={(event, newValue) => {
          setRating(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
        emptyIcon={
          <StarBorderRoundedIcon style={{ opacity: 0.55 }} fontSize="inherit" />
        }
        disabled={disabled}
      />
    </Box>
  )
}
