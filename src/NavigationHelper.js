/**
     *  got this from codepen post here https://codepen.io/brian-baum/pen/mJZxJX
     * */
    export function scrollTo(id, callback) {
		var settings = {
			duration: 1000,
			easing: {
				outQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		var percentage;
		var startTime;
		var node = document.getElementById(id);
		var nodeTop = node.offsetTop;
		var nodeHeight = node.offsetHeight;
		var body = document.body;
		var html = document.documentElement;
		var height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		var timer;
		var windowHeight = window.innerHeight
		var offset = window.pageYOffset;
		var delta = nodeTop - offset;
		var bottomScrollableY = height - windowHeight;
		var targetY = (bottomScrollableY < delta) ?
			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
			delta;

		startTime = Date.now();
		percentage = 0;

		if (timer) {
			clearInterval(timer);
		}

		function step () {
			var yScroll;
			var elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				window.scrollTo(0, yScroll);
				timer = setTimeout(step, 10);     
			}
		}

		timer = setTimeout(step, 10);
    }