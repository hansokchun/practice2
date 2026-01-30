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
    "매우 의심스럽습니다.",
    "하늘의 별에게 물어보세요.",
    "고양이가 당신을 지켜보고 있습니다.",
    "냉장고를 열어보세요. 답은 그 안에.",
    "오늘은 치킨이 좋겠네요.",
    "질문이 이상한데요?",
    "춤을 춰보세요. 그러면 알게 될 겁니다.",
    "지금 창밖을 보세요.",
    "10년 후에 다시 생각해보세요.",
    "사실 당신은 답을 알고 있습니다.",
    "제가 그걸 어떻게 알겠어요?"
];

const answerButton = document.getElementById("answer-button");
const piggyBank = document.getElementById("piggy-bank");
const note = document.getElementById("note");
const answerDisplay = document.getElementById("answer-display");

answerButton.addEventListener("click", () => {
    // 1. Reset previous state
    piggyBank.classList.remove("shake");
    note.classList.remove("fall");
    note.style.display = "none";
    answerDisplay.textContent = "";

    // 2. Show piggy bank and shake it
    piggyBank.style.display = "block";
    piggyBank.classList.add("shake");

    // 3. Set a timer for the note to fall
    setTimeout(() => {
        // Hide piggy bank
        piggyBank.style.display = "none";
        piggyBank.classList.remove("shake");

        // Get a random answer
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        answerDisplay.textContent = randomAnswer;

        // Show and animate the note
        note.style.display = "block";
        note.classList.add("fall");

    }, 1000); // 1s for shake animation
});