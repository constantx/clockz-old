var AppView = Composer.Controller.extend({

    init: function(){
        var lex = this;

        // _.bindAll(this,
        //     'initViews',
        //     'initEvents',
        //     'render', 
        //     'start', 
        //     'showGrid', 
        //     'toggleLibrary'
        // );

        this.initViews();
        this.initEvents();

        this.start();

        return this;
    },

    initViews: function(){
        var lex = this;
        var defaultFaces = [];


         // face view container
        this.faceContainer = $('faceContainer');

        // init the face model
        //TODO: get the stored faces in local storage, if not, default to first defaultFaces
        this.clock = new Clock();

        // init current face view
        this.currentFace = new constantx_v1({
            el: new Element('div'),
            model: this.clock
        }).render();

        // save the app's current face
        this.model.set({
            currentFace: this.currentFace
        });

        //start the clock here, otherwise, view wont be init fully
        this.clock.start();
    },

    initEvents: function(){
        var lex = this;
        
        this.model.bind('change:currentFace', this.render);
        this.model.bind('change:toggleLibrary', this.toggleLibrary);
        this.model.bind('change:showGrid', this.showGrid);

        // toggleLibrary library
        this.el.addEvent('click', function(){
            lex.model.set({
                'toggleLibrary': !(lex.model.get('toggleLibrary')),
                'showGrid': !(lex.model.get('showGrid'))
            });
        });  
    },

    render: function(){
        this.faceContainer.empty().adopt(
            this.currentFace.el
        );  
        
        return this;
    },

    start: function(){
        //if default is to show grid
        if(this.model.get('showGrid')){ this.showGrid(); }

        this.render();

        return this;
    },

    toggleLibrary: function(){
        if(this.model.get('toggleLibrary')){
            this.el.setStyle('bottom', this.libraryUI.height);
        }else{
            this.el.setStyle('bottom', 0);
        }
    },

    showGrid: function(){
        if(!this.gridUI){
            this.gridUI = new Element('div#gridUI');
        
            for(var i=0; i<8; i++){
                this.gridUI.adopt(
                    new Element('div.grid.col1',{
                        html: '------------------------------------------'
                    })
                );
            }
            
            //if show grid
            this.gridUI.inject($$('body')[0], 'bottom');
        }else{
            if(this.model.get('showGrid')){
                this.gridUI.fade('in');
            }
            else{
                this.gridUI.fade('out');    
            }
        }
    }
});