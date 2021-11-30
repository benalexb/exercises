import React from 'react'
import NumPad from '../src/components/NumPad'

/*
 * The purpose of this exercise is to create a simple numpad the user can click. At the top, there
 * should be an input where the user can type. When a number is clicked, the text input is updated.
 * Under the number pad, there should be a button called "submit". By cliking this button, the
 * contents of the text input are added to a list at the bottom of the screen, after the submit
 * button. When the user clicks on one of the submitted values, the text input's contents are
 * replaced by the value of that submission.
 *
 * Try making a nice number pad usgin css grid. The input could span three columns at the top, same
 * for the submission button at the bottom. The submission pane can be separate, but both in the
 * same container.
 */

const NumPadPage = () => <NumPad />

export default NumPadPage
