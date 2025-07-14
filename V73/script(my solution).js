function createCard(title, cName, views, monthsOld, thumbnail){
    // Finish this function
    document.querySelector(".title").innerText = title;
    document.querySelector(".cName").innerText = cName;
    document.querySelector(".views").innerText = views;
    document.querySelector(".monthsOld").innerText = monthsOld;
    document.querySelector(".thumbnail img").src = thumbnail;
}


createCard(
    "Introduction to Backend | Sigma Web Dev video #2", 
    "CodeWithHarry", 
    "56000", 
    "12", 
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
)