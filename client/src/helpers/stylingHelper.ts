import { Theme, SxProps } from "@mui/material";

export const defaultStyle: SxProps<Theme> = {
    color: "rgba(255, 255, 255, 0.87)",
    fontFamily: "Roboto Mono, serif"
};

export const textToNode = (text: string, regex: RegExp, func: (match: string) => React.ReactNode): React.ReactNode[] => {
    const textArray = text.split(regex);
    const matches = text.match(regex);

    if (textArray.length <= 1 || !matches) {
        return [text];
    }

    const ret: React.ReactNode[] = [];
    for (let i = 0; i < textArray.length - 1; i++) {
        ret.push(textArray[i]);
        ret.push(func(matches[i]));
    }

    ret.push(textArray[textArray.length - 1]);

    return ret;
};

export const abilityDisplaySum = (value: number | null, showSign?: boolean): string => {
    let displaySum = "";
    if (value === null) {
        displaySum = "—";
    } else {
        if (value > 0 && showSign == true) {
            displaySum = "+" + Math.floor(value);
        } else {
            displaySum = Math.floor(value).toString();
        }
    }

    return displaySum;
};
