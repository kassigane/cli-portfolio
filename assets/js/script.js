const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    '<span class="code">Profile Summary</span><br>Experienced Cybersecurity professional with a focus on the dynamic realms of cybersecurity, cloud computing, and network engineering. Driven by a passion for innovation and adept at navigating complex challenges within the cybersecurity landscape. I excel in identifying and analyzing potential security threats and vulnerabilities, offering proactive solutions to safeguard critical assets. My proactive approach and comprehensive skill set make me an asset to any organization seeking to fortify its cybersecurity posture. ',
  skills:
    '<span class="code">Skills</span><br>Vulnerability Assesment & Management | Ethical Hacking | Penetration Testing | Red Teaming | Offensive Security | Incident Response | Malware Analysis | Cloud Security | Threat Detection | Business Continuity Planning | SIEM | Endpoint Security | Encryption Algorithms | Secure Coding Practices | Security Policies & Compliance ',
  education:
    '<span class="code">Education</span><br>Bachelor of Science in Computer Science  <br> <i>University of Embu</i><br> Sep 2016 - Dec 2020 ',
  experience:'<span class="code"> Work Experience </span><br> Red Team Engineer | <i>HackerBro Technologies</i> Sep 2023 - Present<br> Court Assistant | <i>Judiciary of Kenya</i> June 2023 - Present<br> ICT Officer | <i>Embu County Government</i> April 2019 - Sep 2019<br>',
  certifications: 
    '<span class="code">Certifications</span><br> Fortinet Network Security Expert Level 3: Certified Associate | <i>Fortinet</i> <br> Oracle Cloud Infrastructure Certified Foundations Assocaite | <i>Oracle</i> <br> Scrum Fundamentals Certified | <i>SCRUMstudy</i> ',
  contact:
    "Click the links below to contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/benjamin-kassigane-031993161/' class='success link'>Linkedin</a>, <a href='mailto:kassigane@gmail.com' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
