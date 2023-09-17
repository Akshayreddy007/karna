import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TootPitOverlay = ({
    placement,
    children,
    message,
    id,
}) => {
    return <OverlayTrigger
        placement={placement}
        overlay={<Tooltip className="in" id={id}>
            {message}
        </Tooltip>}
    >
        {children}
    </OverlayTrigger>
}

export default TootPitOverlay;