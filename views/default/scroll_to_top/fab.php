<?php

echo elgg_view('output/url', [
	'id' => 'scroll_to_top',
	'href' => '#top',
	'icon' => elgg_view_icon('chevron-up'),
	'text' => false,
	'title' => elgg_echo('scroll_to_top:up'),
]);
