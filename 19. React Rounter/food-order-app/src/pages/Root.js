import { Outlet } from "react-router-dom";
import MinNavigation from "../components/MinNavigation";

function RootLayout() {
    return (
        <>
            <MinNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
