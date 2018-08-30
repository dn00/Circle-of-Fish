#pragma strict
var food : GameObject;
var lbl : UILabel;

function Start () {
 	lbl = GetComponent(UILabel);
}

function FixedUpdate () {
	lbl.text = "hello";
}