import time
import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from threading import Timer

# ✅ Set the path to the WordPress theme (One level up from Webpack)
THEME_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# ✅ Set the WordPress URL to reload (Ensures all matching tabs reload)
BROWSER_SYNC_URL = "http://darker-than-blood-series.local/"

# ✅ Timer for debounce (Prevents multiple reloads)
reload_timer = None

# ✅ Define folders to ignore
IGNORED_FOLDERS = ["webpack"]  # Add other folders if needed


# ✅ macOS: Reload **ALL** Tabs Matching the Site URL
def reload_browser():
    apple_script = f"""
    tell application "Google Chrome"
        repeat with w in (every window)
            repeat with t in (every tab of w)
                if URL of t contains "{BROWSER_SYNC_URL}" then
                    tell t to reload
                end if
            end repeat
        end repeat
    end tell
    """
    subprocess.run(["osascript", "-e", apple_script])


# ✅ Linux: Reload **ALL** Matching Chrome Tabs (Requires `xdotool`)
def reload_linux():
    subprocess.run(
        [
            "xdotool",
            "search",
            "--onlyvisible",
            "--class",
            "chrome",
            "windowactivate",
            "--sync",
            "key",
            "F5",
        ]
    )


# ✅ Function to Debounce Reload
def debounce_reload():
    global reload_timer
    if reload_timer:
        reload_timer.cancel()  # Cancel the previous scheduled reload
    reload_timer = Timer(0.25, trigger_reload)  # Wait 1 second before triggering
    reload_timer.start()


# ✅ Function to Trigger Browser Reload
def trigger_reload():
    print("🔄 Reloading Browser after build completes...")
    if os.name == "posix":
        reload_browser()  # macOS
    else:
        reload_linux()  # Linux


# ✅ Event Handler for File Changes
class ThemeChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.is_directory:
            return  # ✅ Ignore directories

        # ✅ Ignore files inside the Webpack folder
        if any(ignored in event.src_path for ignored in IGNORED_FOLDERS):
            return

        if any(
            event.src_path.endswith(ext) for ext in (".css", ".php", ".js", ".scss")
        ):  # ✅ Watch only relevant files
            print(f"🛠️ File changed: {event.src_path}. Waiting for stability...")
            debounce_reload()  # ✅ Wait before reloading


# ✅ Start Watching the Theme Directory
def watch_theme():
    print(
        f"👀 Watching {THEME_DIR} for changes (excluding {', '.join(IGNORED_FOLDERS)})..."
    )
    event_handler = ThemeChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, THEME_DIR, recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)  # Keep the script running
    except KeyboardInterrupt:
        observer.stop()
    observer.join()


if __name__ == "__main__":
    watch_theme()
