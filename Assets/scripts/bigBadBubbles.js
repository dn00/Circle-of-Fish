
var rScale;
function Start(){
	rScale = Random.Range(0.6,1.2);
	transform.localScale.x = (rScale);
	transform.localScale.y = (rScale);
}
function Update(){
   // if(floatup)
       // floatingup();
   // else if(!floatup)
       // floatingdown();

    transform.Translate(Vector2.up * Time.deltaTime * 7);

    if (this.gameObject.transform.position.y > 18)
    {
    	PoolManager.Pools["bubblesFaster"].Despawn(transform);
    }
}


function OnBecameInvisible() {
	PoolManager.Pools["bubblesFaster"].Despawn(transform);
}