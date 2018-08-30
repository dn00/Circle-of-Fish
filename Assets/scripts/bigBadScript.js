#pragma strict
//public var target : Transform;
var bubbleObject : GameObject;
var bubbs = false;
var incClip : AudioClip;
//var waitTime = 2.5;
var headingAngle : float;
var food : GameObject;
var deSpawnFish = 0;
var allowDestroy = 0;
while (true) {
    yield WaitForSeconds(0.8);
    spawnBubbles();

	}

function Start () {
	GetComponent(forward).enabled = false; 
	var target = gameObject.Find("player(Clone)").transform;
	var food = gameObject.Find("food");
	bubbs = true;
	yield WaitForSeconds(2.5);
	//test();
	GetComponent(forward).enabled = true;
	GetComponent.<AudioSource>().PlayOneShot(incClip);

	if (food.GetComponent(game).fCount == 15)
	 {
		resetNMEFish();
	}
	else
	{
		allowDestroy = 1;
	}

}

function Update () {

    
}

function OnBecameInvisible() {
	if (allowDestroy == 1)
	{
		yield WaitForSeconds(1);
		Destroy(this.gameObject);
	}
}

function spawnBubbles()
{   
	if (bubbs == true)
	{
	    var v2Pos = transform.position;
	    var rNum = 10;
	    for(var i = 0; i < rNum; ++i)
	    {
	         yield WaitForSeconds(0.1);
	         //v2Pos = transform.position;
	        //Instantiate(bubbleObject, Vector2(transform.position.x + Random.Range(-1.0,2.0), transform.position.y + 8), Quaternion.identity);
	        PoolManager.Pools["bubblesFaster"].Spawn(bubbleObject.transform, Vector2(transform.position.x + Random.Range(-1.0,2.0), transform.position.y + 2),  Quaternion.identity);
	    }
	}
}

function resetNMEFish()
{
    var food = gameObject.Find("food");
    var target = gameObject.Find("emptyFollower");
    food.GetComponent(game).rdyToSpawn = 0;
    var firstFish =  target.GetComponent(spawner).firstFish;
    yield WaitForSeconds(0.5);
    firstFish.GetComponent(Follow).target = this.transform;
    firstFish.GetComponent(rotate).target = this.transform;
     yield WaitForSeconds(7);
    if (deSpawnFish == 1)
    {
	    for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("enemy"))
		{
		 	//Destroy(fooObj);
		 	 PoolManager.Pools["nme"].Despawn(fooObj.transform);
		}
			food.GetComponent(game).fCount = 0;
    		target.GetComponent(spawner).oldFish = target;
  			food.GetComponent(game).rdyToSpawn = 1;
	}


    Destroy(this.gameObject);
}