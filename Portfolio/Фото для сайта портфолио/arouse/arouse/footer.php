<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Arouse
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<div class="row">
				<div class="footer-widget-area">
					<div class="col-md-4">
						<div class="left-footer">
							<div id="secondary" class="widget-area" role="complementary">
								<?php if ( ! dynamic_sidebar( 'footer-left' ) ) : ?>
									
								<?php endif; // end sidebar widget area ?>
							</div><!-- #secondary -->
						</div>
					</div>
					
					<div class="col-md-4">
						<div class="mid-footer">
							<div id="secondary" class="widget-area" role="complementary">
								<?php if ( ! dynamic_sidebar( 'footer-mid' ) ) : ?>

								<?php endif; // end sidebar widget area ?>
							</div><!-- #secondary -->						</div>
					</div>

					<div class="col-md-4">
						<div class="right-footer">
							<div id="secondary" class="widget-area" role="complementary">
								<?php if ( ! dynamic_sidebar( 'footer-right' ) ) : ?>

								<?php endif; // end sidebar widget area ?>
							</div><!-- #secondary -->				
						</div>
					</div>						
				</div><!-- .footer-widget-area -->
			</div><!-- .row -->
		</div><!-- .container -->
		<div class="site-info">
			<div class="container">
				<a href="http://vkusnodoma.net/" title="Рецепты с фото" target="_blank">Кулинарные рецепты с фото</a>
				<span class="sep"> | </span>
				<a href="http://themezhut.com/themes/arouse" rel="designer" target="_blank">ThemezHut</a>
			</div><!-- .container -->
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

</div><!-- #wrapper -->

<?php wp_footer(); ?>
</body>
</html>
