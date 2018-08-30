#pragma strict
function OnSpawned () {
	GetComponent.<Renderer>().enabled = false;
	GetComponent.<Collider2D>().enabled = false;
	yield WaitForSeconds(0.5);
	GetComponent.<Renderer>().enabled = true;
	GetComponent.<Collider2D>().enabled = true;
}

function Update () {

}
function OnBecameInvisible()
{
	if (this.transform.position.x < 1)
	{
		PoolManager.Pools["pearls"].Despawn(gameObject.transform);
	}

}