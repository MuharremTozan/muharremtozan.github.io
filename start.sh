#!/bin/bash
SCRIPT_DIR="$HOME/projects/portfolio"
TABS_FILE="$SCRIPT_DIR/tabs.conf"

cat > "$TABS_FILE" << 'EOF'
title: opencode ;; workdir: /home/mtozan/projects/portfolio ;; command: opencode
title: gemini ;; workdir: /home/mtozan/projects/portfolio ;; command: gemini
title: agy ;; workdir: /home/mtozan/projects/portfolio ;; command: agy
EOF

konsole --hold --tabs-from-file "$TABS_FILE" &
