/**
 * This is the History in Black and White JS file
 * @author Matthias Steinbauer <matthias.steinbauer@jku.at>
 */
var HISTBW = HISTBW || {};

/**
 * This is called by the framework after widget was successfully loaded
 */ 
function histbw_startup() {
	console.log('History in Black and White started');
	HISTBW.dragElement = null;
	$('#toneDrag').on('mousedown', HISTBW.startDragElement);
	$('#monoDrag').on('mousedown', HISTBW.startDragElement);
	$(document).on('mouseup', HISTBW.stopDragElement);
	$(document).on('mousemove', HISTBW.handleMouseMove);
};

/**
 * This is called by the framework right before the widget will be unloaded from DOM
 */ 
function histbw_teardown() {
	console.log('History in Black and White teardown');
};

/**
 * Reacts to the mouse down
 */
HISTBW.startDragElement = function(evt) {
	console.log('started to drag');
	var dragTarget = $(evt.target);
	HISTBW.dragElement = dragTarget;
	HISTBW.deLeft = HISTBW.dragElement.offset().left;
	HISTBW.deTop = HISTBW.dragElement.offset().top;
	console.log(dragTarget);
};

/**
 * Handle the mouse move events
 */
HISTBW.handleMouseMove = function(evt) {
	if(HISTBW.dragElement != null) {
		if(HISTBW.dragElement.attr('id') === 'monoDrag') {
			$('#mono').width(1024 - evt.pageX);
			$('#mono').height(730 - evt.pageY);
		}else if(HISTBW.dragElement.attr('id') === 'toneDrag') {
			$('#tone').width(evt.pageX);
			$('#tone').height(evt.pageY);
		}
	}
};

/**
 * Reacts to the mouse down
 */
HISTBW.stopDragElement = function(evt) {
	console.log('stopped to drag');
	var dragTarget = $(evt.target);
	console.log(dragTarget);
	HISTBW.dragElement = null;
};

/**
 * The following will run the startup code in cases where we are not 
 * embedded in the framework
 */
$(document).ready(function() {
	histbw_startup();
});
