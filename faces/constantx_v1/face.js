var constantx_v1 = Composer.Controller.extend({
    
    initViews: function(){
        //change whole model
        this.model.bind('change', this.render.bind(this));

        this.date = new Element('div.date');
        this.time = new Element('div.time');
        this.handHour = new Element('div.hand.hour');
        this.handMinute = new Element('div.hand.minute');
        this.handSecond = new Element('div.hand.second');

        console.log(this.model);
        this.el
            .set('id', 'constantx-v1')
            .adopt(
                new Element('div.timeStr').adopt(
                    this.date,
                    this.time
                ),
                this.handHour,
                this.handMinute,
                this.handSecond,
                new Element('div.outter')
        );
    },

    initEvents: function(){},
    
    render: function(){
        var now = this.model.get('now'),
            timeStrHtml,
            date, 
            time;
        
        
        if(!now) return this;
        
        this.date.set('html', now.format('%a %b %d, %Y'));
        this.time.set('html', now.format('%H:%M:%S:%L'));

        this.setAngle(this.handSecond, this.model.get('handSecond'));
        this.setAngle(this.handMinute, this.model.get('handMinute'));
        this.setAngle(this.handHour, this.model.get('handHour'));
        
        return this;
    }
}, FaceView);