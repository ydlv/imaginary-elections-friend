import React from "react";
import { appName } from "../../../meta";
import { ExternalLink } from "../utils/ExternalLink";

export default function AboutPage() {
	return (
		<div>
			<h1>Welcome to {appName}!</h1>
			
			<h2>What is this?</h2>
			<p>
				{appName} is an app that can be used to calculate&nbsp;
				<ExternalLink to="https://en.wikipedia.org/wiki/Apportionment_(politics)">

					parliamentary apportioment</ExternalLink>
					&nbsp;
				from elections results.
			</p>

			<h2>Who is it for?</h2>
			<p>Likely the only people who will find this useful are&nbsp;
				<ExternalLink to="https://www.reddit.com/r/imaginaryelections/"  >
					r/imaginaryelections
				</ExternalLink>,
			a subreddit dedidcated to... well, imaginary elections.
			Elections in alternative timelines, fictional universes, and what-ifs, in the future, past, present.
			</p>

			<h2>Wait that{"'"}s a thing?</h2>
			<p>Appearantly!</p>

			<h2>Why did you make this?</h2>
			<p>
				Mostly to learn&nbsp;
				<ExternalLink to="https://react.dev/">
					React
				</ExternalLink>. And because when I showed r/imaginaryelections screenshots, they asked when will it be published.
			</p>

			<h2>Is there a user tutorial?</h2>
			<p>Not right now, but maybe in the future.</p>

			<h2>Are there more features planned? Are you taking notes?</h2>
			<p>Yes, there are more features plan.
				You can give me your notes on the dedidcated reddit post
				({"link will be here - if you're seeing this message, give me a bit of time to update this!"}).
				Sadly, not every idea will be made. For example, I was asked to support&nbsp;
			<ExternalLink to="https://en.wikipedia.org/wiki/Single_transferable_vote">
				Single Transferrable Vote method	
			</ExternalLink>, which I {"don't"} think will likely go well with how this app works.
			</p>

			<h2>So there will definitely be further versions?</h2>
			<p>No promises, but maybe.</p>

			<h2>The design is kinda meh. Things {"aren't"} aligned properly.</h2>
			<p>Yes, 
				{"I'm"} not much of an expert on&nbsp;
				<ExternalLink to="https://en.wikipedia.org/wiki/CSS">
				CSS</ExternalLink>, yet.
			</p>

			<h2>And it {"doesn't"} work on my phone!</h2>
			<p>Yes, support for mobile is also currently in the TODO pile, and may or not be done soon.
				In the meantime, {"it's"} advised to use on a computer. Sorry.
			</p>

			<h2>Are you taking&nbsp;
				<ExternalLink to="https://en.wikipedia.org/wiki/Distributed_version_control#Pull_requests">
				pull-requests</ExternalLink>?
			</h2>
			<p>I {"don't"} know - worth a shot!</p>

			<h2>Did you have to make the about page in Q&amp;A format?</h2>
			<p>I... OK, that{"'"}s enough from you.</p>
		</div>
	);
}