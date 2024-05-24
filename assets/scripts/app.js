const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "html",
				weight: 12.3
			}, {
				text: "css",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "python",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "skills",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "shan",
				weight: 15
			}, {
				text: "database",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a BSIT Student at JRU.", "currently enrolled as a 2nd year student.", "with a burning passion on coding!", "i love developing things."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 20,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();



Portfolio.displayWordCloud();
Portfolio.typeAnimation();
