# React: Edit Profile

## Environment

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/a8yd66ErInrRsh1ul6wI-Q/Screen-Recording-2022-09-05-at-4.gif)

## Functionality Requirements

The application has the following functionalities:

- The Profile component shows the user their details while also enabling them to edit the details.
- Initially, there should be 3 Divs with the following values:

  - First Name: Sherlock
  - Last Name: Holmes
  - Email: sherlockholmes@email.com

- Initially, the button should have the text value Edit Profile.
- The following functionality should be implemented when the user clicks the 'Edit Profile' button :

  - The user can now edit the details in the divs.
  - The button should now have the text value "Save Changes".

- The following functionality should be implemented when the user edits the details and clicks the Save Changes button:

  - If any one of the fields are empty, there should be an alert prompt with the text "Please enter all profile fields" and no values should be updated.
  - If all the fields are non-empty, there should be an alert prompt with the text "Profile updated successfully".
  - The input values should now again turn into uneditable divs and the button text should again be changed to Edit Profile.
  - The values in the div should be updated to what was given in as input.

## Project Specifications

**Read Only Files**

- src/App.test.js
- src/App.js

**Commands**

- run:

```bash
npm start
```

- install:

```bash
npm install
```

- test:

```bash
npm test
```
