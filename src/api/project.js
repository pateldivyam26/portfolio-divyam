import portfolio from "../assets/projects/portfolio.jpg"
import chat from "../assets/projects/chat.png"
import crypto from "../assets/projects/crypto.png"
import hardware from "../assets/projects/hardware.png"
import covid from "../assets/projects/covid.png"
import flight from "../assets/projects/flight.png"

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    img: chat,
    title: "MERN CHAT APP",
    desc: "A Real-time chat application using MERN stack. Securely stores user details in an encrypted format in MongoDB.",
    tech: "MongoDB, Express.io, React.js, Node.js",
    demo: "https://react-chat-app-backend-r7fy.onrender.com/",
    source: "https://github.com/pateldivyam26/Chat-App",
  },
  {
    img: crypto,
    title: "CRYPTO TRACKER",
    desc: "Built with Next.js, providing real-time information about the top cryptocurrencies based on market capitalization.",
    tech: "Next.js, React.js",
    demo: "https://crypto-tracker-dp.vercel.app/",
    source: "https://github.com/pateldivyam26/Crypto-Tracker",
  },
  {
    img: hardware,
    title: "HARDWARE IMPLEMENTATION OF ML ALGORITHMS",
    desc: "Weather Prediction and Gesture Recognition on the Arduino Nano 33 BLE Sense board.",
    tech: "Machine Learning, Arduino",
    demo: "https://drive.google.com/file/d/1HxxrSk0Q1MwTzj_iJM1IMZxGmenIZ1pj/view?usp=sharing",
    source: "https://github.com/pateldivyam26/Hardware-Implementation-of-ML-Algorithms",
  },
  {
    img: covid,
    title: "COVID DETECTION USING X-RAY IMAGES",
    desc: "ML Model to predict COVID-19 using frontal chest X-Ray images.",
    tech: "Machine Learning, Deep Learning, Flask",
    demo: "https://github.com/sagnikghoshcr7/Breast-Cancer-Prediction/blob/master/model.ipynb",
    source: "https://github.com/sagnikghoshcr7/Breast-Cancer-Prediction",
  },
  {
    img: flight,
    title: "FLIGHT PRICE PREDICTION",
    desc: "Model to predict the flight prices using various machine learning algorithms.",
    tech: "ML, DL, Flask, HTML, CSS, JS",
    demo: "https://github.com/sagnikghoshcr7/Car-Price-Prediction/blob/master/Predicting%20used%20car%20prices.ipynb",
    source: "https://github.com/pateldivyam26/Flight-Price-Prediction",
  },
  {
    img: portfolio,
    title: "PORTFOLIO WEBSITE",
    desc: "Portfolio Website showing Education, Skills, Projects & Achievements.",
    tech: "React.js, Node.js",
    demo: "https://pateldivyam26.github.io/portfolio-dp/",
    source: "https://github.com/pateldivyam26/portfolio-dp",
  },
]
