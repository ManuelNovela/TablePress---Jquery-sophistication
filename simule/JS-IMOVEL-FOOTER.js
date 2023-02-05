jQuery(document).ready(function( $ ){
  
   // Addicionar coluna juntar cotas
     $('#tablepress-15 thead tr').find('th').eq(0).before('<th >JUNTAR COTAS</th>');
  
     $('#tablepress-15').find('tr').each(function(){
       $(this).find('td').eq(0).before('<td style="width: 5px;"><input type="checkbox" class="juntarcotas cat_50_veiculos"></td>');
     });

    
});
