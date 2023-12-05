import React from "react";
import { appName } from "../../../meta";
import { ExternalLink } from "../utils/ExternalLink";

function npm(name: string, usage?: string) {
	return {
		name: name,
		link: "https://www.npmjs.com/package/" + name,
		...{ usage }
	};
}

const using: { name: string, link: string, usage?: string }[] = [
	{ name: "MUI (Material UI)", link: "http://mui.com", usage: "for UI" },
	{ name: "React", link: "https://react.dev/", usage: "to run" },
	{ name: "Github Pages", link: "https://pages.github.com/", usage: "as a host" },
	npm("@mui/icons-material", "for icons"),
	npm("@fontsource/roboto", "for app font"),
	npm("@fontsource/caveat", "for logo font"),
	npm("@mui/x-charts", "for charts"),
	npm("apportionment", "for apportionment calculations"),
	npm("easy-peasy", "for state management"),
	npm("mui-color-input", "for color input"),
	npm("@faker-js/faker", "to give new parties random color and a fun random name"),
	npm("@emotion/react"),
	npm("uniqid"),
	npm("typescript", "type safety")
];

function Using() {
	return (
		<ul>
			{using.map((x, i) => (<li key={i}>
				<ExternalLink to={x.link}>{x.name}</ExternalLink>
				{x.usage && " " + x.usage}
			</li>))}
		</ul>
	);
}

export default function AboutPage() {
	return (
		<div>
			<h1>{`Welcome to ${appName}!`}</h1>

			<h2>What is this?</h2>
			<p>
				{`${appName} is an app that can be used to calculate `}
				<ExternalLink to="https://en.wikipedia.org/wiki/Apportionment_(politics)">
					parliamentary apportioment</ExternalLink>
				{" from election results."}
			</p>

			<h2>Who is it for?</h2>
			<p>
				{"Likely the only people who will find this useful are "}
				<ExternalLink to="https://www.reddit.com/r/imaginaryelections/"  >
					r/imaginaryelections
				</ExternalLink>,
				a subreddit dedidcated to... well, imaginary elections.
				Elections in alternative timelines, fictional universes, and what-ifs, in the future, past, present.
			</p>

			<h2>{"Wait that's a thing?"}</h2>
			<p>Appearantly!</p>

			<h2>Why did you make this?</h2>
			<p>
				{"Mostly to learn "}
				<ExternalLink to="https://react.dev/">
					React
				</ExternalLink>. And because when I showed r/imaginaryelections screenshots, they asked when will it be published.
			</p>

			<h2>Is there a user tutorial?</h2>
			<p>{"Not right now, but maybe in the future. For now, I hope it's user-friendly enough."}</p>

			<h2>Are there more features planned? Are you taking notes?</h2>
			<p>Yes, there are more features plan.
				You can give me your notes on the dedidcated reddit post
				({"link will be here - if you're seeing this message, give me a bit of time to update this!"}).
			{"Sadly, not every idea will be made. For example, I was asked to support "}
			<ExternalLink to="https://en.wikipedia.org/wiki/Single_transferable_vote">
					Single Transferrable Vote method
			</ExternalLink>{", which I don't think will likely go well with how this app works."}
			</p>

			<h2>So there will definitely be further versions?</h2>
			<p>No promises, but maybe.</p>

			<h2>{"Some things aren't aligned properly"}</h2>
			<p>{"Yes, I'm not much of an expert on "}
				<ExternalLink to="https://en.wikipedia.org/wiki/CSS">
					CSS</ExternalLink>{", yet. However, improved design is on the list of planned updated."}
			</p>

			<h2>{"And it doesn't work on my phone!"}</h2>
			<p> {"Yes, support for mobile is also currently in the TODO pile, and may or not be done soon."+
				" In the meantime, it's advised to use on a computer. Sorry!"}
			</p>

			<h2>{"Are you taking "}
				<ExternalLink to="https://en.wikipedia.org/wiki/Distributed_version_control#Pull_requests">
					pull-requests</ExternalLink>?
			</h2>
			<p>{"I don't know. Maybe."}</p>

			<h2>What does this app use?</h2>
			<p>
				In no particular order:
				<Using />
			</p>
			<p>
				{"If you think I'm missing an acknowledgement here, " +
					"sorry in advance, and please let me know via Github Issues. "}
				A full auto-generated (by yarn) disclosure can be found in the github repository.
			</p>

			<h2>{"Did you have to make an about page in Q&A format?"}</h2>
			<p>{"It's a crutch, but... OK that's enough from you."}</p>

		</div>
	);
}