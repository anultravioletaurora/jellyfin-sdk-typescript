/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * An interface representing a client device.
 */
export interface DeviceInfo {

	/**
	 * The unique identifier of the client device.
	 * 
	 * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
	 */
	id: string,

	/**
	 * The user-defined name of the client device.
	 * 
	 * @example "Violet's iPhone"
	 */
	name: string
}
