import React,{useState} from 'react';

import p1 from '../sets/profile1.jpg';
import p2 from '../sets/profile2.jpg';
import p3 from '../sets/profile3.jpg';



const About = () =>{

  return (
    <div class="flexslider">
		<ul class="slides">
			<li>
				<img src={p1} alt=""/>
				<section class="flex-caption">
					<p>LOREM IPSUM 1</p>
				</section>
			</li>
			<li>
            <img src={p2} alt=""/>
            				<section class="flex-caption">
					<p>LOREM IPSUM 2</p>
				</section>
			</li>
			<li>
				<img src={p3} alt=""/>
				<section class="flex-caption">
					<p>LOREM IPSUM 3</p>
				</section>
			</li>
		</ul>
	</div>
  );
}

export default About;