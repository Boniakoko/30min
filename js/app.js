
document.getElementById("scrollBtn").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  
  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

 
  window.addEventListener("load", () => {
    const popup = document.getElementById("popup");
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 4000);
  });