#pragma strict

function Start () {
	destroyTime();
}

function Update () {

}

function destroyTime()
{
	yield WaitForSeconds(1);
	Destroy(this.gameObject);
}