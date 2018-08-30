public var target : Transform;
var exclam : GameObject;
var exObj : GameObject;
var score : int;
var keepScore = 0;
var food: GameObject;
var bigFish : GameObject;
	function OnSpawned()
{
	GetComponent(enemyFish).enabled = true;
	GetComponent(Follow).trigger = 0;
	GetComponent(Follow).enabled = false;
	// GetComponent(Follow).enabled = false;
	// GetComponent(rotate).enabled = true;
	// GetComponent(forward).enabled = true;

}
function Start()
{	
	food = gameObject.Find("food");
}
function Update() {
	if (target != null)
	{
    var dir = target.position - transform.position;
    var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
    transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);
	}

	if (exObj != null)
	{
		exObj.transform.position.x = gameObject.transform.position.x;
		exObj.transform.position.y = gameObject.transform.position.y + 0.7;
	}

	score = food.GetComponent(game).score;
	if (score % 5 == 0 && score > 13)
    {
		if (score > keepScore)
		{
			if (exObj == null)
			{
				//watchForBig();
				keepScore = score;
			}
		}
	}
}

function exc() //instantiate the !
{
		exObj = Instantiate(exclam, gameObject.transform.position, Quaternion.identity);

}

function watchForBig()
{	
  	 yield WaitForSeconds(Random.Range(0.0,1.0));
     exc();
     
}