import PathologicalGames;
var floatup;
var rScale;

function Start(){
	rScale = Random.Range(0.6,1.2);
	transform.localScale.x = (rScale);
	transform.localScale.y = (rScale);
    floatup = false;
}
function Update(){
    if(floatup)
        floatingup();
    else if(!floatup)
        floatingdown();

    transform.Translate(Vector2.up * Time.deltaTime * 3);

}
function floatingup(){
    transform.position.x += 0.3 * Time.deltaTime;
    yield WaitForSeconds(1);
    floatup = false;
}
function floatingdown(){
    transform.position.x -= 0.3 * Time.deltaTime;;
    yield WaitForSeconds(1);
    floatup = true;
}

function OnBecameInvisible() {
	//Destroy(this.gameObject);
    PoolManager.Pools["bubblePool"].Despawn(transform);
}