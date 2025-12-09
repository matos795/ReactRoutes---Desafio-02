import { Outlet } from "react-router-dom";
import Filter from "../../../components/Filter";

export default function Products() {
    return(
        <>
            <main>
                <Filter />
                <Outlet />
            </main>
        </>
    );
}