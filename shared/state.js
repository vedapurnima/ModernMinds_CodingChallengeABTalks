// State Management for ABTalks 60-Day Challenge Mockup

const DEFAULT_STATE = {
  profileName: "Aarav Sharma",
  profileBio: "Full-stack Developer & 60-day Builder. Currently mastering responsive design.",
  profileAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256",
  profileGithub: "https://github.com/aaravsharma",
  profileLinkedin: "https://linkedin.com/in/aaravsharma",
  streak: 11,
  completedCount: 11,
  momentum: [0, 1, 1, 1, 0, 1, 1, 0],
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
    { id: "public-builder", title: "Public Builder", desc: "Shared with the world", unlocked: false }
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
  profileGithub: "",
  profileLinkedin: "",
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
  profileGithub: "https://github.com/aaravsharma",
  profileLinkedin: "https://linkedin.com/in/aaravsharma",
  streak: 0,
  completedCount: 11,
  momentum: [1, 1, 1, 1, 0, 0, 1, 1],
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

export function getActivePreset() {
  return localStorage.getItem("abtalks_preset") || "default";
}

export function getState() {
  const preset = getActivePreset();
  const stored = localStorage.getItem(`abtalks_state_${preset}`);
  if (stored) {
    const parsed = JSON.parse(stored);
    if (preset === "default" && parsed.completedDays.includes(12) && !parsed.day12CodeVerified) {
      localStorage.removeItem("abtalks_state_default");
    } else {
      return parsed;
    }
  }
  
  let state;
  if (preset === "new") state = { ...NEW_STUDENT_STATE };
  else if (preset === "missed") state = { ...MISSED_DAY_STATE };
  else state = { ...DEFAULT_STATE };
  
  saveState(state);
  return state;
}

export function saveState(state) {
  const preset = getActivePreset();
  localStorage.setItem(`abtalks_state_${preset}`, JSON.stringify(state));
}

export function setPreset(presetName) {
  localStorage.setItem("abtalks_preset", presetName);
  window.location.reload();
}

export function resetAllStates() {
  localStorage.removeItem("abtalks_preset");
  localStorage.removeItem("abtalks_state_default");
  localStorage.removeItem("abtalks_state_new");
  localStorage.removeItem("abtalks_state_missed");
  localStorage.removeItem("abtalks_logged_in");
  localStorage.removeItem("abt_theme");
  localStorage.removeItem("abtalks_notifs_enabled");
  localStorage.removeItem("abt_streak_ignored");
  window.location.reload();
}

export function isLoggedIn() {
  return localStorage.getItem("abtalks_logged_in") !== "false";
}

export function login() {
  localStorage.setItem("abtalks_logged_in", "true");
  // Reset notification ignored state on login so it pops up again
  localStorage.removeItem("abt_streak_ignored");
}

export function logout() {
  localStorage.setItem("abtalks_logged_in", "false");
  localStorage.removeItem("abt_streak_ignored");
  const root = getRelativeRoot();
  window.location.href = root;
}

function getRelativeRoot() {
  const loc = window.location.pathname;
  if (loc.includes("/day/12")) return "../../";
  if (loc.includes("/dashboard") || loc.includes("/progress") || loc.includes("/profile")) return "../";
  return "./";
}

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

export function areNotificationsEnabled() {
  return localStorage.getItem("abtalks_notifs_enabled") !== "false";
}

export function setNotificationsEnabled(enabled) {
  localStorage.setItem("abtalks_notifs_enabled", enabled ? "true" : "false");
}

// Route Guard Validation
const isAuth = isLoggedIn();
const path = window.location.pathname;
if (!isAuth && (path.includes("/dashboard") || path.includes("/day/12") || path.includes("/progress") || path.includes("/profile"))) {
  window.location.href = getRelativeRoot();
}

applyTheme();

// Auto Inject Demo Control Panel & Notification Drawer
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  
  // Inject Demo Switcher
  const switcher = document.createElement("div");
  switcher.className = "demo-switcher collapsed";
  const activePreset = getActivePreset();
  switcher.innerHTML = `
    <div class="demo-header" id="demoHeader">
      <span>Demo Controls</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </div>
    <div class="demo-options">
      <div class="demo-opt ${activePreset === 'default' ? 'active' : ''}" data-preset="default">Aarav (Streak 11)</div>
      <div class="demo-opt ${activePreset === 'new' ? 'active' : ''}" data-preset="new">New Student</div>
      <div class="demo-opt ${activePreset === 'missed' ? 'active' : ''}" data-preset="missed">Streak Broken</div>
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

  // Inject Global Notification Drawer
  const notifDrawer = document.createElement("div");
  notifDrawer.className = "bottom-sheet-modal";
  notifDrawer.id = "globalNotifDrawer";
  notifDrawer.innerHTML = `
    <div class="bottom-sheet">
      <div class="flex justify-between items-center mb-4 border-b border-outline-variant/20 pb-2">
        <h3 class="text-base font-bold text-primary flex items-center gap-2">
          <span class="material-symbols-outlined text-[#b1f743]">notifications</span> Notifications
        </h3>
        <span class="text-xs font-bold text-on-surface-variant cursor-pointer hover:underline" id="clearNotifsBtn">Clear All</span>
      </div>
      <div class="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-1" id="notificationsContainer">
        <!-- Injected dynamically -->
      </div>
      <button class="w-full bg-surface-container border border-outline-variant/30 text-on-surface font-bold py-3 rounded-lg mt-4 text-xs" id="closeNotifsBtn">Close</button>
    </div>
  `;
  document.body.appendChild(notifDrawer);

  const notifications = [
    { type: "alert", text: "🔥 Streak Alert: Keep your streak alive! 6 hours remaining to submit today's code.", date: "Today" },
    { type: "system", text: "💡 Today's challenge is live: Build a responsive developer profile card.", date: "Today" },
    { type: "social", text: "🏆 Aarav Sharma unlocked the '10 Builds' achievement!", date: "1 hour ago" }
  ];

  const renderNotifications = () => {
    const container = document.getElementById("notificationsContainer");
    const enabled = areNotificationsEnabled();
    
    const notifDots = document.querySelectorAll(".notif-badge-dot");
    notifDots.forEach(dot => {
      dot.style.display = (enabled && notifications.length > 0) ? "block" : "none";
    });

    if (!enabled) {
      container.innerHTML = `
        <div class="text-center py-8 text-on-surface-variant text-xs flex flex-col items-center gap-2">
          <span class="material-symbols-outlined text-4xl opacity-55">notifications_off</span>
          <span>Notifications are disabled. Enable them in Settings.</span>
        </div>
      `;
      return;
    }

    if (notifications.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 text-on-surface-variant text-xs">
          No new notifications.
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    notifications.forEach((n, idx) => {
      const item = document.createElement("div");
      item.className = "p-3 rounded-lg bg-surface-container/45 border border-outline-variant/30 text-xs flex flex-col gap-1 relative";
      
      let typeIcon = "notifications";
      let iconColor = "text-secondary";
      if (n.type === "alert") { typeIcon = "local_fire_department"; iconColor = "text-orange-500"; }
      else if (n.type === "system") { typeIcon = "info"; iconColor = "text-primary-fixed"; }
      else if (n.type === "social") { typeIcon = "workspace_premium"; iconColor = "text-tertiary-fixed-dim"; }

      item.innerHTML = `
        <div class="flex items-start gap-2">
          <span class="material-symbols-outlined text-base ${iconColor}">${typeIcon}</span>
          <div class="flex-grow">
            <p class="text-primary leading-normal">${n.text}</p>
            <span class="text-3xs text-on-surface-variant mt-1 block">${n.date}</span>
          </div>
        </div>
      `;
      container.appendChild(item);
    });
  };

  const closeNotifsBtn = document.getElementById("closeNotifsBtn");
  const clearNotifsBtn = document.getElementById("clearNotifsBtn");

  const closeNotifs = () => notifDrawer.classList.remove("show");
  closeNotifsBtn.addEventListener("click", closeNotifs);
  notifDrawer.addEventListener("click", (e) => {
    if (e.target === notifDrawer) closeNotifs();
  });

  clearNotifsBtn.addEventListener("click", () => {
    notifications.length = 0;
    renderNotifications();
  });

  window.openNotifications = function() {
    renderNotifications();
    notifDrawer.classList.add("show");
  };

  const bindNotifButtons = () => {
    const btns = document.querySelectorAll(".notification-btn");
    btns.forEach(btn => {
      if (!btn.querySelector(".notif-badge-dot")) {
        const dot = document.createElement("div");
        dot.className = "absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-orange-500 notif-badge-dot shadow-[0_0_8px_rgba(255,138,0,0.8)]";
        btn.appendChild(dot);
      }
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openNotifications();
      };
    });
  };
  
  bindNotifButtons();
  renderNotifications();
  
  const observer = new MutationObserver(bindNotifButtons);
  observer.observe(document.body, { childList: true, subtree: true });
});
