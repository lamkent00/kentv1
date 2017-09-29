var soap = require('soap');
  var url = 'https://api.datacom.vn/AirlineWS.asmx?WSDL';
  //var args = {startPoint: 'HAN',endPoint: 'DAD',departureDate: '2017-12-10 23:59:59',returnDate: false,adults: 1,children: 0, infants: 0};
  var args = {User:"demo@datacom.vn" , Password: "demo@123", ItineraryType:1, DepartureAirportCode:"HAN", DestinationAirportCode:"DAD", DepartureDate:"10/12/2017", Adult:1, Children:0, Infant:0};
	//'startPoint'=>'HAN','endPoint'=>'DAD','departureDate'=>'2017-09-20 23:59:59','returnDate'=>false,'adults'=>1,'children'=>0,'infants'=>0,'authentication'=>array('HeaderUser'=>'khoiviet','HeaderPassword'=>'d95FPXc/7I$6St'
  soap.createClient(url, function(err, client) {
		client.setSecurity(new soap.BasicAuthSecurity('airws', 'airws@12031986'));
		client.SearchDomesticFlight(args)
		.then((result) =>{
			console.log("\n RESULT: "+result);
		})
		.catch((ex)=>{
			console.log("\n ERRR: "+ex);
		});
      // client.MyFunction(args, function(err, result) {
          // console.log(result);
      // });
			//client.setSecurity(new soap.BasicAuthSecurity('khoiviet', 'd95FPXc/7I$6St'));
			if(err)
				console.log(err);
			console.log(client.describe());
  });