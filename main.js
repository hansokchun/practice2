const answers = [
    "물론입니다.",
    "확실합니다.",
    "제 생각에는 그렇습니다.",
    "틀림없이 그렇습니다.",
    "네, 그렇습니다.",
    "아마도 그럴 것입니다.",
    "좋은 징조입니다.",
    "지금은 예측하기 어렵습니다.",
    "나중에 다시 시도하세요.",
    "지금은 말할 수 없습니다.",
    "집중해서 다시 물어보세요.",
    "제 대답은 '아니요'입니다.",
    "아닙니다.",
    "그렇게 생각하지 않습니다.",
    "매우 의심스럽습니다."
];

const answerButton = document.getElementById("answer-button");
const answerDisplay = document.getElementById("answer-display");

answerButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
});
