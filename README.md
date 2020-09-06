# WooliesX Webapp


## How it works 

####To see the storybooks for Stencil : 

```
1- Go inside `Stencil>wooliesx-design-system`

2- run `npm install`

3- go to http://localhost:49839/

4- I made two stories, one of `w-btn` which demonstrates all the different props, including the `variant` etc, and one for `w-product`.

```

####To run the Angular Web App :

```

1- Go inside `Angular>wooliesx-webapp`

2- run `npm install`

3- run `npm start` and go to `http://localhost:4200/`

4- Click on `ADD TO SHOPPING LIST`

5- No need to fill out the form in the `LoginDialog`, just hit `Login`.
 
6- Notice the state of the Product component will change, and the button is replaced by a "REMOVE FROM SHOPPING LIST".

7- Notice also that in the navigation bar, the `Shopping List Count` will change. 

8- Click on the "REMOVE FROM SHOPPING LIST" button and see above side effects to be reversed.

```
That's it :) 

----
## Assumptions

##### 1- My Stencil components
 
I have created 5 components in my Stencil project, and these components are published to a public `NPM` registry.
Due to the time constraints, I decided to publish all the components as a single library, but this is not ideal.

Ideally we should publish these components separately using their own `NPM` package under a bigger umbrella.
Something like `@WooliesX/w-btn@0.0.1`.  

Moreover, although I would encourage to open-source our design system, sometimes due to the restrictions of the company this is not possible, in those cases we will have our very own private `NPM` ( or others like Microsoft etc) registry. 

Currently, my Stencil packages are deployed here https://www.npmjs.com/package/wooliesx-design-system

##### 2 - Usage of Material Components

I decided to use a couple of Material Components in my `Angular` project, along with my `Stencil` components, both to show case that we can easily use other component libraries and design systems if needed and also save time.

From Angular Material, I used their `Dialog` and `Text Input`

Note that choosing `Angular Material` was by no means a thoroughly researched choice, it was rather the first option I thought of, just for demonstration purposes.
If I wanted to choose a third-party design system in a real example, I would definitely investigate more and consider different options and provide more documents and rational around my decision. 
 

###The cool parts

I've tried to demonstrate a couple of different technical ideas in my Stencil components that are worth mentioning.

1- In `w-btn` component benefits from attribute customisation.
A consumer can change the look and feel and behaviour of the button by providing below attributes : 

* **variant**:    outlined  |   contained   |   text
* **color**:      primary   |   secondary   |   default
* **size**:       small     |   large       |   medium

2- I used `BEM`, or Block Element Modifier in the styles, but depending on the size of the project, `Atomic` design is also a perfect choice

3- In `w-typography` I have demonstrated how to load dynamic `DOM` elements based on `Props`. This is a very powerful concept, and it can be hardly achieved in the Angular realm, but `JSX` make this very easy. 

4- I've also set up `path` in the `tsconfig` to prevent from hard-coding absolute path when importing other components

5- I tried to demonstrate the usage of `Storybooks` for our Stencil components, which is again an overkill for just two components, but I thought why not :)   

This will help to achieve below :  
```
Before : `../../../store/product/product.actions`

After : `@Store/product/product.actions`
```

5- I used `NGRX` to demonstrate the integration of a `Store` and I also offloaded all my API calls to the `@Effects`.
Although this was an overkill for this little project, but I thought I would demonstrate my knowledge.


***Note*** that none of the components are fully coded and ready, they all are for demonstration purposes.  

***Note*** also that all the API services are returning mock data using `BehaviourSubject`   


## To be continued 

There are so many things that I could improve if I had more time, and I was more involved, but here are some of them : 

1- Some of the `interfaces/types` are being duplicated between my Angular and Stencil project. There are so many ways to rectify this issue, but at the very least a shared repo for the common interfaces would be decent. 

2- The level of testing should definitely be improved, but considering the time, I had to limit my test cases to only a function in `product-page.component.spec.ts`

(Although this is still a good idea to separate logics into separate reusable and testable functions. This helps reducing usage of Angular's TestBed which has been always notoriously slow)

3- Loading fonts from Google directly in HTML isn't the best idea, because this might create different flashes ( more on that here https://css-tricks.com/fout-foit-foft/) 

4- The visual design of the elements is by no means idea, but I think considering the time it's ok.  

5- Inside the `product-page`, there's a `shopping-list` class that should not be there, this is just a placeholder for a proper `ShoppingList` component that will come from our design system

6- Login/Signup functionality is completely outside of the scope of this task, this is why I'm not storing user's credential and the `LoginBoxDialog` is just a placeholder.

  
------
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
