import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="d-flex justify-content-center footer">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a
            class="nav-link footer_item"
            target="_blank"
            href="https://linkedin.com/in/josieldelgadillo"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link footer_item"
            target="_blank"
            href="https://github.com/Josiel1998/"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link footer_item" href="/portfolio/#/chat">
            <FontAwesomeIcon icon={faComment} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
}
