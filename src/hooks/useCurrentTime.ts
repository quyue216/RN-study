import { useEffect, useState } from "react";
import { getCurTFormat } from "../utils/tools";
// 获取当前时间hooks
export default function useCurrentTime() {

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