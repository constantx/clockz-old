var FaceView = Composer.Controller.extend({

    init: function () {
        // _.bindAll(this, 
        //     'initEvents', 
        //     'initViews', 
        //     'render'
        // );
        
        this.initViews();
        this.initEvents();
        
        return this;
    },

    setAngle: function(ele, angle){
        ele.setStyle('-webkit-transform', 'rotate(' + angle + 'deg)');
    },
    
    initEvents: function(){},
    initViews: function(){}
});