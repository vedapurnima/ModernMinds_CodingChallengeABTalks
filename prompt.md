# ABTalks Modern Minds Project Build Prompts

Here is the step-by-step sequence of prompts used to build the **ABTalks 60-Day Coding Challenge** mobile-first web application:

---

## 🗺️ Step 1: Core Layout, Pages, State Persistence, and Demo Widget

### **Prompt**
> Create a high-fidelity, functional, mobile-first frontend implementation of the **ABTalks 60-Day Coding Challenge** website. The layout must be optimized for mobile viewports (390px width) and centered on desktop screens. Create the following pages and directories:
> 
> 1. **Landing Page (`index.html`)**: Features a hero banner, onboarding details, and a "Learn Path" timeline mapping the challenge days.
> 2. **Student Dashboard (`/dashboard/index.html`)**: Displays the user's current streak count, daily progress indicator line, a daily task link, and a dynamic motivational quote card.
> 3. **Day 12 Challenge Page (`/day/12/index.html`)**: Contains the coding challenge details, interactive checkboxes for acceptance criteria, text inputs for submitting verification proofs (GitHub Repository and Twitter/LinkedIn Post), a "Verify" button with loading states, and a beautiful custom confetti overlay triggered upon completing both verifications.
> 4. **Progress Page (`/progress/index.html`)**: Renders skill level sliders and circular metrics rings styled with CSS conic-gradients.
> 5. **Profile Page (`/profile/index.html`)**: Allows the user to update their name, input an avatar image URL, view a grid of unlocked trophies, and adjust theme/notification preferences.
> 
> **State Management & Test Harness:**
> - Build a client-side state manager (`shared/state.js`) to synchronize checkmarks, streaks, verified URLs, and achievements using `localStorage` across all pages.
> - Inject a floating **Demo Switcher Controls Widget** globally at the bottom of the screens to let reviewers toggle presets with 1-click:
>   - *Aarav (Streak 11)*: 11-day streak, Day 12 active (pending completion).
>   - *New Student (Day 1)*: 0 streak, empty history, Day 1 pending.
>   - *Streak Broken*: Missed day state, 0 streak, broken flame, but previous days are marked completed.

---

## 🔔 Step 2: Settings Relocation, Notifications Drawer, and Fixed Tab Bars

### **Prompt**
> Refine the application navigation, settings layout, and notification system:
> 
> 1. **Settings Redirection**: Relocate theme preferences, notification settings, and logout controls from the main **Profile** page to a new dedicated Settings Page (`/profile/settings/index.html`). The Profile page should navigate to this Settings page via a gear/settings icon.
> 2. **Return to Landing Page**: Add a "How it works" navigation link in the top-right header of the Dashboard page to allow easy return navigation to the public Landing page.
> 3. **Interactive Notifications Drawer**: Create a sliding global Notifications drawer containing simulated alert logs for code streak warnings, daily challenge release alerts, and peer achievement feeds.
> 4. **Fixed Layout Navigation**: Pin all bottom navigation tab bars to a fixed position centered to the phone container viewport wrapper.

---

## 🎨 Step 3: Base64 Upload, Custom SVGs, Greeting Shifts, and Dismissible Ignored Alerts

### **Prompt**
> Upgrade the interactive UI components and preferences controls:
> 
> 1. **Native Image Upload**: Replace the profile avatar URL text input with a native file uploader input supporting Base64 file reading. Save the uploaded image string directly in `localStorage` to persist across pages.
> 2. **Sliding Switch Toggle**: Migrate the theme preferences select option in Settings to a modern sliding switch toggle.
> 3. **Dynamic Notification SVGs**: Implement custom notification bells (Clarity Solid and Denali Slashed bells) that toggle dynamically depending on active state.
> 4. **Header Layout Adjustment**: Shift the greeting row ("Good afternoon, Aarav Sharma 👋") below the header navbar on the Dashboard and Day 12 views.
> 5. **Persistent Top Alert Banner**: Add a dismissible top alert toast with three action options: **Noted**, **Clear**, and **Ignore**. If "Ignore" is selected, configure the alert to reappear persistently on every subsequent session reload or login.

---

## 🔒 Step 4: Verification Locks, Caution Warnings, and Streak Enforcement

### **Prompt**
> Make the challenge submission process more robust, secure, and verification-friendly:
> 
> 1. **Flexible Verification Input**: Change the proof URL input fields from `type="url"` to `type="text"`. This allows reviewers to type simple mock texts or URLs for testing.
> 2. **Submission Edit Lock**: Disable the input fields and "Verify" buttons immediately after verification to lock the submitted text and prevent edits.
> 3. **Caution Warning Banner**: Place a warning banner directly below the "Submit Proof of Work" header text: *"Once the urls are submitted it cannot be reverted back"*.
> 4. **Click Confirmation Dialog**: Add native browser confirmation popups (`confirm()`) during code/post verification submissions, warning users that the URLs cannot be reverted.
> 5. **Idempotent Streak Increment**: Enforce state logic validations to ensure that the student's streak and completed day counts increment only once per challenge.

---

## 🧹 Step 5: Cleanups, Dynamic Navbar Theme Toggle, and State Reset

### **Prompt**
> Perform final cleanups and layout polishing:
> 
> 1. **Header Theme Switcher**: Add a functional theme toggle icon (dynamic Sun ☀️ / Moon 🌙 Material Symbols) inside the top header navbar on the Profile view, right next to the Settings gear button. Remove the sliding switch and left bell icon from the Settings page menu entirely.
> 2. **Initialize Fresh State**: Configure the default "Aarav Sharma" state to start with `completedCount = 11`, completedDays up to 11, Day 12 challenge uncompleted, and blank submissions. Implement a cache-invalidation routine in the state manager to auto-clear outdated localStorage objects.
> 3. **Landing Visitor Page Polish**: Remove the bottom navigation tab bar and the top notification bell button from the public landing page (`index.html`) layout to clean up the landing visitor view experience.
