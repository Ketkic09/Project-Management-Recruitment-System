import { Create } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateJob from "./Components/Recruiter/CreateJob";
import AccountsDashboard from "./Components/Recruiter/Dashboard/AccountsDashboard";
import AllJobsDashboard from "./Components/Recruiter/Dashboard/AllJobsDashboard";
import AppliedStudentsDashboard from "./Components/Recruiter/Dashboard/AppliedStudentsDashboard";
import EditJob from "./Components/Recruiter/Dashboard/EditJob";
import FullProfileStudent from "./Components/Recruiter/Dashboard/FullProfileStudent";
import HomeDashboard from "./Components/Recruiter/Dashboard/HomeDashboard";
import Login from "./Components/Recruiter/Dashboard/Login";
import MyJobsDashboard from "./Components/Recruiter/Dashboard/MyJobsDashboard";
import Signup from "./Components/Recruiter/Dashboard/Signup";
import Opportunity from "./Components/Recruiter/FormSections/Opportunity";
import Game from "./Components/Recruiter/Game";
import GameEnd from "./Components/Recruiter/GameEnd";
import GameHome from "./Components/Recruiter/GameHome";
import Jobs from "./Components/Recruiter/Jobs";
import OpenJob from "./Components/Recruiter/OpenJob";
import RecruiterDashboard from "./Components/Recruiter/RecruiterDashboard";
import ViewJob from "./Components/Recruiter/ViewJob";
import Home from "./Home";
import Teacher from "./Teacher";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/teacher">
          <Teacher />
        </Route>
        <Route path="/recruiter/create_job">
          <CreateJob />
        </Route>

        <Route path="/recruiter/op">
          <Opportunity />
        </Route>
        <Route path="/viewjob">
          <Jobs />
        </Route>
        <Route path="/viewjob/openjob">
          <OpenJob />
        </Route>
        <Route path="/recruiter/dashboard">
          <RecruiterDashboard />
        </Route>
        <Route path="/recruiter/dashboard/home">
          <HomeDashboard />
        </Route>
        <Route path="/recruiter/dashboard/create_job">
          <CreateJob />
        </Route>
        <Route
          path="/recruiter/dashboard/alljobs"
          component={AllJobsDashboard}
        />
        <Route path="/recruiter/dashboard/myjobs" component={MyJobsDashboard} />
        <Route
          path="/recruiter/dashboard/account/"
          component={AccountsDashboard}
        />
        <Route path="/recruiter/dashboard/signup/" component={Signup} />
        <Route path="/recruiter/dashboard/login/" component={Login} />
        <Route
          path="/recruiter/dashboard/alljobs/fullview"
          component={OpenJob}
        />
        <Route
          path="/recruiter/dashboard/alljobs/fullview/applied_students"
          component={OpenJob}
        />

        <Route
          exact
          path="/applied_students/fullprofile/:id/:jobid"
          component={FullProfileStudent}
        />
        <Route path="/dashboard/job/editjob/:id" component={EditJob} />

        <Route path="/games">
          <Game />
        </Route>
        <Route path="/games/gamehome">
          <GameHome />
        </Route>
        <Route path="/games/gameend">
          <GameEnd />
        </Route>
        <Route path="/jobapply">
          <AppliedStudentsDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
