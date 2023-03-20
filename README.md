
# How to create multiApp 

`ng new AngularMultiple --create-application false` 

`cd AngularMultiple`

`ng g application ProjectA`

`ng g application ProjectB`

`ng g application ProjectC`

` ng generate c component/a1 --project="ProjectA"`

` ng generate c component/b1 --project="ProjectB"`

` ng generate c component/c1 --project="ProjectC"`


## Angular Info
https://angular.io/guide/standalone-components

https://www.youtube.com/watch?v=x5PZwb4XurU

https://www.youtube.com/watch?v=rproG1_TCek

TODO: webinar
https://www.youtube.com/watch?v=9rj8kR0q0c8

https://blog.ninja-squad.com/2022/05/12/a-guide-to-standalone-components-in-angular/


## Development server

Run `yarn start-a` for a dev server for Project A. Navigate to `http://localhost:6201/`. The application will automatically reload if you change any of the source files.

Run `yarn start-b` for a dev server for Project A. Navigate to `http://localhost:6202/`. The application will automatically reload if you change any of the source files.

Run `yarn start-c` for a dev server for Project A. Navigate to `http://localhost:6203/`. The application will automatically reload if you change any of the source files.

[//]: # (# AngularMultiple)

[//]: # ()
[//]: # (This project was generated with [Angular CLI]&#40;https://github.com/angular/angular-cli&#41; version 14.2.3.)

[//]: # ()
[//]: # (## Development server)

[//]: # ()
[//]: # (Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.)

[//]: # ()
[//]: # (## Code scaffolding)

[//]: # ()
[//]: # (Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.)

[//]: # ()
[//]: # (## Build)

[//]: # ()
[//]: # (Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.)

[//]: # ()
[//]: # (## Running unit tests)

[//]: # ()
[//]: # (Run `ng test` to execute the unit tests via [Karma]&#40;https://karma-runner.github.io&#41;.)

[//]: # ()
[//]: # (## Running end-to-end tests)

[//]: # ()
[//]: # (Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.)

[//]: # ()
[//]: # (## Further help)

[//]: # ()
[//]: # (To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference]&#40;https://angular.io/cli&#41; page.)
