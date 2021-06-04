import React from "react";
import { Card } from "react-bootstrap";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} ${
                isRed && "infoBox--red"
            }`}
        >
            <Card.Body>
                <h4 color="textSecondary" gutterBottom>
                    {title}
                </h4>
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
                    {cases}
                </h2>
                <h4 className="infoBox__total" color="textSecondary">
                    {total} Total
                </h4>
            </Card.Body>
        </Card>
    );
}

export default InfoBox;