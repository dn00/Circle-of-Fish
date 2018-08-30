using UnityEngine;
using System.Collections;


public class pauseButton : MonoBehaviour {
	public GameObject options;
	AudioSource aud;
   void Start () {
	aud = Camera.main.GetComponent<AudioSource>();
	if (PlayerPrefs.GetInt("vol") == 1)
		{
			aud.volume = 0.1f;
		}
		else if (PlayerPrefs.GetInt("vol") == 0)
		{
			aud.volume = 0;
		}
	}
	void OnClick()
	{
		NGUITools.SetActive(options,true);
		Time.timeScale = 0;
		//AudioListener.volume = 0;
	}
}
