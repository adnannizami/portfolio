import { AfterViewInit, Component } from "@angular/core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFile = faFile;

  constructor() {}

  ngAfterViewInit() {
    let skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("skills-show");
        }
      });
    });

    let skills = document.querySelectorAll(".skills-hidden");
    skills.forEach((element) => skillsObserver.observe(element));

    let projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-show");
        }
      });
    });

    let projects = document.querySelectorAll(".project-hidden");
    projects.forEach((element) => projectObserver.observe(element));
  }

  scrollIntoView(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
