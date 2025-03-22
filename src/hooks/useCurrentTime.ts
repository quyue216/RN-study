import { useEffect, useState } from "react";

// 获取当前时间hooks
export default function useCurrentTime() {
    // 获取当前时间格式化字符串
    const getCurTFormat = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}/${month}/${day} ${hours}:${minutes}`;
    };

    const [time, setCurrentTime] = useState(getCurTFormat());

    // 开启时间轮训定时器
    useEffect(() => {
        const intervalId = setInterval(() => {
            // 获取当前时间对象
            const timeText = getCurTFormat();

            // 更新文本对象
            setCurrentTime(timeText);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return time.split(" ");
}