$(function () {

        $('#query').on('click', function (g) {
        let num = 1;
        let limit = 20;
        let term2 = $('#queryString').val();

        term2.replace(' ','+');

        $.get(
            // endpoint
            // params
            // success callback
            // datatype returned
            //'http://itunes.apple.com/search?term=' + term2 + '&limit=' + limit,
            'http://itunes.apple.com/search?term=' + term2,
            {
                limit: $('#maxLimit').val()
            },
            function (data) {

                for (i in data.results) {


                    $('#dataTable').append(`<tr><th scope="row">${num++}</th>
                                                <td>${data.results[i].artworkUrl60  === undefined ? '--' :  '<img alt="album art" src='+ data.results[i].artworkUrl60 + '/>'}</td>
                                                <td>${data.results[i].artistName  === undefined ? '--' :  data.results[i].artistName}</td>
                                                <td>${data.results[i].kind  === undefined ? '--' :  data.results[i].kind}</td>
                                                <td>${data.results[i].trackName  === undefined ? '--' :  data.results[i].trackName}</td>
                                                <td>${data.results[i].collectionName  === undefined ? '--' :  data.results[i].collectionName}</td>
                                                <td>${data.results[i].primaryGenreName  === undefined ? '--' :  data.results[i].primaryGenreName}</td>
                                                <td>${data.results[i].shortDescription === undefined ? '--' :  data.results[i].shortDescription + '...'}</td>
                                            </tr>`);
                }
            },
            'json'
        );


    });
});