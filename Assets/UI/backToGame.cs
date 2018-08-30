using UnityEngine;
using System.Collections;

public class backToGame : MonoBehaviour {
	public GameObject options;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void OnClick()
	{
		NGUITools.SetActive(options,false);
		Time.timeScale = 1;
	}
}
