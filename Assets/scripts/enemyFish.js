var dist : float;
var target : Transform;
var trigger = 0;
var emptyFollower : GameObject;
var bubbleObject : GameObject;
var lastFish : Transform;
var start = 1;
//var speed : float;

// function Awake()
// {		
// 	trigger = 0;
// 	start = 1;
// 	//GetComponent(Follow).enabled = false;
// 	//GetComponent(rotate).enabled = true;
// 	//GetComponent(forward).enabled = true;
// 	//GetComponent(Follow).trigger = 0;
// }
function OnSpawned () {
	GetComponent(forward).enabled = true;
	trigger = 0;
	start = 1;
	// target = gameObject.Find("player(Clone)").transform;
 //    emptyFollower = gameObject.Find("emptyFollower");
   /////// //speed = emptyFollower.GetComponent(spawner).speed;
   // lastFish = emptyFollower.GetComponent(spawner).lastFish.transform;
    target = gameObject.FindWithTag("Player").transform;
   	 emptyFollower = gameObject.FindWithTag("f0");
      lastFish = emptyFollower.GetComponent(spawner).lastFish.transform;

   //	GetComponent(Follow).enabled = false;
	//GetComponent(forward).enabled = true;
	yield WaitForSeconds(0.2);
	GetComponent(forward).moveSpeed = 10.3;
	GetComponent(rotate).target = target;

	//GetComponent(rotate).enabled = true;
}

function Update () {
 	if(target != null)
 	dist = Vector2.Distance(target.position, gameObject.transform.position);

 	if (start == 1)
 	{
 		endAttack();
 	}
 	if (trigger == 1)
 	{
	 	if (dist > 6)
			{
				endScript();
			// GetComponent(rotate).target = lastFish;
			// GetComponent(Follow).enabled = true;
			// GetComponent(forward).enabled = false;
			// GetComponent(rotate).enabled = true;
			// GetComponent(Follow).trigger = 1;
			// //GetComponent(forward).moveSpeed = speed;
			// GetComponent(Follow).turnOffenemyFishScript();
			}
	}
	else
	flashDuringAttack();
 }
 function endScript()
 {
 			GetComponent(rotate).target = lastFish;
			GetComponent(Follow).enabled = true;
			GetComponent(forward).enabled = false;
			GetComponent(rotate).enabled = true;
			GetComponent(Follow).trigger = 1;
			//GetComponent(forward).moveSpeed = speed;
			GetComponent(Follow).turnOffenemyFishScript();
 }
 function endAttack()
 {

 	if (dist < 4)
	{
		GetComponent(rotate).enabled = false;
		trigger = 1;
	}

 }

function flashDuringAttack()
{
	
    for(var n = 0; n < 5; n++)

    {

        GetComponent.<Renderer>().material.color = Color.white;

        yield WaitForSeconds(.2);

        GetComponent.<Renderer>().material.color =  Color(1, 0.0, 0.0, 0.75);

        yield WaitForSeconds(.2);

    }

    GetComponent.<Renderer>().material.color = Color.white;
}

