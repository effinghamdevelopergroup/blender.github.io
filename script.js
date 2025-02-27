// Grouped hotkey data stored as a JavaScript object
const hotkeysData = {
    "General": [
        { action: "Toggle between Object and Edit Mode", hotkey: "Tab" },
        { action: "Select/Deselect All", hotkey: "A" },
        { action: "Delete selected object(s)", hotkey: "X or Delete" },
        { action: "Duplicate selected object(s)", hotkey: "Shift + D" },
        { action: "Undo last action", hotkey: "Ctrl + Z" },
        { action: "Redo last undone action", hotkey: "Shift + Ctrl + Z" }
    ],
    "Object Mode": [
        { action: "Grab/Move selected object(s)", hotkey: "G" },
        { action: "Rotate selected object(s)", hotkey: "R" },
        { action: "Scale selected object(s)", hotkey: "S" }
    ],
    "Edit Mode": [
        { action: "Extrude", hotkey: "E" },
        { action: "Loop Cut", hotkey: "Ctrl + R" },
        { action: "Bevel", hotkey: "Ctrl + B" }
    ],
    "View Navigation": [
        { action: "Front view", hotkey: "Numpad 1" },
        { action: "Side view", hotkey: "Numpad 3" },
        { action: "Top view", hotkey: "Numpad 7" }
    ]
};

const hotkeyList = document.getElementById('hotkey-list');
const searchInput = document.getElementById('search');

function renderHotkeys(filter = '') {
    hotkeyList.innerHTML = '';
    const term = filter.toLowerCase();

    Object.keys(hotkeysData).forEach(group => {
        const filteredItems = hotkeysData[group].filter(item => {
            return item.action.toLowerCase().includes(term) ||
                item.hotkey.toLowerCase().includes(term) ||
                group.toLowerCase().includes(term);
        });

        if (filteredItems.length > 0) {
            const groupHeader = document.createElement('div');
            groupHeader.className = 'hotkey-group';
            groupHeader.textContent = group;
            hotkeyList.appendChild(groupHeader);

            filteredItems.forEach(item => {
                const hotkeyItem = document.createElement('div');
                hotkeyItem.className = 'hotkey-item';

                const actionSpan = document.createElement('span');
                actionSpan.className = 'hotkey-action';
                actionSpan.textContent = item.action;

                const keySpan = document.createElement('span');
                keySpan.className = 'hotkey-key';
                keySpan.textContent = item.hotkey;

                hotkeyItem.appendChild(actionSpan);
                hotkeyItem.appendChild(keySpan);
                hotkeyList.appendChild(hotkeyItem);
            });
        }
    });
}

renderHotkeys();

searchInput.addEventListener('input', (e) => {
    renderHotkeys(e.target.value);
});  