// ===== Category List =====
export const categories = ["All", "AI", "Web", "Mobile"];

// ===== Projects Data =====
const portfolioData = [
  {
    id: 1,
    title: "Plant Sound Classification",
    category: "AI",
    description:
      "โมเดล Deep Learning สำหรับจำแนกเสียงพืช (Dry / Water) โดยใช้ CNN + Spectrogram",
    image: "/src/assets/ images/plant_ai.png",
    view: "https://huggingface.co/spaces/NonSittinon/plant_sounds_cnn_ai",
  },
  {
    id: 2,
    title: "Weather App",
    category: "Web",
    description:
      "เว็บแอปแสดงสภาพอากาศแบบเรียลไทม์ พร้อมระบบพยากรณ์อากาศล่วงหน้า 5 วัน",
    image: "src/assets/ images/weather-app.png",
    view: "https://my-weather-app-part1.netlify.app/",
  },
  {
    id: 3,
    title: "My To-Do List",
    category: "Web",
    description:
      "เว็บไซต์ ช่วยจัดการรายการสิ่งที่ต้องทำ (To-Do) UI เรียบง่าย, แก้ไขรายการ inline, โครงสร้าง Component ชัดเจน",
    image: "src/assets/ images/To_do_list.png",
    view: "https://verdant-kashata-9af56b.netlify.app/",
  },
  {
    id: 4,
    title: "AI Chatbot",
    category: "AI",
    description:
      "แชทบอท NLP สำหรับตอบคำถามทั่วไป พัฒนาโดยใช้ PyTorch และ Transformers",
    image: "src/assets/ images/chatbot.png",
    view: "https://github.com/username/ai-chatbot",
  },
  {
    id: 5,
    title: "Mobile Finance Tracker",
    category: "Mobile",
    description:
      "แอปพลิเคชันติดตามรายรับรายจ่ายบนมือถือ พัฒนาโดยใช้ React Native",
    image: "src/assets/ images/Mobile Finance Tracker.png",
    view: "https://github.com/username/mobile-finance-tracker",
  },
];

export default portfolioData;

// ===== Contact Information =====
export const contactInfo = {
  email: "aprilnontest@gmail.com.com",
  phone: "064 940 6377",
  address: "123 Coding Lane, Bangkok, Thailand",
};

// ===== Social Media Links =====
export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/"},
  { name: "GitHub", url: "https://github.com/ENGCE301-1-68"},
  { name: "Twitter", url: "https://twitter.com/"},
];