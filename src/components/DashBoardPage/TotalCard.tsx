import {ReactNode} from "react";

interface TotalCardProps {
    children?: ReactNode;
    title: string;
    value: number;
}

export default function TotalCard({children, title, value}: TotalCardProps) {
    return (
        <div className="total-card">
            <div className="total-card__icon">{children}</div>
            <p className="total-card__title">{title}</p>
            <p className="total-card__value">${value}</p>
        </div>
    );
}