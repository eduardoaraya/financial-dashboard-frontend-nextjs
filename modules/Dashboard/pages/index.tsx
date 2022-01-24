import Layout from "../../Common/components/Layout";
import React from "react";
import PaperInfo from "../../Common/components/PaperInfo";
import { Grid } from "@mui/material";

export interface DashboardPageProps {}

export const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <Layout titlePage="Welcome, Danyel">
      <Grid container flexDirection={"row"} gap={"10px"} flexWrap={"nowrap"}>
        <Grid item lg={3} flex={1}>
          <PaperInfo title="Entrada" value="R$ 1.350,00" />
        </Grid>
        <Grid item lg={3} flex={1}>
          <PaperInfo title="Saída" value="R$ 1.000,00" />
        </Grid>
        <Grid item lg={3} flex={1}>
          <PaperInfo title="Balanço" value="R$ 350,00" />
        </Grid>
        <Grid item lg={3} flex={1}>
          <PaperInfo title="Investimentos" value="R$ 1.000.000,00" />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DashboardPage;
