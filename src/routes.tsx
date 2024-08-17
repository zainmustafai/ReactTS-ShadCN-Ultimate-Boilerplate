import type React from "react";
import RootLayout from "./Layouts/RootLayout";

interface RouteObject {
    path: string;
    element: React.ReactNode;
    children?: RouteObject[];
}

export const routes : RouteObject[] = [{
    path: "/",
    element: <RootLayout/>,
}];