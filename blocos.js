const { Workspace } = require("blockly");

  Blockly.Blocks['operacao'] = {
    init:function() {
        this.jsonInit({
            message0:'Operação: %1  %2 %3 %4',
            args0:[
            {
                type:'field_number',
                name:'A',
                id:"numeroA",

            },
            {
                type:'field_dropdown',
                name:'operacoes',
                options:[
                    ["+", "Adição"],
                    ["-", "Subtração"],
                    ["*", "Multiplicação"],
                    ["/", "Divisão"],
                ],
               

            },
            {
                type:'field_number',
                name:'B', 
                id:"numeroB",

            },
            {
                type:'input_value',
                name:'encaixe',
                check:"res",

            }
        ], 
        colour:85, 
        "nextStatement": "Action"
        })
    }
  }

  Blockly.Blocks['resultado'] ={
    init: function(){
        this.jsonInit({
            message0:'%1',
            args0:[
                {
                    type:"field_number",
                    name:"resultado",
                }
            ], 
            colour:747, 
           // output:"res"
           "previousStatement": "Action",

        })
    }
  }

  /*function calculando(){
        let numeroA = document.querySelector('.numeroA');
        let numeroB = document.querySelector('.numeroB');

        let calcula = numeroA+numeroB;


  }*/
 