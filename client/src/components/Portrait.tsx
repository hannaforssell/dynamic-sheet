import { Box } from "@mui/material";
import "../styles/Portrait.css";

interface IPortrait {
    imageLink: string;
}

export const Portrait = (props: IPortrait) => {
    return (
        <div
            className="relative bg-gray-800"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                maxWidth: "50%",
                maxHeight: "30%",
                paddingTop: "30px"
            }}
        >
            <div className="mid-border">
                <div className="inner-border">
                    <img className="corner-decoration corner-left-top" src="./images/portrait-corner.png"></img>
                    <img className="corner-decoration corner-right-top" src="./images/portrait-corner.png"></img>
                    <img className="corner-decoration corner-right-bottom" src="./images/portrait-corner.png"></img>
                    <img className="corner-decoration corner-left-bottom" src="./images/portrait-corner.png"></img>

                    <Box>
                        {props.imageLink && (
                            <img
                                src={props.imageLink}
                                loading="lazy"
                                style={{
                                    maxWidth: "100%"
                                }}
                            />
                        )}
                    </Box>
                </div>
            </div>
        </div>
    );
};
