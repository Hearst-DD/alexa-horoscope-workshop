/**
 * STRING UTILS
 *
 */

/**
 *  Private Methods
 */

/**
 *  Public Methods
 */
const stringUtility = {
    toTitleCase: function( str ) {
        return str.replace( /\w\S*/g, function( txt ) {
            return txt.charAt( 0 ).toUpperCase() + txt.substr( 1 ).toLowerCase();
        } );
    }
};

module.exports = stringUtility;
