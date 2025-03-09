import time
import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# ✅ Set the path to the WordPress theme (One level up from Webpack)
THEME_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# ✅ Set the WordPress URL to reload (Ensures all matching tabs reload)
BROWSER_SYNC_URL = "http://darker-than-blood-series.local/"


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


# ✅ Event Handler for File Changes
class ThemeChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.is_directory:
            return  # ✅ Ignore directories

        if any(
            event.src_path.endswith(ext) for ext in (".css", ".php", ".js", ".scss")
        ):  # ✅ Watch only relevant files
            print(f"🔄 File changed: {event.src_path}. Reloading Browser...")
            time.sleep(1)  # ✅ Prevents multiple triggers in rapid succession

            # ✅ Trigger the correct browser reload based on OS
            if os.name == "posix":
                reload_browser()  # macOS
            else:
                reload_linux()  # Linux


# ✅ Start Watching the Theme Directory
def watch_theme():
    print(f"👀 Watching {THEME_DIR} for changes...")
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
