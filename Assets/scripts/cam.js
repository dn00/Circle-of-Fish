var dampTime : float = 0.3; //offset from the viewport center to fix damping
private var velocity = Vector3.zero;
var target : Transform;
 
 function Start()
 {	
 	 Application.targetFrameRate = 60;
 	yield WaitForSeconds(2);
 	target = gameObject.FindWithTag("Player").transform;
 }
function Update() {
    if(target) {
        var point : Vector3 = GetComponent.<Camera>().WorldToViewportPoint(target.position);
        var delta : Vector3 = target.position -
                    GetComponent.<Camera>().ViewportToWorldPoint(Vector3(0.5, 0.5, point.z));
        var destination : Vector3 = transform.position + delta;
        transform.position = Vector3.SmoothDamp(transform.position, destination, 
                                                velocity, dampTime);

        transform.position = new Vector3(
 		 Mathf.Clamp(transform.position.x, 11.5, 16.5),
  		Mathf.Clamp(transform.position.y, 3, 6.5), -10);
    }
    if (Time.frameCount % 30 == 0)
	{
    System.GC.Collect();

	}
}