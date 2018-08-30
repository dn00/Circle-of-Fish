public var color: Color = Color(1.0,1.0,1.0,1.0);
public var scroll: float = 0.05;  // scrolling velocity
public var duration: float = 1.5; // time to die
public var alpha: float;

function Start(){
    GetComponent.<GUIText>().material.color = color; // set text color
    alpha = 0.8;
}
 
function Update(){
    if (alpha>0){
       transform.position.y += scroll*Time.deltaTime; 
       alpha -= Time.deltaTime/duration; 
       GetComponent.<GUIText>().material.color.a = alpha;     
    } else {
    	gameObject.FindWithTag("Player").GetComponent(diewheninvis).ptsTrigger = 1;
       Destroy(gameObject); // text vanished - destroy itself
    }
}