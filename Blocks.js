
//EXEMPLO DE BLOCO NO FORMATO JSON, MOSTRANDO OS TIPOS DE CAMPOS
Blockly.Blocks['numero'] = {
    init: function () {
      this.jsonInit({
        message0: 'Bloco de Número: %1',
        args0: [
          {
            type: 'field_input',
            name: 'A'
          },
        ],


        colour: 160
      })
    }
  }



  
// BLOCO COM OPÇÕES
  Blockly.Blocks['escolha'] = {
    init: function () {
      this.jsonInit({
        message0: 'Escolha: %1',
        args0: [
          {
            type: 'field_dropdown',
            name:'ESCOLHA',
            "options":[
                ["Primeiro item", "Item1"],
                ["Segundo item", "Item2"],
            ]
            
          },
        ],
        colour: 55
      })
    }
  }

// BLOCO COM OPÇÕES IMAGENS
     Blockly.Blocks['Imagens']= {
        init:function(){
            this.jsonInit({
            type:"image_dropdown",
              message0:'Bloco com imagens %1',
              args0:[
                {
                    type:'field_dropdown',
                    name:'Img', 
                    options:[
                        ["none","NONE"],
                        [{"src":"lua.png", "width":50,"height": 50},"LUA"]
                    ]}], colour:755})
        }}
// BLOCO COM CHECKBOX 
      Blockly.Blocks['checkbox'] = {
          init: function(){
            this.jsonInit({
                message0:'Checkbox %1',
                args0:[
                  { 
                    type:"field_checkbox",
                    name:"checkbox",
                    checked:true
                  }
                ], colour:190

            })
          }
      }
    
  //BLOCO  LABEL
  Blockly.Blocks['label']={
    init:function(){
        this.jsonInit({
            message0:'Bloco de Texto %1',
            args0:[
                {
                    type:"input_dummy"
                },
            ], colour:560
        })
    }
  }

  Blockly.Blocks['label1']={
    init:function(){
        this.jsonInit({
            message0:'%1',
            args0:[
                {
                    type:"field_label",
                    text:"oláaaa"
                },
            ], colour:557
        })
    }
  }

  // BLOCO COM IMAGENS
      Blockly.Blocks['IMG']= {
        init: function(){
            this.jsonInit({
                message0:"%1",
                args0:[
                    {
                        type:"field_image",
                        src: "lua.png",
                        width:"150",
                        height:"150"
                    }
                ], colour:888, output:"lua"
            })
        }
      }

      Blockly.Blocks['IMG2']= {
        init: function(){
            this.jsonInit({
                message0:"%1",
                args0:[
                    {
                        type:"field_image",
                        src: "saturn.jpg",
                        width:"150",
                        height:"150"
                    }
                ], colour:488, output:"saturn"
            })
        }
      }


    Blockly.Blocks['jogo1']={
      init:function(){
        this.jsonInit({
          message0:' Moon %1  ' ,
          args0:[{
                  type:"input_value",
                  name:"parte1",
                  check:"lua"
          },
         
          ], colour:98
        })
      }
    }
    Blockly.Blocks['jogo2']={
      init:function(){
        this.jsonInit({
          message0:' Saturn %1  ' ,
          args0:[{
                  type:"input_value",
                  name:"parte1",
                  check:"saturn"
          },
         
          ], colour:98
        })
      }
    }




const { Block } = require("blockly")
const { colour } = require("blockly/blocks");
