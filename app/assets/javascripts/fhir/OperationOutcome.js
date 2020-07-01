const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { OperationOutcomeIssueSchema } = require('./OperationOutcomeIssue');

const OperationOutcomeSchema = DomainResourceSchemaFunction({
  issue: [OperationOutcomeIssueSchema],
  typeName: { type: String, default: 'OperationOutcome' },
  _type: { type: String, default: 'FHIR::OperationOutcome' },
});

class OperationOutcome extends mongoose.Document {
  constructor(object) {
    super(object, OperationOutcomeSchema);
    this.typeName = 'OperationOutcome';
    this._type = 'FHIR::OperationOutcome';
  }
}

module.exports.OperationOutcomeSchema = OperationOutcomeSchema;
module.exports.OperationOutcome = OperationOutcome;
