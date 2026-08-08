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
