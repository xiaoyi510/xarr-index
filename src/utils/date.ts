export function formatTimestamp(timestamp: number) {
  if (timestamp <= 0) {
    return "-";
  }
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  const formattedTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  return formattedTime;
}

// 秒转时分秒
export function formatSecondToDateStr(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  let str = "";
  if (hours > 0) {
    str += `${hours}小时 `;
  }

  if (minutes > 0 || hours > 0) {
    str += `${minutes}分 `;
  }
  if (remainingSeconds > 0 || hours > 0 || minutes > 0) {
    str += `${remainingSeconds}秒`;
  }
  return str;
}
