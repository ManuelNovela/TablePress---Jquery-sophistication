/* IMOVEL JS FOOTER*/ 

jQuery(document).ready(function( $ ){
  
   // Addicionar coluna juntar cotas
     $('#tablepress-15 thead tr').find('th').eq(0).before('<th >JUNTAR COTAS</th>');
  
     $('#tablepress-15').find('tr').each(function(){
        $(this).find('td').eq(0).before('<td class="botao_select"><input type="checkbox" class="juntarcotas cat_50_veiculos"></td>');
     });

    
});
