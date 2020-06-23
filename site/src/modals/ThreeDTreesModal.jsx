import React from "react";

const ThreeDTreesModal = props => (
	<div>
		<p className="card__modal_title"> Generated 3D Trees </p>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/jDcx-KobpdU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

		<p>Made in collaboration with <a href="https://bguesman.github.io/">Brad Guesman</a> and <a href="http://www.leonardoko.com/">Leo Ko</a>. </p>

		<p>Using <a href="https://en.wikipedia.org/wiki/L-system">L-system</a> fractals as a base, we created a program that 3D artists can use to generate realistic 3D tree meshes. Artists can tweak parameters to get the exact look they want, and then export the tree as a .obj file for use in a 3D modeling program.</p>

		<img src="Trees/Tree_1.png" alt="An image of a rendered oak tree"/>
	</div>
);

export default ThreeDTreesModal;