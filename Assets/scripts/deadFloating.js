var floatup;

function Start(){
    floatup = false;

}
function Update(){
    if(floatup)
        floatingup();
    else if(!floatup)
        floatingdown();
	transform.rotation = Quaternion.Euler(180, 0, 0);
    transform.Translate(Vector2(0,-1) * Time.deltaTime * 2.5);

}
function floatingup(){
    transform.position.x += 0.6 * Time.deltaTime;
    yield WaitForSeconds(0.5);
    floatup = false;
}
function floatingdown(){
    transform.position.x -= 0.6 * Time.deltaTime;;
    yield WaitForSeconds(0.5);
    floatup = true;
}

// function OnBecameInvisible() {
//     //////////////////////////////////////////////yield WaitForSeconds(1);
// 	Destroy(this.gameObject);
// }