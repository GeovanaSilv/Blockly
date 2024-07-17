
Blockly.Blocks['parte1']={
    init:function(){
        this.jsonInit({
            message0:"%1 %2",
            args0:[
                {
                    type:"field_image",
                    src:"parte1.png",
                         width:"150",
                        height:"150"
                   },
            {
                type:"input_value",
                name:"A",
                check:"partA"
            }
          
        ],colour:'85'
        })
    }
}


Blockly.Blocks['parte2']={
    init:function(){
        this.jsonInit({
            message0:"%1",
            args0:[{
                type:"field_image",
                src:"parte2.png",
                     width:"150",
                    height:"150"
            }], colour: 85,output:"partA"
        })
    }
}
