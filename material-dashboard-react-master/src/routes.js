/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import CourseDashboardPage from "views/Dashboard/CourseDashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import FeedbackForm from "components/form/FeedBackForm"
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import Search from "views/Search/Search.js";
import FAQ from "views/UserProfile/FAQ"
import Instructions from "views/UserProfile/Instructions"
// import Feedback from "views/form/FeedbackForm.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		rtlName: "لوحة القيادة",
		icon: Dashboard,
		component: DashboardPage,
		layout: "/admin"
	},
	{
		path: "/cdashboard",
		name: "Course Dashboard",
		rtlName: "لوحة القيادة",
		icon: Dashboard,
		component: CourseDashboardPage,
		layout: "/admin"
	},

	{
		path: "/feedbackforms",
		name: "Feedback Form",
		rtlName: "ملف تعريفي للمستخدم",
		icon: Person,
		component: FeedbackForm,
		layout: "/admin"
	},
	{
		path: "/search",
		name: "Search Courses",
		rtlName: "ملف تعريفي للمستخدم",
		icon: Person,
		component: Search,
		layout: "/admin"
	},
	{
		path: "/faq",
		name: "Frequently Asked Questions",
		rtlName: "ملف تعريفي للمستخدم",
		icon: Person,
		component: FAQ,
		layout: "/admin"
	},
	{
		path: "/instructions",
		name: "Instructions",
		rtlName: "ملف تعريفي للمستخدم",
		icon: Person,
		component: Instructions,
		layout: "/admin"
	}
];

export default dashboardRoutes;
