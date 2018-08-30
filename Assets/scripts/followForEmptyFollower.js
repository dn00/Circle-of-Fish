    var target : Transform;
    var smoothTime = 0.1;
    private var thisTransform : Transform;
    private var velocity : Vector2;

    function Start()
    {
        //target = gameObject.FindWithTag("Player").transform;
        thisTransform = transform;
     //target = gameObject.Find("player(Clone)").transform;
//      target = gameObject.FindWithTag("Player").transform;
    }

     

    function Update()

    {

         // *********   Added tweak *************

    if(velocity.x > 5f) //in C# I'd do it this way, but apparently

    velocity.x = 5f; //if velocity gets past 5, it doesn't remain 5

        //********** tweak end*************

    if (gameObject != null) 
    {
	    if (target == null)
	    {
	        target = gameObject.FindWithTag("Player").transform;
	    }
	    else
	    { 

		    thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x,

		    target.position.x, velocity.x, smoothTime)  ;

		    thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y,

		    target.position.y, velocity.y, smoothTime) ;
		}
	}

    }
