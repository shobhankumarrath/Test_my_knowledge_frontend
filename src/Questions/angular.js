const angularQuestions = [
  {
    question: "What is the primary purpose of Angular?",
    options: [
      "To handle backend logic",
      "To build single-page client applications",
      "To write SQL queries",
      "To style HTML",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which command is used to create a new Angular project?",
    options: ["ng generate app", "ng new", "npm install angular", "ng init"],
    correctAnswer: 1,
  },
  {
    question: "Which directive is used for two-way data binding in Angular?",
    options: ["*ngBind", "[(ngModel)]", "[ngModel]", "*ngModel"],
    correctAnswer: 1,
  },
  {
    question: "Which file defines the root module in Angular?",
    options: ["main.ts", "app.module.ts", "index.html", "app.component.ts"],
    correctAnswer: 1,
  },
  {
    question:
      "Which lifecycle hook is called once the component is initialized?",
    options: [
      "ngAfterViewInit",
      "ngOnDestroy",
      "ngOnInit",
      "ngAfterContentInit",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does `*ngIf` do?",
    options: [
      "Loops over an array",
      "Adds a CSS class",
      "Adds an event listener",
      "Conditionally renders elements",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is used to define routing in Angular?",
    options: ["RoutesModule", "app.routes.ts", "RouterModule", "PathModule"],
    correctAnswer: 2,
  },
  {
    question: "How do you create a component in Angular?",
    options: [
      "ng generate component",
      "ng create component",
      "ng add component",
      "angular new component",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is a service in Angular used for?",
    options: [
      "UI styling",
      "Data sharing and business logic",
      "Event handling",
      "Animations",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which file contains the metadata for the Angular project?",
    options: [
      "tsconfig.json",
      "angular.json",
      "webpack.config.js",
      "package.json",
    ],
    correctAnswer: 1,
  },
  {
    question: "What decorator is used to define an Angular component?",
    options: ["@Directive", "@NgModule", "@Component", "@Injectable"],
    correctAnswer: 2,
  },
  {
    question: "Which syntax is correct for property binding?",
    options: [
      "(property)='value'",
      "[property]='value'",
      "{property}=value",
      "{{property}}",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which command is used to add Angular Material?",
    options: [
      "ng add @angular/material",
      "npm install material-ui",
      "ng new material",
      "angular add material",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which pipe is used to transform text to uppercase in Angular templates?",
    options: ["capitalize", "uppercase", "titlecase", "UpperPipe"],
    correctAnswer: 1,
  },
  {
    question: "How do you navigate programmatically in Angular?",
    options: [
      "location.href = 'url'",
      "window.location = 'url'",
      "this.router.navigate(['/path'])",
      "$route.go('/path')",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is `HttpClient` in Angular?",
    options: [
      "Routing service",
      "Form handler",
      "Service to make HTTP requests",
      "Testing utility",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which structural directive is used for looping?",
    options: ["*ngIf", "*ngLoop", "*ngRepeat", "*ngFor"],
    correctAnswer: 3,
  },
  {
    question: "Which module must be imported to use forms in Angular?",
    options: [
      "ReactiveFormsModule",
      "HttpModule",
      "RouterModule",
      "CommonModule",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the role of `ngOnDestroy()` lifecycle hook?",
    options: [
      "Run after content init",
      "Clean up before component is destroyed",
      "Initialize variables",
      "Load data from API",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you handle asynchronous operations in Angular services?",
    options: [
      "setTimeout",
      "Promises only",
      "Observables using RxJS",
      "Callbacks",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the default change detection strategy in Angular?",
    options: ["OnPush", "Default", "Manual", "Detached"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following helps in lazy loading modules?",
    options: ["AppModule", "RouterModule.forRoot", "loadChildren", "NgModule"],
    correctAnswer: 2,
  },
  {
    question: "What keyword is used to inject services in constructors?",
    options: [
      "this.service =",
      "constructor()",
      "import",
      "private/public modifiers",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Angular CLI command creates a new service?",
    options: [
      "ng new service",
      "ng g s service-name",
      "ng create service",
      "ng add service",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does `async` pipe do?",
    options: [
      "Subscribes and unsubscribes to Observables",
      "Converts strings to promises",
      "Refreshes template every second",
      "Detects changes manually",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of these is a pure pipe in Angular?",
    options: ["HttpPipe", "AsyncPipe", "DatePipe", "NgPipe"],
    correctAnswer: 2,
  },
  {
    question:
      "Which RxJS operator is used to transform the value of an Observable?",
    options: ["subscribe()", "pipe()", "map()", "switch()"],
    correctAnswer: 2,
  },
  {
    question:
      "Which object in Angular Router configuration defines the route path?",
    options: ["redirectTo", "path", "component", "loadChildren"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of Angular Guards?",
    options: [
      "To format strings",
      "To perform routing animations",
      "To control access to routes",
      "To register global components",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is `NgZone` used for?",
    options: [
      "Style application",
      "Access child elements",
      "Run code outside Angular's zone",
      "Render the view",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does `ng-template` do in Angular?",
    options: [
      "Acts as a comment",
      "Defines reusable chunks of HTML without rendering",
      "Applies CSS",
      "Executes TypeScript code",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does `trackBy` do in `*ngFor`?",
    options: [
      "Sorts array",
      "Filters list",
      "Improves performance by identifying items",
      "Adds animations",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of `Renderer2` in Angular?",
    options: [
      "Access DOM safely in a platform-independent way",
      "Perform routing logic",
      "Manage state",
      "Write reactive forms",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the use of `ViewChild` decorator?",
    options: [
      "Access a child component/directive in the DOM",
      "Declare inputs",
      "Trigger lifecycle events",
      "Inject services",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which directive is used to apply dynamic styles?",
    options: ["ngModel", "ngStyle", "ngIf", "ngSwitch"],
    correctAnswer: 1,
  },
  {
    question: "What is `NgModules` used for?",
    options: [
      "To declare reusable animations",
      "To define test cases",
      "To group components, directives, and services",
      "To render HTML",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the role of the `AppRoutingModule`?",
    options: [
      "Defines all application routes",
      "Stores user data",
      "Registers pipes globally",
      "Loads shared services",
    ],
    correctAnswer: 0,
  },
  {
    question: "How do you bind an event in Angular?",
    options: [
      "(click)='function()'",
      "{{click}}='function()'",
      "*click='function()'",
      "[click]='function()'",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the use of `resolve` in Angular routing?",
    options: [
      "Render fallback components",
      "Prefetch data before route is activated",
      "Redirect routes",
      "Create lazy routes",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which command compiles and serves an Angular app?",
    options: ["ng serve", "ng run", "npm start angular", "ng compile"],
    correctAnswer: 0,
  },
  {
    question:
      "Which operator is commonly used with `HttpClient` to transform response data?",
    options: ["switchMap", "map", "tap", "filter"],
    correctAnswer: 1,
  },
  {
    question:
      "How can you restrict access to a route only if the user is logged in?",
    options: [
      "Use @Guard",
      "Add `canActivate` guard",
      "Use `ngAuth`",
      "Apply interceptor",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the `async` pipe automatically do?",
    options: [
      "Automatically unsubscribes and updates UI",
      "Fetches data from API",
      "Logs observable values",
      "Triggers change detection manually",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does `ng-content` enable?",
    options: [
      "Routing",
      "Forms binding",
      "Content projection into a component",
      "Two-way binding",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does `FormGroup` represent in Angular forms?",
    options: [
      "A single form control",
      "A validator",
      "A group of related form controls",
      "An HTML form tag",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is `@Input()` used for?",
    options: [
      "Receive data from parent to child component",
      "Send data from child to parent",
      "Declare local variable",
      "Inject dependency",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which lifecycle hook is called after every change detection cycle?",
    options: ["ngAfterViewInit", "ngOnInit", "ngOnChanges", "ngDoCheck"],
    correctAnswer: 3,
  },
  {
    question: "What will `(keyup.enter)` do in Angular?",
    options: [
      "Triggers on spacebar",
      "Triggers on escape",
      "Triggers on pressing enter key",
      "Triggers on typing only",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is not a valid Angular directive?",
    options: ["ngIf", "ngModel", "ngBind", "ngFor"],
    correctAnswer: 2,
  },
  {
    question: "What is a `feature module` in Angular?",
    options: [
      "Used to style app",
      "Module created to encapsulate specific functionality",
      "Module with no imports",
      "Built-in Angular module",
    ],
    correctAnswer: 1,
  },
];

export default angularQuestions;
