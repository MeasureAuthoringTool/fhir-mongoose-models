const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { OperationOutcomeIssueSchema } = require('./OperationOutcomeIssue');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationOutcomeSchema = DomainResourceSchemaFunction({
   issue : [OperationOutcomeIssueSchema],
   fhirTitle: { type: String, default: 'OperationOutcome' },
});

class OperationOutcome extends mongoose.Document {
  constructor(object) {
    super(object, OperationOutcomeSchema);
    this._type = 'FHIR::OperationOutcome';
  }
};


module.exports.OperationOutcomeSchema = OperationOutcomeSchema;
module.exports.OperationOutcome = OperationOutcome;
