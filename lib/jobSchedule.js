const schedule = require('node-schedule');

function resetChecklists(checklists) {
    checklists.forEach(checklist => {
        checklist.checklistItems.forEach(item => {
            item.completed = false;
        });
    });
}

