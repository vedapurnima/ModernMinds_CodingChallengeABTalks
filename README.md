# ABTalks 60-Day Coding Challenge

A high-fidelity, functional, mobile-first frontend implementation of the **ABTalks 60-Day Coding Challenge** website, optimized for mobile viewports (390px width) and completely interactive using local state synchronization.

---

## 🗺️ Route Map

For automated layout/screenshot captures, the three primary routes are structured as static directories:
- `/` - **Landing Page** (Root index)
- `/dashboard` - **Student Dashboard**
- `/day/12` - **Day 12 Challenge page**

---

## 🚀 Interactive Features Built

1. **State Persistence (`localStorage`)**:
   Checking off task acceptance criteria, submitting URLs, and completing challenges updates state variables globally across all screens without page re-writes.
   
2. **Built-in Demo Controls Widget**:
   A floating panel injected at the bottom of the screens allows reviewers to test real-world edge cases in 1-click:
   - **Aarav (Streak 11)**: Default active builder state (11-day streak, Day 12 active).
   - **New Student (Day 1)**: First day state (0 streak, empty history, Day 1 task active).
   - **Streak Broken**: Missed day state (0 streak, broken flame, previous builds marked completed).

3. **Interactive Link Verification & Confetti**:
   Submitting proof links displays authentic validation loaders. Completing both requirements triggers a beautiful custom particle **Confetti Celebration Overlay**!

4. **Circular Conic Gradients & Charts**:
   The Progress page compiles metrics dynamically into skill meter widgets and conic-gradient ring charts based on the loaded preset.

---

## 🏛️ Project Directory Structure

```
ABTalks_ModernMinds/
├── index.html            # Landing / Onboarding Route (/)
├── README.md             # Project Documentation & History
├── dashboard/
│   └── index.html        # Dashboard Route (/dashboard)
├── day/
│   └── 12/
│       └── index.html    # Day 12 Challenge Route (/day/12)
├── progress/
│   └── index.html        # Progress Tracking Route
├── profile/
│   └── index.html        # Profile & Trophies Route
└── shared/
    ├── global.css        # Premium Dark Mode Styles & Animations
    └── state.js          # Client-side State Manager & Demo Panel Injector
```

---

## 📜 Commit History

### 🟢 First Commit
- Message: `feat: init 60-day challenge app design with functional mock states`
- **Details**:
  - Imported core UI layouts and visual styling systems from **stitch-ui** generator.
  - Implemented common typography (`Outfit`, `Inter`, `Fira Code`) and custom colors.
  - Setup core viewport templates (`global.css`) constraint-centered to replicate mobile viewports.
  - Built Landing Hero banner and Learn Path timeline component.`
  - Coded reactive Dashboard showing streaks, quotes, dynamic charts, and progress line.
  - Developed Day 12 challenge workspace with interactive checkboxes, input forms, verification triggers, and confetti.
  - Added Progress page with circular stats rings and skill level sliders.
  - Programmed Profile tab with unlocked trophies grid and account logout controls.
  - Designed and injected the "Demo Switcher Controls" utility globally.

### 🟢 Second Commit
- Message: `feat: add notifications, settings page redirection, and fixed navigation bars`
- **Details**:
  - Relocated theme preferences, notification settings, and logout buttons from the main **Profile** page to a new dedicated **Settings Page** (`/profile/settings/index.html`).
  - Added a "How it works" navigation link in the top-right header of the Dashboard page to allow easy return navigation to the Landing page.
  - Implemented an interactive global **Notifications Drawer** containing alert logs for code streak maintenance, day-to-day challenges, and peer achievements.
  - Pinned all bottom navigation bars to a fixed position centered to the phone container viewport wrapper.

### 🟢 Third Commit
- Message: `feat: support image uploads, inline theme toggle, custom notification SVGs, greeting shifts, and dismissible ignored alerts`
- **Details**:
  - Replaced the profile avatar URL text input with a native file uploader supporting Base64 uploads.
  - Migrated the theme preferences select option to a modern inline sliding switch toggle.
  - Implemented custom SVG notification indicators (Clarity Solid and Denali Slashed bells) that toggle dynamically.
  - Shifted the user greeting row ("Good afternoon, Aarav Sharma 👋") below the header navbar on the Dashboard and Day 12 views.
  - Added a dismissible top alert toast with **Noted**, **Clear**, and **Ignore** actions. Selecting "Ignore" makes the notification alert reappear persistently on every future session reload or login.

### 🟢 Fourth Commit
- Message: `feat: lock verified links, add caution alerts, and enforce single daily streak awards`
- **Details**:
  - Swapped verification input fields from `type="url"` to `type="text"`, allowing users to enter and submit any text string for quick challenge verifications.
  - Disabled input fields and verify buttons immediately after URL verification to prevent subsequent editing.
  - Displayed a static warning banner directly under the "Submit Proof of Work" header: *"Once the urls are submitted it cannot be reverted back"*.
  - Configured native click confirmation prompts during code/post verification submissions, warning users that the URLs cannot be reverted.
  - Implemented state validation checks ensuring that the student's streak and completed day counters increment only once per challenge.

### 🟢 Fifth Commit
- Message: `feat: relocate theme toggle, simplify landing layouts, and reset default state`
- **Details**:
  - Added a functional theme toggle icon (dynamic Sun ☀️ / Moon 🌙 Material Symbols) inside the top header navbar on the Profile view immediately beside the Settings gear button.
  - Completely removed the theme sliding switch option and the left bell icon from the Settings page menu.
  - Reconfigured the default Aarav Sharma template to initialize with completedCount = 11, completedDays up to 11, momentum Day 12 slot uncompleted, and empty submissions URLs.
  - Added cache checking functions to auto-clear previous inconsistent localStorage objects and apply the fresh Day 12 uncompleted state.
  - Removed the bottom navigation tab bar and the top notification bell button from the public landing page (`index.html`) layout to clean up the landing visitor view experience.
