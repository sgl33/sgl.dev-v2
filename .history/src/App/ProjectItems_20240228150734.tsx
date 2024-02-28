
// Thumbnails
import thumbnails_template from '../images/thumbnails/thumbnails_template.png';
import in_progress_thumbnail from '../images/thumbnails/in_progress.png';
import hexagon_defense_thumbnail from '../images/thumbnails/hexagon_defense.png';
import dpm_safesteps_thumbnail from '../images/thumbnails/dpm_safesteps.jpg';
import custom_dashboard_v2_thumbnail from '../images/thumbnails/custom_dashboard_v2.jpg';
import sam_thumbnail from '../images/thumbnails/sam.png';

// Platform Icons
import nx_icon from '../icons/nintendo_switch_black.png';
import android_icon from '../icons/android_black.png';
import apple_icon from '../icons/apple_black.png';
import web_icon from '../icons/web_black.png';
import robot_icon from '../icons/robot_black.png';

// Tool Icons
import unity_icon from '../icons/unity_black.png';
import csharp_icon from '../icons/csharp_icon.png';
import swift_icon from '../icons/swift_icon.png';
import firebase_icon from '../icons/firebase_icon.png';
import react_icon from '../icons/react_icon.png';
import js_icon from '../icons/js_icon.png';
import ts_icon from '../icons/ts_icon.png';
import node_icon from '../icons/node_icon.png';
import arduino_icon from '../icons/arduino_icon.png';
import android_studio_icon from '../icons/android_studio_logo.png';

const projectItems = {
    // Route Recommendation
    route_recommendation: {
        name: "DPM Route Recommendation",
        description: "Cross-platform mobile app that guides users through \"less stressful\" routes, aimed to improve safety of elderly people.",
        thumbnail: in_progress_thumbnail,
        project_types: ["Work Project", "Mobile App"],
        finished_date: "In Progress",
        platform_icons: [apple_icon, android_icon],
        tool_icons: [react_icon, ts_icon],
        platform_tools_text: "iOS, Android | React Native, TypeScript",
        links: [
            {
                name: "Research",
                url: "https://dpm.engin.umich.edu/research/"
            }
        ]
    },
    // DPM SafeSteps
    dpm_safesteps: {
        name: "DPM SafeSteps",
        description: "Data collection iOS app for IMU sensor data collection and route guidance. For fall risk monitoring research project.",
        thumbnail: dpm_safesteps_thumbnail,
        project_types: ["Work Project", "Native iOS App"],
        finished_date: "Jan 2024",
        platform_icons: [apple_icon],
        tool_icons: [swift_icon, node_icon, firebase_icon],
        platform_tools_text: "iOS | Swift, Node.js, Firebase",
        links: [
            {
                name: "Slideshow",
                url: "https://docs.google.com/presentation/d/1Trs3O5T9uqzC4Lml_6TYku27J_gyAMN-YCW6oCApIps/edit?usp=sharing"
            }
        ]
    },
    // Fatigue Monitoring
    dpm_safeconnect: {
        name: "DPM SafeConnect",
        description: "iOS app to calculate and record fatigue levels using heart rate + web dashboard to monitor fatigue levels + server to handle remote push notifications, aimed to improve construction worker safety.",
        thumbnail: in_progress_thumbnail,
        project_types: ["Work Project", "Multiple Apps"],
        finished_date: "In Progress",
        platform_icons: [apple_icon, web_icon],
        tool_icons: [swift_icon, react_icon, js_icon, node_icon, firebase_icon],
        platform_tools_text: "iOS, Web | Swift, React, JavaScript, Node.js, Firebase",
        links: [
            {
                name: "Research",
                url: "https://dpm.engin.umich.edu/research/"
            }
        ]
    },
    sam: {
        name: "Sauce Applicator Machine (SAM)",
        description: "",
        thumbnail: sam_thumbnail,
        project_types: ["Group Project", "Robot"],
        finished_date: "Dec 2022",
        platform_icons: [robot_icon, android_icon],
        tool_icons: [csharp_icon],
    }
    // Custom Dashboard v2
    custom_dashboard_v2: {
        name: "Custom Dashboard v2",
        description: "Web app that shows calendar events, weather, current playing on Spotify, travel times, and more. Used as a \"smart mirror\" on an Android tablet.",
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
            },
            {
                name: "Screenshot",
                url: "https://drive.google.com/file/d/1HoxSKW4YHSKHKmsqEHdlqTxwwfVxdkW7/view?usp=sharing"
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