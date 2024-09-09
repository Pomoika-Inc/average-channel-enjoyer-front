import * as Dialog from '@radix-ui/react-dialog';
import React, {useState} from 'react';
import css from "./Sidebar.module.css";
import SidebarIcon from "@/shared/ui/icons/SidebarIcon";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для управления открытием
    const [isClosing, setIsClosing] = useState(false); // Состояние для управления закрытием

    const handleOpen = () => {
        setIsOpen(true); // Открываем сайдбар
    };

    const handleClose = () => {
        setIsClosing(true); // Устанавливаем состояние закрытия
        setTimeout(() => {
            setIsClosing(false); // Сбрасываем состояние закрытия
            setIsOpen(false); // Закрываем сайдбар
        }, 200); // Время анимации закрытия (в мс)
    };

    const handleDialogChange = (open: boolean) => {
        if (!open) handleClose(); // Если диалог закрывается, запускаем handleClose
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={handleDialogChange}>
            <Dialog.Trigger asChild>
                <button className="button" onClick={handleOpen}><SidebarIcon/></button>
            </Dialog.Trigger>

            <Dialog.Overlay className={css.dialogOverlay}/>

            {isOpen && (
                <Dialog.Content
                    className={`${css.dialogContent} ${isClosing ? css.closing : ''}`} // Добавляем класс для анимации закрытия
                >
                    <Dialog.Close className={css.closeButton} onClick={handleClose}>
                        ✕
                    </Dialog.Close>
                    <div>
                        <h2>Sidebar Content</h2>
                        <p>This is the sidebar content.</p>
                    </div>
                </Dialog.Content>
            )}
        </Dialog.Root>
    );
};

export default Sidebar;
