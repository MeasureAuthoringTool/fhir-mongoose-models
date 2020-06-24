const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IssueSeveritySchema } = require('./IssueSeverity');
const { IssueTypeSchema } = require('./IssueType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationOutcomeIssueSchema = BackboneElementSchemaFunction({
   severity : IssueSeveritySchema,
   code : IssueTypeSchema,
   details : CodeableConceptSchema,
   diagnostics : String,
   location : [String],
   expression : [String],
   fhirTitle: { type: String, default: 'OperationOutcomeIssue' },
});

class OperationOutcomeIssue extends mongoose.Document {
  constructor(object) {
    super(object, OperationOutcomeIssueSchema);
    this._type = 'FHIR::OperationOutcomeIssue';
  }
};


module.exports.OperationOutcomeIssueSchema = OperationOutcomeIssueSchema;
module.exports.OperationOutcomeIssue = OperationOutcomeIssue;
