const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IssueSeveritySchema } = require('./IssueSeverity');
const { IssueTypeSchema } = require('./IssueType');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const OperationOutcomeIssueSchema = BackboneElementSchemaFunction({
  severity: IssueSeveritySchema,
  code: IssueTypeSchema,
  details: CodeableConceptSchema,
  diagnostics: PrimitiveStringSchema,
  location: [PrimitiveStringSchema],
  expression: [PrimitiveStringSchema],
  typeName: { type: String, default: 'OperationOutcomeIssue' },
  _type: { type: String, default: 'FHIR::OperationOutcomeIssue' },
});

class OperationOutcomeIssue extends mongoose.Document {
  constructor(object) {
    super(object, OperationOutcomeIssueSchema);
    this.typeName = 'OperationOutcomeIssue';
    this._type = 'FHIR::OperationOutcomeIssue';
  }
}

module.exports.OperationOutcomeIssueSchema = OperationOutcomeIssueSchema;
module.exports.OperationOutcomeIssue = OperationOutcomeIssue;
