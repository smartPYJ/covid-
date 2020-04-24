$(function(){
	var r = Raphael('map', 700, 500),
		attributes = {
            fill:"#4A9E72",
            stroke: '#FFF',
            'stroke-width': 1,
            'stroke-linejoin': 'round'
        },




		fill = new Array(),
        arr = new Array();

	r.setViewBox(0,0,950,950,true);

    //show country
     $('#country').show();
     $('#state').hide();

    //show country information
    $('#cont').show();
    $('#stat').hide();

var cId = 0;
	for (var region in paths) {
		var obj = r.path(paths[region].path);
        if (paths[region].total == 0){
            attributes.fill = "#4A9E72";
            fill[region] = "#4A9E72";
        }

        else if (paths[region].total ==1) {
            attributes.fill = " #b7d509 ";
            fill[region] = " #b7d509 ";

        }
            
        else if (paths[region].total ==2) {
            attributes.fill = "#e79f18";
            fill[region] = "#e79f18";

        }
       
        else if (paths[region].total <=10) {
            attributes.fill = " #ba0938";
            fill[region] = "#ba0938";

        }
        else if (paths[region].total >=20) {
            attributes.fill = " #de090c";
            fill[region] = "#de090c";

        }
        else {
            attributes.fill = "#4A9E72";
            fill[region] = "#4A9E72";

        }


        obj.attr(attributes);
		arr[obj.id] = region;
        console.log(obj.id);
        console.log(region);

		obj

			//on mouse over event
		.hover(function(){
			var point = this.getBBox(0);
			$('#map').next('.point').remove();
			$('#map').after($('<div />').addClass('point'));
                console.log(arr[this.id]);
                console.log(this.id);
				var data = paths[arr[this.id]];
				$("#name").text(data.name);
				$("#new").text(data.new);
				$("#discharge").text(data.discharge);
				$("#death").text(data.death);
				//$("#anpp").text(data.anpp);
				//$("#others").text(data.others);
				$("#total").text(data.total);
               // $("#pvc").text(data.pvc);


            $('.point')

			.fadeIn();
			this.animate({
				fill: '#F7CA18'
			}, 300);


			}, function(){
			this.animate({
                fill: fill[arr[this.id]]
			}, 300);




//on the hover event, do this
$('#country').hide();
$('#state').show();


			})


        // on click event
		.click(function(){
			//document.location.href = paths[arr[this.id]].url;
              $.scrollify("move","#2");
            $('#cont').hide();
            $('#stat').show();

            var data = paths[arr[this.id]];
                $("#name").text(data.name);
				$("#capital").text(data.capital);
				$("#ruling").text(data.rulingParty);
				$("#governor").text(data.governor);
				$("#born").text(data.born);
				$("#religion").text(data.religion);
				$("#assumed").text(data.assumedOffice);
				$("#population").text(data.population);

            var nData =  [
    { year: '2010', value: data.v1 },
    { year: '2011', value: data.v2 },
    { year: '2012', value: data.v3 },
    { year: '2013', value: data.v4 },
    { year: '2014', value: data.v5}
  ];
  $('#myfirstchart').children().remove(); // u need to add this code to destroy the previous chart
  //what the function of childern in there.
  DrawBar(nData);
		});
	}
});

function DrawBar(lineData)
{
Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data:lineData,
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});
};