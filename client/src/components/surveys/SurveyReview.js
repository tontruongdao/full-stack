import { STATES } from 'mongoose'
import React from 'react'
import { connect } from 'react-redux'

const SurveyReview = ({ onCancel }) => {
    return(
        <div>
            <h5>Please confirm entries</h5>
            <button 
                className="yellow darken-3 btn-flat"
                onClick={onCancel}>
                Back
            </button>
        </div>
    )
}

function mapStateToProps() {
    return { formValues: STATES.form.surveyForm.values}
}

export default connect(mapStateToProps)(SurveyReview)