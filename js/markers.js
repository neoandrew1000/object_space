    //Marker color
    var markerColor = 0xff2a00;
    var markerScale = 0.001;

    // Sun marker
    var sunMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var sunMarkerGeometry = new THREE.Geometry();
	sunMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( -3, 3, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( -3, -3, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	sunMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
		
	var sunMarker = new THREE.Line( sunMarkerGeometry, sunMarkerMaterial );

    // Marcury marker
	var mercuryMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var mercuryMarkerGeometry = new THREE.Geometry();
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( -4, 8, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( -3, 6, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( -1, 5, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( -3, 3, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( -3, -3, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 0, -7, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 0, -6, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( -1, -6, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 1, -6, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 0, -6, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 1, 5, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 3, 6, 0 ) );
	mercuryMarkerGeometry.vertices.push( new THREE.Vector3( 4, 8, 0 ) );
	
	var mercuryMarker = new THREE.Line( mercuryMarkerGeometry, mercuryMarkerMaterial );

	// Venus marker
	var venusMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var venusMarkerGeometry = new THREE.Geometry();
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( -3, 3, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( -3, -3, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 0, -7, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 0, -6, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( -1, -6, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 1, -6, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 0, -6, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	venusMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	
	var venusMarker = new THREE.Line( venusMarkerGeometry, venusMarkerMaterial );

	// Earth marker
	var earthMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var earthMarkerGeometry = new THREE.Geometry();
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( -3, 3, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( -3, -3, 0 ) );
	earthMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
		
	var earthMarker = new THREE.Line( earthMarkerGeometry, earthMarkerMaterial );

	// Mars marker
	var marsMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var marsMarkerGeometry = new THREE.Geometry();
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( -3, 3, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( -3, -3, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 6, 6, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 4, 6, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 6, 6, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 6, 4, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 6, 6, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	marsMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
		
	var marsMarker = new THREE.Line( marsMarkerGeometry, marsMarkerMaterial );

	// Ceres marker
	var ceresMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var ceresMarkerGeometry = new THREE.Geometry();
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 0, -7, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 0, -6, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( -1, -6, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 1, -6, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 0, -6, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( -3, 3, 0 ) );
	ceresMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );

	var ceresMarker = new THREE.Line( ceresMarkerGeometry, ceresMarkerMaterial );

	// Jupiter marker
	var jupiterMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var jupiterMarkerGeometry = new THREE.Geometry();
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( -3, 2, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( -4, 4, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( -3, 6, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( -1, 7, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 1, 7, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 3, 6, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 4, 4, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 4, 3, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 3, 1, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 1, -2, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( -2, -4, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( -4, -5, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 8, -5, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 6, -5, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 6, -8, 0 ) );
	jupiterMarkerGeometry.vertices.push( new THREE.Vector3( 6, 7, 0 ) );
	
	var jupiterMarker = new THREE.Line( jupiterMarkerGeometry, jupiterMarkerMaterial );

	// Saturn marker
	var saturnMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var saturnMarkerGeometry = new THREE.Geometry();
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( -2, 6, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( -2, 5, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( -4, 5, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 0, 5, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( -2, 5, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( -2, -5, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( -2, 2, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 0, 3, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 2, 3, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 3, 2, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 3, 0, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 1, -3, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 0, -5, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 1, -6, 0 ) );
	saturnMarkerGeometry.vertices.push( new THREE.Vector3( 2, -5, 0 ) );
		
	var saturnMarker = new THREE.Line( saturnMarkerGeometry, saturnMarkerMaterial );

	// Uranus marker
	var uranusMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var uranusMarkerGeometry = new THREE.Geometry();
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( -1, 6, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 0, 7, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 1, 6, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 0, 7, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( -3, 3, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( -3, -3, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 3, -3, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	uranusMarkerGeometry.vertices.push( new THREE.Vector3( 0, 4, 0 ) );
	
	var uranusMarker = new THREE.Line( uranusMarkerGeometry, uranusMarkerMaterial );

	// Neptune marker
	var neptuneMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var neptuneMarkerGeometry = new THREE.Geometry();
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -3, 7, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -2, 7, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -2, 6, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -2, 7, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -3, 6, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -4, 4, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -5, 1, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -4, -2, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -1, -3, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, -3, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, 6, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -1, 5, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, 6, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 1, 5, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, 6, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, -5, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( -2, -4, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 2, -4, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, -4, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 0, -3, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 1, -3, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 4, -2, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 5, 1, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 4, 4, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 3, 6, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 2, 7, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 2, 6, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 2, 7, 0 ) );
	neptuneMarkerGeometry.vertices.push( new THREE.Vector3( 3, 7, 0 ) );
		
	var neptuneMarker = new THREE.Line( neptuneMarkerGeometry, neptuneMarkerMaterial );

	// Pluto marker
	var plutoMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var plutoMarkerGeometry = new THREE.Geometry();
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 0, 6, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 2, 6, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 4, 5, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 5, 3, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 5, 2, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 2, -1, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 0, -1, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 0, -7, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 5, -7, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 0, -7, 0 ) );
	plutoMarkerGeometry.vertices.push( new THREE.Vector3( 0, 6, 0 ) );
	
	var plutoMarker = new THREE.Line( plutoMarkerGeometry, plutoMarkerMaterial );

	// Other planets marker
	var planetMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var planetMarkerGeometry = new THREE.Geometry();
	planetMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	planetMarkerGeometry.vertices.push( new THREE.Vector3( 0, 6, 0 ) );
	planetMarkerGeometry.vertices.push( new THREE.Vector3( 4, 0, 0 ) );
	planetMarkerGeometry.vertices.push( new THREE.Vector3( 0, -6, 0 ) );
	planetMarkerGeometry.vertices.push( new THREE.Vector3( -4, 0, 0 ) );
	
	var planetMarker = new THREE.Line( planetMarkerGeometry, planetMarkerMaterial );

	// Haumea marker
	var haumeaMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var haumeaMarkerGeometry = planetMarkerGeometry;
	
	var haumeaMarker = new THREE.Line( haumeaMarkerGeometry, haumeaMarkerMaterial );

	// Makemake marker
	var makemakeMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var makemakeMarkerGeometry = planetMarkerGeometry;;

	var makemakeMarker = new THREE.Line( makemakeMarkerGeometry, makemakeMarkerMaterial );
	
	// Eris marker
	var erisMarkerMaterial = new THREE.LineBasicMaterial({
	color: markerColor
	});
	var erisMarkerGeometry = planetMarkerGeometry;;

	var erisMarker = new THREE.Line( erisMarkerGeometry, erisMarkerMaterial );