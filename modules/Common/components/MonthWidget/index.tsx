import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export interface MonthWidgetProps {}

const months = [
  "Janeiro",
  "Fevereiro",
  "Marco",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Septembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const MonthWidget: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <Grid
          item
          sm={2}
          sx={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          Anterior
        </Grid>
        <Grid item sm={8}>
          <Grid
            container
            sx={{
              width: "100%",
              textAlign: "center",
              border: "solid 1px red",
              padding: "20px",
              overflow: "hidden",
            }}
            flexWrap="nowrap"
            justifyContent={"center"}
          >
            {months.map((item, index) => (
              <Grid
                key={index}
                item
                sx={{
                  margin: "0 20px",
                  padding: "0 20px",
                  border: "solid 1px blue",
                }}
              >
                <Typography>{item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          sm={2}
          sx={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          Próximo
        </Grid>
      </Grid>
    </Box>
  );
};

export default MonthWidget;
