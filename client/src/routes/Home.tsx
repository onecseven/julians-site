import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Stack,
  Alert,
  AlertTitle,
  Box,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { POST_LOGIN } from "../store/features/login/loginActions"

export const Home = (props) => {
  return (
    <p className="lorem">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat
      dolor tellus, sed sodales sem molestie a. Integer porta dictum urna at
      suscipit. Cras posuere dapibus vehicula. Vivamus sed ultrices enim, non
      laoreet massa. Donec porta turpis sit amet nunc rhoncus condimentum. Nulla
      iaculis convallis convallis. Maecenas varius, arcu et maximus vulputate,
      ante lorem imperdiet ipsum, a eleifend nunc leo et purus. Quisque in
      lacinia eros, eget aliquet lacus. Suspendisse quis sapien et nisi dictum
      vulputate. Sed placerat felis augue, et consectetur tortor vestibulum at.
      Nulla vestibulum tellus interdum nibh faucibus, in pretium lorem
      hendrerit. Cras ac eleifend massa, vel egestas diam. Quisque dictum orci
      ac congue interdum.
    </p>
  )
}
