const schedule = require('node-schedule');
const mongoose = require('../db.js');

//Time collections
const Hourly = mongoose.model('Hourly');
const Daily = mongoose.model('Daily');
const Monthly = mongoose.model('Monthly');
const Quarterly = mongoose.model('Quarterly');

function resetChecklists(checklists) {
    checklists.forEach(checklist => {
        checklist.checklistItems.forEach(item => {
            item.completed = false;
        });
    });
}

const scheduleCollectionList = {
    "hour": () => Hourly,
    "day": () => Daily,
    "month": () => Monthly,
    "quarter": () => Quarterly
}

function addToScheduleList(checklistId, scheduleList) {
    const checklist = {
        listId: checklistId
    }

    let newList = new scheduleCollectionList[scheduleList](checklist);

    newList.save()
        .then(savedList => {
            console.log(savedList);
        }).catch(e => {
            console.log(e);
        })
}

const hourlyRule = new schedule.RecurrenceRule();
hourlyRule.minute = 0;

const hourlyJob = schedule.scheduleJob(hourlyRule, function() {
    Hourly.find({}, function(err, lists) {
        if(err) {
            console.log(err);
        } else {
            resetChecklists(lists);
        }
    });
});

const dailyRule = new schedule.RecurrenceRule();
dailyRule.hour = 0;

const dailyJob = schedule.scheduleJob(dailyRule, function() {
    Daily.find({}, function(err, lists) {
        if(err) {
            console.log(err);
        } else {
            resetChecklists(lists);
        }
    });
});

const monthlyRule = new schedule.RecurrenceRule();
monthlyRule.date = 1;

const monthlyJob = schedule.scheduleJob(monthlyRule, function() {
    Monthly.find({}, function(err, lists) {
        if(err) {
            console.log(err);
        } else {
            resetChecklists(lists);
        }
    });
});

const quarterlyRule = new schedule.RecurrenceRule();
quarterlyRule.month = [0, 2, 5, 8, 11];

const quarterlyJob = schedule.scheduleJob(quarterlyRule, function() {
    Quarterly.find({}, function(err, lists) {
        if(err) {
            console.log(err);
        } else {
            resetChecklists(lists);
        }
    })
});

module.exports = (app) => {
    app.post('scheduleChecklist', (req, res) => {

    })
}