	//+ - 操作
    $(function(){
    	$('span[class="plus"]').click(function(){
    		var v=$('#buyNumber').val();
    		var stock = $('#stock_num').html();
    		if(parseInt(v)<parseInt(stock)){
    			$('#buyNumber').val(++v);
    		}
    	});
    	$('span[class="reduce disable"]').click(function(){
    		var v=$('#buyNumber').val();
    		if(v>1){
    			$('#buyNumber').val(--v);
    		}
    	});
    });