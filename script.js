
// Get HTML elements
const input = document.querySelector(".input-area input");
const sendButton = document.querySelector(".input-area button");
const chatArea = document.querySelector(".chat-area");


// Send message when button is clicked
sendButton.addEventListener("click", sendMessage);


// Send message when Enter key is pressed
input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Main function
function sendMessage() {

    const question = input.value.trim();

    // Don't send empty messages
    if (question === "") {
        return;
    }


    // Display user's message
    addMessage("You", question, "user-message");


    // Clear input box
    input.value = "";


    // Show typing message
    const typingMessage = addMessage(
        "GST Bot",
        "Typing...",
        "bot-message"
    );


    // Give bot response after a short delay
    setTimeout(function() {

        const answer = getGSTAnswer(question);

        typingMessage.querySelector("p").textContent = answer;

    }, 700);
}


// Function to add a message to chat
function addMessage(sender, message, className) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", className);


    const senderName = document.createElement("strong");

    senderName.textContent = sender;


    const messageText = document.createElement("p");

    messageText.textContent = message;


    messageDiv.appendChild(senderName);
    messageDiv.appendChild(messageText);


    chatArea.appendChild(messageDiv);


    // Automatically scroll to latest message
    chatArea.scrollTop = chatArea.scrollHeight;


    return messageDiv;
}


// GST response system
function getGSTAnswer(question) {

    const text = question.toLowerCase();


    // GST
    if (
        text.includes("what is gst") ||
        text.includes("gst kya hai") ||
        text.includes("gst meaning")
    ) {

        return "GST stands for Goods and Services Tax. It is an indirect tax on the supply of goods and services in India.";

    }


    // GSTIN
    if (
        text.includes("gstin") ||
        text.includes("gst number")
    ) {

        return "GSTIN stands for Goods and Services Tax Identification Number. It is a unique identification number assigned to a GST-registered taxpayer.";

    }


    // GST Registration
    if (
        text.includes("registration") ||
        text.includes("register for gst") ||
        text.includes("gst registration")
    ) {

        return "GST registration is the process through which an eligible business or taxpayer registers under GST. The applicable requirements depend on the nature and circumstances of the taxpayer.";

    }


    // GST Return
    if (
        text.includes("gst return") ||
        text.includes("return")
    ) {

        return "A GST return is a statement containing applicable details of a taxpayer's transactions, tax liability and other required information. The applicable return depends on the taxpayer and their circumstances.";

    }


    // Input Tax Credit
    if (
        text.includes("input tax credit") ||
        text.includes("itc")
    ) {

        return "Input Tax Credit, commonly called ITC, generally allows an eligible registered taxpayer to claim credit for eligible GST paid on business purchases, subject to applicable conditions and restrictions.";

    }


    // E-Way Bill
    if (
        text.includes("e-way") ||
        text.includes("eway") ||
        text.includes("e way bill")
    ) {

        return "An E-Way Bill is an electronic document used for the movement of goods when applicable under GST rules.";

    }


    // GST Invoice
    if (
        text.includes("invoice") ||
        text.includes("gst invoice")
    ) {

        return "A GST tax invoice generally contains details such as supplier information, invoice number and date, taxable value, applicable tax details and recipient information, as required by the applicable rules.";

    }


    // GST Rate
    if (
        text.includes("gst rate") ||
        text.includes("tax rate")
    ) {

        return "GST rates vary depending on the goods or services involved. For an actual transaction, the applicable current rate should be checked against the official GST rate information.";

    }

if (
    text.includes("gst full form") ||
    text.includes("full form of gst")
) {
    return "GST stands for Goods and Services Tax.";
}
if (
    text.includes("who introduced gst") ||
    text.includes("gst introduced")
) {
    return "GST was introduced in India on 1 July 2017 as a comprehensive indirect tax system.";
}
if (
    text.includes("types of gst") ||
    text.includes("gst types")
) {
    return "The main types of GST in India are CGST, SGST, IGST and UTGST.";
}
if (
    text.includes("cgst") ||
    text.includes("what is cgst")
) {
    return "CGST stands for Central Goods and Services Tax. It is levied by the Central Government on applicable intra-state supplies.";
}
if (
    text.includes("sgst") ||
    text.includes("what is sgst")
) {
    return "SGST stands for State Goods and Services Tax. It is levied by the State Government on applicable intra-state supplies.";
}
if (
    text.includes("igst") ||
    text.includes("what is igst")
) {
    return "IGST stands for Integrated Goods and Services Tax. It generally applies to inter-state supplies and certain other specified transactions.";
}
if (
    text.includes("utgst") ||
    text.includes("what is utgst")
) {
    return "UTGST stands for Union Territory Goods and Services Tax. It applies to applicable supplies within certain Union Territories.";
}
if (
    text.includes("gstin format") ||
    text.includes("gstin number format")
) {
    return "A GSTIN is a 15-character Goods and Services Tax Identification Number.";
}

    // Hello
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("namaste")
    ) {

        return "Hello! 👋 I am your GST Chatbot. You can ask me about GST, GSTIN, registration, returns, ITC, invoices or E-Way Bills.";

    }


    // Default response
    return "I can help with basic GST topics such as GST, GSTIN, GST registration, GST returns, Input Tax Credit, GST invoices and E-Way Bills. Please ask a specific question.";
}
const clearButton = document.getElementById("clear-chat");

clearButton.addEventListener("click", function() {

    chatArea.innerHTML = "";

    addMessage(
        "GST Bot",
        "Chat cleared. How can I help you with GST?",
        "bot-message"
    );

});
