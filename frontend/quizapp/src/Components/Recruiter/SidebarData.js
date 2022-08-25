import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CheckIcon from "@mui/icons-material/Check";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import WorkIcon from "@mui/icons-material/Work";
import PaidIcon from "@mui/icons-material/Paid";
import InfoIcon from "@mui/icons-material/Info";
export const SidebarData = [
  {
    title: "Opportunity Visibility",
    icon: <RemoveRedEyeIcon />,
    link: "/recruiter/create_job/opportunity",
  },
  {
    title: "Basic Details",
    icon: <LibraryBooksIcon />,
    link: "/recruiter/create_job/basic_details",
  },
  {
    title: "Registration & Eligibility",
    icon: <CheckIcon />,
    link: "/recruiter/create_job/eligibility",
  },
  {
    title: "Rounds",
    icon: <AlignHorizontalRightIcon />,
    link: "/recruiter/create_job/rounds",
  },
  {
    title: "Job Description",
    icon: <WorkIcon />,
    link: "/recruiter/create_job/job_description",
  },
  {
    title: "Stipend/Salary",
    icon: <PaidIcon />,
    link: "/recruiter/create_job/salary",
  },
  {
    title: "Additional Details",
    icon: <InfoIcon />,
    link: "/recruiter/create_job/additional_details",
  },
];
