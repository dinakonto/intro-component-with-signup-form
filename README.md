# Frontend Mentor - Intro component with sign up form

![Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg)

## What is this?
This is my response to a front-end coding challenge from [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor provides great development challenges alongside beautiful designs, enabling you to build your skills using realistic projects.

I plan to take on most, if not all, of the free challenges in order from easiest (_'Newbie'_) to hardest (_'Advanced'_).

## The challenge
__Challenge #6__<br>
__Difficulty: Newbie__

This challenge was to build out an introductory component and get it looking as close to the design as possible.

Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

## My approach
I started by building out the basic __HTML__ page structure, making sure the page layout made sense at a fundamental level, particularly for screenreader users.

From there I took a mobile-first approach, completing styling and layout for a 375px viewport width before building out media queries to cater to larger widths.

I used __Sass__ to easily implement elements from the `style-guide.md` provided, and CSS grid to place the elements.

For input validation, I used [__jQuery Validation__](https://jqueryvalidation.org/) with custom message and highlight rules for the error states.

The end product is hosted on Vercel - https://intro-component-with-signup-form-vert-kappa.vercel.app/

Cheers! 🍻
