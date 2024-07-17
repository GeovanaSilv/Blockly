
//ENTRADAS DE CAMPOS
Blockly.Blocks['entrada']={
    init:function(){
        this.jsonInit({
            message0:'Bloco de Entrada %1',
            args0:[{
                    type:"input_value",
                    name:"A",
                  check:"opa1"  
              }
            ], colour:85
        })
    }
}

Blockly.Blocks['saida']={
    init:function(){
        this.jsonInit({
            message0:'Bloco de Saída %1',
            args0:[{
                    type:"field_dropdown",
                    name:'ESCOLHA',
                   "options":[
                ["Primeiro item", "Item1"],
                ["Segundo item", "Item2"],
            ]
            
                  
              }
            ], colour:85, output:"opa1", 

        })
    }
}