import DashboardIcon from "@mui/icons-material/Dashboard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import LaunchIcon from "@mui/icons-material/Launch";

export const NavigatorItems: { title: string; icon: JSX.Element }[] = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Lançamento",
    icon: <LaunchIcon />,
  },
  {
    title: "Fluxo de Caixa",
    icon: <VisibilityIcon />,
  },
  {
    title: "Investimentos",
    icon: <ShowChartIcon />,
  },
  {
    title: "Metas",
    icon: <TrackChangesIcon />,
  },
];

export default NavigatorItems;
