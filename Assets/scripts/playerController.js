// var smooth = 2.0;
// 	var tiltAngle = 600.0;
// 	function Update () {
// 		var tiltAroundZ =  tiltAngle;
// 		//var tiltAroundX = Input.GetAxis("Vertical") * tiltAngle;
// 		var target = Quaternion.Euler (0, 0, tiltAngle);
// 		// Dampen towards the target rotation
// 		transform.rotation = Quaternion.Slerp(transform.rotation, target,
// 		                               Time.deltaTime * smooth);;
// 	}

#pragma strict
 
public var speed = 0.5;
private var rotation = 0.0;
private var qTo = Quaternion.identity;
var go = false;

private var MOVE_VALUE = 3.7;
private var CURRENT_VALUE = 3.7;
private var LAST_WAY;
private var MOVE_INCREMENT = 0.6;

function FixedUpdate () {
	if (go)
	{
	    if (Input.GetButton("Fire1") || (Input.GetKey ("space"))) {
	    	if (LAST_WAY == 0) {
	    		CURRENT_VALUE = 0;
	    	}
	    	if (CURRENT_VALUE <= MOVE_VALUE) {
	    		CURRENT_VALUE += MOVE_INCREMENT;
	    	}
	    	LAST_WAY = 1;
	        rotation +=CURRENT_VALUE;

	        qTo = Quaternion.Euler(0.0, 0.0, rotation);
	       
	 	    transform.rotation = Quaternion.Slerp(transform.rotation, qTo, speed * Time.deltaTime);
	    }
	
 	 else{
	 	 if (LAST_WAY == 1) {
		    		CURRENT_VALUE = 0;
		    	}
		 if (CURRENT_VALUE <= MOVE_VALUE) {
		    		CURRENT_VALUE += MOVE_INCREMENT;
		  }
 		 LAST_WAY = 0;
        rotation -=CURRENT_VALUE;
       qTo = Quaternion.Euler(0.0, 0.0, rotation);
   		}
    }
 	else
 	{
 	 	 if (LAST_WAY == 1) {
		    		CURRENT_VALUE = 0;
		    	}
		 if (CURRENT_VALUE <= MOVE_VALUE) {
		    		CURRENT_VALUE += MOVE_INCREMENT;
		  }
 		LAST_WAY = 0;
 		rotation -=CURRENT_VALUE;
       qTo = Quaternion.Euler(0.0, 0.0, rotation);
   }
   transform.rotation = Quaternion.Slerp(transform.rotation, qTo, speed * Time.deltaTime);
 }

