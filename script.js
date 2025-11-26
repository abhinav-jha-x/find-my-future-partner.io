document.getElementById("calculateBtn").addEventListener("click", function () {

    let edu = parseInt(document.getElementById("education").value);
    let sal = parseInt(document.getElementById("salary").value);
    let per = parseInt(document.getElementById("personality").value);
    let look = parseInt(document.getElementById("looks").value);
    let job = parseInt(document.getElementById("job").value);

    let score = edu + sal + per + look + job;

    let type = "";

    if (score <= 30) type = "Simple, Sweet & Caring Partner 💗";
    else if (score <= 55) type = "Smart, Kind & Supportive Partner 💕";
    else if (score <= 75) type = "Successful, Attractive & Loyal Partner 💞";
    else type = "Luxury Lifestyle, Highly Attractive, Dream Partner ❤️🔥";

    localStorage.setItem("partnerScore", score);
    localStorage.setItem("partnerType", type);

    window.location.href = "result.html";
});
