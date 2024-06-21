import { Outlet } from "react-router-dom";

export function Default() {
    return (
        <>
        <header>
            <h2>Click Travel</h2>
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}