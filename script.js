function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "message user";
    userMessage.textContent = message;

    chat.appendChild(userMessage);

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        const aiMessage = document.createElement("div");

        aiMessage.className = "message ai";
        aiMessage.textContent = "Şimdilik gerçek yapay zekâya bağlı değilim 🤖 Ama yakında olacağım!";

        chat.appendChild(aiMessage);

        chat.scrollTop = chat.scrollHeight;
    }, 500);
}


document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
