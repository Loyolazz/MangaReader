import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import StackMain from "./stacks/stackMain";

export function Router() {
    return (
        <NavigationContainer>
            <StackMain />
        </NavigationContainer>
    )
}
