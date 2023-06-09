export declare enum NotificationPositions {
    TopCenter = "top-center",
    TopLeft = "top-left",
    TopRight = "top-right"
}
export declare enum NoticationTypes {
    Success = "success",
    Error = "error",
    Info = "info"
}
export interface NotificationProps {
    position: NotificationPositions;
    type: NoticationTypes;
    title: string;
    message: string;
    onClose: () => void;
    autoCloseDelay?: number;
    closeManually?: boolean;
}
