import { Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { JSX } from "react";

export interface IPos {
    x: number;
    y: number;
}

interface IContextMenu {
    position: IPos | null;
    jsxMenuItems?: JSX.Element[];
    menuItems: Map<string, (() => void) | null>;
    onClose(): void;
}

export const ContextMenu = (props: IContextMenu) => {
    return (
        <Menu
            open={props.position !== null}
            onClose={props.onClose}
            anchorReference="anchorPosition"
            anchorPosition={props.position !== null ? { top: props.position.y - 6, left: props.position.x - 2 } : undefined}
        >
            {props.jsxMenuItems?.map((mI) => mI)}
            {(props.jsxMenuItems?.length ?? 0) > 0 && <Divider />}
            {Array.from(props.menuItems).map(([name, func], i) =>
                func ? (
                    <MenuItem
                        key={i}
                        onClick={() => {
                            props.onClose();
                            func();
                        }}
                    >
                        {name}
                    </MenuItem>
                ) : (
                    <Divider key={i} />
                )
            )}
        </Menu>
    );
};
