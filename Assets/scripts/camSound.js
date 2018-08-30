#pragma strict

function Start () {
	yield WaitForSeconds(1.4);
	GetComponent.<AudioSource>().Play();
}

function Update () {

}