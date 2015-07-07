var members = { mwg : 0 , mng : 1 , bnn : 2 } ;
	
function float_sort_asc ( a , b ) 
{
  a = parseFloat(a);
  b = parseFloat(b);
  
  return a < b ? - 1 : (a == b ? 0 : 1 );
}


function calculate_individual_bill_cost ()
{
	var arr_txt_msg = new Array ();
	var total_members = 3 ;   
	
	mwg_txt = parseFloat ( document.getElementById ( 'total_txt_mwg' ).value )  ;
	mng_txt = parseFloat ( document.getElementById ( 'total_txt_mng' ).value ) ;
	bnn_txt = parseFloat ( document.getElementById ( 'total_txt_bnn' ).value ) ;
	
	//store individual text message cost in an array
	arr_txt_msg [ members.mwg ] = ( isNaN ( mwg_txt ) ? 0 : mwg_txt );
	arr_txt_msg [ members.mng ] = ( isNaN ( mng_txt ) ? 0 : mng_txt );
	arr_txt_msg [ members.bnn ] = ( isNaN ( bnn_txt ) ? 0 : bnn_txt );
					  
	//Sort the array 			  
	arr_txt_msg.sort ( float_sort_asc ) ;

	//get the lowest text message cost	
	var min_txt_msg = document.getElementById ( 'Lowest_txt_msg' ).value  =  arr_txt_msg [0].toFixed (2) ;
   
   	//calculate the net cost for each individual
  	document.getElementById ( 'net_txt_mwg' ).value = ( parseFloat ( document.getElementById ( 'total_txt_mwg' ).value - min_txt_msg )).toFixed (2);
	document.getElementById ( 'net_txt_mng' ).value = ( parseFloat ( document.getElementById ( 'total_txt_mng' ).value - min_txt_msg )).toFixed (2) ;
	document.getElementById ( 'net_txt_bnn' ).value = ( parseFloat ( document.getElementById ( 'total_txt_bnn' ).value - min_txt_msg )).toFixed (2) ;

	//Note: original cost of data packages before the plan change is added plus the monthly phone payment where applicable
	var wambu_net_txt = parseFloat ( document.getElementById ( 'net_txt_mwg' ).value ) + 30 ;
	var mama_mel_net_txt = parseFloat ( document.getElementById ( 'net_txt_mng' ).value  ) + 20 + 31.37 ;
	var bena_net_txt  = parseFloat ( document.getElementById ( 'net_txt_bnn' ).value  ) + 25 + 27.05 ;

	//Calculate avarage for each person before Extra txt messages
	var total_group_bill = parseFloat ( document.getElementById ( 'total_group_bill' ).value ) ;
	var total_group_txt_msg = parseFloat ( wambu_net_txt + mama_mel_net_txt + bena_net_txt ) ;
	var average_bill_share =  parseFloat ( ( total_group_bill - total_group_txt_msg ) / total_members ).toFixed (2) ;

	document.getElementById ( 'average_bill_share' ).value = average_bill_share ;
	
	//Calculate individual total share of the bill 
	document.getElementById ( 'total_bill_mwg' ).value = ( parseFloat ( average_bill_share )  + wambu_net_txt ).toFixed (2) ;
	document.getElementById ( 'total_bill_mng' ).value = ( parseFloat ( average_bill_share ) + mama_mel_net_txt ).toFixed (2) ;
	document.getElementById ( 'total_bill_bnn' ).value = ( parseFloat ( average_bill_share ) + bena_net_txt ).toFixed (2) ;
}
	

