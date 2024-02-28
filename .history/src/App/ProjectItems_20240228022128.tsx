import nx_icon from './icons/nintendo_switch_black.png';
import android_icon from './icons/android_black.png';
import apple_icon from './icons/apple_black.png';

import unity_icon from './icons/unity_black.png';
import csharp_icon from './icons/csharp_icon.png';

const projectItems = {
    // DPM SafeSteps
    dpm_safesteps: {
        name: "DPM SafeSteps",
        description: "Data collection iOS app for IMU data collection and route guidance. For fall risk monitoring research project.",
        project_types: ["Work Project", "Native iOS App"],
        finished_data: "Jan 2024",
        platforms: ["iOS"],
        platform_icons: [apple_icon],
        tools: ["Swift", "Firebase"],
        tool_icons: [swift_icon, firebase_icon],
    },

    // Hexagon Defense
    hexagon_defense: {
        name: "Hexagon Defense",
        description: "Innovative 2D arcade shooter game published on Nintendo Switch and Android.",
        project_types: ["Personal Project", "Video Game"],
        finished_date: "May 2021",
        platforms: ["Nintendo Switch", "Android"],
        platform_icons: [nx_icon, android_icon],
        tools: ["Unity", "C#"],
        tool_icons: [unity_icon, csharp_icon],
    },
};