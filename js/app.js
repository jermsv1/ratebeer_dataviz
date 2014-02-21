/**
 *  Simple beer viz map example using ratebeer.com data
 *  Author: Jeremy Arca
 *  02-2014
 **/

(function() {

    var _mapdata,
        _beerdata,
        _statecounts = {
            totals: [],
            by_year: []
        },

        plotBeers = function() {
            //basic map config with custom fills, mercator projection
            var map = new Datamap({
                scope: 'usa',
                element: document.getElementById('container1'),
                fills: _mapdata.fillKeys,
                geographyConfig: {
                    highlightOnHover: true,
                    highlightBorderColor: '#000',
                    highlightBorderWidth: 2,
                    popupTemplate: function(geo, data) {
                        // Only apply if we have stuff for that state
                        if (data) {
                            var dat_beerz = beerByState(data),
                                listing = "";

                            console.log(dat_beerz.length);
                            //dat_beers = buildListing(dat_beerz);
                            dat_beerz.sort(function(a, b) {
                                if (a.order != b.order) {
                                    return a.year - b.year;
                                } else {
                                    return a.order - b.order;
                                }
                            });
                            //  console.log(dat_beerz);
                            dat_beerz.forEach(function(bv, bi) {
                                listing += "<li>" +
                                    bv.year +
                                    " - " +
                                    " ( " + bv.order + " ) " +
                                    bv.beer +
                                    " by: " +
                                    bv.brewer +
                                    "</li>";
                            });
                            return "<div class='hoverinfo'>" +
                                "<h2>" + geo.properties.name + " (" + dat_beerz.length + ") </h2>" +
                                listing +
                                "</div>";
                        }

                    }
                },
                data: _mapdata.data,
            });
        };

    var processData = function() {
        // Get only USA beers
        var usa_beers = beer_data.filter(function(bv) {
            return bv.country === "USA";
        });

        // Get the state abbreviation for each beer
        usa_beers.forEach(function(value, index) {
            if (typeof value.state !== "undefined") {
                var state = us_states.filter(function(sv) {
                    return sv.name == value.state;
                });
                usa_beers[index].datamaps_loc = (typeof state[0] !== "undefined" ? state[0].abbreviation : null);
            }
        });

        // Set Globals
        _beerdata = usa_beers;
        _mapdata = buildDataMapsData(usa_beers);

        // Plot
        plotBeers();

    }

    // Get beer by state
    var beerByState = function(st) {
        return _beerdata.filter(function(v) {
            if (typeof st.state != "undefined" && st.state)
                return st.state === v.datamaps_loc;
        });
    };

    var buildDataMapsData = function(beers) {
        // Build Datama and set state counts
        var datamaps = {
            data: {},
            fillKey: {}
        };
        var fill_clor


        // Get State Totals
        beers.forEach(function(value, index) {
            if (typeof _statecounts.totals[value.datamaps_loc] == "undefined")
                _statecounts.totals[value.datamaps_loc] = 0;
            else
                _statecounts.totals[value.datamaps_loc] += 1;

        });

        var counts = [];
        for (var i in _statecounts.totals) {
            counts.push(_statecounts.totals[i]);
        }



        // Build the map data
        beers.forEach(function(value, index) {
            datamaps.data[value.datamaps_loc] = {
                fillKey: value.datamaps_loc,
                year: value.year,
                state: value.datamaps_loc,
                order: value.order
            };
        });


        // Build the color with its keys
        var fillKeys = {};
        var fillColor = alternatingColorScale().domain(counts).range(["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]);
        fillColor = d3.scale.category20();
        console.log(_statecounts.totals);
        for (var i in _statecounts.totals) {
            fillKeys[i] = fillColor(_statecounts.totals[i]);
        }
        fillKeys.UNKNOWN = "#f7f7f7";
        fillKeys.defaultFill = "#e9e9e9";

        datamaps.fillKeys = fillKeys;
        return datamaps;
    };

    processData();

})();