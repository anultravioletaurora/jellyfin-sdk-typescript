/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * An interface representing a client application.
 */
export interface ClientInfo {

	/**
	 * The name of the client application.
	 * 
	 * @example "Jellyfin for iOS"
	 */
	name: string,

	/**
	 * The version of the client application.
	 * 
	 * @example "1.2.3"
	 */
	version: string
}
