import { Grid } from "@mui/material";
import Layout from "libs/Common/components/Layout";
import Table from "libs/Common/components/Table";
import React from "react";

const CacheFlowPage: React.FC = () => {
  return (
    <Layout titlePage="Fluxo de caixa">
      <Grid container sx={{ minHeight: "300px" }}>
        <Grid lg={12}>
          <Table />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CacheFlowPage;
