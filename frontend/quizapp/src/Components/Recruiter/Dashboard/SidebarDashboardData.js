import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AllInboxIcon from "@mui/icons-material/AllInbox";
export const SidebarDashboardData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/recruiter/dashboard/home",
  },
  {
    title: "Create Job",
    icon: <AddIcon />,
    link: "/recruiter/dashboard/create_job",
  },
  {
    title: "All Jobs",
    icon: <AllInboxIcon />,
    link: "/recruiter/dashboard/alljobs",
  },
  {
    title: "My Jobs",
    icon: <WorkIcon />,
    link: "/recruiter/dashboard/myjobs",
  },
  {
    title: "Account",
    icon: <AccountCircleIcon />,
    link: "/recruiter/dashboard/account",
  },
  {
    title: "Log Out",
    icon: <LogoutIcon />,
    link: "/recruiter/create_job",
  },
];
