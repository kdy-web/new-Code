
(function($, window, undefined) {
						$.fn.ringChart = function(options) {
							var defaults = {};
							var settings = $.extend({}, defaults, options);
							var canvas = $(this).get(0);
							
							var total = $(this).attr("data-total");
							var curr = $(this).attr("data-curr");
							var constrast = parseFloat(curr / total).toFixed(2); //比例
							var context = null;
							if(!canvas.getContext) {
								return;
							}
							var startArc = Math.PI * 1.4;
							var endArc = (Math.PI * 2) * constrast;
							context = canvas.getContext("2d");
							context.font = "26px Arial";
							context.fillStyle = '#28a3fa';
							context.textBaseline = 'middle';
							var text = (Number(curr / total) * 100).toFixed(0) + "%";
							var tw = context.measureText(text).width;
							context.fillText(text, 50 - tw / 2, 50);
							context.save();
							context.beginPath();
							context.strokeStyle = "#FFFFFF";
							context.lineWidth = "4";
							context.arc(50, 50, 44, 0, Math.PI * 2, false);
							context.closePath();
							context.stroke();
							context.restore();
							if(curr / total == 0) {
								return;
							}
							context.save();
							context.beginPath();
							var gradient = context.createLinearGradient(0, 0, 0, 120);
							gradient.addColorStop("0", "#28a3fa");
							gradient.addColorStop("0.5", "#67dfd0");
							context.lineCap = 'round';
							context.strokeStyle = gradient;
							context.lineWidth = "12";
							context.shadowOffsetX = 0;
							context.shadowOffsetY = 3;
							context.shadowColor="rgba(67,189,232,0.7)";
							context.shadowBlur = 10;
							context.arc(50, 49, 39, startArc, (curr % total == 0 ? startArc : (endArc + startArc)), false);
							context.stroke();
							context.restore();
						}
					})($, window);