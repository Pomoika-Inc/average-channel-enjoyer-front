// telegram.d.ts
interface TelegramWebApp {
    sendData(data: string): void;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
