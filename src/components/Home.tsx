import React from "react";
import SiteMap from "./home/SiteMap";
import MaintenanceChart from "./home/MaintenanceChart";
import MaintenancePerson from "./home/MaintenancePerson";
import UsageChart from "./home/UsageChart";
import UnhandledMaintenance from "./home/UnhandledMaintenance";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import Sidebar from "./Sidebar";
import Header from "./Header";


const Home = () => {
    return (
        <CssVarsProvider disableTransitionOnChange>
        <CssBaseline sx={{ body: { overflow: 'hidden' } }} />  
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, overflow: 'auto' }}> 
                <Box sx={{ height: '25%', width: '100%' }}> 
                    <SiteMap />
                </Box>
                <Box sx={{ height: '25%', width: '100%' }}>
                    <MaintenanceChart />
                    <MaintenancePerson />
                </Box>
                <Box sx={{ height: '25%', width: '100%' }}>
                    <UsageChart />
                </Box>
                <Box sx={{ height: '25%', width: '100%' }}>
                    <UnhandledMaintenance />
                </Box>
            </Box>
        </Box>
    </CssVarsProvider>
    );
};

export default Home;

