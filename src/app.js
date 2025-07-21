import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.io'];

  const domainList = document.getElementById("domain-list");

  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        extensions.forEach(ext => {
          let domain = `${p}${a}${n}${ext}`;

          // Create list item
          let listItem = document.createElement("li");
          listItem.className = "list-group-item bg-light text-start";

          // Create clickable link
          let link = document.createElement("a");
          link.href = "https://" + domain;
          link.target = "_blank"; // opens in new tab
          link.textContent = domain;
          link.className = "text-decoration-none text-primary fw-bold";

          // Add link to list item, then to the list
          listItem.appendChild(link);
          domainList.appendChild(listItem);
        });
      });
    });
  });
};
