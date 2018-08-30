var target : Transform;
var smoothTime = 0.35;
var trigger = 0;
var dist : float;

    private var thisTransform : Transform;
    private var velocity : Vector2;

     

    function Start()
    {
    thisTransform = transform;

    }


    function Update()
    {

         // *********   Added tweak *************

    if(velocity.x > 5f) //in C# I'd do it this way, but apparently

    velocity.x = 5f; //if velocity gets past 5, it doesn't remain 5

        //********** tweak end*************

    if  (target!=null)
    {
     dist = Vector2.Distance(target.position, gameObject.transform.position);
    
    
    if (dist > 4 && dist < 150)
    {
        smoothTime = 0.90;
    }
    else if (dist <= 4) 
    {
        smoothTime = 0.32;
    }

    thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x,

    target.position.x, velocity.x, smoothTime)  ;

    thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y,

    target.position.y, velocity.y, smoothTime) ;
    }

}

function OnBecameInvisible() {
    if (target == null)
    {
        Destroy(this.gameObject);
    }
}

function turnOffenemyFishScript()
{
    GetComponent(enemyFish).enabled = false;
}