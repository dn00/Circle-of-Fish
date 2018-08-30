#pragma strict
var target : Transform;
var dist : float;
function Start () {
	target = gameObject.Find("player(Clone)").transform;
	dist = Vector2.Distance(target.position, transform.position);
}

function Update () {
if (target != null)
	{
    var dir = target.position - transform.position;
    var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
    transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);
	}
	if (dist < 6.5)
	{
		GetComponent(rotateForBigFish).enabled = false;
	}
	else
		if (target != null)
		dist = Vector2.Distance(target.position, transform.position);
	

}