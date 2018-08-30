using UnityEngine;
using System.Collections;

public class setTheMaxSpeed : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
 public float maxSpeed = 0;//Replace with your max speed
  void FixedUpdate()
  {
        if(GetComponent<Rigidbody>().velocity.magnitude > maxSpeed)
        {
               GetComponent<Rigidbody>().velocity = GetComponent<Rigidbody>().velocity.normalized * maxSpeed;
        }
  }
}
