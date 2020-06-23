import React from "react";

const AFrameModal = props => (
	<div>
		<p className="card__modal_title"> WebVR Experiments </p>
		<p> From 2017-2018, I made a bunch of experiments in WebVR using the <a href="https://aframe.io/" target="_blank" rel="noreferrer noopener">AFrame library</a>. AFrame allows you to write reusable webVR components using standard frontend languages. The following webpages will work in any browser, but work best on a mobile phone and are enhanced by using a Google Cardboard headset. </p>

		<p className="card__modal_title"> <a href="https://sleepytime.glitch.me/" target="_blank" rel="noreferrer noopener">sleepytime</a> </p>
		<p> An ethereal WebVR multistep experience about falling asleep. </p>
		<img src="WebVR/Black.png" alt="the text go to sleep against a black background"/>
		<img src="WebVR/Orange.png" alt="a desert filled with hourglasses"/>
	</div>
);

export default AFrameModal;