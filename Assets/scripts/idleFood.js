var bubbleObject : GameObject; 
var floatup;

function Start () {
	
	floatup = false;
}
function Awake () {
        // Make the game run as fast as possible in the web player
        Application.targetFrameRate = 60;
    }

function Update(){
   if(floatup)
       floatingup();
   else if(!floatup)
       floatingdown();

}

while (true) {
    yield WaitForSeconds(Random.Range(1, 3));
    spawnBubbles();
    }

function spawnBubbles()
{   
    var v2Pos = transform.position;
         yield WaitForSeconds(0.5);
         v2Pos = transform.position;
         PoolManager.Pools["bubblePool"].Spawn(bubbleObject.transform, v2Pos,  Quaternion.identity);
         PoolManager.Pools["bubblePool"].Spawn(bubbleObject.transform, Vector2(transform.position.x + Random.Range(-3,3), transform.position.y-10),  Quaternion.identity);
}


function floatingup(){
    transform.position.y += 0.4 * Time.deltaTime;
    transform.localScale.y += .2 * Time.deltaTime;
    yield WaitForSeconds(1);
    floatup = false;
}
function floatingdown(){
    transform.position.y -= 0.4 * Time.deltaTime;
        transform.localScale.y -= .2 * Time.deltaTime;
    yield WaitForSeconds(1);
    floatup = true;
}
