const webSecurityQuestions = [
  {
    question: "What does XSS stand for in web security?",
    options: [
      "Cross-Site Scripting",
      "Extended Secure Socket",
      "External Site Spoofing",
      "Cross-Site Security",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which attack involves tricking a user into performing an action they didn't intend?",
    options: ["CSRF", "XSS", "SQL Injection", "Brute Force"],
    correctAnswer: 0,
  },
  {
    question: "What does SQL Injection target?",
    options: ["Database queries", "File systems", "Session tokens", "Images"],
    correctAnswer: 0,
  },
  {
    question: "Which HTTP header helps prevent XSS attacks?",
    options: [
      "Content-Security-Policy",
      "Access-Control-Allow-Origin",
      "Set-Cookie",
      "Accept-Encoding",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is a common tool for intercepting HTTP traffic?",
    options: ["Burp Suite", "Node.js", "MongoDB", "Visual Studio Code"],
    correctAnswer: 0,
  },
  {
    question: "Which is a strong way to store user passwords?",
    options: ["Plaintext", "MD5 hash", "SHA-1", "bcrypt hash"],
    correctAnswer: 3,
  },
  {
    question: "Which protocol is secure for web traffic?",
    options: ["FTP", "HTTP", "SMTP", "HTTPS"],
    correctAnswer: 3,
  },
  {
    question: "Which attack tries every possible password combination?",
    options: ["Phishing", "Brute Force", "CSRF", "MITM"],
    correctAnswer: 1,
  },
  {
    question: "What is the main goal of HTTPS?",
    options: [
      "Faster browsing",
      "Server optimization",
      "Secure communication",
      "Cloud storage",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is NOT a form of social engineering?",
    options: ["Phishing", "Pretexting", "SQL Injection", "Baiting"],
    correctAnswer: 2,
  },
  {
    question: "Which is used to identify a session uniquely?",
    options: ["Session token", "Email", "Username", "Password"],
    correctAnswer: 0,
  },
  {
    question: "What is CORS used for?",
    options: [
      "To allow cross-origin requests",
      "To encrypt data",
      "To validate tokens",
      "To store cookies",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the risk of storing tokens in localStorage?",
    options: ["Poor UX", "XSS attacks", "Slow app", "Too much memory usage"],
    correctAnswer: 1,
  },
  {
    question: "What is the result of an open redirect vulnerability?",
    options: [
      "User is redirected to malicious sites",
      "System crash",
      "Database exposure",
      "Access denial",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does the `Secure` flag in cookies do?",
    options: [
      "Encrypt the cookie",
      "Allow access to client-side JS",
      "Send only over HTTPS",
      "Block access from subdomains",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does the `HttpOnly` flag in cookies prevent?",
    options: [
      "Cross-domain requests",
      "Browser caching",
      "JavaScript access",
      "HTTPS enforcement",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is a subdomain takeover?",
    options: [
      "When unused subdomains are claimed by attackers",
      "Overloading of DNS servers",
      "Redirecting all domains to main",
      "Cloning the main domain",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which tool can scan your website for security issues?",
    options: ["Nmap", "Burp Suite", "Notepad", "Postman"],
    correctAnswer: 1,
  },
  {
    question: "Which HTTP method is typically vulnerable in CSRF attacks?",
    options: ["GET", "DELETE", "POST", "OPTIONS"],
    correctAnswer: 2,
  },
  {
    question: "How can CSRF be mitigated?",
    options: [
      "Using bcrypt",
      "Using tokens",
      "Setting user-agent",
      "Encrypting passwords",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is a common sign of a phishing attack?",
    options: [
      "Frequent software updates",
      "Strong passwords",
      "Unexpected emails asking for sensitive info",
      "Fast internet speed",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which one is a good practice for password storage?",
    options: [
      "Using cookies",
      "Salting and hashing",
      "Encrypting with SSL",
      "Storing in plain text",
    ],
    correctAnswer: 1,
  },
  {
    question: "How does a firewall contribute to security?",
    options: [
      "Deleting logs",
      "Compressing data",
      "By making connections faster",
      "By blocking unauthorized access",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which HTTP header prevents content from being embedded into other sites?",
    options: [
      "Content-Type",
      "X-Frame-Options",
      "Strict-Transport-Security",
      "X-Powered-By",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of input validation?",
    options: [
      "To prevent malicious input",
      "To store large files",
      "To enhance UI",
      "To enable XSS",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is a Zero-Day vulnerability?",
    options: [
      "An antivirus update",
      "A software release note",
      "A DoS attack",
      "An unpatched flaw exploited before discovery",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which of the following is most vulnerable to clickjacking?",
    options: ["HTML forms", "iframes", "Cookies", "Meta tags"],
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following helps protect against brute force login attempts?",
    options: [
      "All of the above",
      "Account lockout",
      "Rate limiting",
      "CAPTCHA",
    ],
    correctAnswer: 0,
  },
  {
    question: "How are JSON Web Tokens (JWTs) commonly used?",
    options: [
      "File encryption",
      "Server hosting",
      "Session authentication",
      "Image loading",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the risk of using outdated libraries?",
    options: [
      "Stronger hashing",
      "Security vulnerabilities",
      "Faster execution",
      "Improved logging",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which port is HTTPS commonly served over?",
    options: ["22", "443", "21", "80"],
    correctAnswer: 1,
  },
  {
    question: "What does HSTS stand for?",
    options: [
      "HTTP Strict Transport Security",
      "Hyper Secure Transfer System",
      "Hidden Security Transport Setup",
      "Host Secure Transport Strategy",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which is a key feature of OAuth2?",
    options: [
      "Token-based authorization",
      "Password encryption",
      "HTML sanitization",
      "SQL access",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the main purpose of a CAPTCHA?",
    options: [
      "Validate sessions",
      "Encrypt messages",
      "Prevent bots",
      "Reduce latency",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is a malicious redirect?",
    options: [
      "Resetting DNS",
      "Changing IP addresses",
      "Improving SEO ranking",
      "Forcing users to a harmful site",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the danger of allowing file uploads?",
    options: [
      "HTML glitches",
      "Executable malware uploads",
      "UI bugs",
      "Slow performance",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which is a safe way to handle file uploads?",
    options: [
      "User renaming",
      "Allow .exe",
      "MIME type checking",
      "No validation",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the role of penetration testing?",
    options: [
      "To identify vulnerabilities",
      "To manage APIs",
      "To create UI layouts",
      "To write unit tests",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of these should NOT be hardcoded in your frontend app?",
    options: ["API keys", "CSS classes", "Component names", "Environment URLs"],
    correctAnswer: 0,
  },
  {
    question: "How can DNS spoofing be mitigated?",
    options: ["REST API", "JWT", "DNSSEC", "Firewall"],
    correctAnswer: 2,
  },
  {
    question: "Which role does SameSite cookies help with?",
    options: [
      "Mitigating CSRF",
      "Encrypting data",
      "Improving SEO",
      "Session tracking",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of rate limiting?",
    options: [
      "To increase bandwidth",
      "To reduce repeated requests",
      "To reduce latency",
      "To improve animations",
    ],
    correctAnswer: 1,
  },
  {
    question: "Why is it dangerous to reflect user input in HTML?",
    options: [
      "It allows XSS",
      "It logs out the user",
      "It slows down the page",
      "It deletes cookies",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which one is a client-side vulnerability?",
    options: ["CSRF", "SQLi", "MITM", "XSS"],
    correctAnswer: 3,
  },
  {
    question: "What is the risk of exposing stack traces in production?",
    options: [
      "It improves error readability",
      "It reveals sensitive server logic",
      "It increases cache size",
      "It helps UX design",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which tool is commonly used for SQL Injection testing?",
    options: ["jwt.io", "sqlmap", "npm", "docker"],
    correctAnswer: 1,
  },
  {
    question: "Why is role-based access control important?",
    options: [
      "To log traffic",
      "To limit what users can access",
      "To enhance animations",
      "To speed up requests",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which one is a secure cookie setting?",
    options: [
      "None; Path=/admin",
      "Public; Cacheable",
      "Secure; HttpOnly; SameSite=Strict",
      "AllowAll; Domain=localhost",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which OWASP Top 10 category does XSS fall under?",
    options: [
      "Injection",
      "Insecure Logging",
      "Sensitive Data Exposure",
      "Broken Auth",
    ],
    correctAnswer: 0,
  },
  {
    question: "How to prevent XSS in React apps?",
    options: [
      "Avoid `dangerouslySetInnerHTML`",
      "Encode routes",
      "Minify CSS",
      "Use cookies",
    ],
    correctAnswer: 0,
  },
];
export default webSecurityQuestions;
