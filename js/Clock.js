var Clock = Composer.Model.extend({

    defaults: {
        now: null,
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,

        handSecond: 0,
        handMinute: 0,
        handHour: 0,

        since: null, //count up
        until: null, //count down

        started: false,

        id: '{{githubUserName}}_v{{versionNumber}}',
        name: null,
        free: true,
        cost: 0,
    },

    init: function(){
        _.bindAll(this, 'updateTime', 'start');

        return this;
    },

    updateTime: function(){
        var lex = this;
        var now = new Date();

        //console.log(new Date() + ' second: ' + now.get('Seconds') + ' | angle: ' + (360/60) * now.get('Seconds'));

        this.set({
            'now': now,
            'year': now.get('FullYear'),
            'month': now.get('Month') + 1,
            'day': now.get('Date'),
            'hour': now.get('Hours'),
            'minute': now.get('Minutes'),
            'second': now.get('Seconds'),
            'millisecond': now.get('Milliseconds'),

            'handSecond': (360/60) * now.get('Seconds'),
            'handMinute': (360/60) * now.get('Minutes'),
            'handHour': (360/12) * (now.get('Hours')%12)
        });
    },

    start: function(){
        this.set({'started':true});
        this.updateTime();
        this.updateTime.periodical(10);

        return this;
    }
});
