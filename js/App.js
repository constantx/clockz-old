var App = Composer.Model.extend({
       
    defaults: { 
        showGrid: false,
        toggleLirbrary: false,

        currentFace: null,

        DEFAULT_FACES: [
            {
                id: 'constantx_v1',
                name: 'Tron'
            }
            ,{
                id: 'constantx_v2',
                name: 'Helveti Love'
            }
            ,{
                id: 'constantx_v3',
                name: 'Word'
            }
        ]
    },

    init: function(){
        return this;
    }
});