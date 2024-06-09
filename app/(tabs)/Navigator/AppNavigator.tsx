import React from "react";
import {View} from 'react-native'
import HomePage from "@/app/Screens/Homepage";
import ScanPermission from "@/app/Screens/ScanPermission";

     const Pages = 
    [
       { name:"HomePage", component:HomePage},
       { name:'ScanPermission',component:ScanPermission}
    ];

    export default Pages;
