/**
 * Created by temi on 1/20/2015.
 */

$(function(){
    var r = Raphael('rate', 700, 500),
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
                $("#pvc").text(data.pvc);
                $("#pvc2").text(data.pvc2);


                $('.point')

                    .fadeIn();
                this.animate({
                    fill: '#F7CA18'
                }, 300);


            }, function(){
                this.animate({
                    fill: attributes.fill
                }, 300);




//on the hover event, do this
                $('#country').hide();
                $('#state').show();


            })



    }
});


