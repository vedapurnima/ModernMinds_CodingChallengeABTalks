// State Management for ABTalks 60-Day Challenge Mockup

const DEFAULT_STATE = {
  profileName: "Aarav Sharma",
  profileBio: "Full-stack Developer & 60-day Builder. Currently mastering responsive design.",
  profileAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256",
  streak: 11,
  completedCount: 12,
  momentum: [0, 1, 1, 1, 0, 1, 1, 1], // Last 8 days: 0 is missed, 1 is completed
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  skills: {
    layout: 85,
    state: 60,
    api: 40,
    auth: 25
  },
  achievements: [
    { id: "first-build", title: "First Build", desc: "The journey begins", unlocked: true },
    { id: "7-day", title: "7 Day Streak", desc: "Consistency is key", unlocked: true },
    { id: "10-builds", title: "10 Builds", desc: "Double digits baby", unlocked: true },
    { id: "public-builder", title: "Public Builder", desc: "Shared with the world", unlocked: true }
  ],
  day12Checked: [false, false, false],
  day12SubmittedCode: "",
  day12SubmittedSocial: "",
  day12CodeVerified: false,
  day12SocialVerified: false
};

const NEW_STUDENT_STATE = {
  profileName: "Dev Kumar",
  profileBio: "Aspiring Web Developer | Just started my coding challenge!",
  profileAvatar: "",
  streak: 0,
  completedCount: 0,
  momentum: [0, 0, 0, 0, 0, 0, 0, 0],
  completedDays: [],
  skills: {
    layout: 0,
    state: 0,
    api: 0,
    auth: 0
  },
  achievements: [
    { id: "first-build", title: "First Build", desc: "The journey begins", unlocked: false },
    { id: "7-day", title: "7 Day Streak", desc: "Consistency is key", unlocked: false },
    { id: "10-builds", title: "10 Builds", desc: "Double digits baby", unlocked: false },
    { id: "public-builder", title: "Public Builder", desc: "Shared with the world", unlocked: false }
  ],
  day12Checked: [false, false, false],
  day12SubmittedCode: "",
  day12SubmittedSocial: "",
  day12CodeVerified: false,
  day12SocialVerified: false
};

const MISSED_DAY_STATE = {
  profileName: "Aarav Sharma",
  profileBio: "Full-stack Developer & 60-day Builder. Currently mastering responsive design.",
  profileAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256",
  streak: 0, // Streak broken!
  completedCount: 11, // Missed Day 12
  momentum: [1, 1, 1, 1, 0, 0, 1, 1], // Missed day indicated by 0
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  skills: {
    layout: 75,
    state: 50,
    api: 30,
    auth: 20
  },
  achievements: [
    { id: "first-build", title: "First Build", desc: "The journey begins", unlocked: true },
    { id: "7-day", title: "7 Day Streak", desc: "Consistency is key", unlocked: true },
    { id: "10-builds", title: "10 Builds", desc: "Double digits baby", unlocked: true },
    { id: "public-builder", title: "Public Builder", desc: "Shared with the world", unlocked: false }
  ],
  day12Checked: [false, false, false],
  day12SubmittedCode: "",
  day12SubmittedSocial: "",
  day12CodeVerified: false,
  day12SocialVerified: false
};

// Get active profile state type (default, new, missed)
export function getActivePreset() {
  return localStorage.getItem("abtalks_preset") || "default";
}

// Load current state
export function getState() {
  const preset = getActivePreset();
  const stored = localStorage.getItem(`abtalks_state_${preset}`);
  if (stored) {
    return JSON.parse(stored);
  }
  
  // If not in localStorage, load template
  let state;
  if (preset === "new") state = { ...NEW_STUDENT_STATE };
  else if (preset === "missed") state = { ...MISSED_DAY_STATE };
  else state = { ...DEFAULT_STATE };
  
  saveState(state);
  return state;
}

// Save current state
export function saveState(state) {
  const preset = getActivePreset();
  localStorage.setItem(`abtalks_state_${preset}`, JSON.stringify(state));
}

// Switch state preset
export function setPreset(presetName) {
  localStorage.setItem("abtalks_preset", presetName);
  // Trigger event or reload
  window.location.reload();
}

// Reset all stores to original defaults
export function resetAllStates() {
  localStorage.removeItem("abtalks_preset");
  localStorage.removeItem("abtalks_state_default");
  localStorage.removeItem("abtalks_state_new");
  localStorage.removeItem("abtalks_state_missed");
  localStorage.removeItem("abtalks_logged_in");
  localStorage.removeItem("abt_theme");
  window.location.reload();
}

// Auth / Session Management
export function isLoggedIn() {
  return localStorage.getItem("abtalks_logged_in") !== "false";
}

export function login() {
  localStorage.setItem("abtalks_logged_in", "true");
}

export function logout() {
  localStorage.setItem("abtalks_logged_in", "false");
  // Redirect to root
  const root = getRelativeRoot();
  window.location.href = root;
}

function getRelativeRoot() {
  const loc = window.location.pathname;
  if (loc.includes("/day/12")) return "../../";
  if (loc.includes("/dashboard") || loc.includes("/progress") || loc.includes("/profile")) return "../";
  return "./";
}

// Theme Management
export function getTheme() {
  return localStorage.getItem("abt_theme") || "dark";
}

export function setTheme(theme) {
  localStorage.setItem("abt_theme", theme);
  applyTheme();
}

export function applyTheme() {
  const theme = getTheme();
  if (theme === "light") {
    document.documentElement.classList.add("light-theme");
    document.body?.classList.add("light-theme");
  } else {
    document.documentElement.classList.remove("light-theme");
    document.body?.classList.remove("light-theme");
  }
}

// Route Guard Validation
const isAuth = isLoggedIn();
const path = window.location.pathname;
if (!isAuth && (path.includes("/dashboard") || path.includes("/day/12") || path.includes("/progress") || path.includes("/profile"))) {
  window.location.href = getRelativeRoot();
}

// Apply Theme immediately upon script load (prevents styling flash)
applyTheme();

// Auto Inject Demo Control Panel
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(); // Re-apply once body is parsed to ensure class binds
  
  const switcher = document.createElement("div");
  switcher.className = "demo-switcher collapsed";
  
  const activePreset = getActivePreset();
  
  switcher.innerHTML = `
    <div class="demo-header" id="demoHeader">
      <span>Demo Controls (Test Edge Cases)</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </div>
    <div class="demo-options">
      <div class="demo-opt ${activePreset === 'default' ? 'active' : ''}" data-preset="default">Aarav (Streak 11)</div>
      <div class="demo-opt ${activePreset === 'new' ? 'active' : ''}" data-preset="new">New Student (Day 1)</div>
      <div class="demo-opt ${activePreset === 'missed' ? 'active' : ''}" data-preset="missed">Streak Broken (0 Streak)</div>
    </div>
    <div style="text-align: center; margin-top: 8px;">
      <span style="font-size: 8px; color: var(--text-muted); cursor: pointer; text-decoration: underline;" id="resetStates">Reset all data</span>
    </div>
  `;
  
  document.body.appendChild(switcher);
  
  const header = document.getElementById("demoHeader");
  header.addEventListener("click", () => {
    switcher.classList.toggle("collapsed");
  });
  
  const options = switcher.querySelectorAll(".demo-opt");
  options.forEach(opt => {
    opt.addEventListener("click", () => {
      setPreset(opt.getAttribute("data-preset"));
    });
  });
  
  const resetBtn = document.getElementById("resetStates");
  resetBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    resetAllStates();
  });
});
