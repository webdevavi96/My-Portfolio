import { useTheme } from "./ThemeProvider";

import NormalApp from "./Normal/App";
import Win95App from "./win95/App"

export default function ThemeRenderer() {
    const { theme } = useTheme();

    switch (theme) {
        case "win95":
            return <Win95App />;

        default:
            return <NormalApp />;
    }
}