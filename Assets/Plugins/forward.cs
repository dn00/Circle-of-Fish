using UnityEngine;
using System.Collections;

public class forward : MonoBehaviour {
	
	public float moveSpeed = 7.5f;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		 //if(Time.timeScale == 0)return;
			transform.Translate(moveSpeed * Time.deltaTime, 0,0);
	}
}