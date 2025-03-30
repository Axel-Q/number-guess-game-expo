# Number Guessing Game

## 📝 Assignment Overview

This project is a number guessing game built using React Native with Expo. The app functions on both iOS and Android platforms and includes three interactive screens with conditional rendering instead of navigation libraries to control the flow of the game.

## ✨ Features

- **Three screens:** Start Screen, Confirm Screen, and the Game Screen.
- **User input validation:** Name, email, and phone number.
- **Custom state management:** Controls the conditional flow of the game.
- **Timer-based gameplay logic:** Limited attempts and hints.
- **Animated modal:** Confirmation screen with a gradient background.
- **Responsive design:** Ensures consistent styles across platforms.

## 📜 Screens Overview

### 1. Start Screen

A card with the following UI elements:

- **Three TextInputs:**
  - Name: Validates non-numeric input (>1 character).
  - Email: Ensures valid email format.
  - Phone Number: Must be 10 digits; last digit cannot be 0 or 1.
- **Checkbox:** Must be selected to enable the "Register" button.
- **Two Buttons:**
  - **Reset:** Clears inputs and unchecks the checkbox.
  - **Register:** Validates inputs and proceeds to the Confirm Screen if valid; otherwise, shows an alert.
- **Real-time validation:** Displays error messages for invalid input.

### 2. Confirm Screen

- A modal with a transparent gradient background displaying user-entered data.
- **Options:**
  - **Go back to the Start Screen:** Inputs remain pre-filled.
  - **Continue to the Game Screen:** Confirm user info and proceed.

### 3. Game Screen

A guessing game based on the phone number's last digit:

- **Gameplay Mechanics:**
  - 60 seconds and 4 attempts to guess a number (a multiple of the last digit between 1 and 100).
  - A card initially displayed with a "Start" button.
- **Upon pressing "Start":**
  - A TextInput appears for entering guesses.
  - Timer and remaining attempts are displayed.
  - Buttons: "Use a Hint" and "Submit Guess".
- **Feedback Cards:**
  - Incorrect guess: Hint to guess higher/lower, with "Try Again" and "End the Game" options.
  - Correct guess: Number of attempts and an image based on the guessed number.
  - Game over: A sad face and reason for failure (e.g., out of attempts or time).

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**
- **Expo CLI**
- **A simulator/emulator for iOS or Android OR a physical device**

### Setup Instructions

1. Clone the Repository:
   ```bash
   git clone <repository_url>
   cd number-guessing-game
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Start the Expo Project:
   ```bash
   npm start
   ```
4. Run on Your Device:
   - **For Android:** Press `a`
   - **For iOS:** Press `i`

## 🖇️ Directory Structure

```
number-guessing-game/
├── components/          # Reusable UI components (e.g., Card, Button, InputField)
├── screens/             # StartScreen, ConfirmScreen, GameScreen components
├── assets/              # Images and other assets
├── helpers/             # Helper files (e.g., color.js, utility.js)
├── App.js               # Main application file
├── package.json         # Project metadata and dependencies
├── ...                  # Other project files (e.g., README, .gitignore)
```

## ⬆️ Collaboration Workflow

1. Create a new branch to work on:
   ```bash
   git checkout -b <feature-branch-name>
   ```
2. Push your changes:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin <feature-branch-name>
   ```
3. Create a Pull Request on GitHub and assign the TAs as reviewers.
4. Ensure the `master/main` branch remains clean and does not contain implementation code.

## 🔑 Notes & Tips

- Test your code on both platforms (**iOS and Android**) for compatibility.
- Use **conditional rendering** to navigate between screens based on game state and user input validity.
- Use the **expo-linear-gradient** package for gradient backgrounds.
- Design your components to be **modular and reusable**.
- Use the `visible` prop with the `Modal` component to toggle the Confirm Screen.
- Validate all inputs and display error messages in **real-time** instead of waiting for form submission.

---

Happy coding! 🚀

