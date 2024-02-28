
// Thumbnails
import thumbnails_template from '../images/thumbnails/thumbnails_template.png';
import in_progress_thumbnail from '../images/thumbnails/in_progress.png';
import hexagon_defense_thumbnail from '../images/thumbnails/hexagon_defense.png';
import dpm_safesteps_thumbnail from '../images/thumbnails/dpm_safesteps.jpg';
import custom_dashboard_v2_thumbnail from '../images/thumbnails/custom_dashboard_v2.png';

// Platform Icons
import nx_icon from '../icons/nintendo_switch_black.png';
import android_icon from '../icons/android_black.png';
import apple_icon from '../icons/apple_black.png';
import web_icon from '../icons/web_black.png';

// Tool Icons
import unity_icon from '../icons/unity_black.png';
import csharp_icon from '../icons/csharp_icon.png';
import swift_icon from '../icons/swift_icon.png';
import firebase_icon from '../icons/firebase_icon.png';
import react_icon from '../icons/react_icon.png';
import js_icon from '../icons/js_icon.png';

const projectItems = {
    // DPM SafeSteps
    dpm_safesteps: {
        name: "DPM SafeSteps",
        description: "Data collection iOS app for IMU sensor data collection and route guidance. For fall risk monitoring research project.",
        thumbnail: dpm_safesteps_thumbnail,
        project_types: ["Work Project", "Native iOS App"],
        finished_date: "Jan 2024",
        platform_icons: [apple_icon],
        tool_icons: [swift_icon, firebase_icon],
        platform_tools_text: "iOS | Swift, Firebase",
        links: [
            {
                name: "Slideshow",
                url: ""
            }
        ]
    },
    // Custom Dashboard v2
    custom_dashboard_v2: {
        name: "Custom Dashboard v2",
        description: "Enter description here.",
        thumbnail: custom_dashboard_v2_thumbnail,
        project_types: ["Personal Project", "Web App"],
        finished_date: "Nov 2023",
        platform_icons: [web_icon],
        tool_icons: [react_icon, js_icon],
        platform_tools_text: "Web | React, JavaScript",
        links: [
            {
                name: "Demo",
                url: "https://sgl.dev/apps/dashboard/build/"
            }
        ]
    },
    // Hexagon Defense
    hexagon_defense: {
        name: "Hexagon Defense",
        description: "Innovative 2D arcade shooter game published on Nintendo Switch and Android.",
        thumbnail: hexagon_defense_thumbnail,
        project_types: ["Personal Project", "Video Game"],
        finished_date: "May 2021",
        platform_icons: [nx_icon, android_icon],
        tool_icons: [unity_icon, csharp_icon],
        platform_tools_text: "Nintendo Switch, Android | Unity, C#",
        links: [
            {
                name: "Nintendo eShop",
                url: "https://www.nintendo.com/games/detail/hexagon-defense-switch/"
            },
            {
                name: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.NetherYoshi.HexagonDefense&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            }
        ]
    },
};

export default projectItems;