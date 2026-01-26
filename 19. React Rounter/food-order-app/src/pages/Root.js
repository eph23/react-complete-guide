import { Outlet } from "react-router-dom";
import MinNavigation from "../components/MinNavigation";
import classes from "./Root.module.css";

function RootLayout() {
    return (
        <>
            <MinNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
