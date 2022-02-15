<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'suma' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5/se/AHkq[,8!53b [qt?N?7WlFtNA.[KWMY6*8[EPn$5H5~Mo}`82bJ(kUU_~(v' );
define( 'SECURE_AUTH_KEY',  'EjXW2&~)H]>UP4C({TZ{nzIH(WluP~mo+(]EMY-2~* mhh4(YmE?AjZ!pSGl(.{?' );
define( 'LOGGED_IN_KEY',    'dy-U;X%XzBd_Wl|2?v%y0 SjO?RQRj.Q%BO}k>H)PE]3(m9fRuUqr.tiSPA*>?H,' );
define( 'NONCE_KEY',        'Bft~R$aIW2POONyrz9c#XYNJ_uklg`!:~R[#Ifm|MRl-Y)Yz#G9-t`NV9W4fFWid' );
define( 'AUTH_SALT',        'io`@AePtf=gZ?yI>%`5qceO#Vxm1-?L+5eAe(WGBBF4p0+S0e$f&hZ8XX|8OZbCE' );
define( 'SECURE_AUTH_SALT', '}J7X}gA2Q/SzthTs2I*RJ3o8Y2;u5gm*@HyQM VX*BKF~:,2FmPxvE{?y[pkRV?]' );
define( 'LOGGED_IN_SALT',   'G{MvC}>ag}nsi0.}JQ0/MCkepKyT$CU| Dm_vEQp@V&_!TaZ4.ry_8)d5xh97>}S' );
define( 'NONCE_SALT',       '<frY s}fk6ULwXrpD0X4h~n(W23;Lc7;iW6yK4*D0[h.?mj/P(qow!ytBfXtgu?m' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
