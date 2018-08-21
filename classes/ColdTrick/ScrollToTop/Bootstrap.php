<?php

namespace ColdTrick\ScrollToTop;

use Elgg\DefaultPluginBootstrap;

class Bootstrap extends DefaultPluginBootstrap {
	
	/**
	 * {@inheritdoc}
	 */
	public function init() {
		elgg_extend_view('elgg.css', 'css/scroll_to_top.css');
		elgg_extend_view('js/elgg', 'js/scroll_to_top.js');
		elgg_extend_view('page/elements/foot', 'scroll_to_top/fab');
	}
}
