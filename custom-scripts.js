define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */
  });

  var WEBMAP_ID = "20a22fe25369421bbfafb72ad5240d2a",
  		LAYER_ID = "Venezuela_Cities_Key_facts_1513";
  
  	var clickHandlerIsSetup = false;

  	topic.subscribe("story-loaded-map", function(result){
  		if ( result.id == WEBMAP_ID && ! clickHandlerIsSetup ) {
  			var map = app.maps[result.id].response.map,
  				layer = map.getLayer(LAYER_ID);

  			if ( layer ) {
  				layer.on("click", function(e){
  					var index = e.graphic.attributes["ID"];
  					topic.publish("story-navigate-section", index);
  				});
  			}
  		}
  	});
  });
});
