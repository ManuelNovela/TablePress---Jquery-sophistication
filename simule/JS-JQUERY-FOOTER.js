/* CODIGO JQUERY FOOTER
*/ 

jQuery(document).ready(function( $ ){
  /* Disponivel | Reservado | Vendido    */ 
    $('#tablepress-12 tbody tr td.column-7').each(function() {
        $(this).html( $(this).html()
            .replace(/Disponível/g, 
                '<span style="display: none;">Disponível</span><i class="fa fa-check" style="font-size:15px;color:green"></i>')
            .replace(/Reservada/g, 
                '<span style="display: none;">Reservada</span><i class="fa fa-times" style="font-size:15px;color:red"></i>')
            .replace(/Vendida/g, 
                '<span style="display: none;">Vendida</span><i class="fa fa-times" style="font-size:15px;color:red"></i>')
        );
    });
    
    $('#tablepress-15 tbody tr td.column-7').each(function() {
        $(this).html( $(this).html()
            .replace(/Disponível/g, 
                '<span style="display: none;">Disponível</span><i class="fa fa-check" style="font-size:15px;color:green"></i>')
            .replace(/Reservada/g, 
                '<span style="display: none;">Reservada</span><i class="fa fa-times" style="font-size:15px;color:red"></i>')
            .replace(/Vendida/g, 
                '<span style="display: none;">Vendida</span><i class="fa fa-times" style="font-size:15px;color:red"></i>')
        );
    });
    
    
  //Verificar localizacao
  var currPath = window.location.pathname; 

  var controle_form = 0,erro = 0;
  var sub_email = "";
  var sub_nome = "";
  var sub_telefone = "";
  var sub_conteudo = "";
  
    function setCookie(cname,cvalue,exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }


    //Alinhar com 
    $('.dt-buttons').attr("style", "float: left; margin-top: 10px");
    
  
    $('.closeJuncao').click(function(){
        $('#modalJuncao').toggle();
    });
    
    // 12 child
    $('#tablepress-12 td:nth-child(12),#tablepress-12 th:nth-child(12)').hide();

    //esconder ;
    $('#tablepress-12 td:nth-child(1),#tablepress-12 th:nth-child(1)').removeClass("dtr-control");

    
//MOSTAR COTA NO CLICK
    //quando clico linha da tabela
    $("#tablepress-12 tr td").click(function(){
      
        //titulo  
        $('#manuel_modal_titulo').text("Saiba mais sobre essa Carta de Crédito Contemplada");
      
            
        
      
          var adm = $(this).parent().find('td.column-1');
          var credito = $(this).parent().find('td.column-2').replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
          var entrada = $(this).parent().find('td.column-3').replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
          var prazo = $(this).parent().find('td.column-4');
          var parcelas =$(this).parent().find('td.column-5');
          var prox_parcela = $(this).parent().find('td.column-6');
          var status = $(this).parent().find('td.column-7');
          var percent_entrada =$(this).parent().find('td.column-8');
          var saldo_devedor = $(this).parent().find('td.column-9');
          //var custo_total_reais = $(this).parent().find('td.column-10');
          //var custo_total_percentes = $(this).parent().find('td.column-11');
          var taxa_mensal = $(this).parent().find('td.column-10');
          var codigo = $(this).parent().find('td.column-11');
          var regra = $(this).parent().find('td.column-12');
      
             var aux = 'Gostaria de contratar essa de Cota: Tipo: Veiculos |'+
                      'Administradora: '+ adm.text() +' | '+ 
                      'Codigo: '+ codigo.text() +' | '+ 
                      'Crédito: '+ credito.text() +' | '+ 
                      'Entrada: '+ entrada.text() +' | '+ 
                      'Prazo: '+prazo.text() +' | '+ 
                      'Proxima Parcela Dia: '+ prox_parcela.text()  +' | '+
                      'Saldo Devedor: '+ saldo_devedor.text() +' | '+ 
                      'REGRAS PARA USO: '+ regra.text() +' | '+ 
                      ' Obrigado Pela atencao ';
            
            
            setCookie("sub_conteudo", aux, 30);
      
          //caregando modelo
          var modelo_Impressao = '<table class="table ">'+
                     '<tbody >    '+  
                
                     '    <tr id="copyCotaTipo">'+ 
                     '       <td>Cota para</td>'+ 
                     '       <td  id="tbCotaTipo">Veículos</td>'+ 
                     '   </tr>'+
                
                     '   <tr id="copyAdm">'+ 
                     '       <td>Administradora</td>'+ 
                     '       <td>'+adm.text()+' <!--<img id="tbCotaAdminImg" src="administradoras/25092020162511/thumbs/" title="Unifisa" alt="Unifisa" height="26" class="img-rounded" > --> </td>'+ 
                     '   </tr>'+ 
                
                     '   <tr id="copyCredito">'+ 
                     '       <td width="50%">Crédito</td>'+ 
                     '       <td width="50%" id="tbCotaCredito">'+credito.text()+'</td>'+ 
                     '   </tr>'+ 
                     '   <tr id="copyEntrada">'+ 
                     '       <td>Entrada</td>'+ 
                     '       <td id="tbCotaEntrada"> '+entrada.text()+'</td>'+ 
                     '   </tr>'+ 
                    
                     '   <tr id="copyPrazo">'+ 
                     '       <td>Prazo</td>'+ 
                     '       <td id="tbCotaEntrada">   '+prazo.text()+'</td>'+ 
                     '   </tr>'+ 
                        
                     '   <tr id="copyParcelas">'+ 
                     '       <td>Parcelas</td>'+ 
                     '       <td id="tbCotaParcelas">'+parcelas.text()+'</td>'+ 
                     '   </tr>'+ 
                
                     '   <tr id="copyProxParcela">'+ 
                     '       <td>Proxima Parcela</td>'+ 
                     '       <td >'+prox_parcela.text()+'</td>'+ 
                     '   </tr>'+ 
                     
                     '   <tr id="copySituacao">'+ 
                     '       <td>Situação</td>'+ 
                     '       <td id="tbCotaSituacao">'+status.text()+'</td>'+ 
                     '   </tr>'+ 
                     '   <tr >'+ 
                     '       <td>% da Entrada</td>'+ 
                     '       <td >'+percent_entrada.text()+'</td>'+ 
                     '   </tr>'+ 
                
                     '   <tr id="copySaldoDevedor">'+ 
                     '       <td>Saldo Devedor</td>'+ 
                     '       <td > '+saldo_devedor.text()+'</td>'+ 
                     '   </tr>'+ 
                   
                     '   <tr id="copyCotasSelecionadas">'+ 
                     '       <td>Codigo</td>'+ 
                     '       <td>'+codigo.text()+'</td>'+ 
                     '   </tr>'+ 
                 
                        ' </tbody>'+ 
                        ' </table> ' +
                    
                   '<h4 style="font-size:16px;" id="copyRegra">'+ regra.html() +'</h4>'+
                   '<style>  </style>';
                              
      
      
                $('#textosModalJuncao').html(modelo_Impressao);
      
                
                //footer
                controle_form =1;
                $('#mostrar_formulario').show();
              
               $('#modalJuncao').toggle();
      
      
      });
  
     // Clicks Imoveis
    $("#tablepress-15 tr td").click(function(){
            
        if (!$(this).hasClass("botao_select")) {
         
          $('#manuel_modal_titulo').text("Saiba mais sobre essa Carta de Crédito Contemplada");
            
          var adm = $(this).parent().find('td.column-1');
          var credito = $(this).parent().find('td.column-2').replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
          var entrada = $(this).parent().find('td.column-3').replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
          var prazo = $(this).parent().find('td.column-4');
          var parcelas =$(this).parent().find('td.column-5');
          var prox_parcela = $(this).parent().find('td.column-6');
          var status = $(this).parent().find('td.column-7')
          var saldo_devedor =$(this).parent().find('td.column-8');
          var percent_entrada = $(this).parent().find('td.column-9');
          var taxa_mensal = $(this).parent().find('td.column-10');
          var codigo = $(this).parent().find('td.column-11');
          
           var aux = 'Gostaria de contratar essa Cota: Tipo: Imovel |'+
                      'Administradora: '+ adm.text() +' | '+ 
                      'Codigo: '+ codigo.text() +' | '+ 
                      'Crédito: '+ credito.text() +' | '+ 
                      'Entrada: '+ entrada.text() +' | '+ 
                      'Prazo: '+ prazo.text() +' | '+ 
                      'Proxima Parcela Dia: '+ prox_parcela.text() +' | '+
                      'Saldo Devedor: '+ saldo_devedor.text() +' | '+ 
                      ' Obrigado Pela atencao ';
            
            
            setCookie("sub_conteudo", aux, 30);
          
          var modelo_Impressao = '<table class="table ">'+
                                 '<tbody >    '+ 
                                 '    <tr id="copyCotaTipo">'+ 
                                 '       <td>Cota para</td>'+ 
                                 '       <td  id="tbCotaTipo">Imóvel</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copyAdm">'+ 
                                 '       <td>Administradora</td>'+ 
                                 '       <td>'+adm.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copyCredito">'+ 
                                 '       <td>Crédito</td>'+ 
                                 '       <td>R$ '+credito.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copyEntrada">'+ 
                                 '       <td>Entrada</td>'+ 
                                 '       <td>R$ '+entrada.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copyPrazo">'+ 
                                 '       <td>Prazo</td>'+ 
                                 '       <td>'+prazo.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copyParcelas">'+ 
                                 '       <td>Parcelas</td>'+ 
                                 '       <td>R$ '+parcelas.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copyProxParcela">'+ 
                                 '       <td>Proxima Parcela</td>'+ 
                                 '       <td>'+prox_parcela.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr>'+ 
                                 '    <tr id="copySituacao">'+ 
                                 '       <td>Situação</td>'+ 
                                 '       <td>'+status.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copySaldoDevedor">'+
                                 '       <td>Saldo Devedor</td>'+ 
                                 '       <td>R$ '+saldo_devedor.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr>'+ 
                                 '       <td>% da Entrada</td>'+ 
                                 '       <td>'+percent_entrada.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr>'+ 
                                 '       <td>Taxa Mensal</td>'+ 
                                 '       <td>'+taxa_mensal.text()+'</td>'+ 
                                 '   </tr>'+
                                 '    <tr id="copyCotasSelecionadas">'+ 
                                 '       <td>Codigo</td>'+ 
                                 '       <td>'+codigo.text()+'</td>'+ 
                                 '   </tr>'+
                                 ' </tbody>'+ 
                                 ' </table> ';
              
          
          $('#textosModalJuncao').html(modelo_Impressao);
          //footer
          controle_form =1;
          $('#mostrar_formulario').show();
          $('#modalJuncao').toggle();
        }
      
     });  
     
 
     $('#tablepress-12 thead tr').find('th').eq(0).before('<th >JUNTAR COTAS</th>');
  
     $('#tablepress-12').find('tr').each(function(){
        $(this).find('td').eq(0).before('<td style="width: 5px;"><input type="checkbox" class="juntarcotas cat_50_veiculos"></td>');
     });
  
  
    var actual_adm = "";
    var total_cotas = 0;
  
    var countChecked = function() {
      
        var n = $( "input:checked" ).length;
        total_cotas = n ;
      
        //PEGAR ADM SELECIONADO
        if( n == 1){
             $( "input[type=checkbox]" ).each(function(){
                if($(this).is(':checked')) {
                    actual_adm = $(this).parent().parent().find('td.column-1').text();
                }
             });
        }
        if( n == 0){
            actual_adm = "";
        }
        
        
        
       //DESABILITAR CLICK
        if( n >= 1){
            $( "input[type=checkbox]" ).each(function(){
                if( $(this).parent().parent().find('td.column-1').text() != actual_adm ){
                   $(this).attr("disabled",true);
                }
            });
        //HABILITAR CLICK
        }else{
            $( "input[type=checkbox]" ).each(function(){
                $(this).attr("disabled",false);
                //REMOVER TODOS COM STATUS RESERVADO
              if( $(this).parent().parent().find('td.column-7').text() == "Reservada" 
                  || $(this).parent().parent().find('td.column-7').text() == "Vendida"){
                  $(this).attr("disabled",true);
              }
            
            });
        }
        
        if( n > 1){
            //Mostrar Botao soma
            $('#modalAvisoSomar').show(); 
        }else{
             $('#modalAvisoSomar').hide(); 
        }
      
    };
  
 
    // CALCULAR SELECIONADOS E REMOVER OPCAO DE CLICK 
    countChecked();
    $( "input[type=checkbox]" ).on( "click", countChecked );
    
  
    // FORMATAR MOEDA
    function formatar(valor = 0.00, tipo = 1) {
    // code to be executed
        switch (tipo){
            case 1:{
                // com R$  em 0.000,00
               return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            }break;
            case 2:{
                //sem R$
               return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$','');
            }break;
          case 3: {
                // Somente inteiro
              return valor.toFixed(0);
          }
            
            
        }
    }
    // SOMA ARRAY
    function somar_array(array, i1, i2){
        let result = 0;

        array.slice(i1, (i2 + 1)).forEach(element => {
            result += element;
        });

        return result;
    }
    
    // FORMATAR MOEDA
     function calcular_soma_parcelas(prazo, parcelas) {
        prazo.sort();
       
       
        result = '<span id="copyPrazo">'+ prazo[prazo.length-1]+'</span><br><b>Parcelas : </b><span id="copyParcelas">';
      
        var prazos_usados = [];
        
        var prazo_decorido=0;
        for (var i = 0; i < prazo.length; i++) {
          
            if(!prazos_usados.includes(prazo[i])){ 
               prazos_usados.push(prazo[i]); //addicionar aos usados
               if(i < prazo.length -1 ){
               
                    if( prazo[i] <= prazo[i+1]){
                        if( i > 0){
                            result += '<span style="margin-left:75px;">'+ (prazo[i] - prazo_decorido)+ ' X ';
                            prazo_decorido += (prazo[i] - prazo_decorido);
                        }else{
                            result += '<span>'+ prazo[i] + ' X ';
                            prazo_decorido += prazo[i];
                        }
                        //somar do indice a indice                                     
                        result += formatar( somar_array(parcelas, i, parcelas.length -1 ), 1) + '</span><br>';  
                    }
               }else{
                    result += '<span style="margin-left:75px;">'+ (prazo[i] - prazo_decorido) + ' X ';
                    result += formatar( somar_array(parcelas, i, parcelas.length -1 ), 1) + "<br>"; 
               }
            }
        }
        

        return result+'</span>';
    }
  
     function calcular_soma_parcelas_email(prazo, parcelas) {
        prazo.sort();
       
       
        result = prazo[prazo.length-1]+"Parcelas : ";
      
        var prazos_usados = [];
        
        var prazo_decorido=0;
        for (var i = 0; i < prazo.length; i++) {
          
            if(!prazos_usados.includes(prazo[i])){ 
               prazos_usados.push(prazo[i]); //addicionar aos usados
               if(i < prazo.length -1 ){
               
                    if( prazo[i] <= prazo[i+1]){
                        if( i > 0){
                            result += '|'+ (prazo[i] - prazo_decorido)+ ' X ';
                            prazo_decorido += (prazo[i] - prazo_decorido);
                        }else{
                            result += '|'+ prazo[i] + ' X ';
                            prazo_decorido += prazo[i];
                        }
                        //somar do indice a indice                                     
                        result += formatar( somar_array(parcelas, i, parcelas.length -1 ), 1) + '|';  
                    }
               }else{
                    result += '|'+ (prazo[i] - prazo_decorido) + ' X ';
                    result += formatar( somar_array(parcelas, i, parcelas.length -1 ), 1) + "|"; 
               }
            }
        }
        

        return result;
    }
  



/**********************
 * 
 *      F I M     S O M A
 * 
 * *******************************/     
    //MOSTAR SOMA DE COTAS
    $('#linkSomar').click(function(){

        //SOMENTE COMTEMPLADOS
        if((currPath == '/veiculos') || currPath == '/veiculos/'){ 
        
              var soma_credito = 0;
              var soma_entrada = 0;
      
              var array_prazo = [];
              var array_parcelas = [];
      
              var soma_prox_parcela = '';
              var soma_status = '';
              var soma_percent_entrada = 0;
              var soma_saldo_devedor = 0 ;
              var soma_custo_total_reais = 0;
              var soma_custo_total_percentes = 0;
              var soma_taxa_mensal = 0;
              var soma_codigo = '<span id="copyCotasSelecionadas"><br/>';
              var soma_regra = ''; 
      
             var prox_parcela_actual = new Date(2099, 01, 01);
             var prox_parcela = new Date(2099, 01, 01);

             
      
             //pegar dados selecionados
             var i = 0;
             $( "input[type=checkbox]" ).each(function(){
               if($(this).is(':checked')) {
                   soma_credito += eval($(this).parent().parent().find('td.column-2').text().replace('R$','').replace(' ','').replace('.','').replace(',','.'));
                   soma_entrada += eval( $(this).parent().parent().find('td.column-3').text().replace('R$','').replace(' ','').replace('.','').replace(',','.').replace('%','') );
                   
                   
                   var parcelasText = $(this).parent().parent().find('td.column-5').text().replaceAll('R$','').replaceAll(' ','').replaceAll('.','').replaceAll(',','.');
                   
                   
                    if(parcelasText.includes("+")){
                        console.log(parcelasText);
                        const dados = parcelasText.split("+");
                        for (j = 0; j < dados.length; j++) {
                            console.log(dados[j]);
                            if(dados[j] !== undefined) {
                                const elemento = dados[j]?.split("x");
                                array_prazo[i] = eval(elemento[0].trim()); //salvar prazo
                                array_parcelas[i] = eval(elemento[1].trim()); //salvar parcelas
                                i =  eval(i)+1;
                                
                            }
                        } 
                        i =  eval(i)-1;
                    }else{
                        array_prazo[i] = eval($(this).parent().parent().find('td.column-4').text().replace('R$','').replace(' ','').replace('.','').replace(',','.'));
                        array_parcelas[i] = eval($(this).parent().parent().find('td.column-5').text().replace('R$','').replace(' ','').replace('.','').replace(',','.'));
                    }
                 
                 
                   
                   
                  var aux = $(this).parent().parent().find('td.column-6').text();
                  const dataAux= aux .split("/");
                  prox_parcela  = new Date(dataAux[2], dataAux[1], dataAux[0]);
                  
                 if( prox_parcela_actual.getTime() > prox_parcela.getTime()){
                        prox_parcela_actual = prox_parcela;
                  }
                  soma_prox_parcela = prox_parcela_actual;
                 
                   
                   soma_status = $(this).parent().parent().find('td.column-7').text();
                 
                   soma_saldo_devedor += eval( $(this).parent().parent().find('td.column-9').text().replace('R$','').replace(' ','').replace('.','').replace(',','.') );
                   soma_taxa_mensal += eval( $(this).parent().parent().find('td.column-10').text().replace('R$','').replace(' ','').replace('.','').replace(',','.').replace('%','') );
                 
                   soma_codigo += "<span> Crédito: "+$(this).parent().parent().find('td.column-2').text() +" | Código: " + $(this).parent().parent().find('td.column-11').text() +"</span><br/>";
                   soma_regra  = $(this).parent().parent().find('td.column-12').html();
                 
                   i =  eval(i)+1;
               }
             });
      
            soma_codigo += '</span>';
            
            //titulo  
            $('#manuel_modal_titulo').text("Soma de "+total_cotas+" Cotas");
      
      
            var modelo_soma = '<span id="copyCotaTipo"><b>Cota para : </b>Veículos<br></span><span id="copyAdm"><b>Administradora : </b>'+ actual_adm + '</span><br>'+
                              '<span id="copyCredito"><b>Crédito : </b>'+ formatar(soma_credito, 1) +'</span><br>'+
                              '<span id="copyEntrada"><b>Entrada : </b>'+ formatar(soma_entrada,1)+'</span><br>'+
                              '<span><b>Prazo : </b>'+ calcular_soma_parcelas(array_prazo, array_parcelas) +'</span><br>' + 
                              '<span id="copyProxParcela"><b>Proxima Parcela Dia : </b>'+ soma_prox_parcela.getDate()+'/'+soma_prox_parcela.getMonth()+'/'+soma_prox_parcela.getFullYear() +'</span><br>'+
                              '<span id="copySituacao"><b>Situação : </b>'+ soma_status +'</span><br>'+
                              '<span id="copySaldoDevedor"><b>Saldo Devedor : </b>'+ formatar(soma_saldo_devedor,1) +'</span><br>'+
                              '<span id="copyCodigo"><b>Cotas Selecionadas : </b>'+ soma_codigo +'</span><br><br>'+
                              '<span id="copyRegra"><b>REGRAS PARA USO : </b>'+ soma_regra +'</span><br>';
            
      
            //body
            $('#textosModalJuncao').html(modelo_soma);
            
      
        
            //footer
            controle_form = 0;
            $('#mostrar_formulario').hide();
                
      
            $('#modalJuncao').toggle();

        }
        //SOMENTE IMOVEIS
        if((currPath == '/imoveis') || currPath == '/imoveis/'){ 
            //titulo  
            $('#manuel_modal_titulo').text("Soma de "+total_cotas+" Cotas de imoveis");
       
          
            var soma_credito = 0;
            var soma_entrada = 0;
      
            var array_prazo = [];
            var array_parcelas = [];
      
            var soma_prox_parcela = '';
            var soma_percent_entrada = 0;
            var soma_status = "";
            var soma_saldo_devedor = 0 ;
            var soma_custo_total_reais = 0;
            var soma_custo_total_percentes = 0;
            var soma_taxa_mensal = 0;
            var soma_codigo = '<span id="copyCotasSelecionadas"><br/>';

            var prox_parcela_actual = new Date(2099, 01, 01);
            var prox_parcela = new Date(2099, 01, 01);

            //pegar dados selecionados
             var i = 0;
             $( "input[type=checkbox]" ).each(function(){
               if($(this).is(':checked')) {

                   soma_credito += eval($(this).parent().parent().find('td.column-2').text().replace('R$','').replace('.','').replace(',','.'));
                   soma_entrada += eval( $(this).parent().parent().find('td.column-3').text().replace('R$','').replace('.','').replace(',','.').replace('%','') );
                                
                                
                                
                   var parcelasText = $(this).parent().parent().find('td.column-5').text().replaceAll('R$','').replaceAll(' ','').replaceAll('.','').replaceAll(',','.');
                   
                   
                    if(parcelasText.includes("+")){
                        console.log(parcelasText);
                        const dados = parcelasText.split("+");
                        for (j = 0; j < dados.length; j++) {
                            console.log(dados[j]);
                            if(dados[j] !== undefined) {
                                const elemento = dados[j]?.split("x");
                                array_prazo[i] = eval(elemento[0].trim()); //salvar prazo
                                array_parcelas[i] = eval(elemento[1].trim()); //salvar parcelas
                                i =  eval(i)+1;
                                
                            }
                        } 
                        i =  eval(i)-1;
                    }else{
                        array_prazo[i] = eval($(this).parent().parent().find('td.column-4').text().replace('R$','').replace(' ','').replace('.','').replace(',','.'));
                        array_parcelas[i] = eval($(this).parent().parent().find('td.column-5').text().replace('R$','').replace(' ','').replace('.','').replace(',','.'));
                    }
                 
                 
                   var aux = $(this).parent().parent().find('td.column-6').text();
                   const dataAux= aux .split("/");
                   prox_parcela  = new Date(dataAux[2], dataAux[1], dataAux[0]);
                  
                   if( prox_parcela_actual.getTime() > prox_parcela.getTime()){
                        prox_parcela_actual = prox_parcela;
                   }

                   soma_prox_parcela = prox_parcela_actual;
                   
                   soma_status = $(this).parent().parent().find('td.column-7').text();
                   soma_saldo_devedor += eval( $(this).parent().parent().find('td.column-9').text().replace('R$','').replace('.','').replace(',','.') );
                   
                    soma_codigo += "<span> Crédito: "+$(this).parent().parent().find('td.column-2').text() +" | Código: " + $(this).parent().parent().find('td.column-11').text() +"</span><br/>";
                 
                   i =  eval(i)+1;
               }
             });
            
            soma_codigo += '</span>';
          
          
            var modelo_soma = '<span id="copyCotaTipo"><b>Cota para : </b>Veículos<br></span><span id="copyAdm"><b>Administradora : </b>'+ actual_adm + '</span><br>'+
                              '<span id="copyCredito"><b>Crédito : </b>'+ formatar(soma_credito, 1) +'</span><br>'+
                              '<span id="copyEntrada"><b>Entrada : </b>'+ formatar(soma_entrada,1)+'</span><br>'+
                              '<span><b>Prazo : </b>'+ calcular_soma_parcelas(array_prazo, array_parcelas) +'</span><br>' + 
                              '<span id="copyProxParcela"><b>Proxima Parcela Dia : </b>'+ soma_prox_parcela.getDate()+'/'+soma_prox_parcela.getMonth()+'/'+soma_prox_parcela.getFullYear() +'</span><br>'+
                              '<span id="copySituacao"><b>Situação : </b>'+ soma_status +'</span><br>'+
                              '<span id="copySaldoDevedor"><b>Saldo Devedor : </b>'+ formatar(soma_saldo_devedor,1) +'</span><br>'+
                              '<span id="copyCodigo"><b>Cotas Selecionadas : </b>'+ soma_codigo +'</span><br><br>';
            
             //body
            $('#textosModalJuncao').html(modelo_soma);
             //footer
            controle_form = 0;
            $('#mostrar_formulario').hide();
            $('#modalJuncao').toggle();
        }
      
      
    });      

/**********************
 * 
 *      F I M     S O M A
 * 
 * *******************************/
   
    
  
  
    var yourNumber = "5594992113672"
    var yourMessage = " your message in %0D%0A string "

    function getLinkWhastapp(number, message) {
      
      number = yourNumber;
        
        let parcelas = "";
        
        $('#copyParcelas').children('span').each(function() {
            parcelas +=$(this).text()+ "%0a%09%09"; 
        });
        
        let count=0;
        let codigo = "*Cotas Selecionadas* :%0a";
        
        
        $('#copyCotasSelecionadas').children('span').each(function() {
            count = eval(count + 1);
            codigo += $(this).text().trim()+ "%0a"; 
        });
        
        let prazo = $('#copyPrazo').text().trim();
        
        let is_soma = "%0a";
        if(count == 0){
            parcelas = $('#copyParcelas').text().trim();
            codigo = "Cota Selecionada%09 "+$('#copyCotasSelecionadas').text().trim();
        }else{
             prazo = "Prazo :%09"+ prazo 
             is_soma = ' Parcelas%0aSendo : %09';
        }
        
        let tipo = $('#copyCotaTipo').text().trim();
        let admin = $('#copyAdm').text().trim();
        let credito = $('#copyCredito').text().trim();
        let entrada = $('#copyEntrada').text().trim();
        
        let proxParcela = $('#copyProxParcela').text().trim();
        let situacao = $('#copySituacao').text().trim();
        let saldoDevedor = $('#copySaldoDevedor').text().trim();
        let regra= $('#copyRegra').text().trim();
        
        var copyText = "*"+tipo+" %09 | %09 "+admin+"*"
                +"%0a %0a*"+credito+"*"
                +"%0a"+entrada
                +"%0a"+prazo+ is_soma
                +""+parcelas
                +"%0a"+proxParcela
                +"%0a%0a"+situacao
                +"%0a"+saldoDevedor
                +"%0a %0a"+ codigo
                +"%0a%0a"+ regra
                +"%0a%0a_Consulte mais propostas em www.lenorepresentacoes.com.br_";
      
        
      return 'https://api.whatsapp.com/send?phone=' + number + '&text=%20' + copyText;
    } 
    
    //Copiar cota
    $('#copiarCota2') .click(function(){
        
        let parcelas = ''
        
        $('#copyParcelas').children('span').each(function() {
            parcelas +=$(this).text()+ "\n\t\t"; 
        });
        
        let count=0;
        let codigo = "*Cotas Selecionadas* :\n";
        
        
        $('#copyCotasSelecionadas').children('span').each(function() {
            count = eval(count + 1);
            codigo += $(this).text().trim()+ "\n"; 
        });
        
        
        let prazo = $('#copyPrazo').text().trim();
        
        let is_soma = "\n";
        if(count == 0){
            parcelas = $('#copyParcelas').text().trim();
            codigo = "Cota Selecionada : "+$('#copyCotasSelecionadas').text().trim();
        }else{
             is_soma = ' Parcelas\nSendo :\t';
             prazo = "Prazo :\t"+ prazo 
        }
        
        let tipo = $('#copyCotaTipo').text().trim();
        let admin = $('#copyAdm').text().trim();
        let credito = $('#copyCredito').text().trim();
        let entrada = $('#copyEntrada').text().trim();
        let proxParcela = $('#copyProxParcela').text().trim();
        let situacao = $('#copySituacao').text().trim();
        let saldoDevedor = $('#copySaldoDevedor').text().trim();
        let regra= $('#copyRegra').text().trim();
        
        var copyText = "*"+tipo+" \t | \t "+admin+"*"
                +"\n\n*"+credito+"*"
                +"\n"+entrada
                +"\n"+prazo+is_soma
                +""+parcelas
                +"\n"+proxParcela
                +"\n"+situacao
                +"\n"+saldoDevedor
                +"\n\n"+ codigo
                +"\n\n"+ regra
                +"\n\n_Consulte mais propostas em www.lenorepresentacoes.com.br_";;
                
        navigator.clipboard.writeText(copyText.replace(":", "")).then(() => {
            alert("Cota Copiada");
        })
        .catch(() => {
            alert("something went wrong");
        });
        
        
    });
  
    //quando manda por whatsapp
    $('#whatsappJuncao') .click(function(){
        var link  = getLinkWhastapp();
        if(erro == 0 ){
            window.open(link, '_blank');
        }
        
    });
  
    $('#emailJuncao') .click(function(){
        var link2  = getLinkWhastapp();
        if(erro == 0 ){
            window.open('https://www.lenorepresentacoes.com.br/form-captura-contemplada-autos/', '_blank');
           
        }
        
    });
  
   
    //Verificar localizacao
    var currPath = window.location.pathname; 
    //Mostrar Botao soma
    if((currPath == '/form-captura-contemplada-autos') || currPath == '/form-captura-contemplada-autos/'){ 
         $('#butaosubmeter').ready(function( $ ){
            // Your code in here
            
            sub_email = getCookie("sub_email");
            sub_nome = getCookie("sub_nome");
            sub_telefone = getCookie("sub_telefone");
            sub_conteudo = getCookie("sub_conteudo");
           
           
            
            $('#form-field-email').val(sub_email);
            $('#form-field-name').val(sub_nome);
            $('#form-field-field_4271f55').val(sub_telefone);
            $('#form-field-field_conteudo').val(sub_conteudo);
           
            
            document.getElementById("butaosubmeter").click();
        });
      
      
    }
        
    //12 veiculos
    var veiculos_ADMS = [];
    var modelo_ADMS = ' <option value="" selected="">PESQUISAR TODAS ADMINISTRADORAS</option>';
          
    $('#tablepress-12 tbody tr').each(function(index, tr) { 
  
        var item  =  $(this).find('td.column-1').text();
        
        var nao_existe = true;
        for (let i = 0; i < veiculos_ADMS.length; i++) {
            if(veiculos_ADMS[i] == item){
                nao_existe = false;
            }
        }
      
        if(nao_existe) {
            veiculos_ADMS[index]=item;
            modelo_ADMS = modelo_ADMS+'<option value="'+veiculos_ADMS[index]+'">'+veiculos_ADMS[index]+'</option>';
        }
      
    });
  
    
    $('#input-administradora').html(modelo_ADMS);
    
  
    $('.irs-handle').draggable({
        axis: 'x', 
        containment: "parent"
    }); 
  
    $('#input-credito').val(10000);
    $('#input-entrada').val(15);
    $('#input-parcela').val(300);
    $('.irs-line').on('click', function(e){
        var posX = $(this).offset().left,
            posY = $(this).offset().top;
        
        
      
        var comprimento_parent = $(this).width();
        var posicao = (e.pageX - posX);
       
        console.log("Total:"+comprimento_parent);
        console.log("pos:"+posicao);
      
        var progresso = Math.ceil((posicao/comprimento_parent) * 100);
        var valor_entrada = Math.ceil( ( progresso * 35 ) / 100 ) + eval(15);
        var valor_credito = Math.ceil( progresso * 10000 );
        if(progresso == 0)  { valor_credito = 10000;}
      
       
        var valor_parcela = Math.ceil( progresso * 300 );
        if(progresso == 0)  { valor_parcela = 300;}
        
         
       
      
        if( $(this).parent().find('.irs-single.credito').length ){
          $('#input-credito').val(valor_credito);
        }
                                  
        if( $(this).parent().find('.irs-single.entrada').length ){
          $('#input-entrada').val(valor_entrada);
        }
      
        if( $(this).parent().find('.irs-single.parcela').length ){
          $('#input-parcela').val(valor_parcela);
        }
        
        valor_credito = $('#input-credito').val();
        valor_parcela = $('#input-parcela').val();
        var entrada_calculada = ($('#input-entrada').val() *  valor_credito) / 100;
        
       
        //visual
        var valor_credito_display = formatar(parseInt(valor_credito));                          //'R$ '+valor_credito.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+',00';
        var valor_parcela_display = formatar(parseInt(valor_parcela)); 
      
        $('#valor-credito').text(valor_credito_display);  
        $('#valor-entrada').text(formatar(entrada_calculada));
        $('#valor-parcela').text(valor_parcela_display);
      
        $(this).parent().parent().find('.irs-single.credito').text(valor_credito_display);
        $(this).parent().parent().find('.irs-single.entrada').text($('#input-entrada').val()+'%');
        $(this).parent().parent().find('.irs-single.parcela').text(valor_parcela_display);
        
        $(this).parent().parent().find('.irs-single.entrada').css('left', progresso+'%');
        $(this).parent().parent().find('.irs-single.credito').css('left', progresso+'%');
        $(this).parent().parent().find('.irs-single.parcela').css('left', progresso+'%');
        $(this).parent().parent().find('.irs-handle').css('left', progresso+'%');
    //  $(this).parent().parent().find('.irs-bar').css('width', progresso+'%');
        
        
    });
    
    $('#input-credito').val(10000);
    $('#input-entrada').val(15);
    $('#input-parcela').val(300);
    
    $('.irs-handle').on( "drag", function( event, ui ) {
        
        var comprimento_parent = $(this).parent().width()  - 24;
        var posicao = $(this).css("left").replace('px','');
       
        var progresso = Math.ceil((posicao/comprimento_parent) * 100);
        var valor_entrada = Math.ceil( ( progresso * 35 ) / 100 ) + eval(15);
        var valor_credito = Math.ceil( progresso * 10000 );
        if(progresso == 0)  { valor_credito = 10000;}
      
       
        var valor_parcela = Math.ceil( progresso * 300 );
        if(progresso == 0)  { valor_parcela = 300;}
        
      
       
      
        if( $(this).parent().find('.irs').find('.irs-single.credito').length ){
          $('#input-credito').val(valor_credito);
        }
                                  
        if( $(this).parent().find('.irs').find('.irs-single.entrada').length ){
          $('#input-entrada').val(valor_entrada);
        }
      
        if( $(this).parent().find('.irs').find('.irs-single.parcela').length ){
          $('#input-parcela').val(valor_parcela);
        }
        
        valor_credito = $('#input-credito').val();
        valor_parcela = $('#input-parcela').val();
        var entrada_calculada = ($('#input-entrada').val() *  valor_credito) / 100;
        
       
        //visual
        var valor_credito_display = formatar(parseInt(valor_credito));                          //'R$ '+valor_credito.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+',00';
        var valor_parcela_display = formatar(parseInt(valor_parcela)); 
      
        $('#valor-credito').text(valor_credito_display);  
        $('#valor-entrada').text(formatar(entrada_calculada));
        $('#valor-parcela').text(valor_parcela_display);
      
        $(this).parent().find('.irs').find('.irs-single.credito').text(valor_credito_display);
        $(this).parent().find('.irs').find('.irs-single.entrada').text($('#input-entrada').val()+'%');
        $(this).parent().find('.irs').find('.irs-single.parcela').text(valor_parcela_display);
        
        $(this).parent().find('.irs').find('.irs-single.entrada').css('left', progresso+'%');
        $(this).parent().find('.irs').find('.irs-single.credito').css('left', progresso+'%');
        $(this).parent().find('.irs').find('.irs-single.parcela').css('left', progresso+'%');
        $(this).parent().find('.irs-bar').css('width', progresso+'%');
        
        
    });
  
  
    //dados
    var DB_Veiculos = [];
    $('#tablepress-15 tbody tr').each(function(index, tr) { 
      
        var adm  =  $(this).find('td.column-1').text();
        var credito =  $(this).find('td.column-2').text().replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
        var entrada  =  $(this).find('td.column-3').text().replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
        var prazo  =  $(this).find('td.column-4').text();
        var parcela  =  $(this).find('td.column-5').text().replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
        //var regra  =  $(this).find('td.column-10').html();
        
        var veiculo = [];
        veiculo['adm'] = adm;
        veiculo['credito'] = credito;
        veiculo['entrada'] = entrada;
        veiculo['parcela'] = parcela.split("+")[0].substring(parcela.indexOf("x ") + 1);;
        veiculo['regra'] = "Sem Regras";
        veiculo['prazo'] = prazo;
      
        DB_Veiculos.push(veiculo);
        
    });
  
    $('#tablepress-12 tbody tr').each(function(index, tr) { 
      
        var adm  =  $(this).find('td.column-1').text();
        var credito =  $(this).find('td.column-2').text().replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
        var entrada  =  $(this).find('td.column-3').text().replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
        var prazo  =  $(this).find('td.column-4').text();
        var parcela =  $(this).find('td.column-5').text().replace('R$','').replace('R$ ','').replaceAll('.','').replaceAll(',','.');
        var regra  =  $(this).find('td.column-12').html();
        
        var veiculo = [];
        veiculo['adm'] = adm;
        veiculo['credito'] = credito;
        veiculo['entrada'] = entrada;
        veiculo['parcela'] = parcela.split("+")[0].substring(parcela.indexOf("x ") + 1);;
        veiculo['regra'] = regra;
        veiculo['prazo'] = prazo;
      
        DB_Veiculos.push(veiculo);
        
    });
  
    
  
    $('#simular').on('click', function(){
      $('#step-simulador').hide();
      
      
      var credito = parseFloat($('#input-credito').val());
      var credito_max = eval(credito) + eval(credito * 0.2);
      var credito_min = eval(credito) - eval(credito * 0.2);
        
      DB_Veiculos = DB_Veiculos.filter(function(value, index, arr){ 
        return ( parseFloat(value['credito']) >= parseFloat(credito_min) );
      });
        
      DB_Veiculos = DB_Veiculos.filter(function(value, index, arr){ 
        return ( parseFloat(value['credito']) <= parseFloat(credito_max) );
      });
      
      DB_Veiculos = DB_Veiculos.filter(function(value, index, arr){ 
        return parseFloat(value['entrada']) <= parseFloat( (parseFloat($('#input-entrada').val()) * parseFloat($('#input-credito').val()) )/ 100);
      });
      
      DB_Veiculos = DB_Veiculos.filter(function(value, index, arr){ 
        return parseFloat(value['parcela']) <= parseFloat($('#input-parcela').val());
      });
      
      
      DB_Veiculos.sort(function(a, b) {
        return a.credito > b.credito;
      });
      
      if(DB_Veiculos.length > 0){ 
           
            var modelo_opcao_tab = '<ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">'+
              '  <li class="nav-item" id="opt1-item" style="">'+
              '      <a class="nav-link active" id="opt1-tab" data-toggle="pill" role="tab" aria-controls="opt1" aria-selected="true">Opção 1</a>'+
              '  </li>';
            
           var admin_atual =  DB_Veiculos[0]['adm'];
           
           var contador = 1;
           for(i= 1; i < DB_Veiculos.length; i++){
              if(admin_atual != DB_Veiculos[i]['adm'] && contador<5){
                 admin_atual =  DB_Veiculos[i]['adm'] ; 
                 contador = contador + eval(1);
                 modelo_opcao_tab +=  '  <li class="nav-item" id="opt'+contador+'-item" style="">'+
                                      '      <a class="nav-link"  id="opt'+contador+'-tab" data-toggle="pill" href="#opt'+contador+'" role="tab" aria-controls="opt'+contador+'" aria-selected="false">Opção '+contador+'</a>'+
                                      '  </li>';
                 
              }
          }
          
          $('#mostrar_resultados').append($(modelo_opcao_tab + '</ul> <hr>'));
      
        var modelo_opcao = '';
        var admin_atual =  DB_Veiculos[0]['adm'];
        var contador = 1;
        for(i= 0; i < DB_Veiculos.length; i++){
            if( (admin_atual != DB_Veiculos[i]['adm'] && contador<5) || contador == 1){
                admin_atual =  DB_Veiculos[i]['adm'] ; 
                contador = contador + eval(1);
              
                var dados = getDadosAdm(admin_atual);
                //mostrar novos dados;
                modelo_opcao += '<div class="tab-content" id="pills-tabContent">'+
                    '<div class="tab-pane fade ';
                
                if(contador == 2){
                 modelo_opcao +=' active show ';
                }
                modelo_opcao +=' " id="opt'+(contador - 1)+'" role="tabpanel" aria-labelledby="opt'+(contador - 1)+'">'+
                    '    <div class="form-row">'+
                    '       <div class="form-group col-lg-12 col-12">'+
                    '          <div class="text-primary">'+
                    '             Administradora'+
                    '           </div>'+
                    '           <div class="result-control font-weight-bold">'+
                    '               <span id="opt'+(contador - 1)+'-adm">'+dados['adm']+'</span>'+
                    '           </div>'+
                    '       </div>'+
                    '    </div>'+
                    '    <div class="form-row">'+
                    '       <div class="form-group col-lg-12 col-12">'+
                    '          <div class="text-primary">'+
                    '             Valor do crédito'+
                    '           </div>'+
                    '           <div class="result-control font-weight-bold">'+
                    '               <span id="opt'+(contador - 1)+'-credito">'+dados['valor_credito']+'</span>'+
                    '           </div>'+
                    '       </div>'+
                    '   </div>'+
                    '    <div class="form-row">'+
                    '       <div class="form-group col-lg-12 col-12">'+
                    '          <div class="text-primary">'+
                    '             Valor do entrada'+
                    '           </div>'+
                    '           <div class="result-control font-weight-bold">'+
                    '               <span id="opt'+(contador - 1)+'-entrada">'+dados['valor_entrada']+'</span>'+
                    '           </div>'+
                    '       </div>'+
                    '   </div>'+
                    '    <div class="form-row">'+
                    '       <div class="form-group col-lg-6 col-6">'+
                    '          <div class="text-primary">'+
                    '             Prazo'+
                    '           </div>'+
                    '           <div class="result-control font-weight-bold">'+
                    '               <span id="opt'+(contador - 1)+'-prazo">'+dados['prazo']+'</span>'+
                    '           </div>'+
                    '       </div>'+
                    '       <div class="form-group col-lg-6 col-6">'+
                    '          <div class="text-primary">'+
                    '             Valor do Parcela'+
                    '           </div>'+
                    '           <div class="result-control font-weight-bold">'+
                    '               <span id="opt'+(contador - 1)+'-parcela">'+dados['valor_parcela']+'</span>'+
                    '           </div>'+
                    '       </div>'+
                    '   </div>'+
                    '<span id="opt'+(contador - 1)+'-regra"> Regra de Pagamento :'+ dados['regra'] +'</span>'+
                    '<div class="form-row mt-3 action-block">'+
                    '    <div class="col-6 text-center">'+
                    '        <button class="btn btn-lg btn-block btn-outline-primary font-weight-bold nova-busca" type="button" onclick="location.reload();" >'+
                    '            <i class="fa fa-search prefix text-secondary"></i>'+
                    '            Nova busca'+
                    '        </button>'+
                    '    </div>'+
                    '    <div class="col-6 text-center">'+
                    '        <button class="btn btn-lg btn-block btn-dark text-white font-weight-bold shadow" id="opt'+(contador - 1)+'-quero-esse" type="button">'+
                    '            <i class="fa fa-heart prefix text-secondary"></i>'+
                    '            <span class="choice-btn-text">Quero esse!</span>'+
                    '        </button>'+
                    '    </div>'+
                    '</div>'+
                '</div>';
                
            }
        }
            
      }else{
          modelo_opcao = 'Nao encotrado';
      }
      $('#mostrar_resultados').append(modelo_opcao);
        
        
      $('#resultado').toggle();
      
      
      
      for(i= 1; i <= 5; i++){
        document.getElementById("opt"+i+"-tab").addEventListener("click", function(e) {
            //Do something here
            var id_tab = e.target.id.replace('-tab','');
          
            for(j= 1; j <= 5; j++){
              $("#opt"+j).removeClass(" active show ");
              $("#opt"+j+"-tab").removeClass(" active ");
            }
            $("#"+id_tab).addClass(" active show ");
            $(this).addClass(" active ");
            
            
            
        }, false);
      }
      
      
       document.getElementById("opt1-quero-esse").addEventListener("click", function(e) {
            mandar_por_zapp(1);
       }, false);
       document.getElementById("opt2-quero-esse").addEventListener("click", function(e) {
            mandar_por_zapp(2);
       }, false);
       document.getElementById("opt3-quero-esse").addEventListener("click", function(e) {
            mandar_por_zapp(3);
       }, false);
       document.getElementById("opt4-quero-esse").addEventListener("click", function(e) {
            mandar_por_zapp(4);
       }, false);
       document.getElementById("opt5-quero-esse").addEventListener("click", function(e) {
            mandar_por_zapp(5);
       }, false);

      
    });
    
    function mandar_por_zapp(optid){
        var menssagem  = 'Gostaria de Contratar a cota { Adm : '+$("#opt"+optid+"-adm").text()+ ' Valor do Credito : '+ $("#opt"+optid+"-credito").text() + ' Valor da entrada : '+ $("#opt"+optid+"-entrada").text() +' Prazo : ' + $("#opt"+optid+"-prazo").text() +  ' Valor da parcela : ' + $("#opt"+optid+"-parcela").text() + ' Regra : '+ $("#opt"+optid+"-regra").text()+ ' }';
        var link = 'https://api.whatsapp.com/send?phone=5594992113672&text=%20'+ menssagem;
        window.open(link, '_blank');
    }
  
    function getDadosAdm(adm){
      var filtrado_por_Adm = DB_Veiculos.filter(function(value, index, arr){ 
        return value['adm'] == adm;
      });
      
      console.log(filtrado_por_Adm);
      
      var dados = [];
      dados['adm'] = adm;
      dados['quantCotas'] = filtrado_por_Adm.length;
      dados['valor_credito'] = formatar(Math.max.apply(Math, filtrado_por_Adm.map(function (i) {
                                return i.credito;
                             }))); 
      dados['valor_entrada'] = formatar(Math.max.apply(Math, filtrado_por_Adm.map(function (i) {
                                return i.entrada;
                             }))); 
      dados ['valor_parcela'] = formatar(Math.max.apply(Math, filtrado_por_Adm.map(function (i) {
                                return i.parcela;
                             }))); 
      dados ['regra'] = filtrado_por_Adm[0].regra;
      dados ['prazo'] = filtrado_por_Adm[0].prazo;
      return dados;
    }
    
  
    //Desabilitar Parcelas difusas
    $( "input[type=checkbox]" ).each(function(){
        if( $(this).parent().parent().find('td.column-5').text().includes("+")){
             $(this).attr("disabled",true);
             }
    });
  
                            
    const d = new Date();
    let dataImovel = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" as "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    let dataVeiculo = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" as "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    
    $("#tablepress-12_info").text($("#tablepress-12_info").text()+" | Ultima atualização em "+dataVeiculo);
    $("#tablepress-15_info").text($("#tablepress-15_info").text()+" | Ultima atualização em "+dataImovel);
  
});
      
      
     