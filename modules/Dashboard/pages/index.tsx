import { Box, Grid, Typography } from "@mui/material";
import Pie from "modules/Chart/components/Pie";
import Layout from "../../Common/components/Layout";
import PaperInfo from "../../Common/components/PaperInfo";

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
      <Grid
        container
        sx={{ padding: "35px 10px" }}
        justifyContent={"space-around"}
      >
        <Grid item lg={4}>
          <Typography>Gastos por categoria</Typography>
          <Box sx={{ maxWidth: "360px" }}>
            <Pie />
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Typography>Carteira</Typography>
          <Box sx={{ maxWidth: "360px" }}>
            <Pie />
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Typography>Entradas</Typography>
          <Box sx={{ maxWidth: "360px" }}>
            <Pie />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DashboardPage;
