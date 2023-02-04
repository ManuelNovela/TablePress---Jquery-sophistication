jQuery(document).ready(function( $ ){
	
	var valorCarta = 10000;
	var valorEntrada = 1500;
	var currentAdmin = "";
	var currentCodigo = "";
	$('#toggleFilter').val(true);
	
	var veiculos_ADMS = [];
    var modelo_ADMS = ' <option value="" selected="">Todas</option>';
	var veiculos_Code = [];
	var modelo_Code = ' <option value="" selected="">Ver todos</option>';
          
	//Fetch adms
   	$('#tablepress-12 tbody tr').each(function(index, tr) { 
  
        var item  =  $(this).find('td.column-1').text();
        var code =  $(this).find('td.column-11').text();
        
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
		
		
		//find codigos
		nao_existe = true;
      	for (let i = 0; i < veiculos_Code.length; i++) {
  			if(veiculos_Code[i] == code){
            	nao_existe = false;
            }
		}
      
      	if(nao_existe) {
    		veiculos_Code[index]=code;
          	modelo_Code = modelo_Code+'<option value="'+veiculos_Code[index]+'">'+veiculos_Code[index]+'</option>';
  		}
      
	});
  
 	
   
	
	
	var modelo_filtros = '<div class="container-fluid">'
+'	<div class="row">'
+'		<div class="col-md-12">'
+'			<div class="row">'
+'				<div class="col-md-3" style="border-right: 3px solid #ccc; padding: 5px; margin-bottom: 10px;">'
+'					 <span class="badge badge-default">Habilitar/desabilitar filtros</span>'
+'					<div class="row">'
+'						<div class="col-md-6">'
+'							<button type="button" class="btn btn-secondary" id="btnHabilitar" disabled>'
+'								Habilitar'
+'							</button>'
+'						</div>'
+'						<div class="col-md-6">'					 
+'							<button type="button" class="btn btn-secondary" id="btnDesabilitar">'
+'								Desabilitar'
+'							</button>'
+'						</div>'
+'					</div>'
+'				</div>'
+'				<div class="col-md-3" id="btnNodes">'
+'					<span class="badge badge-default">Dowload Tabela</span>'
+'					<div class="row">'
+'						<div class="col-md-6">'
+'							<i class="fa fa-file-excel-o" style="font-size:15px;color:Green"></i>'
+'							<span id="btnExcel"></span>'
+'						</div>'
+'						<div class="col-md-6">'
+'							<i class="fa fa-file-pdf-o" style="font-size:15px;color:red"></i>'
+'							<span id="btnPdf"></span>'
+'						</div>'
+'					</div>'
+'				</div>'
+'				<div class="col-md-6">'
+'				</div>'
+'			</div>'	
+'			<div class="row">'
+'				<div class="col-md-8">'
+'					<div class="row slider_filter_row">'
+'						<div class="col-md-4" style="display: block;">'
+'							<div class="valorParcelaTexto">Valor do crédito</div>'
+'							<div id="valorCarta">R$ <strong>10.000,00</strong></div>'
+'						</div>'
+'						<div class="col-md-8">'
+'							<input type="range" min="10000" max="1000000" value="10000"  id="campoValorCarta" step="5000">'
+'						</div>'
+'					</div>'
+'					<div class="row slider_filter_row">'
+'						<div class="col-md-4" style="display: block;">'
+'							<div class="valorParcelaTexto">Valor da entrada</div>'
+'							<div id="valorParcela">R$ <strong>1.500,00</strong></div>'
+'						</div>'
+'						<div class="col-md-8">'
+'							<input type="range" min="100" max="10000" value="1500" id="campoValorParcela" step="100">'
+'						</div>'
+'					</div>'
+'				</div>'
+'				<div class="col-md-4">'
+'					<div  style="display: block; float: right; margin-right: 20px">'	
+'						<div class="row" style="display: block;">'
+'							<div>Administradora</div>'
+'							<select id="select_admin">'+modelo_ADMS+'</select>'
+'						</div>'
+'						<div class="row" style="display: block;">'
+'							<div>Código</div>'
+'							<select id="select_codigo">'+modelo_Code+'</select>'
+'						</div>'
+'					</div>'
+'				</div>'
+'			</div>'
+'		</div>'
+'	</div>'
+'</div>'

	
	var modelo_filtros = '<div class="container-fluid">'
+'	<div class="row">'
+'		<div class="col-md-12">'
+'			<div class="row">'
+'				<div class="col-md-6">'
+'					<div class="row">'
+'						<div class="col-6">'

//Habilitar e Desabilitar
+'					<div class="row col-12">'
+'						<div class="row col-12">'
+'							<span class="badge badge-default">Habilitar/desabilitar filtros</span>'
+'						</div>'
+'						<div class="row">'
+'							<div class="col-6">'
+'								<button type="button" class="btn btn-secondary" id="btnHabilitar" disabled>'
+'									Habilitar'
+'								</button>'
+'							</div>'
+'							<div class="col-6">'					 
+'								<button type="button" class="btn btn-secondary" id="btnDesabilitar">'
+'									Desabilitar'
+'								</button>'
+'							</div>'
+'						</div>'
+'					</div>'

+'						</div>'
+'						<div class="col-6">'

//Download
+'					<div class="row">'
+'						<div class="row col-12">'
+'							<span class="badge badge-default">Dowload Tabela</span>'
+'						</div>'
+'						<div class="row col-12">'
+'							<div class="col-6">'
+'								<span id="btnExcel"></span>'
+'							</div>'
+'							<div class="col-6">'
+'								<span id="btnPdf"></span>'
+'							</div>'
+'						</div>'
+'					</div>'

+'						</div>'
+'					</div>'
+'				</div>'
+'				<div class="col-md-6 col-sm-12">'

+'					<div class="row col-12">'	
+'						<div class="col-5" style="display: block;">'
+'							<div>Administradora</div>'
+'							<select id="select_admin">'+modelo_ADMS+'</select>'
+'						</div>'
+'						<div class="col-2"></div>'
+'						<div class="col-5" style="display: block;">'
+'							<div>Código</div>'
+'							<select id="select_codigo">'+modelo_Code+'</select>'
+'						</div>'
+'					</div>'


+'				</div>'
+'			</div>'
+'			<div class="row">'
+'				<div class="col-md-12">'

+'					<div class="row slider_filter_row">'
+'						<div class="col-4" style="display: block;">'
+'							<div class="valorParcelaTexto">Valor do crédito</div>'
+'							<div id="valorCarta">R$ <strong>10.000,00</strong></div>'
+'						</div>'
+'						<div class="col-8">'
+'							<input type="range" min="10000" max="1000000" value="10000"  id="campoValorCarta" step="5000">'
+'						</div>'
+'					</div>'
+'					<div class="row slider_filter_row">'
+'						<div class="col-4" style="display: block;">'
+'							<div class="valorParcelaTexto">Valor da entrada</div>'
+'							<div id="valorParcela">R$ <strong>1.500,00</strong></div>'
+'						</div>'
+'						<div class="col-8">'
+'							<input type="range" min="100" max="10000" value="1500" id="campoValorParcela" step="100">'
+'						</div>'
+'					</div>'

+'				</div>'
+'			</div>'
+'		</div>'
+'	</div>'
+'</div>';

	
	$("#tablepress-12_filter").removeClass("dataTables_filter");
	$("#tablepress-12_filter").html(modelo_filtros);
	
	
	var pdfBtn =   $('.dt-buttons').find('.buttons-pdf').detach();
	var excelBtn = $('.dt-buttons').find('.buttons-excel').detach();
	$('#btnExcel').append(excelBtn);
	$('#btnPdf').append(pdfBtn);
	
	//var element = $('.dt-buttons').detach();
	//$('#btnNodes').append(element);
	
// Filtro admin e code
	
	$('#select_admin').on('change', function() {
		currentAdmin = this.value;
		filtarCartas();
	});
	
	$('#select_codigo').on('change', function() {
		currentCodigo = this.value;
		filtarCartas();
	});

	
	//habilitar / Desabilitar
	$('#btnHabilitar').on('click', function () {
		$('#toggleFilter').val(true);
		$('#btnHabilitar').attr('disabled', 'disabled');
		$('#btnDesabilitar').removeAttr('disabled');
		filtarCartas();
	});
	
	$('#btnDesabilitar').on('click', function () {
		$('#toggleFilter').val(false);
		$('#btnDesabilitar').attr('disabled', 'disabled');
		$('#btnHabilitar').removeAttr('disabled');
		filtarCartas();
	});
	
	
	//filtros
	$('input[type=range]').on('input', function () {
    	//$(this).trigger('change');
		if($(this).attr('id') == 'campoValorCarta'){
			valorCarta = $(this).val();
			$('#valorCarta').html('R$ <strong>'+valorCarta+'</strong>');
			$('#campoValorParcela').val(($(this).val() * 0.2));
			$('#campoValorParcela').attr({
			   "max" : ($(this).val() * 0.6),
			   "min" : ($(this).val() * 0.1)
			});
			
			valorEntrada = $('#campoValorParcela').val();
			$('#valorParcela').html('R$ <strong>'+valorEntrada+'</strong>');
		}
		
		if($(this).attr('id') == 'campoValorParcela'){
			valorEntrada = $(this).val();
			$('#valorParcela').html('R$ <strong>'+valorEntrada+'</strong>');
		}
		filtarCartas();
	});
	
	function filtarCartas() {
		
	console.log("dwwww");
		
   		var i = 0;
		var credito_min = eval(valorCarta-(valorCarta*0.30));
		var credito_max = eval(valorCarta+(valorCarta*0.30));
		var entrada_min = eval(valorEntrada-(valorEntrada*0.20));
		var entrada_max = eval(valorEntrada+(valorEntrada*0.20));
		
		
		$('#tablepress-12 tr').each(function(){
			$(this).show();

			var credito_clean = $(this).find('td.column-2').text().substring(0, $(this).find('td.column-2').text().indexOf(',')).replace('R$','').replace('.','').replace(',','.').replace('%','');
			var entrada_clean = $(this).find('td.column-3').text().substring(0, $(this).find('td.column-3').text().indexOf(',')).replace('R$','').replace('.','').replace(',','.').replace('%','');	
			
				var credito =  eval(credito_clean);
				var entrada =  eval(entrada_clean);
			
				if($('#toggleFilter').val() == 'true'){
					
					//filtro admin
					if( currentAdmin!= "" && i>0 && $(this).find('td.column-1').text() != currentAdmin){
						$(this).hide();
					}
					
					if( currentCodigo != "" && i>0 && $(this).find('td.column-11').text() != currentCodigo ){
						$(this).hide();
					}
					
					//filtro admin Valor Carta
					if(credito<credito_min || credito>credito_max){
							$(this).hide();
					}
					//filtro admin Valor Carta
					if(entrada<entrada_min || entrada>entrada_max){
							$(this).hide();
					}
				}
			i = eval(eval(i) + 1);
     	});
		
	}
	

});

