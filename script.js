const Accordians = document.querySelectorAll(".Accordian");
Accordians.forEach((Accordian) => {
  const icon = Accordian.querySelector(".icon");
  const answer = Accordian.querySelector(".answer");

  Accordian.addEventListener("click", () => {
    // Close all other accordions
    Accordians.forEach((otherAccordian) => {
      if (otherAccordian !== Accordian) {
        const otherIcon = otherAccordian.querySelector(".icon");
        const otherAnswer = otherAccordian.querySelector(".answer");
        otherIcon.classList.remove("active");
        otherAnswer.style.maxHeight = null;
      }
    });
    // Toggle the current accordion
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});